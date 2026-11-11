# Play 스토어 제출 체크리스트

iOS 쪽은 `app-store-submission.md` 에 있습니다. 설명 문구(한/영)는 그 문서의
**5 · 5-E** 절을 그대로 씁니다 — 스토어마다 다시 쓸 이유가 없습니다.

---

## 0. Play Console — **출시 완료** (2026-11-10)

| | |
|---|---|
| 제출 ① | 2026-11-08 11:21 (제출 ID 1 — 프로덕션·스토어 등록정보·앱 콘텐츠·스토어 설정) |
| 게시 ① | **2026-11-10** · 상태 `출시됨` · 심사 약 2일 |
| 제출 ② | 2026-11-11 (등록정보만 — en-US 추가 + ko-KR 스크린샷 교체) · 검토 중 |
| 링크 | <https://play.google.com/store/apps/details?id=com.wooni.failmuseum.app> |

### ⚠️ "임시보관함에 저장" 은 제출되지 않습니다 (2026-11-11 에 당한 것)

스토어 등록정보 편집기는 **1 애셋 → 2 리뷰** 두 단계입니다.
**1단계에서 `임시보관함에 저장` 만 누르면 순수 초안으로만 남고, 게시 개요에
변경 항목으로 아예 잡히지 않습니다.** 2단계(리뷰)까지 가서 `저장` 을 눌러야
"변경사항을 전송하여 검토받을 수 있음" 으로 바뀝니다.

이것 때문에 11-08 에 넣은 **영어 등록정보 전체**와 **한국어 스크린샷 교체**(빈 컷
수정·순서 정렬)가 제출 ① 에 들어가지 않았고, 11-10 에 한국어 구버전만 공개됐습니다.
게시 개요가 "대기 중인 변경사항 0건" 으로 보였기 때문에 더 알아채기 어려웠습니다.

**헷갈리지 않는 기준:** 편집기 머리글을 보세요.

| 머리글 | 뜻 |
|---|---|
| `현재 게시 중` + `초안 변경사항` 태그 | 초안만 있음 — **제출 안 됨** |
| `변경사항을 전송하여 검토받을 수 있음` | 2단계 저장 완료 — 게시 개요에서 제출 가능 |

`다음` 버튼을 자동화로 누를 때 주의: `has-text("다음")` 은 **`다음 언어`** 버튼도
잡습니다. 텍스트가 **정확히 `다음`** 인 버튼을 골라야 단계가 넘어갑니다.

### 공개된 등록정보가 내가 쓴 것인지 확인하는 법

Play 는 제공하지 않은 언어에 **기계 번역**을 대신 보여줍니다. 그래서 공개 페이지가
그럴듯한 영어로 보여도 내 문장이 아닐 수 있습니다. 고유한 문구로 확인하세요:

```bash
curl -s -A "Mozilla/5.0" -H "Cache-Control: no-cache" \
  "https://play.google.com/store/apps/details?id=com.wooni.failmuseum.app&gl=US&hl=en-US" \
  | grep -c "50 days of play, fail freely"      # 0 이면 내 영문이 아직 아님
```

기계 번역은 `The Cautious Explorer`·`Museum of Failure` 처럼 나오고,
직접 쓴 영문은 `The careful explorer`·`Fail Museum` 입니다.

iOS 는 2026-11-06 17:00 KST 에 먼저 공개됐습니다
(`releaseDate` 는 `https://itunes.apple.com/lookup?id=6830497569` 로 확인할 수 있습니다).

### 연령등급 (IARC)

콘텐츠 등급 설문은 Play 를 거쳐 **IARC** 로 넘어가고, 각 지역 심의기관(ESRB·PEGI·
GRAC·USK·ClassInd·ACB)이 등급을 발급합니다. 2026-11-10 에 확정되어 Play 에
`Everyone` 으로 표시됩니다.

- IARC 메일의 **Global Rating ID** 를 보관하세요. 원스토어·Microsoft Store·
  Amazon Appstore 처럼 **IARC 가맹 스토어**에 올릴 때 설문을 다시 하지 않고 그 ID 를
  넣으면 됩니다. **App Store 는 IARC 를 쓰지 않습니다** (애플 자체 등급 체계).
- **설문 답이 바뀌는 업데이트를 하면 설문을 다시 해야 합니다.** 현재 답은
  "교육용=예 / 광고 없음 / 데이터 수집 없음 / 인앱결제 없음" 이므로,
  **인앱결제·광고·사용자 간 게시나 채팅·위치 공유·외부 링크**를 넣으면 재작성 대상입니다.
  놀이를 추가하는 식의 콘텐츠 변경은 해당 없습니다.

| 항목 | 값 |
|---|---|
| 개발자 계정 | `twoday` (개인 계정, ID `6498179557178820797`) |
| 앱 이름 | 실패 박물관: 아이 기질 놀이 / **Fail Museum** (en-US) |
| 패키지 | `com.wooni.failmuseum.app` (AAB 의 applicationId 와 일치 확인) |
| appId | `4973549730520645222` |
| 기본 언어 | 한국어 (ko-KR) + 영어 (en-US) |
| 유료/무료 | **유료 — KRW 1,100** |
| 트랙 | 프로덕션 (trackId `4698488094891304972`) · 전체 출시 |
| 국가/지역 | 173개국 |

내부 테스트 트랙(`4701649686242998589`)에도 같은 번들의 임시 버전이 남아 있습니다.
프로덕션으로 바로 갔으므로 쓰지 않지만, 나중에 테스터에게 돌려보고 싶으면 그대로 쓸 수 있습니다.

### 끝난 것 (14/14)

| 항목 | 넣은 값 |
|---|---|
| 판매자 계정 | 기존에 있었음 |
| 개인정보처리방침 | `https://woonis.github.io/fail-museum/privacy.html` |
| 로그인 세부정보 | 아니요 — 제한된 부분 없음 |
| 광고 | 없음 |
| 콘텐츠 등급 | 카테고리 '다른 모든 앱 유형' · 9문항 (교육용=예, 나머지 아니요) → 전체이용가 |
| 타겟층 | 만 18세 이상 |
| 데이터 보안 | 수집 없음 · 공유 없음 |
| 정부 앱 / 금융 기능 / 건강 | 모두 해당 없음 |
| 판매자 상태 | 예 — 적용됨 (유료 앱) |
| 앱 카테고리 · 연락처 | 교육 · 이메일 · 지원 페이지 |
| 스토어 등록정보 | **한국어(ko-KR) · 영어(en-US)** 2개 언어 — 이름·간단한 설명·자세한 설명 · 아이콘 512 · 그래픽 1024×500 · 스크린샷 6장(1080×2400) · AI 애셋 '라벨 지정 안함' |
| **앱 가격** | **KRW 1,100 · VAT 없음** (나머지 국가는 Play 환산가, 예: USD 0.79 / EUR 0.69) |

스크린샷 1080×2400 은 Play 안내문이 "16:9 또는 9:16" 이라고 적고 있지만 **그대로 받아들여졌습니다**.

**영어 등록정보에서 주의할 점.** 추가 언어는 애셋을 생략하면 기본 언어 것이 쓰입니다
(화면에 흐리게 보입니다). 그래서 영어에 맞춰 따로 올려야 하는 것과 그럴 필요가 없는 것이
갈립니다:

| 애셋 | 영어용 별도 필요? | 왜 |
|---|---|---|
| 아이콘 512 | ❌ | 글자가 없어 언어와 무관합니다 (한/영 파일 해시가 같습니다) |
| 그래픽 이미지 1024×500 | ✅ | **앱 이름이 그림으로 박힙니다.** 한국어판에는 "실패 박물관" 이 들어가 있어 영어 등록정보에 그대로 나가면 안 됩니다 → `scripts/make-icon.swift play` 가 `-en` 변형을 함께 굽습니다 |
| 휴대전화 스크린샷 | ✅ | 앱 UI 가 영어로 찍힌 별도 세트가 있습니다 |

앱 이름은 App Store 등록명과 맞춰 **"Fail Museum"** 으로 통일했습니다.

### 올려둔 버전 (내부 테스트 · 임시)

| 항목 | 값 |
|---|---|
| 트랙 | 내부 테스트 (trackId `4701649686242998589`) |
| 출시명 | `1 (1.0)` |
| 상태 | **임시(초안)** — 출시 안 됨 |
| 번들 | `app-release.aab` 4,174,821 bytes |
| 출시 노트 | ko-KR · en-US 2개 언어 |

AAB 는 `clean` 후 다시 구웠을 때 **바이트 단위로 같은 파일**이 나왔습니다
(SHA-256 `66f699358271a29a6ca02021e6fc33274751bbc2f7e95e3e7d8596ec4d4ab86f`).
AGP 가 zip 항목 시각을 1981-01-01 로 고정하고 RSA 서명이 결정적이라 재현됩니다 —
"올릴 AAB 가 최신인가" 를 해시 비교로 확인할 수 있다는 뜻입니다.

### Play 앱 서명 (중요)

| 키 | SHA-256 지문 | 누가 들고 있나 |
|---|---|---|
| **앱 서명 키** | `55:C4:B1:15:E7:FC:E7:C0:35:F2:13:80:88:E5:27:95:6C:7E:6A:AD:A3:FE:D1:D6:04:77:2B:5E:04:A8:E8:1F` | 구글 (Play 앱 서명) |
| **업로드 키** | `89:AA:63:51:70:9E:77:2A:FE:EC:6E:DE:6B:B9:F6:28:4F:23:A6:A3:CF:CA:8F:51:2C:2A:37:E6:AE:BD:37:24` | `android/release.jks` (CN=wooni) |

두 지문이 **다르다**는 게 Play 앱 서명이 켜져 있다는 증거입니다. 사용자에게 실제로
배포되는 서명은 구글이 들고 있고, `release.jks` 는 업로드용일 뿐입니다. 그래서
`keystore.properties` 가 새거나 `release.jks` 를 잃어버려도 콘솔
`앱 서명 → 업로드 키 → 재설정 요청` 으로 갈아끼울 수 있습니다. **앱을 잃지는 않습니다.**

그래도 `release.jks` 는 따로 백업해 두세요 — 재설정은 구글 처리를 기다려야 합니다.

### 심사에서 남겨둔 경고 (차단 아님)

> 이 App Bundle 아티팩트 유형은 네이티브 코드를 포함하며 아직 디버그 기호가
> 업로드되지 않았습니다.

Compose 런타임이 가져오는 네이티브 라이브러리 때문입니다. 네이티브 크래시
스택을 사람이 읽을 수 있게 하려면 NDK 디버그 기호를 함께 올리면 됩니다
(`android.buildTypes.release.ndk.debugSymbolLevel = "FULL"`). 이 앱은 자체 네이티브
코드가 없어 급하지 않으니 넣지 않았습니다 — AAB 가 커지고 NDK 가 필요해집니다.

### 승인 뒤에 할 일

- [ ] Google Play 링크를 `docs/index.html` 의 `.todo` 자리와
      `swift scripts/make-qr.swift <play 주소> docs/qr-play.png` 로 넣기
- [ ] `android/release.jks` 를 안전한 곳에 백업 (업로드 키 — 위 표 참고)
- [ ] 비밀번호를 갈아끼우려면 콘솔 `앱 서명 → 업로드 키 → 재설정 요청`

내부 테스트 트랙은 `1/3 완료`(테스터 미선택) 상태로 남아 있습니다. 쓰려면 테스터
이메일 목록이나 Google 그룹이 필요합니다.

---

## 1. 코드에서 이미 처리한 것

| 항목 | 상태 | 어디에 |
|---|---|---|
| `applicationId` | ✅ `com.wooni.failmuseum.app` | iOS 번들 ID 와 같습니다 |
| 버전 | ✅ `versionCode 1` / `versionName "1.0"` | `app/build.gradle.kts` |
| 지원 범위 | ✅ `minSdk 26`(안드로이드 8.0) / `targetSdk 37` | 2025년 이후 Play 요구치를 넘습니다 |
| R8 축소 + 리소스 축소 | ✅ `bundleRelease` 통과 확인 | AAB 4.0MB |
| 릴리스 서명 설정 | ✅ `keystore.properties` 에서 읽습니다 | 키스토어 자체는 아래 2번 참고 |
| 언어 | ✅ 한국어·영어 (`localeFilters`) | 런처 이름은 `values/`·`values-en/` |
| 스플래시 | ✅ 시스템 스플래시 | `values-v31/themes.xml` |
| 네트워크·추적·광고 코드 | 없음 | 소스에 네트워크 호출이 전혀 없습니다 |
| 유닛 테스트 | ✅ 50개 통과 | `app/src/test` — 점수·저장·데이터 무결성 |
| 계측 테스트 | ✅ 11개 통과 | `app/src/androidTest` — 화면 흐름·기록·탭·언어 |
| 권한 | `POST_NOTIFICATIONS`, `RECEIVE_BOOT_COMPLETED` | 둘 다 매일 알림 때문입니다 |

**R8 이 안전한 이유.** 저장은 `org.json` 수동 파싱이라 리플렉션 기반 직렬화가 없고,
리플렉션으로 참조되는 클래스(`MainActivity`, `ReminderReceiver`, `BootReceiver`)는
모두 매니페스트에 선언되어 R8 이 보존합니다. 그래서 `proguard-rules.pro` 가 비어
있어도 됩니다. **직렬화 라이브러리를 들이면 그때 keep 규칙이 필요합니다.**

---

## 2. 반드시 준비해야 하는 것

### 🔴 업로드 키스토어 — 지금 없습니다

이게 없으면 **서명되지 않은 AAB** 가 나오고 Play 가 업로드를 거부합니다.

이 맥에는 별도 JDK 가 없습니다. `keytool` 을 맨이름으로 부르면
`Unable to locate a Java Runtime` 으로 멈추므로 **Android Studio 번들 JDK 의
전체 경로**를 씁니다 (gradle 에 `JAVA_HOME` 을 주는 것과 같은 이유입니다).

```bash
cd android
"/Applications/Android Studio.app/Contents/jbr/Contents/Home/bin/keytool" \
  -genkeypair -v \
  -keystore release.jks \
  -alias failmuseum \
  -keyalg RSA -keysize 4096 \
  -validity 10000
```

대화형으로 비밀번호와 이름(CN)을 물어봅니다. key password 는 엔터만 치면
keystore 비밀번호와 같아집니다.

그다음 `android/keystore.properties` 를 만듭니다 (이 파일과 `*.jks` 는 `.gitignore`
에 있습니다 — **절대 커밋하지 마세요**):

```properties
storeFile=release.jks
storePassword=위에서 정한 값
keyAlias=failmuseum
keyPassword=위에서 정한 값
```

확인:

```bash
cd android
JAVA_HOME="/Applications/Android Studio.app/Contents/jbr/Contents/Home" \
ANDROID_HOME="$HOME/Library/Android/sdk" ./gradlew bundleRelease
# → app/build/outputs/bundle/release/app-release.aab
```

서명이 실제로 붙었는지 확인:

```bash
cd android
AAB=app/build/outputs/bundle/release/app-release.aab
unzip -l "$AAB" | grep -E "META-INF/.*\.(RSA|EC|SF)" \
  && echo "서명됨" || echo "서명 안 됨 — keystore.properties 를 확인하세요"
```

**Play 앱 서명을 켜두세요** (기본값). 그러면 위 키스토어는 *업로드 키* 로만 쓰이고,
잃어버려도 구글에 재발급을 요청할 수 있습니다. 끄면 이 파일을 잃는 순간 앱을
영구히 갱신할 수 없습니다.

### ✅ 스크린샷 — 찍어 뒀습니다

```bash
python3 -I scripts/shoot-android.py          # 두 언어
python3 -I scripts/shoot-android.py en       # 영어만
```

| 언어 | 폴더 | 장수 | 크기 |
|---|---|---|---|
| 한국어 | `play-assets/screenshots/ko/` | 9장 | 1080×2400 |
| English | `play-assets/screenshots/en/` | 9장 | 1080×2400 |

Play 는 휴대전화 **최소 2장·최대 8장**(16:9 또는 9:16, 한 변 320–3840px)이므로
9장 중 골라 올립니다. iOS 와 같은 6장(설문·기질결과·역량차트·오늘의놀이·성장·박물관)을
쓰면 두 스토어가 일관됩니다. 7"·10" 태블릿 스크린샷은 선택이지만, 태블릿 사용자에게
제대로 보이려면 넣는 쪽이 좋습니다 (`shoot-android.py` 를 태블릿 AVD 로 돌리면 됩니다).

**iOS 스크린샷을 Play 에 올리지 마세요.** 바닥 탭바·시스템 바가 달라 어색하고
심사에서 지적받을 수 있습니다.

촬영 방식 메모 — 좌표를 박아두지 않았습니다. 설문 보기는 resource-id 로
(`testTagsAsResourceId` 가 켜져 있어 `testTag` 이 그대로 보입니다), 탭과 버튼은 화면
문구로 찾습니다. 만들면서 걸린 함정은 스크립트 주석에 적어뒀습니다:

- `adb shell` 은 인자를 다시 쪼개므로 원격 명령을 **한 덩어리 문자열**로 넘겨야 합니다
- `am start --esa ... -uitest-store` 는 **값이 `-` 로 시작해 am 이 자기 옵션으로
  오해**합니다. 그래서 인텐트 엑스트라를 쓰지 않고 저장 파일에 언어까지 넣습니다
  (에뮬레이터의 앱 데이터는 덮어씌워집니다 — **실기기에서 돌리지 마세요**)
- 바닥 탭의 `testTag` 은 resource-id 로 보이지 않습니다. `testTagsAsResourceId` 가
  `Scaffold` 본문 Box 에만 걸려 있고 탭바는 `bottomBar` 라 그 밖입니다
- 저장 형태가 iOS 와 다릅니다 — `createdAtMillis`(밀리초), 로그는 `playId`(iOS 는
  `playID`), 언어 코드는 `"korean"`·`"english"`(`"ko"` 가 아닙니다)

### ✅ 아이콘·피처 그래픽 — 만들어 뒀습니다

```bash
swift scripts/make-icon.swift play     # play-assets/ 에 두 파일
```

| 자산 | 파일 | 크기 |
|---|---|---|
| 앱 아이콘 | `play-assets/icon-512.png` | 512×512, 알파 없음 |
| 피처 그래픽 | `play-assets/feature-graphic-1024x500.png` | 1024×500, 알파 없음 |

둘 다 앱 아이콘과 같은 기하(`drawMark`)에서 나오므로 아이콘을 바꾸면 함께 바뀝니다.
Play 는 **알파 채널이 있으면 거부**하므로 불투명 비트맵으로 그립니다.

---

## 3. Play 콘솔 입력값

### 스토어 등록정보

이름은 iOS 와 사정이 다릅니다 — **Play 는 앱 이름 중복을 막지 않으므로
`실패 박물관` 을 그대로 쓸 수 있습니다.** (App Store 에서는 이미 선점되어
`실패 박물관: 아이 기질 놀이` 로 올렸습니다.)

| 항목 | 한국어 | English | 제한 |
|---|---|---|---|
| 앱 이름 | 실패 박물관 | FailMuseum | 30자 |
| 간단한 설명 | 실패해도 괜찮은 50일의 놀이 | 50 days of play, fail freely | 80자 |
| 자세한 설명 | `app-store-submission.md` 5절 | 같은 문서 5-E 절 | 4000자 |

**이모지를 넣지 마세요** — App Store 에서 ⭐(U+2B50) 로 막혔습니다. Play 는 받아
주기도 하지만 두 스토어 문구를 하나로 관리하는 쪽이 낫습니다.

### 데이터 보안 (Data safety)

소스에 네트워크 호출이 전혀 없습니다. 확인된 답:

| 질문 | 답 |
|---|---|
| 데이터를 수집·전송합니까? | **아니오** |
| 데이터를 암호화해 전송합니까? | 해당 없음 (전송 자체가 없음) |
| 사용자가 데이터 삭제를 요청할 수 있습니까? | 예 — 설정 → '모든 기록 지우기' |
| 제3자와 공유합니까? | 아니오 |

### 콘텐츠 등급 (IARC 설문)

폭력·성적 내용·도박·약물·공포 등 전 항목 **'없음'**.
사용자 간 소통·위치 공유·개인정보 공유 모두 **아니오**.

### 타겟층 및 콘텐츠

- **아동 타겟 앱으로 신고하지 마세요.** 이 앱은 아이가 아니라 **보호자**가 씁니다.
  아동 타겟으로 두면 Play 의 '가족' 정책(설계 심사, 광고 제한 등)이 걸립니다.
- 타겟 연령대는 **18세 이상**으로 두고, 설명에 "보호자용 도구"임을 밝힙니다.
  (App Store 쪽도 같은 이유로 Kids 카테고리를 피했습니다.)
- 광고 포함: **아니오**

### 그 외

| 항목 | 값 |
|---|---|
| 카테고리 | 교육 (또는 육아) |
| 개인정보처리방침 URL | https://woonis.github.io/fail-museum/privacy.html |
| 지원 이메일 | baby.planner.wooni@gmail.com |
| 앱 접근 권한 | 로그인 없이 전체 기능 사용 가능 |

**가격은 처음에 유료로 올려야 합니다.** Play 는 **무료로 출시한 앱을 나중에 유료로
바꿀 수 없습니다** (유료 → 무료는 됩니다). iOS 가 ₩1,100 이므로 Play 도 유료로
시작합니다. 유료 앱은 Play Console 에서 **판매자 계정(Payments profile)** 등록이
먼저 되어 있어야 가격을 넣을 수 있습니다.
| 가격 | **₩1,100 (유료)** — iOS 와 같게 맞춥니다. 인앱 결제는 없습니다 |

---

## 4. 업로드 자동화 (Gradle Play Publisher)

`com.github.triplet.play` 4.1.1 을 붙여 두었습니다. **비밀번호로 로그인하지 않고
서비스 계정 키로** 올립니다 — 브라우저 자동화로 구글 로그인을 흉내 내는 방식은
구글이 막아두었고, 계정에 보안 플래그가 붙습니다.

### 한 번만 하는 준비

1. **Play Console → 설정 → API 액세스** → Google Cloud 프로젝트 연결
2. 서비스 계정 생성 → **JSON 키 내려받기**
3. Play Console 에서 그 서비스 계정에 권한 부여 (앱 보기 + 버전 관리)
4. 받은 키를 `android/play-service-account.json` 으로 둡니다
   (`.gitignore` 에 있습니다 — **커밋하지 마세요.** 이 키만 있으면 누구나 새 버전을
   올릴 수 있습니다)

> 앱 레코드는 콘솔에서 먼저 만들어져 있어야 합니다. 계정에 따라 **첫 업로드는
> 콘솔에서 직접** 해야 하는 경우가 있어, 자동화는 둘째 버전부터 쓰는 쪽이 안전합니다.
> 콘텐츠 등급·데이터 보안 설문도 콘솔에서만 채울 수 있습니다.

### 쓰기

```bash
cd android
export JAVA_HOME="/Applications/Android Studio.app/Contents/jbr/Contents/Home"
export ANDROID_HOME="$HOME/Library/Android/sdk"

./gradlew publishBundle     # AAB 업로드
./gradlew publishListing    # 등록정보·그림만 반영
```

**기본값을 안전한 쪽으로 두었습니다** (`app/build.gradle.kts` 의 `play {}`):

| 설정 | 값 | 왜 |
|---|---|---|
| `track` | `internal` | 내부 테스트. 실수로 프로덕션에 공개되지 않습니다 |
| `releaseStatus` | `DRAFT` | 초안으로 올라가고, 공개는 콘솔에서 눌러야 합니다 |
| `defaultToAppBundles` | `true` | Play 가 신규 앱에 AAB 를 요구합니다 |

프로덕션에 낼 때만 `track` 을 `production` 으로 바꾸세요.

키가 없으면 `serviceAccountCredentials` 를 비워 두므로 **빌드·테스트는 그대로
돌아갑니다** (서명 설정과 같은 방식). 키 없이 `publish` 를 실행하면 그때 멈춥니다.

### 등록정보 파일

GPP 가 `app/src/main/play/` 를 읽습니다. 이미 채워 두었습니다.

```
app/src/main/play/
  contact-email.txt · contact-website.txt · default-language.txt
  listings/ko-KR/   title · short-description · full-description
                    graphics/phone-screenshots/1..6.png · icon · feature-graphic
  listings/en-US/   (같은 구성, 영문)
```

설명 문구는 `app-store-submission.md` 5·5-E 절에서 **그대로 옮겨 담았습니다**
(길이도 확인: 한국어 741자, 영어 1554자 / 제한 4000자). 문구를 고치면 두 곳이
어긋나지 않게 양쪽을 함께 고치세요.

스크린샷은 `play-assets/screenshots/{ko,en}` 의 9장 중 **6장**을 골라
`1.png`~`6.png` 로 넣었습니다 (설문·기질결과·역량차트·오늘의놀이·성장·박물관 —
iOS 와 같은 구성). Play 는 파일 이름 순서대로 보여줍니다.

### 찍은 그림은 꼭 눈으로 보세요 (2026-11-08 에 당한 것)

`03-설문.png` 두 언어분이 **앱이 아니라 에뮬레이터의 보라색 "Updating..." 화면**이었고,
그걸 모르고 양쪽 등록정보의 **1번 스크린샷**으로 올렸습니다. 원인은
`scripts/shoot-android.py` 가 `launch()` 직후 기다리지 않고 바로 찍었던 것입니다 —
나머지 컷은 `tap()` 이 요소를 기다려 주므로 멀쩡했고, **탭 없이 바로 찍는 컷만**
위험했습니다. `wait_for()` 를 넣어 고쳤습니다.

빈 화면은 PNG 가 유난히 작게 압축되므로 이렇게 한 번 훑으면 걸러집니다:

```bash
cd android/app/src/main/play/listings
for f in */graphics/phone-screenshots/*.png; do
  s=$(stat -f%z "$f"); [ "$s" -lt 80000 ] && echo "의심(거의 단색): $f  $s bytes"
done
```

같은 실행에서 `seed()` 도 고쳤습니다. 갓 설치해 한 번도 띄우지 않은 앱에는
`/data/data/<pkg>/files/` 가 없어서 (안드로이드가 `filesDir` 를 **처음 쓸 때** 만듭니다)
상태 파일 복사가 `No such file or directory` 로 죽었습니다.

---

## 5. 올리기 전에

```bash
cd android
JAVA_HOME="/Applications/Android Studio.app/Contents/jbr/Contents/Home" \
ANDROID_HOME="$HOME/Library/Android/sdk" ./gradlew test bundleRelease
```

### 유닛 테스트 — 50개

점수 계산과 저장 로직은 iOS(Swift)와 **따로 구현되어 있어서**(`Scoring.kt`,
`Store.kt`) 안드로이드 쪽도 따로 검증해야 합니다. iOS `ScoringTests`·`StoreTests`·
`DataIntegrityTests` 와 같은 성질을 검사합니다.

| 파일 | 개수 | 무엇을 보는지 |
|---|---|---|
| `logic/ScoringTest.kt` | 20 | 기질·역량 점수, 코스 생성(50개 중복 없음·결정적), 성장 단조성, 날짜·나이 |
| `logic/StoreTest.kt` | 18 | 저장/불러오기 왕복, 깨진 파일 폴백, 기록·즐겨찾기·다시하기, 설문 재실시 |
| `data/DataIntegrityTest.kt` | 12 | 놀이 50개 id·필드·가중치, 설문 문항 균형, **한/영 번역 완전성** |

번역 검사를 넣은 이유: 한쪽 언어만 비면 그 언어 사용자에게 빈 화면이 나가는데
눈으로 보지 않으면 모릅니다. `Plays.kt` 는 생성 파일(`gen-plays-kotlin.py`)이라
생성이 어긋나도 여기서 걸립니다.

JVM 유닛 테스트를 돌리려면 설정 두 개가 필요했습니다 (`app/build.gradle.kts`):

- `testImplementation(libs.org.json)` — 저장은 `org.json` 으로 하는데 그 패키지는
  안드로이드 SDK 소속이라 유닛 테스트에는 **예외만 던지는 스텁**이 올라옵니다
- `unitTests.isReturnDefaultValues = true` — `android.util.Log` 가 터지지 않게 합니다

### 계측 테스트 — 11개

```bash
cd android
JAVA_HOME="/Applications/Android Studio.app/Contents/jbr/Contents/Home" \
ANDROID_HOME="$HOME/Library/Android/sdk" ./gradlew connectedDebugAndroidTest
```

에뮬레이터나 기기가 붙어 있어야 합니다. `ui/RootScreenTest.kt` 가 봅니다:

| 묶음 | 무엇을 보는지 |
|---|---|
| 시작 화면 | 상태(빈 상태 / 프로필만 / 온보딩 완료)에 따라 맞는 화면이 나오는지 |
| 아이 정보 | 이름을 넣으면 설문으로 넘어가고, 비우면 막히는지 |
| 설문 | 18문항을 다 고르면 결과와 50일 코스가 만들어지는지 |
| 기록 | 반응·메모를 넣고 저장하면 실제로 남는지, 반응 없이는 버튼이 비활성인지 |
| 탭 | 바닥 탭으로 화면이 바뀌는지 |
| 언어 | 영어로 두면 문구와 탭이 영어로 나오는지 |

`MainActivity` 를 띄우지 않고 `RootScreen` 에 `Store` 를 직접 넘깁니다. 액티비티를
띄우면 저장 파일을 미리 심을 틈이 없고(규칙이 `@Before` 보다 먼저 돌아갑니다),
상태별 화면을 가려 보기도 어렵습니다.

**LazyColumn 함정이 있습니다.** `ScreenFrame` 은 `LazyListScope` 를 받는
LazyColumn 입니다. 화면 밖 항목은 구성조차 되지 않아 `onNodeWithText` 가 못 찾고,
구성됐더라도 화면 아래에 있으면 `performClick` 의 터치가 빗나가 **조용히 아무 일도
하지 않습니다**(`assertIsEnabled` 는 통과하므로 "클릭했는데 저장이 안 된다"로
보입니다). 그래서 누르기 전에 `performScrollToNode` 로 끌어옵니다 —
테스트의 `scrollTo()`·`scrollToTag()` 헬퍼입니다. `performScrollTo` 로는 안 됩니다
(이미 구성된 노드만 움직입니다).

### 손으로 확인할 것

계측 테스트가 덮지 못하는 것들입니다. **R8 로 축소된 릴리스 빌드**를 실기기에
올려서 보는 게 중요합니다.

- 앱을 완전히 종료한 뒤 다시 열어도 기록이 남아 있는지 (파일 저장은 유닛
  테스트가 보지만, 축소된 빌드에서 실제로 되는지는 별개입니다)
- 하루에 한 번만 기록되고 다음 놀이는 다음 날 열리는지 (날짜가 바뀌어야 보입니다)
- 매일 알림이 지정한 시각에 오는지, 재부팅 뒤에도 유지되는지
- 설정 → '모든 기록 지우기' 가 실제로 비우는지

`JAVA_HOME` 을 주는 이유: 이 맥에는 별도 JDK 가 없고 Android Studio 번들 JDK 를
씁니다. 안 주면 `Unable to locate a Java Runtime` 으로 멈춥니다.
`ANDROID_HOME` 도 `local.properties` 가 없으면 필요합니다.

내부 테스트 트랙에 먼저 올려 실제 기기에서 한 번 열어보시는 걸 권합니다 —
**R8 로 축소된 빌드는 디버그 빌드에서 안 나던 문제가 나올 수 있습니다.**
특히 저장/불러오기(설문 결과가 남아 있는지)와 매일 알림을 확인하세요.
