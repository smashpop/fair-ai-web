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

  if (await verification('등룍 하시겠습니까?')) {
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
  <v-container>
    <v-row justify="center">
      <v-col cols="8" class="ma-6">
        <v-card class="mx-6 pa-4">
          <v-card-text>
            <p>
              담당자 검토를 거쳐 최종적으로 등록되며, 등록 후 입력하신 이메일이나, 연락처로 안내
              드립니다.
            </p>
            <v-radio-group v-model="suggest.categoryId" inline density="compact" color="primary">
              <v-radio label="시스템장애" value="1"></v-radio>
              <v-radio label="자료등록 신청" value="2"></v-radio>
              <v-radio label="기타" value="3"></v-radio>
            </v-radio-group>

            <v-row dense>
              <v-col cols="6">
                <v-text-field
                  v-model="suggest.suggestName"
                  label="신청자"
                  variant="outlined"
                  density="compact"
                  hide-details
                />
              </v-col>
            </v-row>

            <v-row dense>
              <v-col cols="6">
                <v-text-field
                  v-model="suggest.suggestEmail"
                  label="e-mail"
                  variant="outlined"
                  density="compact"
                  hide-details
                />
              </v-col>

              <v-col cols="6">
                <v-text-field
                  v-model="suggest.suggestTel"
                  label="연락처"
                  variant="outlined"
                  density="compact"
                  hide-details
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="suggest.title"
                  label="제목"
                  variant="outlined"
                  density="compact"
                  hide-details
                />
              </v-col>
            </v-row>

            <v-row dense>
              <v-col cols="12">
                <v-textarea
                  v-model="suggest.contents"
                  label="내용"
                  placeholder="Write something …"
                  variant="outlined"
                  clearable
                  clear-icon="mdi-close-circle"
                  auto-grow
                  rows="12"
                  row-height="25"
                />
              </v-col>
            </v-row>

            <v-row dense>
              <v-col cols="12">
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
          </v-card-text>

          <v-card-actions>
            <v-spacer />
            <v-btn class="ma-2" color="blue-darken-1" variant="outlined"> 닫기 </v-btn>
            <v-btn class="ma-2" color="blue-darken-1" variant="flat" @click.stop="addSuggest">
              저장
            </v-btn>
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
