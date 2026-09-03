/* ====================================
   TRANSLATION
==================================== */

const translations = {

  ko: {

    title:
      "김건우 ♥ 고가빈 결혼식에 초대합니다",

    weddingSummary:
      "2026년 12월 19일 토요일 11시 40분<br>" +
      "더링크 플라자홀 (4F)",

    calendarDate:
      "2026년 12월 19일 토요일 오전 11시 40분",

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

    locationTitle:
      "LOCATION",

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
      "서울특별시 구로구 경인로 610 (1시간 30분 무료 주차)",

    receptionNoticeTitle:
      "<strong>안내드립니다.</strong>",

    receptionNoticeText:
      "연회장은 예식장 한 층 위인 4M층에 위치해 있으며,<br>" +
      "에스컬레이터를 이용해 이동하실 수 있습니다.",

    accountTitle:
      "마음 전하실 곳",

    accountMessage:
      "축하해 주시는 따뜻한 마음에 깊이 감사드립니다.<br>" +
      "귀한 마음을 감사히 간직하겠습니다."

  },


  ja: {

    title:
      "キム・ゴヌ ♥ コ・ガビン 結婚式のご案内",

    weddingSummary:
      "2026年12月19日 土曜日 11時40分<br>" +
      "THE LINK PLAZA HALL (4F)",

    calendarDate:
      "2026年12月19日 土曜日 午前11時40分",

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

    locationTitle:
      "LOCATION",

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
      "서울특별시 구로구 경인로 610<br>" +
      "610 Gyeongin-ro, Guro-gu, Seoul<br>" +
      "ソウル特別市 九老区 京仁路 610",

    receptionNoticeTitle:
      "<strong>ご案内</strong>",

    receptionNoticeText:
      "披露宴会場は挙式会場の一つ上の4M階にございます。<br>" +
      "エスカレーターをご利用いただけます。",

    accountTitle:
      "",

    accountMessage:
      ""

  }

};



/* ====================================
   LANGUAGE
==================================== */

let currentLanguage =
  "ko";


const languageToggleButton =
  document.getElementById(
    "languageToggleButton"
  );


function updateLanguageButton() {

  if (!languageToggleButton) {
    return;
  }

  languageToggleButton.textContent =
    currentLanguage === "ko"
      ? "KOR"
      : "JPN";

}


function setLanguage(language) {

  currentLanguage =
    language;


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

      if (
        translatedText !== undefined
      ) {

        element.innerHTML =
          translatedText;

      }

    });


  updateLanguageButton();



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


  }

}



/* ====================================
   INITIAL LANGUAGE
==================================== */

const browserLanguage =
  navigator.language ||
  navigator.userLanguage;


if (
  browserLanguage &&
  browserLanguage
    .toLowerCase()
    .startsWith("ja")
) {

  setLanguage("ja");

} else {

  setLanguage("ko");

}



/* ====================================
   LANGUAGE BUTTON
==================================== */

if (languageToggleButton) {

  languageToggleButton.addEventListener(
    "click",
    () => {

      const nextLanguage =
        currentLanguage === "ko"
          ? "ja"
          : "ko";

      setLanguage(
        nextLanguage
      );

    }
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

      }, 1000);

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
   ACCOUNT ACCORDION
==================================== */

const accountAccordions =
  document.querySelectorAll(
    ".account-accordion"
  );


accountAccordions.forEach(
  (accordion) => {

    const toggle =
      accordion.querySelector(
        ".account-toggle"
      );

    const label =
      accordion.querySelector(
        ".account-toggle-label"
      );


    if (!toggle) {
      return;
    }


    toggle.addEventListener(
      "click",
      () => {

        const willOpen =
          !accordion.classList.contains(
            "open"
          );


        accordion.classList.toggle(
          "open",
          willOpen
        );


        toggle.setAttribute(
          "aria-expanded",
          String(willOpen)
        );


        if (label) {

          const side =
            label.textContent.includes(
              "신랑"
            )
              ? "신랑측"
              : "신부측";


          label.textContent =
            willOpen
              ? `${side} 계좌번호 접기`
              : `${side} 계좌번호 보기`;

        }

      }
    );

  }
);

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

        if (!account) {
          return;
        }


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


const galleryImages =
  isVersion3

    ? [

        "images/gallery01.jpg",
        "images/gallery03.jpg",
        "images/gallery04.jpg",

        "images/gallery07.jpg",
        "images/gallery09.jpg",
        "images/gallery10.jpg",

        "images/gallery02.jpg",
        "images/gallery05.jpg",
        "images/gallery06.jpg"

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



const mutedImages = [

  "images/gallery01.jpg",
  "images/gallery03.jpg",
  "images/gallery04.jpg"

];


let currentGalleryIndex =
  0;



const galleryGrid =
  document.getElementById(
    "galleryGrid"
  );


const galleryModal =
  document.getElementById(
    "galleryModal"
  );


const fullscreenImage =
  document.getElementById(
    "fullscreenImage"
  );


const galleryCounter =
  document.getElementById(
    "galleryCounter"
  );



/* ====================================
   GALLERY GRID
==================================== */

function renderGalleryGrid() {

  if (!galleryGrid) {
    return;
  }


  galleryGrid.innerHTML =
    "";


  galleryImages.forEach(
    (imageSrc, index) => {

      const image =
        document.createElement(
          "img"
        );


      image.src =
        imageSrc;


      image.alt =
        `Wedding gallery ${index + 1}`;


      image.loading =
        "lazy";


      if (
        isVersion3 &&
        mutedImages.includes(
          imageSrc
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
            index;

          openGallery();

        }
      );


      galleryGrid.appendChild(
        image
      );

    }
  );

}



/* ====================================
   OPEN / CLOSE
==================================== */

function openGallery() {

  if (!galleryModal) {
    return;
  }


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

}



/* ====================================
   FULLSCREEN
==================================== */

function updateFullscreenGallery() {

  if (!fullscreenImage) {
    return;
  }


  fullscreenImage.src =
    galleryImages[
      currentGalleryIndex
    ];


  if (isVersion3) {

    fullscreenImage.classList.toggle(
      "muted-photo",
      mutedImages.includes(
        galleryImages[
          currentGalleryIndex
        ]
      )
    );

  } else {

    fullscreenImage.classList.remove(
      "muted-photo"
    );

  }


  if (galleryCounter) {

    galleryCounter.textContent =
      `${currentGalleryIndex + 1} / ${galleryImages.length}`;

  }

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



/* ====================================
   GALLERY BUTTONS
==================================== */

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
   KEYBOARD
==================================== */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      !galleryModal ||
      !galleryModal.classList.contains(
        "open"
      )
    ) {

      return;

    }


    if (
      event.key === "Escape"
    ) {

      closeGallery();

    }


    if (
      event.key === "ArrowRight"
    ) {

      showNextImage();

    }


    if (
      event.key === "ArrowLeft"
    ) {

      showPreviousImage();

    }

  }
);



/* ====================================
   SWIPE
==================================== */

let touchStartX =
  0;


if (galleryModal) {

  galleryModal.addEventListener(
    "touchstart",
    (event) => {

      touchStartX =
        event.changedTouches[0]
          .clientX;

    },
    {
      passive: true
    }
  );


  galleryModal.addEventListener(
    "touchend",
    (event) => {

      const touchEndX =
        event.changedTouches[0]
          .clientX;


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
   SCROLL REVEAL
==================================== */

function initializeScrollReveal() {

  const revealElements =
    document.querySelectorAll(
      ".reveal-on-scroll"
    );


  if (
    revealElements.length === 0
  ) {
    return;
  }


  /*
    IntersectionObserver를
    지원하지 않는 브라우저
  */

  if (
    !(
      "IntersectionObserver"
      in window
    )
  ) {

    revealElements.forEach(
      (element) => {

        element.classList.add(
          "is-visible"
        );

      }
    );

    return;
  }


  const observer =
    new IntersectionObserver(

      (entries) => {

        entries.forEach(
          (entry) => {

            if (
              !entry.isIntersecting
            ) {
              return;
            }


            /*
              다음 화면 렌더링에서
              클래스를 붙여야
              transition이 확실하게 보임
            */

            window.requestAnimationFrame(
              () => {

                entry.target
                  .classList.add(
                    "is-visible"
                  );

              }
            );


            /*
              최초 한 번만 실행
            */

            observer.unobserve(
              entry.target
            );

          }
        );

      },

      {
        threshold: 0.08,

        rootMargin:
          "0px 0px -8% 0px"
      }

    );


  revealElements.forEach(
    (element) => {

      observer.observe(
        element
      );

    }
  );

}


/*
  DOM이 완전히 준비된 다음
  Observer 시작
*/

if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    initializeScrollReveal
  );

} else {

  initializeScrollReveal();

}

/* ====================================
   BOTTOM PULL EFFECT
==================================== */

const invitation =
  document.querySelector(
    ".invitation"
  );


let bottomTouchStartY =
  0;


let isBottomPulling =
  false;



function isPageBottom() {

  return (
    window.innerHeight +
    window.scrollY >=
    document.documentElement
      .scrollHeight -
    4
  );

}



if (invitation) {

  window.addEventListener(
    "touchstart",
    (event) => {

      if (!isPageBottom()) {
        return;
      }


      bottomTouchStartY =
        event.touches[0]
          .clientY;


      isBottomPulling =
        true;


      invitation.classList.add(
        "bottom-pulling"
      );

    },
    {
      passive: true
    }
  );



  window.addEventListener(
    "touchmove",
    (event) => {

      if (
        !isBottomPulling ||
        !isPageBottom()
      ) {

        return;

      }


      const currentY =
        event.touches[0]
          .clientY;


      const movement =
        bottomTouchStartY -
        currentY;


      if (
        movement <= 0
      ) {

        return;

      }


      const pullAmount =
        Math.min(
          movement * 0.18,
          28
        );


      invitation.style.setProperty(
        "--bottom-pull",
        `${pullAmount}px`
      );

    },
    {
      passive: true
    }
  );



  function releaseBottomPull() {

    if (!isBottomPulling) {
      return;
    }


    isBottomPulling =
      false;


    invitation.classList.remove(
      "bottom-pulling"
    );


    invitation.style.setProperty(
      "--bottom-pull",
      "0px"
    );

  }



  window.addEventListener(
    "touchend",
    releaseBottomPull,
    {
      passive: true
    }
  );


  window.addEventListener(
    "touchcancel",
    releaseBottomPull,
    {
      passive: true
    }
  );

}



/* ====================================
   START
==================================== */

renderGalleryGrid();