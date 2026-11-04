/*
  한국어 / English 전환.

  자바스크립트가 없어도 한국어 본문이 그대로 보입니다 (style.css 의 기본값).
  이 파일은 전환 버튼과 "기기 언어 따라가기"만 더해줍니다.
*/
(function () {
  var KEY = "failmuseum.lang";
  var root = document.documentElement;

  function apply(lang) {
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang);
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
    try { localStorage.setItem(KEY, lang); } catch (e) { /* 사생활 보호 모드 */ }
  }

  function valid(value) {
    return value === "ko" || value === "en";
  }

  // 주소의 ?lang= → 저장된 선택 → 기기 언어 → 한국어
  //
  // `?lang=` 을 가장 먼저 보는 이유: 영어로 읽는 사람에게 링크를 보낼 때
  // "오른쪽 위에서 EN 을 누르세요"라고 덧붙이지 않아도 되게 하려고입니다.
  var fromUrl = null;
  try {
    fromUrl = new URLSearchParams(location.search).get("lang");
  } catch (e) { /* 아주 오래된 브라우저 */ }

  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) { /* 무시 */ }

  var device = (navigator.language || "ko").toLowerCase().startsWith("ko") ? "ko" : "en";

  apply(valid(fromUrl) ? fromUrl : valid(saved) ? saved : device);

  document.addEventListener("click", function (event) {
    var button = event.target.closest(".lang button");
    if (button) apply(button.dataset.lang);
  });
})();
