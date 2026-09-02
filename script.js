/* ====================================
   TRANSLATIONS
==================================== */

const translations = {

  ko: {

    title:
      "김건우 ♥ 고가빈 결혼식에 초대합니다",

    weddingDate:
      "2026년 12월 19일 토요일",

    weddingTime:
      "오전 11시 40분",

    venue:
      "더 링크 서울",

    hall:
      "4층 플라자홀",

    invitationMessage:
      "웃는 모습이 닮았다는 말을 자주 들었습니다.<br><br>" +
      "함께 웃는 모습도, 서로를 바라보는 마음도<br>" +
      "어느새 조금씩 닮아왔나 봅니다.<br><br>" +
      "이제는 같은 곳을 바라보며<br>" +
      "오래도록 서로를 닮아가려 합니다.<br>" +
      "저희의 새로운 시작을 함께해 주세요.",

    familyIntroduction:
      "김광일 · 유금수 의 아들&nbsp;&nbsp;<strong>건우</strong><br>" +
      "고석헌 · 현시은 의 딸&nbsp;&nbsp;&nbsp;&nbsp;<strong>가빈</strong>",

    viewAll:
      "전체보기",

    locationTitle:
      "오시는 길",

    locationName:
      "더 링크 서울 트리뷰트 포트폴리오 호텔<br>" +
      "4층 플라자홀",

    address:
      "서울특별시 구로구 경인로 610 (신도림동)",

    navigationTitle:
      "네비게이션",

    navigationDescription:
      "앱을 열어 길 안내를 시작해보세요.",

    subwayTitle:
      "지하철 이용 시",

    subwayDescription:
      "1/2호선 신도림역 1번 출구 도보 10분<br>" +
      "1호선 구로역 3번 출구 도보 5분",

    shuttleTitle:
      "셔틀버스",

    shuttleDescription:
      "신도림역 1번 출구 (수시 운행)",

    carTitle:
      "자가용 이용 시",

    carDescription:
      "(호텔 문의 후 작성) (1시간 30분 무료 주차)",

    receptionNoticeTitle:
      "<strong>안내드립니다.</strong>",

    receptionNoticeText:
      "연회장은 예식장 한 층 위인 4M층에 위치해 있으며,<br>" +
      "에스컬레이터를 이용해 편하게 이동하실 수 있습니다.",

    accountTitle:
      "마음 전하실 곳",

    accountMessage:
      "축하해 주시는 따뜻한 마음에 깊이 감사드립니다.<br>" +
      "귀한 마음을 감사히 간직하겠습니다."

  },


  ja: {

    title:
      "キム・ゴヌ ♥ コ・ガビン 結婚式のご案内",

    weddingDate:
      "2026年12月19日 土曜日",

    weddingTime:
      "午前11時40分",

    venue:
      "THE LINK SEOUL",

    hall:
      "4階 PLAZA HALL",

    invitationMessage:
      "笑った顔が似ていると、よく言われてきました。<br><br>" +
      "一緒に笑う姿も、お互いを想う気持ちも、<br>" +
      "いつの間にか少しずつ似てきたようです。<br><br>" +
      "これからは同じ未来を見つめながら、<br>" +
      "いつまでもお互いに似ていけたらと思います。<br>" +
      "私たちの新しい門出を、ぜひ一緒に見守ってください。",

    familyIntroduction:
      "キム・グァンイル · ユ・グムス の息子&nbsp;&nbsp;<strong>ゴヌ</strong><br>" +
      "コ・ソクホン · ヒョン・シウン の娘&nbsp;&nbsp;<strong>ガビン</strong>",

    viewAll:
      "すべて見る",

    locationTitle:
      "アクセス",

    locationName:
      "The Link Seoul, a Tribute Portfolio Hotel<br>" +
      "4階 PLAZA HALL",

    address:
      "ソウル特別市 九老区 京仁路610",

    navigationTitle:
      "ナビゲーション",

    navigationDescription:
      "アプリを開いて経路案内を開始できます。",

    subwayTitle:
      "地下鉄をご利用の場合",

    subwayDescription:
      "1・2号線 新道林駅 1番出口から徒歩10分<br>" +
      "1号線 九老駅 3番出口から徒歩5分",

    shuttleTitle:
      "シャトルバス",

    shuttleDescription:
      "新道林駅 1番出口より随時運行",

    carTitle:
      "お車をご利用の場合",

    carDescription:
      "駐車場の詳細は後ほどご案内いたします。",

    receptionNoticeTitle:
      "<strong>ご案内</strong>",

    receptionNoticeText:
      "披露宴会場は挙式会場の一つ上の4M階にございます。<br>" +
      "エスカレーターをご利用いただけます。",

    accountTitle:
      "마음 전하실 곳",

    accountMessage:
      ""

  }

};


/* ====================================
   LANGUAGE
==================================== */

let currentLanguage = "ko";


function setLanguage(language) {

  currentLanguage = language;

  document.documentElement.lang =
    language;

  document.title =
    translations[language].title;


  document
    .querySelectorAll("[data-i18n]")
    .forEach((element) => {

      const key =
        element.dataset.i18n;

      const translatedText =
        translations[language][key];

      if (translatedText !== undefined) {

        element.innerHTML =
          translatedText;

      }

    });


  const korButton =
    document.getElementById(
      "korButton"
    );

  const jpnButton =
    document.getElementById(
      "jpnButton"
    );


  if (korButton) {
    korButton.classList.toggle(
      "active",
      language === "ko"
    );
  }

  if (jpnButton) {
    jpnButton.classList.toggle(
      "active",
      language === "ja"
    );
  }


  const accountSection =
    document.getElementById(
      "accountSection"
    );

  const flowerSection =
    document.getElementById(
      "flowerSection"
    );

  const naverMap =
    document.getElementById(
      "naverMap"
    );

  const googleMap =
    document.getElementById(
      "googleMap"
    );

  const navigationSection =
    document.getElementById(
      "navigationSection"
    );

  const transportationSection =
    document.getElementById(
      "transportationSection"
    );


  if (language === "ja") {

    if (accountSection) {
      accountSection.style.display =
        "none";
    }

    if (flowerSection) {
      flowerSection.style.display =
        "none";
    }

    if (naverMap) {
      naverMap.classList.add(
        "hidden"
      );
    }

    if (googleMap) {
      googleMap.classList.remove(
        "hidden"
      );
    }

    if (navigationSection) {
      navigationSection.classList.add(
        "hidden"
      );
    }

    if (transportationSection) {
      transportationSection.classList.add(
        "hidden"
      );
    }

  } else {

    if (accountSection) {
      accountSection.style.display =
        "";
    }

    if (flowerSection) {
      flowerSection.style.display =
        "";
    }

    if (naverMap) {
      naverMap.classList.remove(
        "hidden"
      );
    }

    if (googleMap) {
      googleMap.classList.add(
        "hidden"
      );
    }

    if (navigationSection) {
      navigationSection.classList.remove(
        "hidden"
      );
    }

    if (transportationSection) {
      transportationSection.classList.remove(
        "hidden"
      );
    }

  }

}


/* ====================================
   INITIAL LANGUAGE
==================================== */

const browserLanguage =
  navigator.language ||
  navigator.userLanguage;


if (
  browserLanguage
    .toLowerCase()
    .startsWith("ja")
) {

  setLanguage("ja");

} else {

  setLanguage("ko");

}


const korButton =
  document.getElementById(
    "korButton"
  );

if (korButton) {

  korButton.addEventListener(
    "click",
    () => setLanguage("ko")
  );

}


const jpnButton =
  document.getElementById(
    "jpnButton"
  );

if (jpnButton) {

  jpnButton.addEventListener(
    "click",
    () => setLanguage("ja")
  );

}


/* ====================================
   NAVIGATION
==================================== */

const weddingPlace =
  "더 링크 서울 트리뷰트 포트폴리오 호텔";


const naverButton =
  document.getElementById(
    "naverButton"
  );

if (naverButton) {

  naverButton.addEventListener(
    "click",
    () => {

      const query =
        encodeURIComponent(
          weddingPlace
        );

      window.location.href =
        `nmap://search?query=${query}&appname=wedding.invitation`;

      setTimeout(() => {

        window.location.href =
          `https://map.naver.com/p/search/${query}`;

      }, 1200);

    }
  );

}


const tmapButton =
  document.getElementById(
    "tmapButton"
  );

if (tmapButton) {

  tmapButton.addEventListener(
    "click",
    () => {

      const query =
        encodeURIComponent(
          weddingPlace
        );

      window.location.href =
        `tmap://search?name=${query}`;

    }
  );

}


const kakaoButton =
  document.getElementById(
    "kakaoButton"
  );

if (kakaoButton) {

  kakaoButton.addEventListener(
    "click",
    () => {

      const query =
        encodeURIComponent(
          weddingPlace
        );

      window.location.href =
        `https://map.kakao.com/link/search/${query}`;

    }
  );

}


/* ====================================
   ACCOUNT COPY
==================================== */

document
  .querySelectorAll(
    ".copy-button"
  )
  .forEach((button) => {

    button.addEventListener(
      "click",
      async () => {

        const account =
          button.dataset.account;

        try {

          await navigator.clipboard
            .writeText(account);

          const originalText =
            button.textContent;

          button.textContent =
            "완료";

          setTimeout(() => {

            button.textContent =
              originalText;

          }, 1200);

        } catch (error) {

          console.error(
            "계좌번호 복사 실패",
            error
          );

        }

      }
    );

  });


/* ====================================
   GALLERY
==================================== */

const isVersion3 =
  document.body.classList.contains(
    "version3"
  );


/*
  version3 갤러리
  02 / 05 / 06 / 08 제외
*/
const galleryImages =
  isVersion3
    ? [
        "images/gallery01.jpg",
        "images/gallery03.jpg",
        "images/gallery04.jpg",
        "images/gallery07.jpg",
        "images/gallery09.jpg",
        "images/gallery10.jpg"
      ]
    : [
        "images/gallery01.jpg",
        "images/gallery02.jpg",
        "images/gallery03.jpg",
        "images/gallery04.jpg",
        "images/gallery05.jpg",
        "images/gallery06.jpg",
        "images/gallery07.jpg",
        "images/gallery08.jpg",
        "images/gallery09.jpg"
      ];


/*
  version3에서 남색 필터를 적용할 사진
*/
const mutedImages = [
  "images/gallery01.jpg",
  "images/gallery03.jpg",
  "images/gallery04.jpg"
];


let currentGalleryIndex = 0;


const galleryMainImage =
  document.getElementById(
    "galleryMainImage"
  );

const galleryPreview =
  document.getElementById(
    "galleryPreview"
  );


let galleryInterval = null;


/* ====================================
   PREVIEW
==================================== */

function renderPreview() {

  if (!galleryPreview) {
    return;
  }

  galleryPreview.innerHTML =
    "";


  const previewCount =
    Math.min(
      5,
      galleryImages.length
    );


  for (
    let i = 0;
    i < previewCount;
    i++
  ) {

    const imageIndex =
      (
        currentGalleryIndex +
        i
      ) %
      galleryImages.length;


    const image =
      document.createElement(
        "img"
      );


    image.src =
      galleryImages[
        imageIndex
      ];

    image.alt =
      `Wedding gallery ${imageIndex + 1}`;


    /*
      version3 특정 사진에만 필터 적용
    */
    if (
      isVersion3 &&
      mutedImages.includes(
        galleryImages[
          imageIndex
        ]
      )
    ) {

      image.classList.add(
        "muted-photo"
      );

    }


    image.addEventListener(
      "click",
      () => {

        currentGalleryIndex =
          imageIndex;

        updateGallery();

        restartGalleryAutoPlay();

      }
    );


    if (i === 0) {

      image.classList.add(
        "active"
      );

    }


    galleryPreview.appendChild(
      image
    );

  }

}


/* ====================================
   MAIN IMAGE
==================================== */

function updateGallery() {

  if (!galleryMainImage) {
    return;
  }


  galleryMainImage.style.opacity =
    0;


  setTimeout(() => {

    galleryMainImage.src =
      galleryImages[
        currentGalleryIndex
      ];


    if (isVersion3) {

      galleryMainImage.classList.toggle(
        "muted-photo",
        mutedImages.includes(
          galleryImages[
            currentGalleryIndex
          ]
        )
      );

    } else {

      galleryMainImage.classList.remove(
        "muted-photo"
      );

    }


    galleryMainImage.style.opacity =
      1;

  }, 150);


  renderPreview();

}


/* ====================================
   AUTO PLAY
==================================== */

function startGalleryAutoPlay() {

  if (!galleryMainImage) {
    return;
  }

  galleryInterval =
    setInterval(() => {

      currentGalleryIndex =
        (
          currentGalleryIndex +
          1
        ) %
        galleryImages.length;

      updateGallery();

    }, 3000);

}


function stopGalleryAutoPlay() {

  if (galleryInterval) {

    clearInterval(
      galleryInterval
    );

    galleryInterval =
      null;

  }

}


function restartGalleryAutoPlay() {

  stopGalleryAutoPlay();

  startGalleryAutoPlay();

}


/* ====================================
   MAIN ARROWS
==================================== */

const galleryPrevButton =
  document.getElementById(
    "galleryPrevButton"
  );

if (galleryPrevButton) {

  galleryPrevButton.addEventListener(
    "click",
    () => {

      currentGalleryIndex =
        (
          currentGalleryIndex -
          1 +
          galleryImages.length
        ) %
        galleryImages.length;

      updateGallery();

      restartGalleryAutoPlay();

    }
  );

}


const galleryNextButton =
  document.getElementById(
    "galleryNextButton"
  );

if (galleryNextButton) {

  galleryNextButton.addEventListener(
    "click",
    () => {

      currentGalleryIndex =
        (
          currentGalleryIndex +
          1
        ) %
        galleryImages.length;

      updateGallery();

      restartGalleryAutoPlay();

    }
  );

}


/* ====================================
   FULL SCREEN
==================================== */

const galleryModal =
  document.getElementById(
    "galleryModal"
  );


const fullscreenImage =
  document.getElementById(
    "fullscreenImage"
  );


const fullscreenThumbnails =
  document.getElementById(
    "fullscreenThumbnails"
  );


function openGallery() {

  if (!galleryModal) {
    return;
  }

  stopGalleryAutoPlay();

  galleryModal.classList.add(
    "open"
  );

  document.body.style.overflow =
    "hidden";

  updateFullscreenGallery();

}


function closeGallery() {

  if (!galleryModal) {
    return;
  }

  galleryModal.classList.remove(
    "open"
  );

  document.body.style.overflow =
    "";

  restartGalleryAutoPlay();

}


function updateFullscreenGallery() {

  if (!fullscreenImage) {
    return;
  }

  fullscreenImage.src =
    galleryImages[
      currentGalleryIndex
    ];

  renderFullscreenThumbnails();

}


function renderFullscreenThumbnails() {

  if (!fullscreenThumbnails) {
    return;
  }

  fullscreenThumbnails.innerHTML =
    "";


  galleryImages.forEach(
    (imageSrc, index) => {

      const thumbnail =
        document.createElement(
          "img"
        );

      thumbnail.src =
        imageSrc;

      thumbnail.alt =
        `Wedding thumbnail ${index + 1}`;


      if (
        index ===
        currentGalleryIndex
      ) {

        thumbnail.classList.add(
          "active"
        );

      }


      thumbnail.addEventListener(
        "click",
        () => {

          currentGalleryIndex =
            index;

          updateFullscreenGallery();

        }
      );


      fullscreenThumbnails
        .appendChild(
          thumbnail
        );

    }
  );

}


function showNextImage() {

  currentGalleryIndex =
    (
      currentGalleryIndex +
      1
    ) %
    galleryImages.length;

  updateFullscreenGallery();

}


function showPreviousImage() {

  currentGalleryIndex =
    (
      currentGalleryIndex -
      1 +
      galleryImages.length
    ) %
    galleryImages.length;

  updateFullscreenGallery();

}


/* 전체보기 버튼
   version3에는 없으므로 있을 때만 작동 */

const openGalleryButton =
  document.getElementById(
    "openGalleryButton"
  );

if (openGalleryButton) {

  openGalleryButton.addEventListener(
    "click",
    openGallery
  );

}


const closeGalleryButton =
  document.getElementById(
    "closeGalleryButton"
  );

if (closeGalleryButton) {

  closeGalleryButton.addEventListener(
    "click",
    closeGallery
  );

}


const nextImageButton =
  document.getElementById(
    "nextImageButton"
  );

if (nextImageButton) {

  nextImageButton.addEventListener(
    "click",
    showNextImage
  );

}


const previousImageButton =
  document.getElementById(
    "previousImageButton"
  );

if (previousImageButton) {

  previousImageButton.addEventListener(
    "click",
    showPreviousImage
  );

}


/* ====================================
   MOBILE SWIPE
==================================== */

let touchStartX = 0;
let touchEndX = 0;


if (galleryModal) {

  galleryModal.addEventListener(
    "touchstart",
    (event) => {

      touchStartX =
        event.changedTouches[0]
          .screenX;

    },
    {
      passive: true
    }
  );


  galleryModal.addEventListener(
    "touchend",
    (event) => {

      touchEndX =
        event.changedTouches[0]
          .screenX;

      const difference =
        touchStartX -
        touchEndX;


      if (
        Math.abs(difference) <
        40
      ) {

        return;

      }


      if (difference > 0) {

        showNextImage();

      } else {

        showPreviousImage();

      }

    },
    {
      passive: true
    }
  );

}


/* ====================================
   START
==================================== */

if (
  galleryMainImage &&
  galleryPreview
) {

  /*
    첫 번째 사진 필터도
    페이지가 뜨자마자 바로 적용
  */

  if (isVersion3) {

    galleryMainImage.classList.toggle(
      "muted-photo",
      mutedImages.includes(
        galleryImages[0]
      )
    );

  }


  renderPreview();

  startGalleryAutoPlay();

}