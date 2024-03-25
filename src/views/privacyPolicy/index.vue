<script setup>
// Components
import PrivacyPolicyView from '@/views/privacyPolicy/components/PrivacyPolicyView'

// Utilities
import { ref } from 'vue'
</script>

<template>
  <v-sheet class="mx-auto d-flex justify-center align-end" width="1360" height="180"> 
    <p class="text-68 font-weight-bold text-black">개인정보처리방침</p>
  </v-sheet>

  <v-sheet class="mx-auto board mt-15" width="1360">
    <v-container class="pa-0" fluid>
      <v-row no-gutters>
        <v-col class="d-flex justify-end text-body-1 font-weight-medium text-black">
          시행일 : 2023.10.13
        </v-col>
      </v-row>

      <v-divider class="border-opacity-100 mt-5" :thickness="3" />

      <v-row no-gutters class="mt-15">
        <v-col>
          <v-sheet width="1016" class="mx-auto" style="word-break: keep-all; line-height: 26px; color: #555; letter-spacing: 0;">
          (재)엔씨문화재단(이하 ‘재단’)은 이용자의 개인정보를 중요시하며, ‘개인정보보호법’ 등 재단이 준수하여야 할 관련 법령상의 개인정보보호 규정을 준수하고 있습니다.<br> 재단은 개인정보 처리방침을 통하여 정보주체(이하 ‘이용자’)께서 제공하는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.<br>
          재단은 개인정보 처리방침을 개정하는 경우 “웹사이트 공지사항을 통하여 이용자에게 공지”할 것입니다.
          </v-sheet>
        </v-col>
      </v-row>

      <v-row no-gutters class="mt-10">
        <v-col>
          <v-sheet width="1016" class="mx-auto">
            <p class="text-20 font-weight-bold line-height-normal d-flex justify-center align-center" style="color: #003569; background: #f4f4f4; border-top: 1px solid #a0a0a0; height: 60px;">주요 개인정보 처리 표시(라벨링)</p>
          </v-sheet>
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col>
          <v-sheet width="1016" class="mx-auto py-13" style="border-bottom: 1px solid #a0a0a0;">
            <ul class="d-flex justify-center privacy-labeling">
              <li @click="scrollToSection(1)">
                <p>
                  <v-img
                    src="@/assets/images/ico_policy_personal.jpg"
                    alt="개인정보"
                  />
                </p>
                <p>개인정보</p>
              </li>

              <li @click="scrollToSection(1)">
                <p>
                  <v-img
                    src="@/assets/images/ico_policy_list.jpg"
                    alt="처리항목"
                  />
                </p>
                <p>처리항목</p>
              </li>

              <li @click="scrollToSection(2)">
                <p>
                  <v-img
                    src="@/assets/images/ico_policy_purpose.jpg"
                    alt="처리목적"
                  />
                </p>
                <p>처리목적</p>
              </li>

              <li @click="scrollToSection(4)">
                <p>
                  <v-img
                    src="@/assets/images/ico_policy_3.jpg"
                    alt="제3자 제공"
                  />
                </p>
                <p>제3자 제공</p>
              </li>

              <li @click="scrollToSection(5)">
                <p>
                  <v-img
                    src="@/assets/images/ico_policy_consign.jpg"
                    alt="처리위탁"
                  />
                </p>
                <p>처리위탁</p>
              </li>

              <li @click="scrollToSection(3)">
                <p>
                  <v-img
                    src="@/assets/images/ico_policy_time.jpg"
                    alt="보유기간"
                  />
                </p>
                <p>보유기간</p>
              </li>

              <li @click="scrollToSection(8)">
                <p>
                  <v-img
                    src="@/assets/images/ico_policy_destruction.jpg"
                    alt="파기"
                  />
                </p>
                <p>파기</p>
              </li>
            </ul>

            <ul class="d-flex justify-center privacy-labeling mt-8">
              <li @click="scrollToSection(6)">
                <p>
                  <v-img
                    src="@/assets/images/ico_policy_duty.jpg"
                    alt="정보주체의 권리의무"
                  />
                </p>
                <p>정보주체의 권리의무</p>
              </li>

              <li @click="scrollToSection(7)">
                <p>
                  <v-img
                    src="@/assets/images/ico_policy_auto.jpg"
                    alt="자동화 수집"
                  />
                </p>
                <p>자동화 수집</p>
              </li>

              <li @click="scrollToSection(9)">
                <p>
                  <v-img
                    src="@/assets/images/ico_policy_safety.jpg"
                    alt="안전성 확보조치"
                  />
                </p>
                <p>안전성 확보조치</p>
              </li>

              <li @click="scrollToSection(11)">
                <p>
                  <v-img
                    src="@/assets/images/ico_policy_change.jpg"
                    alt="처리방침변경"
                  />
                </p>
                <p>처리방침변경</p>
              </li>

              <li @click="scrollToSection(10)">
                <p>
                  <v-img
                    src="@/assets/images/ico_policy_cpo.jpg"
                    alt="개인정보보호책임자"
                  />
                </p>
                <p>개인정보보호책임자</p>
              </li>

              <li @click="scrollToSection(10)">
                <p>
                  <v-img
                    src="@/assets/images/ico_policy_contact.jpg"
                    alt="고충처리부서"
                  />
                </p>
                <p>고충처리부서</p>
              </li>
            </ul>
          </v-sheet>
        </v-col>
      </v-row>

      <v-row no-gutters class="mt-10" id="section1">
        <v-col>
          <v-sheet class="mx-auto privacy-item" width="1016">
            <div>
              <p>1. 수집하는 개인정보의 항목</p>
              <p>
                <v-img
                    src="@/assets/images/ico_policy_personal.jpg"
                    alt="개인정보"
                  />
              </p>
              <p>
                <v-img
                    src="@/assets/images/ico_policy_list.jpg"
                    alt="처리항목"
                  />
              </p>
            </div>

            <div class="privacy-table sec1">
              <ul>
                <li>구분</li>
                <li>수집방법</li>
                <li>수집 항목</li>
                <li>필수여부</li>
              </ul>

              <ul>
                <li>문의/제안</li>
                <li>문의/제안 입력</li>
                <li>E-Mail</li>
                <li>필수</li>
              </ul>

              <ul>
                <li>행사등록 제안</li>
                <li>행사등록 제안 입력</li>
                <li>이름, E-Mail, 핸드폰번호</li>
                <li>필수</li>
              </ul>

              <ul>
                <li>웹사이트 이용</li>
                <li>자동생성</li>
                <li>이용자의 브라우저 종류 및 OS,<br>접속 기록(IP Address, 접속시간), 쿠키정보</li>
                <li>·</li>
              </ul>
            </div>
          </v-sheet>
        </v-col>
      </v-row>

      <v-divider width="1016" class="mx-auto my-10" style="opacity: 1; border-color: #cfcfcf;"></v-divider>

      <v-row no-gutters id="section2">
        <v-col>
          <v-sheet class="mx-auto privacy-item" width="1016">
            <div>
              <p>2. 개인정보 처리 목적</p>
              <p>
                <v-img
                    src="@/assets/images/ico_policy_purpose.jpg"
                    alt="처리목적"
                  />
              </p>
            </div>

            <div>
              <p>재단은 개인정보를 다음의 목적을 위해 활용합니다.</p>

              <ul class="privacy-list mt-4">
                <li class="d-flex">
                  <p class="num">1)</p>
                  <div>
                    <p>웹사이트 및 전자메일을 통한 문의/제안 사항 접수, 처리 및 처리결과 고지</p>
                    <p class="dot">문의사항 접수 및 답변 제공 등 원활한 의사소통에 활용합니다.</p>
                  </div>
                </li>

                <li class="d-flex mt-2">
                  <p class="num">2)</p>
                  <div>
                    <p>행사등록 제안 사항 접수, 처리 및 처리결과 고지</p>
                    <p class="dot">행사등록 제안 접수 및 행사 정보 확인, 행사 등록 여부 안내 등 원활한 의사소통에 활용합니다.</p>
                  </div>
                </li>
              </ul>
            </div>
          </v-sheet>
        </v-col>
      </v-row>

      <v-divider width="1016" class="mx-auto my-10" style="opacity: 1; border-color: #cfcfcf;"></v-divider>

      <v-row no-gutters id="section3">
        <v-col>
          <v-sheet class="mx-auto privacy-item" width="1016">
            <div>
              <p>3. 개인정보의 처리 및 보유기간</p>
              <p>
                <v-img
                  src="@/assets/images/ico_policy_time.jpg"
                  alt="보유기간"
                />
              </p>
            </div>

            <div>
              <p>원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보관합니다.</p>

              <p class="dot mt-4">문의/제안 : 수집일로부터 4개월 보관 후 파기</p>
              <p class="dot">행사등록 제안 : 행사등록일로부터 6개월 보관 후 파기</p>
            </div>
          </v-sheet>
        </v-col>
      </v-row>

      <v-divider width="1016" class="mx-auto my-10" style="opacity: 1; border-color: #cfcfcf;"></v-divider>

      <v-row no-gutters id="section4">
        <v-col>
          <v-sheet class="mx-auto privacy-item" width="1016">
            <div>
              <p>4. 개인정보의 제3자 제공에 관한 사항</p>
              <p>
                <v-img
                  src="@/assets/images/ico_policy_3.jpg"
                  alt="제3자 제공"
                />
              </p>
            </div>

            <div>재단은 이용자의 개인정보를 ‘2. 개인정보 처리 목적’에서 고지한 범위 내에서 사용하며, 동 범위를 초과하여 이용하거나 이용자의 동의 없이 제3자 또는 기관에 제공하지 않습니다.</div>
          </v-sheet>
        </v-col>
      </v-row>

      <v-divider width="1016" class="mx-auto my-10" style="opacity: 1; border-color: #cfcfcf;"></v-divider>

      <v-row no-gutters id="section5">
        <v-col>
          <v-sheet class="mx-auto privacy-item" width="1016">
            <div>
              <p>5. 개인정보 처리의 위탁에 관한 사항</p>
              <p>
                <v-img
                  src="@/assets/images/ico_policy_consign.jpg"
                  alt="처리위탁"
                />
              </p>
            </div>

            <div>
              <p>재단은 이용자의 개인정보를 ‘2. 개인정보 수집 목적’에서 고지한 범위 내에서 사용하며, 동 범위를 초과하여 이용하거나 이용자의 동의 없이 개인정보 처리업무를 위탁하지 않습니다.</p>

              <ul class="privacy-list mt-4">
                <li class="d-flex">
                  <p class="num">1)</p>
                  <div>
                    <p>재단은 서비스 향상을 위해 다음과 같이 개인정보를 위탁하고 있습니다. </p>
                  </div>
                </li>

                <li class="mt-2">
                  <div class="privacy-table sec5">
                    <ul>
                      <li>위탁  받는 자(수탁자)</li>
                      <li>위탁하는 업무의 내용</li>
                    </ul>

                    <ul>
                      <li>㈜인픽스</li>
                      <li>웹사이트 유지보수</li>
                    </ul>
                  </div>
                </li>

                <li class="d-flex mt-4">
                  <p class="num">2)</p>
                  <div>
                    <p>재단은 위탁계약 체결 시 개인정보관련법에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적·관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리·감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다. 위탁업무의 내용이나 수탁자가 변경되는 경우에는 지체 없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.</p>
                  </div>
                </li>
              </ul>
            </div>
          </v-sheet>
        </v-col>
      </v-row>

      <v-divider width="1016" class="mx-auto my-10" style="opacity: 1; border-color: #cfcfcf;"></v-divider>

      <v-row no-gutters id="section6">
        <v-col>
          <v-sheet class="mx-auto privacy-item" width="1016">
            <div>
              <p>6. 이용자의 권리·의무 및 그 행사방법에 관한 사항</p>
              <p>
                <v-img
                  src="@/assets/images/ico_policy_duty.jpg"
                  alt="정보주체의 권리의무"
                />
              </p>
            </div>

            <div>
              <ul class="privacy-list">
                <li class="d-flex">
                  <p class="num">1)</p>
                  <div>
                    <p>이용자께서는 언제든지 등록되어 있는 개인정보를 수정 요청할 수 있으며 수집 동의 철회를 요청할 수도 있습니다. 이용자의 개인정보 수정이나 동의 철회를 위해서는 개인정보보호책임자에게 서면, 전화 또는 이메일로 연락하시면 지체 없이 조치하겠습니다.</p>
                  </div>
                </li>

                <li class="d-flex mt-4">
                  <p class="num">2)</p>
                  <div>
                    <p>이용자께서 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체 없이 통지하여 정정이 이루어지도록 하겠습니다. 재단은 이용자의 요청에 의해 해지 또는 삭제된 개인정보는 ‘3. 개인정보의 처리 및 보유기간’에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.</p>
                  </div>
                </li>
              </ul>
            </div>
          </v-sheet>
        </v-col>
      </v-row>

      <v-divider width="1016" class="mx-auto my-10" style="opacity: 1; border-color: #cfcfcf;"></v-divider>

      <v-row no-gutters id="section7">
        <v-col>
          <v-sheet class="mx-auto privacy-item" width="1016">
            <div>
              <p>7. 개인정보 자동 수집 장치의 설치·운영 및 거부에 관한 사항</p>
              <p>
                <v-img
                  src="@/assets/images/ico_policy_auto.jpg"
                  alt="자동화 수집"
                />
              </p>
            </div>

            <div>
              <p>재단은 웹사이트 사용성 개선을 위해 이용자의 정보를 저장하고 찾아내는 ‘쿠키(cookie)’ 등을 사용합니다. 쿠키는 웹사이트를 운영하는데 이용되는 서버가 이용자의 브라우저에게 보내는 작은 텍스트 파일로서 이용자의 PC 컴퓨터 하드디스크에 저장됩니다. 재단은 다음과 같은 목적을 위해 쿠키를 사용합니다.</p>

              <ul class="privacy-list mt-4">
                <li class="d-flex">
                  <p class="num">1)</p>
                  <div>
                    <p>쿠키 등 사용 목적 : 이용자가 방문한 웹사이트 내에서의 이용형태, 인기 검색어, 보안접속 여부, 자주 사용하는 기능 파악 등에 사용합니다.</p>
                  </div>
                </li>

                <li class="d-flex mt-4">
                  <p class="num">2)</p>
                  <div>
                    <p>쿠키의 설정 거부 : 이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 이용자는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다. </p>
                  </div>
                </li>

                <li>
                  <div class="privacy-table sec7">
                    <ul>
                      <li>쿠키설정 방법</li>
                    </ul>

                    <ul>
                      <li>Chrome</li>
                      <li>
                        웹브라우저 우측 상단의
                        <span>
                          <v-img
                            src="@/assets/images/ico_browser_setting1.svg"
                            width="22"
                          />
                        </span>
                        <span>→</span> 
                        <span class="box">설정</span>
                        <span>→</span> 
                        <span class="box">개인 정보 보호 및 보안</span>
                        <span>→</span> 
                        <span class="box">서드 파티 쿠키</span>
                      </li>
                    </ul>

                    <ul>
                      <li>MicrosoftEdge</li>
                      <li>
                        웹브라우저 우측 상단의
                        <span>
                          <v-img
                            src="@/assets/images/ico_browser_setting2.svg"
                            width="22"
                          />
                        </span>
                        <span>→</span> 
                        <span class="box">쿠키 및 사이트 권한</span>
                        <span>→</span> 
                        <span class="box">쿠키 및 저장된 데이터</span>
                      </li>
                    </ul>

                    <ul>
                      <li>Whale</li>
                      <li>
                        웹브라우저 우측 상단의
                        <span>
                          <v-img
                            src="@/assets/images/ico_browser_setting1.svg"
                            width="22"
                          />
                        </span>
                        <span>→</span> 
                        <span class="box">설정</span>
                        <span>→</span> 
                        <span class="box">개인정보 보호</span>
                        <span>→</span> 
                        <span class="box">쿠키 및 기타 사이트 데이터</span>
                      </li>
                    </ul>

                    <ul>
                      <li>Safari</li>
                      <li>
                        화면 좌측 상단의
                        <span class="box">Safari 메뉴</span>
                        <span>→</span> 
                        <span class="box">설정</span>
                        <span>→</span> 
                        <span class="box">개인정보보호</span>
                        <span>→</span> 
                        <span class="box">모든 쿠키 차단 체크해제</span>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </v-sheet>
        </v-col>
      </v-row>

      <v-divider width="1016" class="mx-auto my-10" style="opacity: 1; border-color: #cfcfcf;"></v-divider>

      <v-row no-gutters id="section8">
        <v-col>
          <v-sheet class="mx-auto privacy-item" width="1016">
            <div>
              <p>8. 개인정보의 파기절차 및 방법</p>
              <p>
                <v-img
                  src="@/assets/images/ico_policy_destruction.jpg"
                  alt="파기"
                />
              </p>
            </div>

            <div>
              <p>재단은 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 파기절차 및 방법은 다음과 같습니다. </p>

              <ul class="privacy-list mt-4">
                <li class="">
                  <p class="font-weight-semi-bold">1) 파기절차</p>
                  <div class="mt-2">
                    <p>이용자의 개인정보는 목적이 달성된 후 지체 없이 파기합니다. 만약 3항의 1)과 2)에 따라 별도의 보유기간에 대해 동의 받았거나 관계법령에 의해 보관이 필요한 경우, 동의 받은 보유 및 이용기간에 따라 일정 기간 저장된 후 파기됩니다.</p>
                  </div>
                </li>

                <li class="mt-5">
                  <p class="font-weight-semi-bold">2) 파기방법</p>
                  <div class="mt-2">
                    <p>전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다. 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.</p>
                  </div>
                </li>
              </ul>
            </div>
          </v-sheet>
        </v-col>
      </v-row>

      <v-divider width="1016" class="mx-auto my-10" style="opacity: 1; border-color: #cfcfcf;"></v-divider>

      <v-row no-gutters id="section9">
        <v-col>
          <v-sheet class="mx-auto privacy-item" width="1016">
            <div>
              <p>9. 개인정보의 안전성 확보 조치에 관한 사항</p>
              <p>
                <v-img
                  src="@/assets/images/ico_policy_safety.jpg"
                  alt="안전성 확보조치"
                />
              </p>
            </div>

            <div>
              <p class="font-weight-semi-bold">1) 개인정보보호를 위한 기술적 대책</p>

              <p class="mt-2">재단은 이용자의 개인정보를 처리함에 있어 개인정보가 분실, 도난, 유출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은 기술적 대책을 강구하고 있습니다. </p>

              <p class="mt-2 dot">
                재단은 해킹 등 외부침입에 대비하여 이용자의 개인정보가 유출되는 것을 막기 위해 현재 외부로부터 침입을 차단하는 장치를 이용하여 해킹 등의 공격 등을 막고 있습니다. 특히, 이용자의 개인 정보를 가지고 있는 서버는 외부의 인터넷라인과 직접 연결하지 않고 별도로 관리하는 등 최고 수준의 보안을 유지하고 있습니다.
              </p>

              <p class="mt-2 dot">재단은 만약의 사태에 대비하여 시스템과 데이터를 백업하는 체제를 갖추고 있습니다.</p>
              <p class="mt-2 dot">재단은 백신프로그램을 이용하여 컴퓨터바이러스에 의한 피해를 방지하기 위한 조치를 취하고 있습니다. 백신프로그램은 주기적으로 업데이트되며, 갑작스런 바이러스가 출현할 경우 백신이 나오는 즉시 이를 제공함으로써 개인정보가 침해되는 것을 방지하고 있습니다.</p>

              <p class="font-weight-semi-bold mt-5">2) 개인정보보호를 위한 관리적 대책</p>

              <p class="mt-2 dot">재단은 이용자의 개인정보에 대한 접근권한을 최소한의 인원으로 제한하고 있습니다. 그 최소한의 인원에 해당하는 자는 다음과 같습니다.</p>

              <div class="mt-2 ml-5">
                <p class="dot">이용자를 직접 상대로 하여 문의 대응 등 소통하는 업무를 수행하는 자</p>
                <p class="dot">개인정보 고충 처리 부서 및 담당자 등 개인정보관리 업무를 수행하는 자</p>
                <p class="dot">기타 업무상 개인정보의 처리가 불가피한 자</p>
              </div>

              <p class="mt-2 dot">재단은 입사 시 전 직원의 보안서약서를 통하여 사람에 의한 정보유출을 사전에 방지하고 개인정보처리방침 에 대한 이행사항 및 직원의 준수여부를 감사하기 위한 내부절차를 마련하고 있습니다.</p>

              <p class="mt-2 dot">재단은 개인정보를 처리하는 직원을 대상으로 새로운 보안기술 습득 및 개인정보보호의무 등에 관해 정기적인 사내교육 및 외부위탁 교육을 실시하고 있습니다.</p>

              <p class="mt-2 dot">재단은 개인정보 관련 처리자의 업무인수인계는 보안이 유지된 상태에서 철저하게 이뤄지고 있으며 입사 및 퇴사 후 개인정보 사고에 대한 책임을 명확화하고 있습니다.</p>
            </div>
          </v-sheet>
        </v-col>
      </v-row>

      <v-divider width="1016" class="mx-auto my-10" style="opacity: 1; border-color: #cfcfcf;"></v-divider>

      <v-row no-gutters id="section10">
        <v-col>
          <v-sheet class="mx-auto privacy-item" width="1016">
            <div>
              <p>10. 개인정보에 관한 민원서비스</p>
              <p>
                <v-img
                  src="@/assets/images/ico_policy_cpo.jpg"
                  alt="개인정보보호책임자"
                />
              </p>
              <p>
                <v-img
                  src="@/assets/images/ico_policy_contact.jpg"
                  alt="고충처리부서"
                />
              </p>
            </div>

            <div>
              <p>재단은 이용자의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 개인정보보호책임자를 지정하고 있습니다.</p>

              <div class="mt-5 privacy-table sec10">
                <ul>
                  <li>개인정보 보호책임자</li>
                  <li>개인정보 고충처리책임부서</li>
                </ul>

                <ul>
                  <li>박명진</li>
                  <li>사업팀</li>
                </ul>
                
                <ul>
                  <li>contact@ncfoundation.or.kr</li>
                  <li>·</li>
                </ul>

                <ul>
                  <li>02-6320-2400</li>
                  <li>02-6320-2400</li>
                </ul>
              </div>

              <p class="mt-5">이용자는 서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 개인정보보호책임자에게 신고하실 수 있습니다. 재단은 이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.</p>

              <p class="mt-2">기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.</p>

              <p class="font-weight-semi-bold mt-5">1) 개인정보침해 신고센터</p>
              <p class="dot mt-2">소관업무 : 개인정보 침해 신고ㆍ상담</p>
              <p class="dot">홈페이지 : privacy.kisa.or.kr</p>
              <p class="dot">전화 : (국번없이) 118</p>

              <p class="font-weight-semi-bold mt-5">2) 개인정보 분쟁조정위원회</p>
              <p class="dot mt-2">소관업무 : 개인정보 분쟁조정 (개인/집단)</p>
              <p class="dot">홈페이지 : kopico.go.kr</p>
              <p class="dot">전화 : 1833-6972</p>

              <p class="font-weight-semi-bold mt-5">3) 개인정보 포털</p>
              <p class="dot mt-2">소관업무 : 개인정보 관련 법령 문의</p>
              <p class="dot">홈페이지 : privacy.go.kr</p>
              <p class="dot">전화 : 02-2100-3043</p>

              <p class="font-weight-semi-bold mt-5">4) 경찰청 사이버범죄신고시스템</p>
              <p class="dot mt-2">소관업무 : 개인정보 침해 관련 형사사건 문의 및 신고</p>
              <p class="dot">홈페이지 : ecrm.police.go.kr</p>
              <p class="dot">전화 : (국번없이) 182</p>
            </div>
          </v-sheet>
        </v-col>
      </v-row>

      <v-divider width="1016" class="mx-auto my-10" style="opacity: 1; border-color: #cfcfcf;"></v-divider>

      <v-row no-gutters id="section11">
        <v-col>
          <v-sheet class="mx-auto privacy-item" width="1016">
            <div>
              <p>11. 개인정보의 파기절차 및 방법</p>
              <p>
                <v-img
                  src="@/assets/images/ico_policy_change.jpg"
                  alt="처리방침변경"
                />
              </p>
            </div>

            <div>
              <p>재단은 개인정보 처리방침의 변경(내용 추가, 삭제 및 수정)이 있을 경우 공지사항을 통해 고지하고 있습니다. 또한 변경된 내용을 이용자가 쉽게 확인할 수 있도록 변경 전∙후를 비교하여 공개하고 있습니다.</p>

              <p class="dot mt-5">개인정보처리방침 버전번호 : ver.1.</p>
              <p class="dot">개인정보처리방침 시행일자 : 2024.00.00</p>
            </div>
          </v-sheet>
        </v-col>
      </v-row>

       <v-divider width="1016" class="mx-auto my-10" style="opacity: 1; border-color: #cfcfcf;"></v-divider>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
   data() {
      return {};
   },

    methods: {
      scrollToSection: function (e) {
        const sectionName = document.getElementById("section"+e);
        const myScrollY = sectionName.offsetTop - 100;
        window.scrollTo ({ top: myScrollY, behavior: 'smooth' });
      }
   },
};
</script>

<style lang="scss" scoped>
.privacy-labeling { list-style: none; }
.privacy-labeling > li { margin: 0 14px; width: 110px; height: 107px; display: flex; flex-direction: column; justify-content: space-between; align-items: center; }
.privacy-labeling > li > p:nth-of-type(1) { width: 80px; height: 80px; cursor: pointer; }
.privacy-labeling > li > p:nth-of-type(2) { font-size: 14px; font-weight: 600; color: #000; letter-spacing: -0.5px; line-height: 1; }

.privacy-item {}
.privacy-item > div:nth-of-type(1) { display: flex; align-items: center; font-size: 24px; font-weight: 700; color: #003569; }
.privacy-item > div:nth-of-type(1) > p~p { width: 40px; height: 40px; margin-left: 10px; }
.privacy-item > div:nth-of-type(1) > p:nth-of-type(2) { margin-left: 16px; }
.privacy-item > div:nth-of-type(2) { margin-top: 16px; font-size: 14px; color: #555; line-height: 22px; letter-spacing: 0; }

.privacy-item .num { width: 18px; flex: 0 0 auto; }
.privacy-item .dot { padding-left: 20px; position: relative; }
.privacy-item .dot::before { content: ''; position: absolute; width: 3px; height: 3px; background: #555; border-radius: 5px; left: 8px; top: 9px; }

.privacy-list { list-style: none; }


.privacy-table {}
.privacy-table > ul { list-style: none; color: #555; font-size: 14px; line-height: 22px; display: flex; justify-content: space-between; border-bottom: 1px solid #e4e4e4; }
.privacy-table > ul:nth-of-type(1) { border-top: 1px solid #e4e4e4; background: #f4f4f4; color: #222; font-weight: 600; }
.privacy-table > ul~ul:hover { background: #f9f9f9; }


.privacy-table > ul > li { min-height: 50px; display: flex; text-align: center;justify-content: center; align-items: center; padding: 10px 0; }
.privacy-table > ul > li:nth-of-type(1) { margin-left: 30px; }
.privacy-table > ul > li:last-of-type { margin-right: 30px; }

.privacy-table.sec1 > ul~ul > li:nth-of-type(1) { font-weight: 600; color: #222; }
.privacy-table.sec1 > ul > li:nth-of-type(1) { width:  220px; }
.privacy-table.sec1 > ul > li:nth-of-type(2) { width: 220px; }
.privacy-table.sec1 > ul > li:nth-of-type(3) { width: 300px; }
.privacy-table.sec1 > ul > li:nth-of-type(4) { width: 170px; }

.privacy-table.sec5 > ul > li { width: 473px; }

.privacy-table.sec7 > ul:nth-of-type(1) > li { width: 100%; }
.privacy-table.sec7 > ul~ul { justify-content: flex-start; }
.privacy-table.sec7 > ul~ul > li { text-align: left; justify-content: flex-start;}
.privacy-table.sec7 > ul~ul > li:nth-of-type(1) { width: 152px; font-weight: 600; color: #555; }
.privacy-table.sec7 > ul~ul > li:nth-of-type(2) { padding-left: 8px; display: flex; }
.privacy-table.sec7 > ul~ul > li:nth-of-type(2) > span { margin-left: 8px; } 
.privacy-table.sec7 > ul~ul > li:nth-of-type(2) > span.box { font-size: 12px; color: #555; font-weight: 500; padding: 0 6px; line-height: 22px; border-radius: 2px;  background: #e4e4e4; }

.privacy-table.sec10 > ul > li { width: 473px; }

/*
.table-custom {}
.table-custom::v-deep .v-table__wrapper {}
.table-custom::v-deep .v-table__wrapper table {}
.table-custom::v-deep .v-table__wrapper table th,
.table-custom::v-deep .v-table__wrapper table td { text-align: center; padding: 0; }
.table-custom::v-deep .v-table__wrapper table thead {}
.table-custom::v-deep .v-table__wrapper table tbody {}
*/
</style>