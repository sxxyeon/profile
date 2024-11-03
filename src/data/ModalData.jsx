export const careerArray = [
  {
    id: 1,
    title: "B2B 복지몰 구축 및 유지보수",
    content: "기업은행, 우리은행, 국민은행, 신한은행, 화이자 등",
    desc: "B2B 폐쇄몰 UI 구축 참여 및 유지보수 업무를 하였습니다.\r\n 동일 템플릿을 다양한 고객사 복지몰에 적용하였고 백오피스를 사용, 유지보수가 용이하도록 하였습니다.\r\n반응형이 아닌, 웹과 모바일 버전이 따로 분리되어 있어있어 두 버전의 좀 더 상이한 제작이 가능토록 하였습니다.",
    skills: "HTML, CSS, JQUERY, JAVASCRIPT",
    img: "/img/b2b.png",
    url: "https://www.ibkshmall.co.kr/main",
    photo: true,
  },
  {
    id: 2,
    title: "딜라이브 몰",
    content: "",
    desc: "B2C 서비스입니다. 딜라이브를 이용하는 고객들을 위한 쇼핑몰로, 다양한 상품을 제공합니다. UI 구축 참여 및 유지보수 작업을 하였습니다. \r\n퍼블리싱 외의 작업으로는, 웹화면에 백오피스 카테고리 데이터를 가져와 배치하였고 사용자가 접속한기기(모바일,데스크탑)을 구분하여 각각에 적용되는 서비스페이지가 다를 수 있게 작업하였습니다.",
    skills: "HTML, CSS, JQUERY, JAVASCRIPT",
    img: "/img/dlive.png",
    photo: true,
  },
  {
    id: 3,
    title: "위비마켓",
    content: "",
    desc: "B2C서비스였던 현재는 종료된 앱입니다. 우리은행을 이용하는 고객들을 위한 쇼핑몰로 다양한 상품을 제공합니다.\r\n UI 구축 참여 및 유지보수 작업을 하였습니다.\r\n팝업, 이벤트페이지(룰렛 이벤트) 등의 작업을 포함 운영하는데 필요로 하는 업무를 하였습니다.",
    skills: "HTML, CSS, JQUERY, JAVASCRIPT",
    img: "/img/wibee.png",
  },
  {
    id: 4,
    title: "꿀콘",
    content: "모바일 쿠폰 구매 및 대량발송 서비스",
    desc: "모바일티켓 앱입니다. 다양한 모바일티켓을 구매할 수 있으며, 개인이 아니라 기업에서 대량의 티켓을 구매하고자 할 때 사용하는 앱 서비스입니다.\r\n 지금까지와는 다르게 vue로 개발했기에 vuetify를 이용, 컴포넌트들을 분리 및 작업하였습니다. \r\n github은 개발자와 협업시 사용하였습니다. vue와 vuetify를 활용한 전반적인 모든 ui를 담당하였습니다. 플레이스토어에서 다운받은 앱으로 서비스 이용이 가능합니다.",
    skills: "HTML, SCSS, VUE, VUETIFY, JAVASCRIPT",
    img: "/img/kkulcon.png",
    //url: "https://play.google.com/store/apps/details?id=kr.co.koreaecom.evms.bizmall&hl=ko&pli=1", 스토어에서 내려감.
    photo: true,
  },
  // {
  //   id: 5,
  //   title: "포스라",
  //   content: "",
  //   desc: "렌탈 전문 플랫폼입니다. 카페24를 사용하여 리뉴얼을 담당하였습니다.",
  //   skills: "CAFE24 (html, css, javascript)",
  //   img: "/img/fosla.png",
  //   url: "https://fosla.co.kr/",
  // },
  {
    id: 6,
    title: "회사홈페이지",
    content: "kbnc, kecom",
    desc: "반응형 회사홈페이지입니다. 스크롤 원페이지로 제작해 편리성을 높혔습니다. 리뉴얼 및 유지보수를 담당하였습니다.",
    skills: "HTML, CSS, JQUERY",
    img: "/img/kecom.png",
    url: "https://koreaecom.com/",
  },
];

export const projectArray = [
  {
    id: 7,
    title: "헬시로그",
    content: "",
    desc: "건강관리에 관심이 있어 식단에 신경을 쓰는 현대인을 타겟으로 제작한 앱입니다.\r\n 식품의약품안전처의 공공 api를 사용, 사용자가 검색한 식품에 대한 영양정보를 결과화면에 뿌려주는 검색기능, 나의 권장 소비칼로리를 계산하고 선택한 식품들의 칼로리 합산 결과를 비교해 설정한 내 목표 달성 여부를 알려주는 계산기 기능, 오늘의 식단일기를 작성할 수 있는 다이어리 기능, kakao맵 api를 사용, 사용자 위치기반 주변 건강식을 판매하는 식당을 보여주는 지도 기능, 건강에 관련된 정보를 제공하고, 글쓰기 수정 삭제 등 다른 유저들과 소통이 가능한 게시판 기능과 같은 다양하고 유용한 서비스를 제공하는 건강관리 앱입니다.\r\n  Json 서버를 사용해 restful api 에 대한 적응성을 높혔습니다.",
    skills: "REACT, SCSS, JAVASCRIPT",
    img: "/img/healthylog.png",
    url: "https://healthy-log.vercel.app/",
    github: "https://github.com/sxxyeon/healthyLog",
    photo: true,
  },
  {
    id: 8,
    title: "마이비",
    content: "",
    desc: "영화 정보 공유 앱입니다.\r\n  Tmdb api key를 발급받아  tmdb의 db를 이용하여 제작했습니다. 메인에서는 여러 카테고리의 영화 리스트를 제공하며 각 영화의 상세페이지에서는 자세한 overview, 찜 버튼, 트레일러 영상, 별점과 함께 리뷰를 남길 수 있는 관람평 기능이 있습니다.\r\n Json server를 활용해 회원가입과 로그인기능 또한 구현해보았습니다. 찜을 누른 영화는 찜 목록에서 확인 및 삭제가 가능합니다.",
    skills: "NEXT.JS, CSS MODULE, JAVASCRIPT",
    img: "/img/myvie.png",
    url: "https://myvie.vercel.app/",
    github: "https://github.com/sxxyeon/myvie",
    photo: true,
  },
  {
    id: 9,
    title: "굿즈토어",
    content: "",
    desc: "굿즈 쇼핑몰 앱입니다. 다양한 카테고리의 상품들을 json server 를 이용하여 불러오고, 카테고리별로 상품을 볼 수 있게 제작하였습니다. \r\n상세페이지에서는 해당 상품의 정보와 함께 장바구니에 담는 기능을 포함해 검색, 찜 기능, 주문 조회를 하는 등 일반적인 쇼핑몰 기능을 구현하였습니다.",
    skills: "NEXT.JS, TAILWIND CSS, TYPESCRIPT",
    img: "/img/shopcode.png",
    url: "https://goodstore-lovat.vercel.app/",
    github: "https://github.com/sxxyeon/goodstore",
    photo: true,
  },
  {
    id: 10,
    title: "mylog",
    content: "",
    desc: "vue3를 활용한 블로그 게시판 앱 입니다. 목록조회, 글 쓰기, 수정, 삭제, 댓글 달기, 좋아요한 글 저장 등의 기능을 수행할 수 있습니다.",
    skills: "VUE3, BOOTSTRAP, JAVASCRIPT",
    img: "/img/vueboard.png",
    url: "https://vue-board-six.vercel.app/#/",
    github: "https://github.com/sxxyeon/vueBoard",
    photo: true,
  },
  // {
  //   id: 11,
  //   title: "GPTherapy",
  //   content: "",
  //   desc: "chat GPT api를 사용하여 만든 심리상담 앱입니다.\r\n 사용자가 오늘 있었던 일을 입력하면, 미리 작성했던 프롬프트로 gpt api를 호출해 요약문, 회고문, 사용자가 느낀 감정, 심리 분석, 조언 등 사용자가 입력한 글에 기반하여 반응 글이 출력되도록 작업하였습니다. \r\n또한 html2canvas 를 사용, 해당 심리상담 결과를 캡처해서 저장할 수 있는 기능을 추가해 언제든지 꺼내볼 수 있도록 편리성을 높혔습니다.",
  //   skills: "REACT, ANTD, STYLED-COMPONENT, JAVASCRIPT",
  //   img: "/img/gpt.png",
  //   url: "https://gp-therapy.vercel.app/",
  //   github: "https://github.com/sxxyeon/GPTherapy",
  // },
  {
    id: 12,
    title: "프로필 사이트",
    content: "",
    desc: "현재 사이트인 포트폴리오 프로필 사이트입니다.\r\n 여러 애니메이션 효과를 주기 위해 framer-motion과 react-scroll-animation을 사용했습니다. framer-motion으로는 motion, useScroll, useTransform 기능을 사용해 about 페이지에서의 애니메이션이 가능하게 했고, 텍스트의 움직임 그리고 프로젝트들을 전시할 때 스크롤 시 가로스크롤이 될 수 있도록 작업하였습니다.\r\n전반적으로 심플한 디자인으로,  내부콘텐츠를 보다 명확히 보여줄 수 있도록 원 페이지로 만들었습니다.",
    skills: "REACT, STYLED COMPONENT, JAVASCRIPT",
    img: "/img/profile_site.png",
    url: "https://profile-site-psi.vercel.app/",
    github: "https://github.com/sxxyeon/profile",
  },
];
