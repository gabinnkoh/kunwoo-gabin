/* ====================================
   FIXED MOBILE HERO HEIGHT
==================================== */

function setFixedHeroHeight() {
  const hero = document.querySelector(".v4-hero");
  if (!hero) return;

  const initialHeight = window.innerHeight;
  document.documentElement.style.setProperty(
    "--initial-hero-height",
    `${initialHeight}px`
  );
}

setFixedHeroHeight();

/* ====================================
   KAKAO SDK
==================================== */

if (typeof Kakao !== "undefined" && !Kakao.isInitialized()) {
  Kakao.init("877ccd7065d1d776c016af2014eda82e");
}

/* ====================================
   TRANSLATION
==================================== */

const translations = {
  ko: {
    title: "김건우 ♥ 고가빈 결혼식에 초대합니다",
    weddingSummary:
      "2026년 12월 19일 토요일 11시 40분<br>더 링크 서울, 플라자홀 (4F)",
    calendarDate: "2026년 12월 19일 토요일 오전 11시 40분",
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
    locationTitle: "LOCATION",
    locationName:
      "더 링크 서울 트리뷰트 포트폴리오 호텔<br>4층 플라자홀",
    address:
      "서울특별시 구로구 경인로 610 (신도림동)<br>Tel. 02-852-5000",
    navigationTitle: "네비게이션",
    navigationDescription: "앱을 열어 길 안내를 시작하세요.",
    subwayTitle: "지하철 이용 시",
    subwayDescription:
      "1,2호선 신도림역 1번 출구에서 도보 10분<br>1호선 구로역 3번 출구에서 도보 5분",
    shuttleTitle: "셔틀버스 이용 시",
    shuttleDescription: "신도림역 1번 출구에서 탑승(수시 운행)",
    busTitle: "버스 이용 시",
    busDescription:
      "신도림동.구로역 정류장에서 도보 1분<br>신도림중학교 정류장에서 도보 3분",
    carTitle: "자가용 이용 시",
    carDescription:
      "더 링크 호텔 주차장 이용 <br>(1시간 30분 무료, 이후 15분당 1,000원)",
    receptionNoticeTitle: "<strong>안내드립니다.</strong>",
    receptionNoticeText:
      "연회장은 예식장 한 층 위인 4M층에 위치해 있으며,<br>에스컬레이터를 이용해 이동하실 수 있습니다.",
    accountTitle: "마음 전하실 곳",
    accountMessage:
      "축하해 주시는 따뜻한 마음에 깊이 감사드립니다.<br>귀한 마음을 감사히 간직하겠습니다.",
    galleryMore: "더보기",
  },
  ja: {
    title: "ゴヌ ♥ ガビン(ミカ) 結婚式のご案内",
    weddingSummary:
      "2026年12月19日 土曜日 11時40分<br>THE LINK SEOUL, PLAZA HALL (4F)",
    calendarDate: "2026年12月19日 土曜日 午前11時40分",
    invitationMessage:
      "笑った顔が似ていると、よく言われてきました。<br><br>" +
      "一緒に笑う姿も、お互いを想う気持ちも、<br>" +
      "いつの間にか少しずつ似てきたようです。<br><br>" +
      "これからは同じ未来を見つめながら、<br>" +
      "いつまでもお互いに似ていけたらと思います。<br>" +
      "私たちの新しい門出を、ぜひ一緒に見守ってください。",
    familyIntroduction:
      "キム・グァンイル · ユ・グムス の息子&nbsp;&nbsp;<strong>ゴヌ</strong><br>" +
      "コ・ソクホン · ヒョン・シウン の娘&nbsp;&nbsp;<strong>ガビン(ミカ)</strong>",
    locationTitle: "LOCATION",
    locationName:
      "The Link Seoul, a Tribute Portfolio Hotel<br>4階 PLAZA HALL",
    address:
      "ソウル特別市 九老区 京仁路610<br>Tel. 02-852-5000",
    navigationTitle: "ナビゲーション",
    navigationDescription: "アプリを開いて経路案内を開始できます。",
    subwayTitle: "地下鉄をご利用の場合",
    subwayDescription:
      "1・2号線 新道林駅 1番出口から徒歩10分<br>1号線 九老駅 3番出口から徒歩5分",
    shuttleTitle: "シャトルバスをご利用の場合",
    shuttleDescription: "新道林駅 1番出口より随時運行",
    carTitle: "タクシーをご利用の場合",
    carDescription:
      "The Link Hotel Seoul<br>ソウル特別市 九老区 京仁路 610<br>610 Gyeongin-ro, Guro-gu, Seoul",
    receptionNoticeTitle: "<strong>ご案内</strong>",
    receptionNoticeText:
      "披露宴会場は挙式会場の一つ上の4M階にございます。<br>エスカレーターをご利用いただけます。",
    accountTitle: "",
    accountMessage: "",
    galleryMore: "もっと見る",
  }
};

/* ====================================
   GLOBAL CONFIG & STATE
==================================== */

let currentLanguage = "ko";
const invitationBaseUrl = "https://gabinnkoh.github.io/kunwoo-gabin/index.html";

/* ====================================
   FLOATING SHARE BUTTON (ICONS & ACTIONS)
==================================== */

function updateShareButton(language) {
  const shareButton = document.getElementById("shareButton");
  if (!shareButton) return;

  // 한국어: 표준 공유 아이콘 (동그라미 3개 + 선 연결)
  const shareIconSvg = `
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="18" cy="5" r="3"></circle>
      <circle cx="6" cy="12" r="3"></circle>
      <circle cx="18" cy="19" r="3"></circle>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
    </svg>
  `;

  // 일본어: 직관적인 문서 복사 아이콘
  const copyIconSvg = `
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
  `;

  // 복사 완료 체크 아이콘
  const checkIconSvg = `
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  `;

  if (language === "ja") {
    shareButton.innerHTML = copyIconSvg;
    shareButton.setAttribute("aria-label", "招待状のリンクをコピー");

    shareButton.onclick = async () => {
      const invitationUrl = new URL("https://gabinnkoh.github.io/kunwoo-gabin/ja.html");
      try {
        await navigator.clipboard.writeText(invitationUrl.href);
        shareButton.innerHTML = checkIconSvg;
        setTimeout(() => {
          shareButton.innerHTML = copyIconSvg;
        }, 1500);
      } catch (error) {
        console.error("링크 복사 실패", error);
      }
    };
  } else {
    shareButton.innerHTML = shareIconSvg;
    shareButton.setAttribute("aria-label", "카카오톡 공유하기");

    shareButton.onclick = () => {
      if (typeof Kakao === "undefined") {
        console.error("Kakao SDK가 로드되지 않았습니다.");
        return;
      }
      if (!Kakao.isInitialized()) {
        Kakao.init("877ccd7065d1d776c016af2014eda82e");
      }
      Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: "건우 & 가빈 결혼합니다",
          description: "2026년 12월 19일 토요일 오전 11시 40분\n더링크 플라자홀",
          imageUrl: "https://gabinnkoh.github.io/kunwoo-gabin/images/main.jpg",
          link: {
            mobileWebUrl: invitationBaseUrl,
            webUrl: invitationBaseUrl
          }
        },
        buttons: [
          {
            title: "청첩장 보기",
            link: {
              mobileWebUrl: invitationBaseUrl,
              webUrl: invitationBaseUrl
            }
          }
        ]
      });
    };
  }
}

/* ====================================
   LANGUAGE & SETTINGS
==================================== */

function updateLanguageButton() {
  const languageToggleButton = document.getElementById("languageToggleButton");
  if (!languageToggleButton) return;
  languageToggleButton.textContent = currentLanguage === "ko" ? "KOR" : "JPN";
}

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  if (translations[language]?.title) {
    document.title = translations[language].title;
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translatedText = translations[language]?.[key];
    if (translatedText !== undefined) {
      element.innerHTML = translatedText;
    }
  });

  updateLanguageButton();

  const accountSection = document.getElementById("accountSection");
  const flowerSection = document.getElementById("flowerSection");
  const kakaoMapWrapper = document.getElementById("kakaoMapWrapper");
  const googleMap = document.getElementById("googleMap");
  const navigationSection = document.getElementById("navigationSection");
  const busInfoDiv = document.getElementById("busInfoDiv");
  const transportNumberCar = document.getElementById("transportNumberCar");

  if (language === "ja") {
    if (accountSection) accountSection.style.display = "none";
    if (flowerSection) flowerSection.style.display = "none";
    if (kakaoMapWrapper) kakaoMapWrapper.classList.add("hidden");
    if (googleMap) googleMap.classList.remove("hidden");
    if (navigationSection) navigationSection.style.display = "none";
    if (busInfoDiv) busInfoDiv.style.display = "none";
    if (transportNumberCar) transportNumberCar.innerHTML = "03";
  } else {
    if (accountSection) accountSection.style.display = "";
    if (flowerSection) flowerSection.style.display = "";
    if (kakaoMapWrapper) kakaoMapWrapper.classList.remove("hidden");
    if (googleMap) googleMap.classList.add("hidden");
    if (navigationSection) navigationSection.style.display = "";
    if (busInfoDiv) busInfoDiv.style.display = "";
    if (transportNumberCar) transportNumberCar.innerHTML = "04";
  }

  /* URL에 현재 언어 저장 */
  try {
    const currentUrl = new URL(window.location.href);
    if (language === "ja") {
      currentUrl.searchParams.set("lang", "ja");
    } else {
      currentUrl.searchParams.delete("lang");
    }
    window.history.replaceState({}, "", currentUrl);
  } catch (e) {
    console.error(e);
  }

  updateShareButton(language);
}

/* ====================================
   SCROLL TRIGGER FOR FLOATING BUTTONS
==================================== */

function initializeFloatingButtonsTrigger() {
  const floatingActionGroup = document.getElementById("floatingActionGroup");
  const triggerElement = document.querySelector(".wedding-info-opening");
  if (!floatingActionGroup || !triggerElement) return;

  function checkScrollPosition() {
    const rect = triggerElement.getBoundingClientRect();
    const halfScreen = window.innerHeight / 2;

    // 예식 일자/장소 문구가 화면 1/2 지점에 도달하면 버튼 노출, 위로 올라가면 숨김
    if (rect.top <= halfScreen) {
      floatingActionGroup.classList.add("is-active");
    } else {
      floatingActionGroup.classList.remove("is-active");
    }
  }

  window.addEventListener("scroll", checkScrollPosition, { passive: true });
  checkScrollPosition();
}

/* ====================================
   NAVIGATION
==================================== */

function initializeNavigation() {
  const weddingPlace = "더 링크 서울 트리뷰트 포트폴리오 호텔";

  const naverButton = document.getElementById("naverButton");
  if (naverButton) {
    naverButton.addEventListener("click", () => {
      const query = encodeURIComponent(weddingPlace);
      window.location.href = `nmap://search?query=${query}&appname=wedding.invitation`;
      setTimeout(() => {
        window.location.href = `https://map.naver.com/p/search/${query}`;
      }, 1000);
    });
  }

  const tmapButton = document.getElementById("tmapButton");
  if (tmapButton) {
    tmapButton.addEventListener("click", () => {
      const query = encodeURIComponent(weddingPlace);
      window.location.href = `tmap://search?name=${query}`;
    });
  }

  const kakaoButton = document.getElementById("kakaoButton");
  if (kakaoButton) {
    kakaoButton.addEventListener("click", () => {
      const query = encodeURIComponent(weddingPlace);
      window.location.href = `https://map.kakao.com/link/search/${query}`;
    });
  }

  const kakaoNaviButton = document.getElementById("kakaoNaviButton");
  if (kakaoNaviButton) {
    kakaoNaviButton.addEventListener("click", () => {
      Kakao.Navi.start({
        name: "더 링크 서울, 트리뷰트 포트폴리오 호텔",
        x: 126.88387163888,
        y: 37.505603818492,
        coordType: "wgs84"
      });
    });
  }

  const naverNaviButton = document.getElementById("naverNaviButton");
  if (naverNaviButton) {
    naverNaviButton.addEventListener("click", () => {
      const naverNaviUrl =
        "nmap://navigation?dlat=37.505603818492&dlng=126.88387163888&dname=" +
        encodeURIComponent("더 링크 서울, 트리뷰트 포트폴리오 호텔") +
        "&appname=" +
        encodeURIComponent("https://gabinnkoh.github.io/kunwoo-gabin/");
      window.location.href = naverNaviUrl;
    });
  }

  const tmapNaviButton = document.getElementById("tmapNaviButton");
  if (tmapNaviButton) {
    tmapNaviButton.addEventListener("click", () => {
      const destinationName = encodeURIComponent("더 링크 서울, 트리뷰트 포트폴리오 호텔");
      const tmapUrl =
        "tmap://route?goalname=" +
        destinationName +
        "&goalx=126.88387163888&goaly=37.505603818492";
      window.location.href = tmapUrl;
    });
  }
}

/* ====================================
   ACCOUNT ACCORDION & COPY
==================================== */

function initializeAccountSection() {
  const accountAccordions = document.querySelectorAll(".account-accordion");
  accountAccordions.forEach((accordion) => {
    const toggle = accordion.querySelector(".account-toggle");
    const label = accordion.querySelector(".account-toggle-label");
    if (!toggle) return;

    toggle.addEventListener("click", () => {
      const willOpen = !accordion.classList.contains("open");
      accordion.classList.toggle("open", willOpen);
      toggle.setAttribute("aria-expanded", String(willOpen));

      if (label) {
        const side = label.textContent.includes("신랑") ? "신랑 측" : "신부 측";
        label.textContent = `${side}`;
      }
    });
  });

  document.querySelectorAll(".copy-button").forEach((button) => {
    button.addEventListener("click", async () => {
      const accountRow = button.closest(".account-row");
      if (!accountRow) return;

      const accountNumberElement = accountRow.querySelector(".account-number");
      if (!accountNumberElement) return;

      const accountNumber = accountNumberElement.textContent.replace(/\D/g, "");
      if (!accountNumber) return;

      try {
        await navigator.clipboard.writeText(accountNumber);
        const originalText = button.textContent;
        button.textContent = "완료";
        setTimeout(() => {
          button.textContent = originalText;
        }, 1200);
      } catch (error) {
        console.error("계좌번호 복사 실패", error);
      }
    });
  });
}

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
  "images/ending.jpg?v=20260905-15",
  "images/gallery09.jpg?v=20260905-15",
  "images/gallery10.jpg?v=20260914-1",
  "images/gallery08.jpg?v=20260905-15",
  "images/gallery12.jpg?v=20260905-15"
];

const initialGalleryCount = 9;
let currentGalleryIndex = 0;

function createGalleryImage(imageSrc, index) {
  const image = document.createElement("img");
  image.src = imageSrc;
  image.alt = `Wedding gallery ${index + 1}`;
  image.loading = "lazy";
  image.addEventListener("click", () => {
    currentGalleryIndex = index;
    openGallery();
  });
  return image;
}

function renderGalleryGrid() {
  const galleryGrid = document.getElementById("galleryGrid");
  if (!galleryGrid) return;
  galleryGrid.innerHTML = "";
  galleryImages.slice(0, initialGalleryCount).forEach((imageSrc, index) => {
    galleryGrid.appendChild(createGalleryImage(imageSrc, index));
  });
}

function showMoreGalleryImages() {
  const galleryGrid = document.getElementById("galleryGrid");
  const galleryMoreButton = document.getElementById("galleryMoreButton");
  if (!galleryGrid) return;

  galleryImages.slice(initialGalleryCount).forEach((imageSrc, extraIndex) => {
    const realIndex = initialGalleryCount + extraIndex;
    galleryGrid.appendChild(createGalleryImage(imageSrc, realIndex));
  });

  if (galleryMoreButton) {
    galleryMoreButton.style.display = "none";
  }
}

function openGallery() {
  const galleryModal = document.getElementById("galleryModal");
  if (!galleryModal) return;
  galleryModal.classList.add("open");
  document.body.style.overflow = "hidden";
  updateFullscreenGallery();
}

function closeGallery() {
  const galleryModal = document.getElementById("galleryModal");
  if (!galleryModal) return;
  galleryModal.classList.remove("open");
  document.body.style.overflow = "";
}

function updateFullscreenGallery() {
  const fullscreenImage = document.getElementById("fullscreenImage");
  const galleryCounter = document.getElementById("galleryCounter");
  if (!fullscreenImage) return;

  fullscreenImage.src = galleryImages[currentGalleryIndex];
  if (galleryCounter) {
    galleryCounter.textContent = `${currentGalleryIndex + 1} / ${galleryImages.length}`;
  }
}

function showNextImage() {
  currentGalleryIndex = (currentGalleryIndex + 1) % galleryImages.length;
  updateFullscreenGallery();
}

function showPreviousImage() {
  currentGalleryIndex = (currentGalleryIndex - 1 + galleryImages.length) % galleryImages.length;
  updateFullscreenGallery();
}

function initializeGallery() {
  renderGalleryGrid();

  const galleryMoreButton = document.getElementById("galleryMoreButton");
  if (galleryMoreButton) {
    galleryMoreButton.addEventListener("click", showMoreGalleryImages);
  }

  const closeGalleryButton = document.getElementById("closeGalleryButton");
  if (closeGalleryButton) closeGalleryButton.addEventListener("click", closeGallery);

  const nextImageButton = document.getElementById("nextImageButton");
  if (nextImageButton) nextImageButton.addEventListener("click", showNextImage);

  const previousImageButton = document.getElementById("previousImageButton");
  if (previousImageButton) previousImageButton.addEventListener("click", showPreviousImage);

  document.addEventListener("keydown", (event) => {
    const galleryModal = document.getElementById("galleryModal");
    if (!galleryModal || !galleryModal.classList.contains("open")) return;
    if (event.key === "Escape") closeGallery();
    if (event.key === "ArrowRight") showNextImage();
    if (event.key === "ArrowLeft") showPreviousImage();
  });

  const galleryModal = document.getElementById("galleryModal");
  let touchStartX = 0;
  if (galleryModal) {
    galleryModal.addEventListener("touchstart", (event) => {
      touchStartX = event.changedTouches[0].clientX;
    }, { passive: true });

    galleryModal.addEventListener("touchend", (event) => {
      const touchEndX = event.changedTouches[0].clientX;
      const difference = touchStartX - touchEndX;
      if (Math.abs(difference) < 40) return;
      if (difference > 0) showNextImage();
      else showPreviousImage();
    }, { passive: true });
  }
}

/* ====================================
   ANIMATIONS & OBSERVERS
==================================== */

function initializeWeddingInfoReveal() {
  const weddingInfo = document.querySelector(".wedding-info-opening");
  if (!weddingInfo) return;

  if (!("IntersectionObserver" in window)) {
    weddingInfo.classList.add("is-visible");
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      weddingInfo.classList.add("is-visible");
      observer.disconnect();
    });
  }, { threshold: 0.35, rootMargin: "0px 0px -12% 0px" });

  observer.observe(weddingInfo);
}

function initializeScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal-on-scroll");
  if (revealElements.length === 0) return;

  if (!("IntersectionObserver" in window)) return;

  try {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        window.requestAnimationFrame(() => {
          entry.target.classList.add("is-visible");
        });
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -8% 0px" });

    document.documentElement.classList.add("reveal-ready");
    revealElements.forEach((element) => observer.observe(element));
  } catch (error) {
    document.documentElement.classList.remove("reveal-ready");
    console.error("Scroll reveal initialization failed:", error);
  }
}

function initializeCalendarSparkle() {
  const weddingDay = document.getElementById("weddingDay19");
  if (!weddingDay || !("IntersectionObserver" in window)) return;

  let hasPlayed = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting || hasPlayed) return;
      hasPlayed = true;
      weddingDay.classList.add("calendar-sparkle-active");
      observer.disconnect();
    });
  }, { threshold: 0.3 });

  observer.observe(weddingDay);
}

function initializeGalleryTitleAnimation() {
  const galleryHeading = document.querySelector(".v4-gallery-heading");
  if (!galleryHeading || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      galleryHeading.classList.add("is-title-visible");
      observer.unobserve(galleryHeading);
    });
  }, { threshold: 0.3 });

  observer.observe(galleryHeading);
}

/* ====================================
   ENDING PULL EFFECT
==================================== */

function initializeEndingPull() {
  const endingSection = document.querySelector(".v4-ending");
  if (!endingSection) return;

  let bottomTouchStartY = 0;
  let isBottomPulling = false;

  function isPageBottom() {
    return window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
  }

  window.addEventListener("touchstart", (event) => {
    if (event.touches.length !== 1 || !isPageBottom()) return;
    bottomTouchStartY = event.touches[0].clientY;
    isBottomPulling = true;
    endingSection.style.transition = "none";
  }, { passive: true });

  window.addEventListener("touchmove", (event) => {
    if (!isBottomPulling || event.touches.length !== 1) return;
    const currentY = event.touches[0].clientY;
    const movement = bottomTouchStartY - currentY;

    if (movement <= 0) {
      endingSection.style.transform = "translate3d(0, 0, 0)";
      return;
    }

    if (event.cancelable) event.preventDefault();
    const pullAmount = Math.min(movement * 0.18, 32);
    endingSection.style.transform = `translate3d(0, -${pullAmount}px, 0)`;
  }, { passive: false });

  function releaseEndingPull() {
    if (!isBottomPulling) return;
    isBottomPulling = false;
    endingSection.style.transition = "transform .5s cubic-bezier(.22, 1, .36, 1)";
    endingSection.style.transform = "translate3d(0, 0, 0)";
    window.setTimeout(() => {
      endingSection.style.transition = "";
    }, 520);
  }

  window.addEventListener("touchend", releaseEndingPull, { passive: true });
  window.addEventListener("touchcancel", releaseEndingPull, { passive: true });
}

/* ====================================
   TOP OVERSCROLL PREVENTION
==================================== */

function initializeTopOverscrollPrevention() {
  let topTouchStartY = 0;

  window.addEventListener("touchstart", (event) => {
    if (event.touches.length !== 1) return;
    topTouchStartY = event.touches[0].clientY;
  }, { passive: true });

  window.addEventListener("touchmove", (event) => {
    if (event.touches.length !== 1 || window.scrollY > 0) return;
    const currentY = event.touches[0].clientY;
    if (currentY > topTouchStartY && event.cancelable) {
      event.preventDefault();
    }
  }, { passive: false });
}

/* ====================================
   BACKGROUND MUSIC (YOUTUBE API)
==================================== */

let ytPlayer = null;
let isMusicPlaying = false;
let musicCheckInterval = null;

const MUSIC_START_SEC = 8;
const MUSIC_END_SEC = 120; // 2분

// 일시정지 아이콘 (❚❚)
const pauseIconSvg = `
  <svg viewBox="0 0 24 24" width="9" height="9" fill="currentColor">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
  </svg>
`;
/* ====================================
   BACKGROUND MUSIC ICONS
==================================== */

// 정지 상태: 재생 아이콘 (▶)
const playIconSvg = `
  <svg viewBox="0 0 24 24" width="10" height="10" fill="currentColor">
    <path d="M8 5v14l11-7z"/>
  </svg>
`;

// 재생 상태: 움직이는 이퀄라이저 바 3개
const playingWaveHtml = `
  <span class="music-wave-bars">
    <i class="bar"></i>
    <i class="bar"></i>
    <i class="bar"></i>
  </span>
`;

function updateMusicButtonUI(isPlaying) {
  const iconWrap = document.getElementById("musicIconWrap");
  if (!iconWrap) return;
  
  // 재생 중이면 움직이는 이퀄라이저, 멈춤 상태면 재생(▶) 아이콘
  iconWrap.innerHTML = isPlaying ? playingWaveHtml : playIconSvg;
}
function initializeMusicPlayer() {
  const musicButton = document.getElementById("musicToggleButton");
  if (!musicButton) return;

  // 1. YouTube IFrame API 스크립트 비동기 로드
  if (!window.YT) {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  // 2. API 준비 완료 시 플레이어 생성
  window.onYouTubeIframeAPIReady = function () {
    ytPlayer = new YT.Player("ytPlayer", {
      videoId: "2M7sArWrLwY",
      playerVars: {
        autoplay: 0,
        controls: 0,
        disablekb: 1,
        fs: 0,
        rel: 0,
        playsinline: 1,
        start: MUSIC_START_SEC,
        end: MUSIC_END_SEC
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange
      }
    });
  };

  // 모바일 브라우저 정책 대응 (첫 화면 터치 시 자동 재생 시도)
  function tryAutoPlayOnFirstTouch() {
    if (ytPlayer && typeof ytPlayer.playVideo === "function" && !isMusicPlaying) {
      ytPlayer.seekTo(MUSIC_START_SEC);
      ytPlayer.playVideo();
    }
    window.removeEventListener("touchstart", tryAutoPlayOnFirstTouch);
    window.removeEventListener("click", tryAutoPlayOnFirstTouch);
  }

  window.addEventListener("touchstart", tryAutoPlayOnFirstTouch, { once: true, passive: true });
  window.addEventListener("click", tryAutoPlayOnFirstTouch, { once: true, passive: true });

  // 3. 버튼 클릭 시 재생/멈춤 토글
  musicButton.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!ytPlayer || typeof ytPlayer.playVideo !== "function") return;

    if (isMusicPlaying) {
      ytPlayer.pauseVideo();
    } else {
      const currentTime = ytPlayer.getCurrentTime();
      if (currentTime < MUSIC_START_SEC || currentTime >= MUSIC_END_SEC) {
        ytPlayer.seekTo(MUSIC_START_SEC);
      }
      ytPlayer.playVideo();
    }
  });
}

function onPlayerReady(event) {
  // 준비 완료 시 8초 위치로 대기
  event.target.seekTo(MUSIC_START_SEC);
}

function onPlayerStateChange(event) {
  // YT.PlayerState.PLAYING === 1
  if (event.data === 1) {
    isMusicPlaying = true;
    updateMusicButtonUI(true);

    // 2분(120초) 도달 시 다시 8초로 이동하여 루프 재생
    if (musicCheckInterval) clearInterval(musicCheckInterval);
    musicCheckInterval = setInterval(() => {
      if (ytPlayer && ytPlayer.getCurrentTime) {
        const current = ytPlayer.getCurrentTime();
        if (current >= MUSIC_END_SEC || current < MUSIC_START_SEC - 1) {
          ytPlayer.seekTo(MUSIC_START_SEC);
        }
      }
    }, 500);
  } else {
    isMusicPlaying = false;
    updateMusicButtonUI(false);
    if (musicCheckInterval) {
      clearInterval(musicCheckInterval);
      musicCheckInterval = null;
    }
  }
}

/* ====================================
   INITIAL BOOTSTRAP
==================================== */

function bootstrap() {
  // 1. 초기 언어 판별
  const pageParams = new URLSearchParams(window.location.search);
  const urlLanguage = pageParams.get("lang");
  const browserLanguage = navigator.language;
  const pageDefaultLanguage = document.documentElement.dataset.defaultLanguage;

  let initialLang = "ko";
  if (urlLanguage === "ja" || pageDefaultLanguage === "ja" || (browserLanguage && browserLanguage.toLowerCase().startsWith("ja"))) {
    initialLang = "ja";
  }

  setLanguage(initialLang);

  // 2. 언어 변경 버튼 이벤트
  const languageToggleButton = document.getElementById("languageToggleButton");
  if (languageToggleButton) {
    languageToggleButton.addEventListener("click", () => {
      const nextLanguage = currentLanguage === "ko" ? "ja" : "ko";
      setLanguage(nextLanguage);
    });
  }

  // 3. 컴포넌트 기능들 초기화
  initializeFloatingButtonsTrigger();
  initializeNavigation();
  initializeAccountSection();
  initializeGallery();
  initializeWeddingInfoReveal();
  initializeScrollReveal();
  initializeCalendarSparkle();
  initializeGalleryTitleAnimation();
  initializeEndingPull();
  initializeTopOverscrollPrevention();

  // ★ 음악 플레이어 초기화 추가 ★
  initializeMusicPlayer();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootstrap);
} else {
  bootstrap();
}