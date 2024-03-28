<script setup>
// Components
const model = defineModel({
  type: Boolean,
  default: false
})
</script>

<template>
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
          v-model="model"
          label="개인정보 수집 및 이용에 동의합니다."
          value=""
          hide-details
          class="input-chk-custom"
          :ripple="false"
        ></v-checkbox>
      </div>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped></style>
