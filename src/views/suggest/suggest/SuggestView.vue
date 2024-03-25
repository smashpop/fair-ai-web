<script setup>
// Components
import { DialogWrapper } from 'vue3-promise-dialog'

// Utilities
import { ref } from 'vue'
import { warning, verification } from '@/utils/util'

// Apis
import { createSuggestApi, fileUploadApi } from '@/apis/suggest'
import { createAttachFileApi } from '@/apis/attachFile'
import { sendMailApi } from '@/apis/email'

const suggest = ref({
  title: '',
  contents: '',
  suggestName: '',
  suggestEmail: '',
  suggestTel: '',
  categoryId: null
})

function resetSuggest() {
  suggest.value.title = ''
  suggest.value.contents = ''
  suggest.value.suggestName = ''
  suggest.value.suggestEmail = ''
  suggest.value.suggestTel = ''
  suggest.value.categoryId = null
}

const mail = ref({
  email: 'hl2kxm@gmail.com',
  subject: 'email test5',
  contents: 'test email5'
})

const snackbar = ref({
  flag: false,
  message: '등록이 완료되었습니다.',
  timeout: 1500
})

const fileList = ref([])

async function fileUpload(suggestId) {
  try {
    // 파일저장처리
    const data = new FormData()
    fileList.value.forEach((file) => {
      data.append('file', file)
    })
    await fileUploadApi(data)
      .then(async (response) => {
        console.log('fileUpload response=', response.data.file) // 파일정보 저장처리
        try {
          const attachInfo = {
            suggestId,
            filename: response.data.file.filename,
            originalname: response.data.file.originalname,
            mimetype: response.data.file.mimetype
          }
          await createAttachFileApi(attachInfo)
            .then((response) => {
              console.log('attach response=', response.data)
              //
            })
            .catch((error) => {
              if (warning(' 파일등록 실패.')) {
                console.log('Err addNotice() - createAttachFileApi')
              }
              console.log('>createAttachFileApi() fail. error=', error)
            })
        } catch (e) {
          console.error(e)
        }
      })
      .catch((error) => {
        if (warning(' 파일등록 실패.')) {
          console.log('Err addNotice() - fileUploadApi')
        }
        console.log('>fileUploadApi() fail. error=', error)
      })
  } catch (e) {
    console.error(e)
  }
}

async function addSuggest() {
  console.log('>>addSuggest()')

  await sendMailApi(mail.value) // 메일 전송

  if (await verification('등록 하시겠습니까?')) {
    console.log('YES')
    await addSuggestProc()
    resetSuggest()
  } else {
    console.log('NO')
  }
}

async function addSuggestProc() {
  await createSuggestApi(suggest.value)
    .then(async (response) => {
      // 문의/제안 등록
      if (response.data.status === 'success') {
        console.log('createSuggest response.data=', response.data)
        const suggestId = response.data.item.id

        fileUpload(suggestId) // 파일저장처리

        snackbar.value.flag = true
        // emit('add')
      } else {
        console.log('::fail data.code=', response.data.code)
      }
    })
    .catch((error) => {
      if (warning(' 등록 실패.')) {
        console.log('Err addSuggest() - createSuggestApi')
      }
      console.log('>createSuggestApi() fail. error=', error)
    })
}
</script>

<template>
  <v-container class="pa-0" fluid>
    <v-row no-gutters>
      <v-col>
        <v-card elevation="0">
          <v-card-text border="0" class="pa-0 mx-auto" style="width: 1016px">
            <p class="text-16 text-black font-weight-medium">
              담당자 검토를 거쳐 최종적으로 등록되며, 등록 후 입력하신 이메일이나, 연락처로 안내
              드립니다.
            </p>

            <p class="text-body-1 text-color-222 font-weight-bold mt-10">구분 *</p>

            <v-radio-group v-model="suggest.categoryId" inline density="compact" color="primary">
              <v-radio label="시스템장애" value="1"></v-radio>
              <v-radio label="자료등록 신청" value="2"></v-radio>
              <v-radio label="기타" value="3"></v-radio>
            </v-radio-group>

            <v-row no-gutters class="mt-7">
              <v-col style="width: 486px; flex: 0 0 auto">
                <p class="text-body-1 text-color-222 font-weight-bold mb-2">신청자 성명 *</p>
                <v-text-field
                  v-model="suggest.suggestName"
                  variant="outlined"
                  density="compact"
                  hide-details
                />
              </v-col>
            </v-row>

            <v-row no-gutters class="mt-7 justify-space-between">
              <v-col style="width: 486px; flex: 0 0 auto">
                <p class="text-body-1 text-color-222 font-weight-bold mb-2">이메일 *</p>
                <v-text-field
                  v-model="suggest.suggestEmail"
                  variant="outlined"
                  density="compact"
                  hide-details
                />
              </v-col>

              <v-col style="width: 500px; flex: 0 0 auto">
                <p class="text-body-1 text-color-222 font-weight-bold mb-2">연락처 *</p>
                <v-text-field
                  v-model="suggest.suggestTel"
                  variant="outlined"
                  density="compact"
                  hide-details
                />
              </v-col>
            </v-row>

            <v-row no-gutters class="mt-7">
              <v-col>
                <p class="text-body-1 text-color-222 font-weight-bold mb-2">제목 *</p>
                <v-text-field
                  v-model="suggest.title"
                  variant="outlined"
                  density="compact"
                  hide-details
                />
              </v-col>
            </v-row>

            <v-row no-gutters class="mt-7">
              <v-col>
                <p class="text-body-1 text-color-222 font-weight-bold mb-2">내용 *</p>
                <v-textarea
                  v-model="suggest.contents"
                  variant="outlined"
                  clearable
                  clear-icon="mdi-close-circle"
                  auto-grow
                  rows="12"
                  row-height="25"
                />
              </v-col>
            </v-row>

            <v-row no-gutters class="mt-7">
              <v-col style="width: 500px; flex: 0 0 auto">
                <p class="text-body-1 text-color-222 font-weight-bold mb-2">첨부파일</p>
                <v-file-input
                  v-model="fileList"
                  label="첨부파일"
                  accept="image/*"
                  chips
                  show-size
                  variant="outlined"
                  density="compact"
                >
                  <template #selection="{ fileNames }">
                    <template v-for="fileName in fileNames" :key="fileName">
                      <v-chip size="small" label color="primary" class="me-2">
                        {{ fileName }}
                      </v-chip>
                    </template>
                  </template>
                </v-file-input>
              </v-col>
            </v-row>

            <v-row no-gutters class="mt-7">
              <v-col>
                <p class="text-body-1 text-color-222 font-weight-bold mb-2">
                  개인정보 수집 및 이용동의
                </p>
                <textarea readonly class="privacy scroll">
(재)엔씨문화재단(이하 ‘재단’)은 이용자의 개인정보를 중요시하며, ‘개인정보보호법’ 등 재단이 준수하여야 할 관련 법령상의 개인정보보호 규정을 준수하고 있습니다. 재단은 개인정보 처리방침을 통하여 정보주체(이하 ‘이용자’)께서 제공하는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.

1. 처리하는 개인정보의 항목 및 수집 방법
수집하려는 개인정보의 항목
* 국내 거주 : 휴대폰 번호, 성명, 생년월일, 성별, 이메일(아이디), 비밀번호, 중복가입확인정보(DI)

* 국외 거주 : 성명, 생년월일, 성별, 이메일(아이디), 비밀번호

개인정보의 보유 및 이용 기간
- 회원 탈퇴 시 까지

동의를 거부하실 수 있으나 동의를 거부하실 경우 회원가입이 제한됩니다.</textarea
                >
              </v-col>
            </v-row>
          </v-card-text>

          <v-divider
            class="border-opacity-100 mt-15 mb-10"
            style="border-color: #e4e4e4"
            :thickness="1"
          />

          <v-card-actions class="justify-center submit-btn pa-0">
            <v-btn variant="plain" class="btn-plain-custom submit" @click.stop="addSuggest">
              등록
            </v-btn>
            <v-btn variant="plain" class="btn-plain-custom ml-5 cancel">취소</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-snackbar v-model="snackbar.flag" :timeout="snackbar.timeout">
    {{ snackbar.message }}
  </v-snackbar>
  <DialogWrapper />
</template>
