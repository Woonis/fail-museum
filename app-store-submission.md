# 앱스토어 제출 체크리스트

이 문서는 App Store Connect에 넣을 값과, 사람이 직접 해야 하는 일을 모아둔 것입니다.

---

## 1. 코드에서 이미 처리한 것

| 항목 | 상태 | 어디에 |
|---|---|---|
| 앱 아이콘 1024×1024, **알파 채널 없음** | ✅ | `FailMuseum/Assets.xcassets/AppIcon.appiconset` |
| 개인정보 매니페스트 (`PrivacyInfo.xcprivacy`) | ✅ | 추적 없음 / 수집 데이터 없음 / 필수 사유 API 없음 |
| 수출 규정 선언 (`ITSAppUsesNonExemptEncryption = NO`) | ✅ | 업로드마다 묻는 창이 사라집니다 |
| 아이폰 세로 고정 / **아이패드 네 방향 지원** | ✅ | `UISupportedInterfaceOrientations~iphone/~ipad` |
| 아이패드 가로에서 레터박스 없음 | ✅ | `LayoutUITests.testLandscapeFillsScreenOnPad`가 검사 |
| 분할 화면(Split View) 대응 | ✅ | `UIApplicationSupportsMultipleScenes`, 좁아지면 compact 레이아웃 |
| 실행 화면(Launch Screen) | ✅ | `FailMuseum/Info.plist` 의 `UILaunchScreen` → `LaunchBackground` 색 + `LaunchIcon` 그림 |
| 스플래시 (앱이 뜨는 0.85초) | ✅ | `Views/SplashView.swift`. 런치 스크린과 같은 한 장을 덮었다가 페이드아웃 |
| 앱 내 개인정보 처리방침 | ✅ | 설정 → 개인정보 처리방침 보기 |
| '진단 아님' 고지 | ✅ | 시작 화면 · 설정 · 처방침 |
| 계정 삭제 요구사항 | 해당 없음 | 계정 기능이 없습니다 |
| 네트워크·추적·광고 코드 | 없음 | 소스에 `URLSession` 등이 전혀 없습니다 |

---

## 2. 사람이 직접 해야 하는 일

### 반드시

- [ ] **배포 인증서를 이 맥에 올려두기** (멤버십·프로파일은 이미 준비됨)
      | 항목 | 상태 |
      | --- | --- |
      | 유료 멤버십 (팀 `P3H477GWCK`) | ✅ |
      | App Store 배포 프로파일 `com.wooni.failmuseum.app` | ✅ 2027-08-03 까지 |
      | 키체인의 `Apple Distribution` 인증서 | ❌ 이 맥에는 없음 |

      키체인에는 `Apple Development` 두 개만 있습니다. Automatic 서명이라 Xcode 의
      **Distribute App** 과정에서 배포 인증서가 자동 발급되는 경우가 많습니다.
      안 되면 Xcode → Settings → Accounts → Manage Certificates → `+` →
      **Apple Distribution**. 다른 맥에 이미 있다면 그쪽에서 `.p12` 로 내보내 가져오세요.
      (배포 인증서는 팀당 3개까지입니다.)

      그래서 커맨드라인 아카이브는 `Apple Development` 로 서명됩니다. 아카이브 자체는
      정상이고, Organizer 가 업로드할 때 배포 인증서로 다시 서명합니다.
- [x] **번들 ID 확정** — `com.wooni.failmuseum.app`
      (`FailMuseum.xcodeproj` 세 타깃의 `PRODUCT_BUNDLE_IDENTIFIER`: 앱 / `.tests` / `.uitests`,
      안드로이드 `applicationId`, `scripts/shoot.py` 의 `BUNDLE_ID` 까지 같이 맞췄습니다)
      App Store Connect 에 이 ID로 앱 레코드를 만들어 주세요. 이미 다른 ID로 만들어
      두었다면 레코드의 번들 ID는 나중에 바꿀 수 없으니 새로 만들어야 합니다.
- [x] **저작권자 표기** — `© 2026 Wooni` 로 넣었습니다.
      `LICENSE`, `Info.plist`(`INFOPLIST_KEY_NSHumanReadableCopyright`),
      양쪽 앱의 설정 화면 맨 아래, `docs/` 세 페이지 푸터에 모두 같은 표기가 들어 있습니다.
      App Store Connect 의 Copyright 항목에도 `2026 Wooni` 로 적어주세요.
      사업자명으로 내실 경우에만 이 표기를 바꿔주세요.
- [x] **`docs/` 폴더 공개** — GitHub Pages 로 공개했습니다. 스토어에 넣을 주소:
      | 쓰임 | 주소 |
      | --- | --- |
      | 앱 소개 (마케팅 URL) | https://woonis.github.io/fail-museum/ |
      | 개인정보 처리방침 URL | https://woonis.github.io/fail-museum/privacy.html |
      | 지원(Support) URL | https://woonis.github.io/fail-museum/support.html |

      영어로 읽는 심사자에게는 `?lang=en` 을 붙인 주소를 줄 수 있습니다
      (예: https://woonis.github.io/fail-museum/?lang=en).
- [x] **문의 이메일** — `baby.planner.wooni@gmail.com` 으로 넣었습니다
      (`docs/privacy.html`, `docs/support.html`). App Store Connect 와 Play Console 의
      지원 연락처에도 같은 주소를 적어주세요.
- [ ] **스토어 링크** — 공개된 뒤 `docs/index.html`의 '받는 곳' 항목에 App Store ·
      Google Play 링크를 넣어주세요. 지금은 `.todo` 자리표시자입니다.
- [ ] **스크린샷** — 6.9" 아이폰과 13" 아이패드용이 필요합니다.
      **`docs/screenshots/` 의 그림은 스토어에 쓸 수 없습니다.** 그건 소개 페이지용으로
      600×1304 로 줄여둔 6장이고, 애플은 받는 크기가 정해져 있습니다.

      | 쓰임 | 기기 | 크기 | 한국어 폴더 | English 폴더 |
      | --- | --- | --- | --- | --- |
      | 소개 페이지 | iPhone 17 | 600×1304 (줄인 것) | `docs/screenshots/` | `docs/screenshots/en/` |
      | 스토어 6.9" | iPhone 17 Pro Max | 1320×2868 | `screenshots-full/iphone-6.9/` | `…/iphone-6.9/en/` |
      | 스토어 13" | iPad Pro 13-inch (M4) | 2064×2752 | `screenshots-full/ipad-13/` | `…/ipad-13/en/` |

      언어마다 한 벌씩 찍히므로, ASC 에서 한국어 로컬라이제이션에는 한국어 폴더,
      English (U.S.) 에는 `en/` 폴더 그림을 올리면 됩니다. 영문 등록에 한국어 화면을
      올리면 심사에서 걸릴 수 있습니다.

      ```bash
      # 소개 페이지용 (기본 기기)
      python3 -I scripts/shoot.py             # 두 언어 모두
      python3 -I scripts/shoot.py en          # 영어만

      # 스토어용 — 기기와 출력 폴더를 **함께** 지정해야 합니다
      FM_DEVICE="iPhone 17 Pro Max" FM_OUT=screenshots-full/iphone-6.9 \
        python3 -I scripts/shoot.py
      FM_DEVICE="iPad Pro 13-inch (M4)" FM_OUT=screenshots-full/ipad-13 \
        python3 -I scripts/shoot.py
      ```

      `FM_OUT` 을 빼고 기기만 바꾸면 **앞서 찍은 그림을 덮어씁니다** (전에는 출력 폴더가
      고정이었습니다). 13" 아이패드 시뮬레이터가 없으면 먼저 만들어 주세요:
      ```bash
      xcrun simctl create "iPad Pro 13-inch (M4)" \
        com.apple.CoreSimulator.SimDeviceType.iPad-Pro-13-inch-M4-8GB
      ```
      상태바는 9:41 · 통신 4칸 · 배터리 100% 로 고정되고, 라이트 모드로 찍습니다.
      소개 페이지는 6장(설문 · 기질결과 · 역량차트 · 오늘의놀이 · 성장 · 박물관)만 씁니다.

### 확인이 필요한 결정

- [ ] **아동용 앱(Kids Category)으로 낼지** — **권하지 않습니다.**
      이 앱은 아이가 아니라 보호자가 쓰는 도구입니다. Kids 카테고리로 내면
      외부 링크에 보호자 확인 절차(parental gate)를 붙여야 하는데, 설정의
      'iOS 설정 열기' 버튼이 여기에 해당될 수 있습니다. 일반 카테고리(교육 또는
      라이프스타일)로 내고 연령 등급만 4+로 두는 쪽이 간단합니다.
- [x] **아이패드 지원 유지** — 유지하기로 했습니다. 가로·세로·분할 화면이 모두 동작합니다.
- [ ] **아이패드 스크린샷이 많이 비어 보입니다 — 올릴지 결정이 필요합니다.**
      실제로 찍어서 확인했습니다 (`screenshots-full/ipad-13/`). 본문 폭이 700pt 로
      묶여 있고 화면이 위쪽 정렬이라, 13" 세로에서 **아래 60% 가 빈 채로 남습니다.**
      크기 자체(2064×2752)는 애플 요구사항을 만족합니다.

      | 선택 | 결과 |
      | --- | --- |
      | 그대로 올리기 | 통과는 하겠지만 스토어 아이패드 탭이 허전해 보입니다 |
      | 아이패드 레이아웃 손보기 | 2단 구성이나 카드 폭·세로 중앙 정렬 조정. 별도 작업입니다 |
      | 아이폰만 출시 | 세 타깃의 `TARGETED_DEVICE_FAMILY` 를 `1` 로. 아이패드 스크린샷 자체가 불필요해집니다 |

      아이패드를 지원하면서 스크린샷만 빼는 건 안 됩니다 — 애플은 지원 기기마다
      스크린샷을 요구합니다.

---

## 3. App Store Connect 입력값

### 기본 정보

App Store Connect 에 **한국어**와 **영어(미국)** 두 가지 언어를 등록합니다.
(ASC → App Information → Localizable Information 에서 English (U.S.) 추가)

| 항목 | 한국어 | English (U.S.) | 제한 |
|---|---|---|---|
| 이름 (스토어) | 실패 박물관: 아이 기질 놀이 | FailMuseum | 30자 |
| 부제 | 실패해도 괜찮은 50일의 놀이 | 50 days of play, fail freely | 30자 |
| 카테고리 | 교육 (2차: 라이프스타일) | Education (2nd: Lifestyle) | — |
| 연령 등급 | 4+ | 4+ | — |
| 가격 | 무료 (인앱 결제 없음) | Free (no in-app purchases) | — |

부제 후보 (글자수 확인됨): `50 days of play, fail freely` (28) ·
`A 50-day play journey` (21) · `Where failing is fine` (21)

**스토어 이름과 홈 화면 이름이 다릅니다 — 의도된 것입니다.**

| 어디 | 이름 |
| --- | --- |
| 스토어(ASC) 한국어 | 실패 박물관: 아이 기질 놀이 (16자) |
| 기기 홈 화면 | 실패 박물관 (`INFOPLIST_KEY_CFBundleDisplayName`) |

`실패 박물관` 단독 이름은 App Store 에서 **이미 다른 앱이 쓰고 있어** 저장되지 않습니다.
애플은 스토어 이름과 홈 화면 이름이 똑같을 것까지 요구하지 않고 **비슷하면** 됩니다
(지침 2.3.8). 그래서 스토어 이름에만 수식어를 붙였고, **앱 코드는 그대로입니다** —
앱 이름을 정말 바꾸면 Swift·Kotlin·docs 3개 페이지·README 등 20여 개 파일을 모두
고쳐야 합니다.

부제가 이미 `실패해도 괜찮은 50일의 놀이` 라서 이름에는 `실패해도 괜찮아`·`50일` 을
겹치지 않게 두었습니다. `기질` 은 이 앱의 차별점이고 검색어로도 쓸모가 있습니다.

심사자·영어권 사용자에게 보여줄 주소는 `?lang=en` 을 붙입니다 —
<https://woonis.github.io/fail-museum/?lang=en>,
`privacy.html?lang=en`, `support.html?lang=en`

### 개인정보 보호 정보 (Privacy Nutrition Label)

**"Data Not Collected"** 하나만 선택하면 끝입니다.

| 질문 | 답 |
|---|---|
| 이 앱에서 데이터를 수집합니까? | **아니오** |
| 제3자와 데이터를 공유합니까? | 아니오 (수집 자체가 없음) |
| 추적(Tracking) 용도로 사용합니까? | 아니오 |

### 연령 등급 설문

폭력·성적 내용·도박·약물·공포 등 모든 항목에 **"없음"**.
"무제한 웹 접근" 아니오, "사용자 생성 콘텐츠 공유" 아니오.

### 수출 규정

`ITSAppUsesNonExemptEncryption = NO`가 들어 있어 업로드 시 따로 묻지 않습니다.
(HTTPS조차 쓰지 않습니다 — 네트워크 코드가 없습니다.)

---

## 4. 심사 메모 (App Review Information → Notes)

아래 내용을 그대로 붙여 넣으면 심사자가 헤매지 않습니다.

```
이 앱은 보호자(부모)가 쓰는 도구입니다. 로그인이나 계정이 없고,
네트워크 통신을 전혀 하지 않습니다. 모든 데이터는 기기 안에만 저장됩니다.

[사용 방법]
1. 시작하기 → 아이 애칭을 아무렇게나 입력하고 생년월일 휠을 만 5세 정도로 맞춤
2. 설문 18문항 — 아무 보기나 선택하면 됩니다 (정답 없음)
3. 결과 화면에서 '결과 / 역량 / 필요한 것' 세 탭을 확인 후
   '첫 번째 놀이 시작하기'
4. 놀이 탭에서 오늘의 놀이 카드를 눌러 상세로 들어가고,
   아이의 반응을 고른 뒤 '기록하고 완료하기'
5. 하루에 한 가지만 기록할 수 있습니다. 완료 후에는 다음 놀이가
   다음 날 열립니다 (의도된 동작입니다).

[참고]
- 설문은 의학적 진단이나 공인 심리 검사가 아니며, 앱 안에서도 그렇게
  안내하고 있습니다. 공인 심리 척도를 사용하지 않고 자체 문항으로
  구성했습니다.
- 알림은 로컬 알림이며, 설정에서 보호자가 켤 때만 권한을 요청합니다.
- 설정 → '모든 기록 지우기'로 저장된 모든 데이터를 즉시 삭제할 수 있습니다.
```

### English — App Review Information → Notes

심사자는 영어로 읽습니다. 영어 심사에 걸릴 때는 아래를 씁니다.

```
This app is a tool for parents, not for children. There is no account or
login, and it makes no network requests at all. Every piece of data is
stored only on the device.

[How to try it]
1. Get started -> type any nickname for the child, and set the birthdate
   wheel to roughly age 5.
2. 18 survey questions - pick any option. There are no right answers.
3. On the result screen, look through the three tabs (Result / Strengths /
   What they need), then tap "Start the first play".
4. In the Play tab, tap today's play card to open the detail, choose how
   the child reacted, then tap "Record and finish".
5. Only one play can be recorded per day. After finishing, the next play
   opens the following day. This is intended behaviour, not a bug.

[Notes]
- The survey is not a medical diagnosis and not a validated psychological
  test. The app states this on the welcome screen, in Settings, and in the
  privacy policy. It uses its own questions rather than any standardized
  psychological scale.
- Notifications are local only. Permission is requested only when the
  parent turns them on in Settings.
- Settings -> "Erase all records" immediately deletes everything stored.
- The app has no sign-up, no server, and no third-party SDKs.
```

---

## 5. 설명 문구 — 한국어

### 프로모션 텍스트 (170자)

```
아이의 기질을 알아보고, AI 시대에 필요한 네 가지 힘을 하루 한 가지 놀이로
길러주세요. 50가지 놀이를 아이에게 맞는 순서로 추천합니다.
```

### 설명 (Description)

```
"실패해도 괜찮아"를 몸으로 배우는 50일의 놀이 여행

AI 시대에 아이에게 필요한 건 정답을 맞히는 능력보다, 틀렸을 때 다시
해보는 힘입니다. 실패 박물관은 아이의 타고난 기질을 먼저 살펴보고,
부족한 힘을 채우는 순서로 놀이를 하루에 하나씩 안내합니다.

■ 기질부터 살펴봅니다
18개 질문으로 아이의 성향을 네 가지 유형으로 나눠 봅니다.
신중한 탐험가 · 열정 가득 모험가 · 섬세한 완벽주의자 · 조용한 상상가

■ 네 가지 힘을 그래프로
회복탄력성 · 창의적 상상력 · 유연한 관점 · 자기주도성.
무엇이 강하고 무엇을 먼저 채워야 하는지 한눈에 보여줍니다.

■ 하루 한 가지 놀이
50가지 놀이를 아이에게 맞는 순서로 배치합니다. 부족한 힘을 키우는
놀이가 앞쪽에 오고, 같은 성격의 놀이가 몰리지 않게 섞습니다.
각 놀이마다 방법, 준비물, 아이가 무엇을 배우는지, 부모가 주의할 점을
함께 담았습니다.

■ 실패 박물관에 기록을 모아요
아이의 반응과 기억하고 싶은 순간을 남겨보세요. 잘된 것도, 망한 것도
모두 전시물이 됩니다. 다시 하고 싶은 놀이는 ⭐로 표시해 모아볼 수 있습니다.

■ 기기 안에만 저장됩니다
회원가입도, 로그인도, 서버도 없습니다. 아이 정보와 모든 기록은
이 기기에만 저장되고 외부로 전송되지 않습니다.

※ 이 앱의 설문은 의학적 진단이나 공인 심리 검사가 아닙니다. 아이에게
맞는 놀이를 골라주기 위한 성향 참고 자료입니다. 발달이 걱정되면
전문가와 상담하시기 바랍니다.
```

### 키워드 (100자, 쉼표 구분)

```
육아,놀이,기질,유아,발달,회복탄력성,창의력,부모,아이,놀이육아,자녀,홈스쿨
```

---

## 5-E. 설명 문구 — English (U.S.)

앱 안의 영문 표기를 그대로 씁니다 (기질 유형·역량 이름은 `Data/Temperaments.swift`,
`Data/Competencies.swift` 의 `en:` 값과 같아야 스토어와 앱이 어긋나지 않습니다).

### Promotional Text (144 / 170자)

```
Find your child's temperament, then build the four strengths the age of AI
calls for — one play a day. 50 plays, ordered to fill what's missing.
```

### Description

```
A 50-day play journey where failing is fine

In the age of AI, what a child needs most is not getting the answer right —
it is trying again after getting it wrong. FailMuseum starts by looking at
your child's natural temperament, then guides one play a day, ordered to
fill the strengths that need it most.

■ Temperament first
18 questions place your child's disposition into one of four types:
The careful explorer · The spirited adventurer ·
The exacting perfectionist · The quiet dreamer

■ Four strengths, on a chart
Resilience · Creative imagination · Flexible perspective · Self-direction.
See at a glance which is strong, and which to fill first.

■ One play a day
50 plays, arranged for your child. Plays that build the weaker strengths
come first, and similar plays are spread out so they do not bunch up. Each
one includes how to play, what you need, what your child is learning, and
what to watch out for as a parent.

■ Collect it in the museum
Record how your child reacted and the moments you want to remember. What
went well and what flopped both become exhibits. Mark the plays you would
like to do again with a star and collect them.

■ Stored on your device only
No sign-up, no login, no server. Your child's information and every record
stay on this device and are never sent anywhere.

※ The survey in this app is not a medical diagnosis or a validated
psychological test. It is a reference for your child's disposition, used to
pick suitable plays. If you have concerns about your child's development,
please consult a professional.
```

### Keywords (93 / 100자)

```
parenting,play,preschool,toddler,resilience,creativity,child development,kids activities,grit
```

한국어 키워드와 겹치지 않게 짰습니다 — 애플은 언어별로 따로 색인합니다.
`FailMuseum`·`실패 박물관` 처럼 앱 이름에 이미 들어간 말은 키워드에 넣지 않았습니다
(이름·부제는 이미 검색에 반영됩니다).

---

## 6. 빌드 올리기

```bash
# 버전·빌드 번호 올리기 (pbxproj의 MARKETING_VERSION / CURRENT_PROJECT_VERSION)

# 아카이브
xcodebuild -scheme FailMuseum -project FailMuseum.xcodeproj \
  -configuration Release -destination 'generic/platform=iOS' \
  -archivePath build/FailMuseum.xcarchive archive

# 이후 Xcode Organizer에서 Distribute App → App Store Connect
```

올리기 전에 반드시 전체 테스트를 통과시켜 주세요.

```bash
./scripts/check.sh                 # 아이폰
./scripts/check.sh "iPad Pro 13-inch (M4)"   # 아이패드
```

`check.sh` 는 `ScreenshotUITests` 를 건너뜁니다 — 그건 검사하는 테스트가 아니라
`scripts/shoot.py` 가 상태를 심어준 뒤에만 돌아가는 **스크린샷 촬영 도구**이고,
같이 돌리면 심어둔 상태가 없어 항상 실패합니다.
