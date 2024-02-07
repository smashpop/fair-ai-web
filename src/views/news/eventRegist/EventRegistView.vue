<script setup>
// Utilities
import { ref } from 'vue'
import { createEventRequestApi, fileUploadApi } from '@/apis/eventRequest'
import { createAttachFileApi } from '@/apis/attachFile'

const eventRequest = ref({
  eventName: '',
  contents: '',
  startDate: null,
  endDate: null,
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
              // if (warning(' 파일등록 실패.')) {
              //   console.log('Err addNotice() - createAttachFileApi')
              // }
              console.log('>createAttachFileApi() fail. error=', error)
            })
        } catch (e) {
          console.error(e)
        }
      })
      .catch((error) => {
        // if (warning(' 파일등록 실패.')) {
        //   console.log('Err addNotice() - fileUploadApi')
        // }
        console.log('>fileUploadApi() fail. error=', error)
      })
  } catch (e) {
    console.error(e)
  }
}

async function addEvent() {
  await createEventRequestApi(eventRequest.value)
    .then(async (response) => {
      // 관련행사 등록
      if (response.data.status === 'success') {
        console.log('createEvent response.data=', response.data)
        const eventRequestId = response.data.item.id

        fileUpload(eventRequestId) // 파일저장처리

        // snackbar.value.flag = true
        // emit('add')
      } else {
        console.log('::fail data.code=', response.data.code)
      }
    })
    .catch((error) => {
      // if (warning(' 등록 실패.')) {
      //   console.log('Err addEvent() - createEventApi')
      // }
      console.log('>createEventApi() fail. error=', error)
    })
  // resetEvent()
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

            <v-row dense>
              <v-col cols="12">
                <v-text-field
                  v-model="eventRequest.eventName"
                  label="행사명"
                  variant="outlined"
                  density="compact"
                />
              </v-col>
            </v-row>

            <v-row dense>
              <v-col cols="6" md="6">
                <v-text-field
                  v-model="eventRequest.startDate"
                  type="date"
                  label="행사시작일"
                  variant="outlined"
                  density="compact"
                />
              </v-col>

              <v-col cols="6" md="6">
                <v-text-field
                  v-model="eventRequest.endDate"
                  type="date"
                  label="행사종료일"
                  variant="outlined"
                  density="compact"
                />
              </v-col>
            </v-row>

            <v-row dense>
              <v-col cols="12">
                <v-textarea
                  v-model="eventRequest.contents"
                  label="내용"
                  placeholder="Write something …"
                  variant="outlined"
                  clearable
                  clear-icon="mdi-close-circle"
                  auto-grow
                  rows="10"
                  row-height="25"
                />
              </v-col>
            </v-row>

            <v-row dense>
              <v-col cols="3">
                <v-text-field
                  v-model="eventRequest.place"
                  label="장소"
                  variant="outlined"
                  density="compact"
                  hide-details
                />
              </v-col>

              <v-col cols="6">
                <v-text-field
                  v-model="eventRequest.fee"
                  label="비용"
                  variant="outlined"
                  density="compact"
                  hide-details
                />
              </v-col>
            </v-row>

            <v-row dense>
              <v-col cols="6" md="6">
                <v-text-field
                  v-model="eventRequest.reqStartDate"
                  type="date"
                  label="참가신청기간"
                  variant="outlined"
                  density="compact"
                />
              </v-col>

              <v-col cols="6" md="6">
                <v-text-field
                  v-model="eventRequest.reqEndDate"
                  type="date"
                  label=""
                  variant="outlined"
                  density="compact"
                />
              </v-col>
            </v-row>

            <v-row dense>
              <v-col cols="12">
                <v-text-field
                  v-model="eventRequest.url"
                  label="url"
                  variant="outlined"
                  density="compact"
                />
              </v-col>
            </v-row>

            <v-row dense>
              <v-col cols="12">
                <v-text-field
                  v-model="eventRequest.imageFileUrl"
                  label="이미지Url"
                  variant="outlined"
                  density="compact"
                />
              </v-col>
            </v-row>

            <v-row dense>
              <v-col cols="3">
                <v-text-field
                  v-model="eventRequest.reqName"
                  label="요청자"
                  variant="outlined"
                  density="compact"
                  hide-details
                />
              </v-col>

              <v-col cols="6">
                <v-text-field
                  v-model="eventRequest.reqEmail"
                  label="Email"
                  variant="outlined"
                  density="compact"
                  hide-details
                />
              </v-col>

              <v-col cols="3">
                <v-text-field
                  v-model="eventRequest.reqTel"
                  label="연락처"
                  variant="outlined"
                  density="compact"
                  hide-details
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
            <v-btn class="ma-2" color="blue-darken-1" variant="flat" @click.stop="addEvent">
              저장
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>