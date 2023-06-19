const getDataList = () => {
  //이탄
  const getElList1 = () => [
    { value: "요오드" },
    { value: "병원 소독약" },
    { value: "스모키" },
    { value: "생선" },
    { value: "해초" },
    { value: "해산물" },
    { value: "바다짠내" },
    { value: "젖은 흙" },
    { value: "이끼" },
  ];

  //과일
  const getElList2 = () => [
    //상큼한 과일
    { value: "라임" },
    { value: "레몬" },
    { value: "자몽" },
    { value: "귤" },
    { value: "오렌지" },
    { value: "오렌지 껍질" },
    //열대과열
    { value: "구아바" },
    { value: "멜론" },
    { value: "망고" },
    { value: "바나나" },
    { value: "파인애플" },
    { value: "패션후르츠" },
    { value: "코코넛" },
    { value: "리치" },
    //이과류
    { value: "모과" },
    { value: "사과" },
    { value: "풋사과" },
    { value: "배" },
    //핵과류
    { value: "복숭아" },
    { value: "체리" },
    { value: "자두" },
    { value: "건살구" },
    { value: "매실" },
    { value: "대추야자" },
    //기타
    { value: "건포도" },
    { value: "블루베리" },
    { value: "청포도" },
    { value: "적포도" },
    { value: "건무화과" },
    { value: "쥬니퍼베리" },
    { value: "딸기" },
  ];

  //유제품
  const getElList3 = () => [
    { value: "치즈" },
    { value: "우유" },
    { value: "요거트" },
    { value: "그릭요거트" },
    { value: "캐러멜" },
    { value: "버터스카치" },
  ];

  //식물
  const getElList4 = () => [
    //꽃
    { value: "꽃" },
    { value: "장미" },
    { value: "라일락" },
    { value: "헤더" },
    //풀
    { value: "풀" },
    { value: "잔디" },
    { value: "녹즙기" },
    { value: "건초" },
    //허브
    { value: "허브" },
    { value: "바질" },
    { value: "민트" },
    { value: "로즈마리" },
    //당류
    { value: "당류" },
    { value: "설탕" },
    { value: "흑설탕" },
    { value: "메이플시럽" },
    { value: "심플 시럽" },
    //나무
    { value: "나무" },
    { value: "마른 나무" },
    { value: "젖은 나무" },
    { value: "썩은 나무" },
    { value: "원목 가구" },
    //곡물
    { value: "곡물" },
    { value: "쌀" },
    { value: "밀가루" },
    { value: "감자" },
    { value: "엿기름" },
    { value: "옥수수" },
    { value: "쿠키" },
    { value: "식빵" },
    { value: "식빵 테두리" },
    { value: "볶은 곡물" },
    { value: "보리차" },
    { value: "호밀빵" },
    //견과류
    { value: "견과류" },
    { value: "땅콩" },
    { value: "아몬드" },
    { value: "피스타치오" },
    { value: "호두" },
    { value: "헤이즐넛" },
    { value: "캐슈넛" },
    { value: "육두구" },
    //기타
    { value: "밀크초콜렛" },
    { value: "다크초콜렛" },
    { value: "커피" },
    { value: "담배" },
    { value: "홍차" },
    { value: "나뭇잎" },
    { value: "꿀" },
    { value: "솔 향" },
    { value: "감초" },
  ];

  //향신료
  const getElList5 = () => [
    { value: "정향" },
    { value: "바닐라" },
    { value: "계피" },
    { value: "아니스" },
    { value: "후추" },
    { value: "바질" },
    { value: "시나몬" },
  ];

  //기타
  const getElList6 = () => [
    { value: "왁스" },
    { value: "밀랍" },
    { value: "가솔린" },
    { value: "고무" },
    { value: "가죽" },
    { value: "타르" },
    { value: "마른 흙" },
    { value: "유기용매" },
    { value: "운동장 먼지" },
    { value: "아세톤" },
    { value: "암모니아" },
    { value: "황" },
    { value: "금속향" },
    { value: "미네랄" },
    { value: "연필심" },
    { value: "석탄" },
  ];
  const getTestData = () => [
    {
      title: "2023 드로낙 리뷰) 드로낙이라는 걸 처음 먹어보는데 리뷰한번 해봄",
      recommendCount: 235,
      commentCount: 312,
      createdAt: "2023-04-04",
    },
    {
      title: "드로낙 리뷰) 드로낙이라는 걸 처음 먹어보는데 리뷰한번 해봄",
      recommendCount: 235,
      commentCount: 312,
      createdAt: "2023-04-04",
    },
    {
      title: "드로낙 리뷰) 드로낙이라는 걸 처음 먹어보는데 리뷰한번 해봄",
      recommendCount: 235,
      commentCount: 312,
      createdAt: "2023-04-04",
    },
    {
      title:
        "드로낙 리뷰) 드로낙이라는 걸 처음 먹어보는데 리뷰라는 걸 한번 해봄 근데 생각보다 맛이 없고 왜 유명한지 잘 모르겠어",
      recommendCount: 235,
      commentCount: 312,
      createdAt: "2023-04-04",
    },
    {
      title: "드로낙 리뷰",
      recommendCount: 255,
      commentCount: 1323,
      createdAt: "2023-04-04",
    },
    {
      title: "드로낙 리뷰",
      recommendCount: 12,
      commentCount: 3,
      createdAt: "2023-04-04",
    },
    {
      title: "드로낙 리뷰",
      recommendCount: 122,
      commentCount: 3,
      createdAt: "2023-04-04",
    },
    {
      title: "드로낙 리뷰",
      recommendCount: 2,
      commentCount: 35,
      createdAt: "2023-04-04",
    },
    {
      title: "드로낙 리뷰",
      recommendCount: 2,
      commentCount: 300,
      createdAt: "2023-04-04",
    },
    {
      title: "드로낙 리뷰",
      recommendCount: 2,
      commentCount: 3,
      createdAt: "2023-04-04",
    },
    {
      title: "드로낙 리뷰",
      recommendCount: 2,
      commentCount: 3,
      createdAt: "2023-04-04",
    },
    {
      title: "드로낙 리뷰",
      recommendCount: 2,
      commentCount: 3,
      createdAt: "2023-04-04",
    },
    {
      title: "드로낙 리뷰",
      recommendCount: 2,
      commentCount: 3,
      createdAt: "2023-04-04",
    },
    {
      title: "드로낙 리뷰",
      recommendCount: 2,
      commentCount: 3,
      createdAt: "2023-04-04",
    },
    {
      title: "드로낙 리뷰",
      recommendCount: 2,
      commentCount: 3,
      createdAt: "2023-04-04",
    },
    {
      title: "드로낙 리뷰",
      recommendCount: 2,
      commentCount: 3,
      createdAt: "2023-04-04",
    },
    {
      title: "드로낙 리뷰",
      recommendCount: 2,
      commentCount: 3,
      createdAt: "2023-04-04",
    },
    {
      title: "드로낙 리뷰",
      recommendCount: 2,
      commentCount: 3,
      createdAt: "2023-04-04",
    },
    {
      title: "드로낙 리뷰",
      recommendCount: 2,
      commentCount: 3,
      createdAt: "2023-04-04",
    },
    {
      title: "드로낙 리뷰",
      recommendCount: 2,
      commentCount: 3,
      createdAt: "2023-04-04",
    },
  ];

  return {
    getElList1,
    getElList2,
    getElList3,
    getElList4,
    getElList5,
    getElList6,
    getTestData,
  };
};

export default getDataList;
