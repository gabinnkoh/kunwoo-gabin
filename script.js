/* ====================================
   BASIC SETTINGS
==================================== */

const weddingAddress =
  "서울특별시 구로구 경인로 610";

const weddingPlace =
  "더 링크 서울 트리뷰트 포트폴리오 호텔";


/* ====================================
   LANGUAGE
==================================== */

const translations = {

  ko: {

    title:
      "김건우 ♥ 고가빈 결혼식에 초대합니다",

    groom:
      "신랑",

    bride:
      "신부",

    groomName:
      "김건우",

    brideName:
      "고가빈",

    weddingDate:
      "2026년 12월 19일 토요일",

    weddingTime:
      "오전 11시 40분",

    venue:
      "더 링크 서울",

    hall:
      "4층 플라자홀",

    viewAll:
      "전체보기",

    locationTitle:
      "오시는 길",

    locationName:
      "더 링크 서울 트리뷰트 포트폴리오 호텔<br>4층 플라자홀",

    address:
      "서울특별시 구로구 경인로 610 (신도림동)",

    navigationTitle:
      "네비게이션",

    navigationDescription:
      "앱을 열어 길 안내를 시작해보세요.",

    subwayTitle:
      "지하철 이용 시",

    subwayDescription:
      "1/2호선 신도림역 1번 출구 도보 10분<br>1호선 구로역 3번 출구 도보 5분",

    shuttleTitle:
      "셔틀버스",

    shuttleDescription:
      "신도림역 1번 출구 (수시 운행)",

    carTitle:
      "자가용 이용 시 (1시간 30분 무료 주차)",

    carDescription:
      "(호텔 문의 후 작성)",

    accountTitle:
      "마음 전하실 곳",

    accountMessage:
      "축하해 주시는 따뜻한 마음에 깊이 감사드립니다.<br>귀한 마음을 감사히 간직하겠습니다.",

    invitationMessage:
      "스쳐 지나갔던 인연이 우연으로 다시 맞닿아<br>운명처럼 하나가 되었습니다.<br>이제 서로에게 영원을 약속하고자 합니다.<br>저희 두 사람의 첫걸음을<br>소중한 분들과 함께하고 싶습니다.",

    familyIntroduction:
      "김광일 · 유금수 의 아들  <strong>건우</strong><br>고석헌 · 현시은 의 딸  <strong>가빈</strong>",
    receptionNoticeTitle:
      "<strong>안내드립니다.</strong>",

    receptionNoticeText:
      "연회장은 예식장 한 층 위인 4M층에 위치해 있으며,<br>에스컬레이터를 이용해 이동하실 수 있습니다.",
  },


  ja: {

    title:
      "キム・ゴヌ ♥ コ・ガビン 結婚式のご案内",

    groom:
      "新郎",

    bride:
      "新婦",

    groomName:
      "キム・ゴヌ",

    brideName:
      "コ・ガビン",

    weddingDate:
      "2026年12月19日 土曜日",

    weddingTime:
      "午前11時40分",

    venue:
      "THE LINK SEOUL",

    hall:
      "4階 PLAZA HALL",

    viewAll:
      "すべて見る",

    locationTitle:
      "アクセス",

    locationName:
      "The Link Seoul, a Tribute Portfolio Hotel<br>4階 PLAZA HALL",

    address:
      "ソウル特別市 九老区 京仁路610",

    navigationTitle:
      "ナビゲーション",

    navigationDescription:
      "アプリを開いて経路案内を開始できます。",

    subwayTitle:
      "地下鉄をご利用の場合",

    subwayDescription:
      "1・2号線 新道林駅 1番出口から徒歩10分<br>1号線 九老駅 3番出口から徒歩5分",

    shuttleTitle:
      "シャトルバス",

    shuttleDescription:
      "新道林駅 1番出口より随時運行",

    carTitle:
      "お車をご利用の場合",

    carDescription:
      "駐車場の詳細は後ほどご案内いたします。",

    invitationMessage:
      "一度すれ違ったご縁が、偶然に再び重なり、<br>運命のようにひとつになりました。<br>これからお互いに永遠を誓い、<br>ふたりの新たな一歩を<br>大切な皆さまと共に迎えたいと思います。",

    familyIntroduction:
      "キム・グァンイル · ユ・グムス の息子  <strong>ゴヌ</strong><br>コ・ソクホン · ヒョン・シウン の娘   <strong>ガビン</strong>",

    receptionNoticeTitle:
      "<strong>ご案内</strong>",

    receptionNoticeText:
      "披露宴会場は挙式会場の一つ上の4M階にございます。<br>エスカレーターをご利用いただけます。",
  }

};


let currentLanguage = "ko";


function setLanguage(language) {

  currentLanguage = language;

  document.documentElement.lang = language;

  document.title =
    translations[language].title;


  document
    .querySelectorAll("[data-i18n]")
    .forEach((element) => {

      const key =
        element.dataset.i18n;

      const value =
        translations[language][key];

      if (value !== undefined) {
        element.innerHTML = value;
      }

    });


  document
    .getElementById("korButton")
    .classList.toggle(
      "active",
      language === "ko"
    );


  document
    .getElementById("jpnButton")
    .classList.toggle(
      "active",
      language === "ja"
    );


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

    accountSection.style.display =
      "none";

    flowerSection.style.display =
      "none";


    naverMap.classList.add(
      "hidden"
    );

    googleMap.classList.remove(
      "hidden"
    );


    navigationSection.classList.add(
      "hidden"
    );

    transportationSection.classList.add(
      "hidden"
    );

  } else {

    accountSection.style.display =
      "";

    flowerSection.style.display =
      "";


    naverMap.classList.remove(
      "hidden"
    );

    googleMap.classList.add(
      "hidden"
    );


    navigationSection.classList.remove(
      "hidden"
    );

    transportationSection.classList.remove(
      "hidden"
    );

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


document
  .getElementById("korButton")
  .addEventListener(
    "click",
    () => setLanguage("ko")
  );


document
  .getElementById("jpnButton")
  .addEventListener(
    "click",
    () => setLanguage("ja")
  );


/* ====================================
   GALLERY
==================================== */

const galleryImages = [

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
   GALLERY PREVIEW
==================================== */

function renderPreview() {

  galleryPreview.innerHTML = "";


  for (let i = 0; i < 5; i++) {

    const imageIndex =
      (
        currentGalleryIndex +
        i
      ) %
      galleryImages.length;


    const image =
      document.createElement("img");


    image.src =
      galleryImages[imageIndex];


    image.alt =
      `Wedding gallery ${imageIndex + 1}`;


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
   MAIN GALLERY UPDATE
==================================== */

function updateGallery() {

  galleryMainImage.style.opacity = 0;


  setTimeout(() => {

    galleryMainImage.src =
      galleryImages[
        currentGalleryIndex
      ];

    galleryMainImage.style.opacity =
      1;

  }, 150);


  renderPreview();

}


/* ====================================
   AUTO PLAY
==================================== */

function startGalleryAutoPlay() {

  galleryInterval =
    setInterval(() => {

      currentGalleryIndex =
        (
          currentGalleryIndex + 1
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

    galleryInterval = null;

  }

}


function restartGalleryAutoPlay() {

  stopGalleryAutoPlay();

  startGalleryAutoPlay();

}


startGalleryAutoPlay();

renderPreview();


/* ====================================
   MAIN GALLERY LEFT / RIGHT BUTTON
==================================== */

document
  .getElementById(
    "galleryPrevButton"
  )
  .addEventListener(
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


document
  .getElementById(
    "galleryNextButton"
  )
  .addEventListener(
    "click",
    () => {

      currentGalleryIndex =
        (
          currentGalleryIndex + 1
        ) %
        galleryImages.length;

      updateGallery();

      restartGalleryAutoPlay();

    }
  );


/* ====================================
   FULL SCREEN GALLERY
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

  stopGalleryAutoPlay();


  galleryModal.classList.add(
    "open"
  );


  document.body.style.overflow =
    "hidden";


  updateFullscreenGallery();

}


function closeGallery() {

  galleryModal.classList.remove(
    "open"
  );


  document.body.style.overflow =
    "";


  startGalleryAutoPlay();

}


function updateFullscreenGallery() {

  fullscreenImage.src =
    galleryImages[
      currentGalleryIndex
    ];


  renderFullscreenThumbnails();

}


function renderFullscreenThumbnails() {

  fullscreenThumbnails.innerHTML =
    "";


  galleryImages.forEach(
    (imageSrc, index) => {

      const thumbnail =
        document.createElement("img");


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
      currentGalleryIndex + 1
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


document
  .getElementById(
    "openGalleryButton"
  )
  .addEventListener(
    "click",
    openGallery
  );


document
  .getElementById(
    "closeGalleryButton"
  )
  .addEventListener(
    "click",
    closeGallery
  );


document
  .getElementById(
    "nextImageButton"
  )
  .addEventListener(
    "click",
    showNextImage
  );


document
  .getElementById(
    "previousImageButton"
  )
  .addEventListener(
    "click",
    showPreviousImage
  );


/* ====================================
   FULL SCREEN MOBILE SWIPE
==================================== */

let touchStartX = 0;

let touchEndX = 0;


fullscreenImage.addEventListener(
  "touchstart",
  (event) => {

    touchStartX =
      event.changedTouches[0]
        .screenX;

  }
);


fullscreenImage.addEventListener(
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

  }
);


/* ====================================
   ACCOUNT TAB
==================================== */

const accountTabs =
  document.querySelectorAll(
    ".account-tab"
  );


accountTabs.forEach(
  (button) => {

    button.addEventListener(
      "click",
      () => {

        accountTabs.forEach(
          tab =>
            tab.classList.remove(
              "active"
            )
        );


        button.classList.add(
          "active"
        );


        const side =
          button.dataset.side;


        document
          .getElementById(
            "groomAccounts"
          )
          .classList.toggle(
            "hidden",
            side !== "groom"
          );


        document
          .getElementById(
            "brideAccounts"
          )
          .classList.toggle(
            "hidden",
            side !== "bride"
          );

      }
    );

  }
);


/* ====================================
   COPY ACCOUNT
==================================== */

document
  .querySelectorAll(
    ".copy-button"
  )
  .forEach(
    button => {

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
              "계좌번호 복사 실패:",
              error
            );

          }

        }
      );

    }
  );


/* ====================================
   NAVIGATION
==================================== */


/* NAVER MAP */

document
  .getElementById(
    "naverMapButton"
  )
  .addEventListener(
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


/* TMAP */

document
  .getElementById(
    "tmapButton"
  )
  .addEventListener(
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


/* KAKAO MAP / KAKAO NAVI */

document
  .getElementById(
    "kakaoNaviButton"
  )
  .addEventListener(
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