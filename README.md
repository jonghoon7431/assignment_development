# React 심화주차 개인과제 
#### 숙련주차때 만든 지출 관리 시스템에 인증 기능을 추가, JSON 서버를 이용해 데이터를 관리해봅시다.
<br/>

## 필수 구현사항 
- 지출 관리 시스템에 회원가입 / 로그인 기능 구현 :white_check_mark:
  -  반드시, 강의에서 제공하는 jwt 인증서버를 사용하도록 합니다. :white_check_mark:
  -  인증이 되지 않는다면 서비스를 이용 할 수 없도록 해주세요. :white_check_mark:
- json-server 를 이용해 지출 데이터에 대한 CRUD 를 구현해 주세요. :white_check_mark:
    - 지출 데이터에 누가 해당 지출을 생성 했는지가 포함시켜 봅시다. :white_check_mark:
- API 호출 시, fetch 대신 axios 를 필수적으로 사용하도록 합니다. :white_check_mark:
- 페이지에서 (jsx) 파일에서 API 응답 값을 바로 사용하지 말고, 꼭 Tanstack Query (ReactQuery)를 거쳐서 이용하도록 합니다. :white_check_mark:
  - 상태 관리를 위해 Props-drilling, Context API, Redux 사용대신 Tanstack Query 를 사용해야 합니다. :white_check_mark:
<br/>

## 선택 구현사항 
- Tailwindcss 사용 :white_check_mark:
- Modal, Toast 등 어플리케이션을 화려하게 만들어 줄 수 있는 라이브러리들을 탐험해보고 적용시켜 봅시다.
- 기능이 많아지는 만큼 컴포넌트들에서 점점 더 많은 상태관리를 하게 될 텐데요. Custom Hook 을 구현하여 대신 처리하도록 시도해 봅시다. :white_check_mark:
    - input 값을 받아오는 useState 훅 useInput 커스텀 훅 생성해 처리 :white_check_mark:
    - 지출 항목 데이터 불러오는 useExpense 커스텀 생성 및 사용 :white_check_mark:
- 지출에 관한 API 호출 시, 현재 accessToken 이 유효할 경우에만 요청할 수 있고, 만료된 경우 로그아웃 처리 :white_check_mark:
- 로그인 된 유저의 정보를 전역적으로 관리하는 로직을 zustand 를 이용해 작성해봅시다.
   - (zustand 말고, RTK 사용했음)
<br/>

## 상세 기능

- 접속 시 로그인 페이지가 띄워지며, 회원 가입 및 로그인이 가능하고 로그인 토큰 만료시 alert 후 로그인 창으로 이동됩니다
- 마이페이지에서 닉네임과 프로필 이미지 추가 및 변경이 가능합니다
- 클릭하여 활성화 된 월 버튼을 저장해, 새로고침시 그 월이 계속 표시됩니다
- 해당 월 별 총 지출을 볼 수 있는 탭이 존재합니다
- 지출 데이터 crud는 json server를 통해 저장됩니다
- 홈의 지출 내역 클릭시, 상세 페이지로 페이지가 전환되며 상세 페이지에서 수정과 삭제가 가능합니다

  ### 완성본 미리보기


home

<img src="https://github.com/jonghoon7431/assignment_development/assets/152875407/959ef3a5-11db-4528-92c2-a1384bce26c8" width="700"/>

sign_in

<img src="https://github.com/jonghoon7431/assignment_development/assets/152875407/aea2a729-f93d-42d0-9fdf-86e03b5e3aba" width="700"/>
<img src="https://github.com/jonghoon7431/assignment_development/assets/152875407/63dfbe3f-d8a9-44e6-937e-6769a8aed512" width="700"/>

mypage

<img src="https://github.com/jonghoon7431/assignment_development/assets/152875407/f7f84b91-565f-4bac-8f07-91c1a79cea50" width="700"/>

detail page

<img src ="https://github.com/jonghoon7431/assignment_expense_report/assets/152875407/3640b055-b275-47d1-9da0-1f67333ee40d" width="700"/>
