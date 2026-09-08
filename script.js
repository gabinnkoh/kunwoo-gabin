/* ====================================
   FIXED MOBILE HERO HEIGHT
==================================== */

function setFixedHeroHeight() {

  const hero =
    document.querySelector(
      ".v4-hero"
    );

  if (!hero) {
    return;
  }

  const initialHeight =
    window.innerHeight;

  document.documentElement.style.setProperty(
    "--initial-hero-height",
    `${initialHeight}px`
  );
}

setFixedHeroHeight();

/* ====================================
   KAKAO SDK
==================================== */

if (
  typeof Kakao !== "undefined" &&
  !Kakao.isInitialized()
) {
  Kakao.init(
    "877ccd7065d1d776c016af2014eda82e"
  );
}

/* ====================================
   TRANSLATION
==================================== */

const translations = {

  ko: {

    title:
      "김건우 ♥ 고가빈 결혼식에 초대합니다",

    weddingSummary:
      "2026년 12월 19일 토요일 11시 40분<br>" +
      "더 링크 서울, 플라자홀 (4F)",

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
      "고석헌 · 현시은 의 딸&nbsp;&nbsp;<strong>가빈</strong>",

    locationTitle:
      "LOCATION",

    locationName:
      "더 링크 서울 트리뷰트 포트폴리오 호텔<br>" +
      "4층 플라자홀",

    address:
      "서울특별시 구로구 경인로 610 (신도림동)<br>" +
      "(tel) 02-852-5000",

    navigationTitle:
      "네비게이션",

    navigationDescription:
      "앱을 열어 길 안내를 시작해보세요.",

    subwayTitle:
      "지하철 이용 시",

    subwayDescription:
      "1,2호선 신도림역 1번 출구에서 도보 10분<br>" +
      "1호선 구로역 3번 출구에서 도보 5분",

    shuttleTitle:
      "셔틀버스 이용 시",

    shuttleDescription:
      "신도림역 1번 출구에서 탑승(수시 운행)",

    busTitle:
      "버스 이용 시",

    busDescription:
      "신도림동.구로역 정류장에서 도보 1분<br>" +
      "신도림중학교 정류장에서 도보 3분",

    carTitle:
      "자가용 이용 시",

    carDescription:
      "더 링크 호텔 주차장 이용 1시간 30분 무료<br>(이후 15분당 1,000원)",

    receptionNoticeTitle:
      "<strong>안내드립니다.</strong>",

    receptionNoticeText:
      "연회장은 예식장 한 층 위인 4M층에 위치해 있으며,<br>" +
      "에스컬레이터를 이용해 이동하실 수 있습니다.",

    accountTitle:
      "마음 전하실 곳",

    accountMessage:
      "축하해 주시는 따뜻한 마음에 깊이 감사드립니다.<br>" +
      "귀한 마음을 감사히 간직하겠습니다.",

    galleryMore:
      "더보기",

  },


  ja: {

    title:
      "キム・ゴヌ ♥ コ・ガビン 結婚式のご案内",

    weddingSummary:
      "2026年12月19日 土曜日 11時40分<br>" +
      "THE LINK SEOUL, PLAZA HALL (4F)",

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
      "ソウル特別市 九老区 京仁路610<br>" +
      "Tel. 02-852-5000",

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
      "シャトルバスをご利用の場合",

    shuttleDescription:
      "新道林駅 1番出口より随時運行",

    carTitle:
      "タクシーをご利用の場合",

    carDescription:
      "The Link Hotel Seoul<br>" +
      "ソウル特別市 九老区 京仁路 610<br>" +
      "610 Gyeongin-ro, Guro-gu, Seoul",

    receptionNoticeTitle:
      "<strong>ご案内</strong>",

    receptionNoticeText:
      "披露宴会場は挙式会場の一つ上の4M階にございます。<br>" +
      "エスカレーターをご利用いただけます。",

    accountTitle:
      "",

    accountMessage:
      "",

    galleryMore:
      "もっと見る",

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

function setLanguage(
  language
) {

  currentLanguage =
    language;

  document.documentElement.lang =
    language;

  document.title =
    translations[language].title;


  document
    .querySelectorAll(
      "[data-i18n]"
    )
    .forEach(
      (element) => {

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

      }
    );


  updateLanguageButton();


  const accountSection =
    document.getElementById(
      "accountSection"
    );

  const flowerSection =
    document.getElementById(
      "flowerSection"
    );

  const kakaoMapWrapper =
    document.getElementById(
      "kakaoMapWrapper"
    );

  const googleMap =
    document.getElementById(
      "googleMap"
    );

  const navigationSection =
    document.getElementById(
      "navigationSection"
    );

  const busInfoDiv =
    document.getElementById(
      "busInfoDiv"
    );

  const transportNumberCar =
    document.getElementById(
      "transportNumberCar"
    );


  if (
    language === "ja"
  ) {

    if (accountSection) {
      accountSection.style.display =
        "none";
    }

    if (flowerSection) {
      flowerSection.style.display =
        "none";
    }

    if (kakaoMapWrapper) {
      kakaoMapWrapper.classList.add(
        "hidden"
      );
    }

    if (googleMap) {
      googleMap.classList.remove(
        "hidden"
      );
    }

    if (navigationSection) {
      navigationSection.style.display =
        "none";
    }

    if (busInfoDiv) {
      busInfoDiv.style.display =
        "none";
    }

    if (transportNumberCar) {
      transportNumberCar.innerHTML =
        "03";
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

    if (kakaoMapWrapper) {
      kakaoMapWrapper.classList.remove(
        "hidden"
      );
    }

    if (googleMap) {
      googleMap.classList.add(
        "hidden"
      );
    }

    if (navigationSection) {
      navigationSection.style.display =
        "";
    }

    if (busInfoDiv) {
      busInfoDiv.style.display =
        "";
    }

    if (transportNumberCar) {
      transportNumberCar.innerHTML =
        "04";
    }

  }


  /* URL에 현재 언어 저장 */

  const currentUrl =
    new URL(
      window.location.href
    );

  if (
    language === "ja"
  ) {

    currentUrl.searchParams.set(
      "lang",
      "ja"
    );

  } else {

    currentUrl.searchParams.delete(
      "lang"
    );

  }

  window.history.replaceState(
    {},
    "",
    currentUrl
  );


}



/* ====================================
   INITIAL LANGUAGE
==================================== */

const pageParams =
  new URLSearchParams(
    window.location.search
  );


const urlLanguage =
  pageParams.get(
    "lang"
  );


const browserLanguage =
  navigator.language ||
  navigator.userLanguage;


if (
  urlLanguage === "ja"
) {

  /*
    공유받은 일본어 링크
    ?lang=ja
  */
  setLanguage(
    "ja"
  );

} else if (
  browserLanguage &&
  browserLanguage
    .toLowerCase()
    .startsWith("ja")
) {

  /*
    URL 언어 정보가 없고
    일본어 브라우저인 경우
  */
  setLanguage(
    "ja"
  );

} else {

  setLanguage(
    "ko"
  );

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

      updateShareButton(
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
   KAKAO NAVI
==================================== */

const kakaoNaviButton =
  document.getElementById(
    "kakaoNaviButton"
  );

if (kakaoNaviButton) {
  kakaoNaviButton.addEventListener(
    "click",
    () => {
      Kakao.Navi.start({
        name:
          "더 링크 서울, 트리뷰트 포트폴리오 호텔",

        x: 126.88387163888,
        y: 37.505603818492,

        coordType: "wgs84"
      });
    }
  );
}

/* ====================================
   NAVER NAVI
==================================== */

const naverNaviButton =
  document.getElementById(
    "naverNaviButton"
  );


if (naverNaviButton) {

  naverNaviButton.addEventListener(
    "click",
    () => {

      const naverNaviUrl =
        "nmap://navigation" +
        "?dlat=37.505603818492" +
        "&dlng=126.88387163888" +
        "&dname=" +
        encodeURIComponent(
          "더 링크 서울, 트리뷰트 포트폴리오 호텔"
        ) +
        "&appname=" +
        encodeURIComponent(
          "https://gabinnkoh.github.io/kunwoo-gabin/"
        );


      window.location.href =
        naverNaviUrl;

    }
  );

}

/* ====================================
   TMAP NAVI
==================================== */

const tmapNaviButton =
  document.getElementById(
    "tmapNaviButton"
  );


if (tmapNaviButton) {

  tmapNaviButton.addEventListener(
    "click",
    () => {

      const destinationName =
        encodeURIComponent(
          "더 링크 서울, 트리뷰트 포트폴리오 호텔"
        );


      const tmapUrl =
        "tmap://route" +
        "?goalname=" +
        destinationName +
        "&goalx=126.88387163888" +
        "&goaly=37.505603818492";


      window.location.href =
        tmapUrl;

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
              ? `${side}`
              : `${side}`;

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

        /*
          복사 버튼이 있는 계좌 행 찾기
        */
        const accountRow =
          button.closest(
            ".account-row"
          );

        if (!accountRow) {
          return;
        }


        /*
          화면에 표시된 계좌번호 찾기
        */
        const accountNumberElement =
          accountRow.querySelector(
            ".account-number"
          );

        if (!accountNumberElement) {
          return;
        }


        /*
          화면에 표시된 내용에서
          숫자만 추출
        */
        const accountNumber =
          accountNumberElement
            .textContent
            .replace(/\D/g, "");


        if (!accountNumber) {
          return;
        }


        try {

          await navigator.clipboard
            .writeText(
              accountNumber
            );


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

const galleryImages = [

  "images/gallery01.jpg?v=20260905-15",
  "images/gallery02.jpg?v=20260905-15",
  "images/gallery03.jpg?v=20260905-15",
  "images/gallery04.jpg?v=20260905-15",
  "images/gallery05.jpg?v=20260905-15",
  "images/gallery06.jpg?v=20260905-15",
  "images/gallery07.jpg?v=20260905-15",
  "images/gallery08.jpg?v=20260905-15",
  "images/gallery09.jpg?v=20260905-15",
  "images/gallery10.jpg?v=20260905-15",
  "images/gallery11.jpg?v=20260905-15",
  "images/gallery12.jpg?v=20260905-15"

];

const initialGalleryCount = 9;

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


const galleryMoreButton =
  document.getElementById(
    "galleryMoreButton"
  );

/* ====================================
   GALLERY GRID
==================================== */

function createGalleryImage(
  imageSrc,
  index
) {

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


  image.addEventListener(
    "click",
    () => {

      currentGalleryIndex =
        index;

      openGallery();

    }
  );


  return image;
}


function renderGalleryGrid() {

  if (!galleryGrid) {
    return;
  }


  galleryGrid.innerHTML =
    "";


  /*
    처음에는 1 ~ 9번만 표시
  */
  galleryImages
    .slice(
      0,
      initialGalleryCount
    )
    .forEach(
      (
        imageSrc,
        index
      ) => {

        galleryGrid.appendChild(
          createGalleryImage(
            imageSrc,
            index
          )
        );

      }
    );

}
/* ====================================
   GALLERY MORE
==================================== */

function showMoreGalleryImages() {

  if (!galleryGrid) {
    return;
  }


  /*
    10 ~ 12번 추가
  */
  galleryImages
    .slice(
      initialGalleryCount
    )
    .forEach(
      (
        imageSrc,
        extraIndex
      ) => {

        const realIndex =
          initialGalleryCount +
          extraIndex;

        galleryGrid.appendChild(
          createGalleryImage(
            imageSrc,
            realIndex
          )
        );

      }
    );



  /*
    한 번 펼치면 더보기 버튼 제거
  */
  if (galleryMoreButton) {

    galleryMoreButton.style.display =
      "none";

  }

}

if (galleryMoreButton) {

  galleryMoreButton.addEventListener(
    "click",
    showMoreGalleryImages
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
   WEDDING INFO - FIRST SCROLL REVEAL
==================================== */
function initializeWeddingInfoReveal() {

  const weddingInfo =
    document.querySelector(
      ".wedding-info-opening"
    );


  if (!weddingInfo) {
    return;
  }


  let hasStarted = false;


  function revealWeddingInfo() {

    if (hasStarted) {
      return;
    }


    const rect =
      weddingInfo.getBoundingClientRect();


    const isVisible =
      rect.top < window.innerHeight &&
      rect.bottom > 0;


    if (!isVisible) {
      return;
    }


    hasStarted = true;


    weddingInfo.classList.add(
      "is-visible"
    );


    window.removeEventListener(
      "scroll",
      revealWeddingInfo
    );

  }


  window.addEventListener(
    "scroll",
    revealWeddingInfo,
    {
      passive: true
    }
  );


  /*
    페이지를 처음 열었을 때
    이미 화면 안에 들어와 있으면
    스크롤을 기다리지 않고 실행
  */
  revealWeddingInfo();

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
    지원하지 않는 브라우저에서는
    애니메이션을 사용하지 않는다.

    CSS 기본값이 '표시'이기 때문에
    본문은 그대로 보인다.
  */
  if (
    !(
      "IntersectionObserver"
      in window
    )
  ) {
    return;
  }


  try {

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
                다음 렌더링 프레임에서
                is-visible을 붙여
                transition이 확실히 실행되게 함
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
                애니메이션은
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


    /*
      중요:

      IntersectionObserver 생성에
      성공한 뒤에만 reveal-ready를 붙인다.

      따라서 JS 오류가 발생하면
      CSS가 콘텐츠를 숨기지 않는다.
    */
    document.documentElement
      .classList.add(
        "reveal-ready"
      );


    revealElements.forEach(
      (element) => {

        observer.observe(
          element
        );

      }
    );


  } catch (error) {

    /*
      혹시 초기화 도중 문제가 생기면
      reveal-ready를 제거해서
      모든 콘텐츠를 다시 표시한다.
    */
    document.documentElement
      .classList.remove(
        "reveal-ready"
      );


    console.error(
      "Scroll reveal initialization failed:",
      error
    );

  }

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

function initializeCalendarSparkle() {

  const weddingDay =
    document.getElementById(
      "weddingDay19"
    );

  if (!weddingDay) {
    return;
  }


  /*
    IntersectionObserver가 없는 경우
    애니메이션 없이 정상 표시
  */
  if (
    !(
      "IntersectionObserver"
      in window
    )
  ) {
    return;
  }


  let hasPlayed = false;


  const observer =
    new IntersectionObserver(
      (entries) => {

        entries.forEach(
          (entry) => {

            if (
              !entry.isIntersecting ||
              hasPlayed
            ) {
              return;
            }


            hasPlayed = true;

            weddingDay.classList.add(
              "calendar-sparkle-active"
            );

            observer.disconnect();

          }
        );

      },
      {
        /*
          달력이 어느 정도
          화면 안으로 올라온 시점
        */
        threshold: 0.3
      }
    );


  observer.observe(
    weddingDay
  );

}

/* ====================================
   ENDING PULL EFFECT
==================================== */

const endingSection =
  document.querySelector(
    ".v4-ending"
  );


let bottomTouchStartY =
  0;

let isBottomPulling =
  false;


/*
  페이지 최하단인지 확인
*/

function isPageBottom() {

  return (
    window.innerHeight +
    window.scrollY >=
    document.documentElement
      .scrollHeight -
    4
  );

}


if (endingSection) {

  /*
    최하단에서 터치 시작
  */

  window.addEventListener(
    "touchstart",
    (event) => {

      if (
        event.touches.length !== 1 ||
        !isPageBottom()
      ) {
        return;
      }


      bottomTouchStartY =
        event.touches[0]
          .clientY;


      isBottomPulling =
        true;


      endingSection.classList.add(
        "bottom-pulling"
      );

    },
    {
      passive: true
    }
  );


  /*
    손가락을 위로 밀면
    엔딩 사진도 위로 따라 올라감
  */

  window.addEventListener(
    "touchmove",
    (event) => {

      if (
        !isBottomPulling ||
        event.touches.length !== 1
      ) {
        return;
      }


      const currentY =
        event.touches[0]
          .clientY;


      const movement =
        bottomTouchStartY -
        currentY;


      /*
        위로 움직인 경우에만 적용
      */

      if (
        movement <= 0
      ) {

        endingSection.style.setProperty(
          "--bottom-pull",
          "0px"
        );

        return;
      }


      /*
        손가락 이동량보다 적게 움직여
        약간의 저항감 부여

        최대 28px
      */

      const pullAmount =
        Math.min(
          movement * .22,
          158
        );


      endingSection.style.setProperty(
        "--bottom-pull",
        `${pullAmount}px`
      );

    },
    {
      passive: true
    }
  );


  /*
    손을 놓으면 원위치
  */

  function releaseEndingPull() {

    if (!isBottomPulling) {
      return;
    }


    isBottomPulling =
      false;


    endingSection.classList.remove(
      "bottom-pulling"
    );


    endingSection.style.setProperty(
      "--bottom-pull",
      "0px"
    );

  }


  window.addEventListener(
    "touchend",
    releaseEndingPull,
    {
      passive: true
    }
  );


  window.addEventListener(
    "touchcancel",
    releaseEndingPull,
    {
      passive: true
    }
  );

}


/* ====================================
   START
==================================== */

renderGalleryGrid();

initializeWeddingInfoReveal();

initializeGalleryTitleAnimation();

initializeCalendarSparkle();


function initializeGalleryTitleAnimation() {

  const galleryHeading =
    document.querySelector(
      ".v4-gallery-heading"
    );

  if (!galleryHeading) {
    return;
  }


  const observer =
    new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) {
            return;
          }

          galleryHeading.classList.add(
            "is-title-visible"
          );

          observer.unobserve(
            galleryHeading
          );

        });

      },
      {
        threshold: 0.3
      }
    );


  observer.observe(
    galleryHeading
  );

}

/* ====================================
   TOP OVERSCROLL PREVENTION
==================================== */

let topTouchStartY = 0;

window.addEventListener(
  "touchstart",
  (event) => {

    if (event.touches.length !== 1) {
      return;
    }

    topTouchStartY =
      event.touches[0].clientY;

  },
  {
    passive: true
  }
);


window.addEventListener(
  "touchmove",
  (event) => {

    if (
      event.touches.length !== 1 ||
      window.scrollY > 0
    ) {
      return;
    }

    const currentY =
      event.touches[0].clientY;

    /*
      페이지 최상단에서
      손가락을 아래쪽으로 끌 때만 차단
    */
    if (currentY > topTouchStartY) {
      event.preventDefault();
    }

  },
  {
    passive: false
  }
);

/* ====================================
   SHARE
==================================== */

const shareButton =
  document.getElementById(
    "shareButton"
  );


const invitationBaseUrl =
  "https://gabinnkoh.github.io/kunwoo-gabin/index.html";


function updateShareButton(
  language
) {

  if (!shareButton) {
    return;
  }


  /* =========================
     JAPANESE
  ========================= */

  if (language === "ja") {

    shareButton.textContent =
      "招待状のリンクをコピー";


    shareButton.onclick =
      async () => {

        const invitationUrl =
          new URL(
            invitationBaseUrl
          );


        /*
          일본어 정보 포함
        */
        invitationUrl.searchParams.set(
          "lang",
          "ja"
        );


        try {

          await navigator.clipboard
            .writeText(
              invitationUrl.href
            );


          shareButton.textContent =
            "コピーしました";


          setTimeout(
            () => {

              shareButton.textContent =
                "招待状のリンクをコピー";

            },
            1500
          );

        } catch (error) {

          console.error(
            "링크 복사 실패",
            error
          );

        }

      };

  }


  /* =========================
     KOREAN
  ========================= */

  else {

    shareButton.textContent =
      "카카오톡 공유하기";


    shareButton.onclick =
      () => {

        if (
          typeof Kakao ===
          "undefined"
        ) {

          console.error(
            "Kakao SDK가 로드되지 않았습니다."
          );

          return;
        }


        if (
          !Kakao.isInitialized()
        ) {

          Kakao.init(
            "877ccd7065d1d776c016af2014eda82e"
          );

        }


        Kakao.Share.sendDefault({

          objectType:
            "feed",


          content: {

            title:
              "건우 & 가빈 결혼합니다",

            description:
              "2026년 12월 19일 토요일 오전 11시 40분\n더링크 플라자홀",

            imageUrl:
              "https://gabinnkoh.github.io/kunwoo-gabin/images/main.jpg",

            link: {

              mobileWebUrl:
                invitationBaseUrl,

              webUrl:
                invitationBaseUrl

            }

          },


          buttons: [

            {

              title:
                "청첩장 보기",

              link: {

                mobileWebUrl:
                  invitationBaseUrl,

                webUrl:
                  invitationBaseUrl

              }

            }

          ]

        });

      };

  }

}

updateShareButton(
  currentLanguage
);
