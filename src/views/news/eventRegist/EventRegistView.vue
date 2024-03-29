<script setup>
// Components
import { DialogWrapper } from 'vue3-promise-dialog'
import DatePicker from '@/components/ui/DatePicker.vue'

// Utilities
import { ref } from 'vue'
import { warning, confirm } from '@/utils/util'
import { useDate } from 'vuetify'

// Apis
import { createEventRequestApi, fileUploadApi } from '@/apis/eventRequest'
import { createAttachFileApi } from '@/apis/attachFile'

const date = useDate()

const eventRequest = ref({
  eventName: '',
  contents: '',
  startDate: date.toISO(new Date()),
  endDate: date.toISO(new Date()),
  place: '',
  fee: null,
  reqStartDate: null,
  reqEndDate: null,
  url: '',
  imageFileUrl: '',
  reqName: '',
  reqEmail: '',
  reqTel: '',
  createdId: null
})

function resetEventRequest() {
  eventRequest.value.eventName = ''
  eventRequest.value.contents = ''
  eventRequest.value.startDate = date.toISO(new Date())
  eventRequest.value.endDate = date.toISO(new Date())
  eventRequest.value.place = ''
  eventRequest.value.fee = ''
  eventRequest.value.reqStartDate = ''
  eventRequest.value.reqEndDate = ''
  eventRequest.value.url = ''
  eventRequest.value.imageFileUrl = null
  eventRequest.value.reqName = ''
  eventRequest.value.reqEmail = ''
  eventRequest.value.reqTel = ''
}

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

async function addEvent() {
  if (await confirm('등룍 하시겠습니까?')) {
    console.log('YES')
    await addEventProc()
    resetEventRequest()
  } else {
    console.log('NO')
  }
}

async function addEventProc() {
  await createEventRequestApi(eventRequest.value)
    .then(async (response) => {
      // 관련행사 등록
      if (response.data.status === 'success') {
        console.log('createEvent response.data=', response.data)
        const eventRequestId = response.data.item.id

        fileUpload(eventRequestId) // 파일저장처리

        snackbar.value.flag = true
        // emit('add')
      } else {
        console.log('::fail data.code=', response.data.code)
      }
    })
    .catch((error) => {
      if (warning(' 등록 실패.')) {
        console.log('Err addEvent() - createEventApi')
      }
      console.log('>createEventApi() fail. error=', error)
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

            <v-row class="mt-10" no-gutters>
              <v-col>
                <p class="text-body-1 text-color-222 font-weight-bold mb-2">행사 제목 *</p>
                <v-text-field
                  v-model="eventRequest.eventName"
                  variant="outlined"
                  density="compact"
                  hide-details
                />
              </v-col>
            </v-row>

            <v-row no-gutters class="mt-7">
              <v-col>
                <p class="text-body-1 text-color-222 font-weight-bold mb-2">행사 내용 *</p>
                <v-textarea
                  v-model="eventRequest.contents"
                  variant="outlined"
                  clearable
                  clear-icon="mdi-close-circle"
                  auto-grow
                  hide-details
                  rows="10"
                  row-height="25"
                />
              </v-col>
            </v-row>

            <p class="text-body-1 text-color-222 font-weight-bold mt-7 mb-2">행사 일정 *</p>

            <v-row no-gutters class="d-flex justity-start">
              <v-col class="d-flex align-center">
                <v-sheet width="177">
                  <DatePicker v-model="eventRequest.startDate" />
                </v-sheet>

                <v-sheet width="127" class="mx-2">
                  <v-select
                    v-model="select"
                    :hint="`${select.state}, ${select.abbr}`"
                    :items="items"
                    item-title="state"
                    item-value="abbr"
                    label="Select"
                    return-object
                    single-line
                    hide-details
                    class="select-custom"
                    style="width: 127px; height: 40px"
                  ></v-select>
                </v-sheet>

                ~

                <v-sheet width="177" class="mx-2">
                  <DatePicker v-model="eventRequest.endDate" />
                </v-sheet>

                <v-sheet width="127">
                  <v-select
                    v-model="select"
                    :hint="`${select.state}, ${select.abbr}`"
                    :items="items"
                    item-title="state"
                    item-value="abbr"
                    label="Select"
                    return-object
                    single-line
                    hide-details
                    class="select-custom"
                    style="width: 127px; height: 40px"
                  ></v-select>
                </v-sheet>
              </v-col>
            </v-row>

            <v-row no-gutters class="justify-space-between mt-7">
              <v-col style="width: 493px; flex: 0 0 auto">
                <p class="text-body-1 text-color-222 font-weight-bold mb-2">참가신청 기간</p>
                <v-text-field
                  v-model="eventRequest.place"
                  variant="outlined"
                  density="compact"
                  hide-details
                />
              </v-col>

              <v-col style="width: 493px; flex: 0 0 auto">
                <p class="text-body-1 text-color-222 font-weight-bold mb-2">비용</p>
                <v-text-field
                  v-model="eventRequest.fee"
                  variant="outlined"
                  density="compact"
                  hide-details
                />
              </v-col>
            </v-row>

            <v-row no-gutters class="justify-space-between mt-7">
              <v-col style="width: 493px; flex: 0 0 auto">
                <p class="text-body-1 text-color-222 font-weight-bold mb-2">행사 URL</p>
                <v-text-field
                  v-model="eventRequest.url"
                  variant="outlined"
                  density="compact"
                  hide-details
                />
                <p class="mt-2 text-body-2 text-color-999">
                  담당자 검토를 거쳐 최종적으로 등록되며, 등록 후 입력하신 이메일이나, 연락처로 안내
                  드립니다.
                </p>
              </v-col>

              <v-col style="width: 493px; flex: 0 0 auto">
                <p class="text-body-1 text-color-222 font-weight-bold mb-2">첨부 파일</p>
                <v-file-input
                  v-model="fileList"
                  label="첨부파일"
                  accept="image/*"
                  chips
                  show-size
                  variant="outlined"
                  density="compact"
                  hide-details
                >
                  <template #selection="{ fileNames }">
                    <template v-for="fileName in fileNames" :key="fileName">
                      <v-chip size="small" label color="primary" class="me-2">
                        {{ fileName }}
                      </v-chip>
                    </template>
                  </template>
                </v-file-input>
                <p class="mt-2 text-body-2 text-color-999">
                  행사 포스터나 안내문 등의 파일을 첨부해 주세요.
                </p>
              </v-col>
            </v-row>

            <v-row no-gutters class="mt-7">
              <v-col>
                <p class="text-body-1 text-color-222 font-weight-bold mb-2">
                  개인정보 수집 및 이용동의
                </p>
                <textarea readonly class="privacy scroll text-body-2 text-black">
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

            <v-row>
              <v-col>
                <div>
                  <v-checkbox
                    label="개인정보 수집 및 이용에 동의합니다."
                    value=""
                    hide-details
                    class="input-chk-custom"
                    :ripple="false"
                  ></v-checkbox>
                </div>
              </v-col>
            </v-row>
          </v-card-text>

          <v-divider
            class="border-opacity-100 mt-15 mb-10"
            style="border-color: #e4e4e4"
            :thickness="1"
          />

          <v-card-actions class="justify-center submit-btn">
            <v-btn class="btn-plain-custom submit" variant="plain" @click.stop="addEvent">
              등록
            </v-btn>
            <v-btn class="btn-plain-custom cancel ml-5" variant="palin"> 취소 </v-btn>
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

<script>
export default {
  data() {
    return {
      select: { state: '오전 09:30', abbr: '0930' },
      items: [
        { state: '오전 09:30', abbr: '0930' },
        { state: '오전 10:00', abbr: '1000' }
      ]
    }
  }
}
</script>
