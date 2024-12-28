# Vuyah 🚀

**Vuyah** 는 Vue.js 프로젝트를 위한 현대적이고 강력한 보일러플레이트입니다.
유연하고 확장 가능한 구조를 바탕으로, 빠른 개발과 유지보수를 돕는 최적의 시작점을 제공합니다.
창의적이고 효율적인 개발 환경을 구축하기 위해 **Vuyah** 를 시작하세요!

README 번역본은 아래 주소를 참고하세요.

- [README.md | English](/README.md)

현재 프로젝트에 대한 자세한 정보는 아래 블로그 내용을 참고하세요.

- [[post] 프로젝트 구조 만들기 | Vue.js](https://blog.osb.im/posts/vuejs/0)

## ✨ 특징

### 1. 최신 기술 스택

- **Vue 3**: 현대적이고 강력한 Vue.js 3 프레임워크 기반.
- **TypeScript 지원**: 안정성과 가독성을 높여주는 강력한 타입 시스템.
- **Pinia**: Vuex의 차세대 상태 관리 라이브러리.
- **Vite**: 초고속 빌드와 개발 서버를 제공하는 툴링.

### 2. 구조화된 프로젝트 설계

- FSD(Feature-Sliced Design) 기반 파일 구조로, 유지보수와 확장이 간편.
- 위젯, 레이아웃, 상태 관리가 모듈화된 설계.

### 3. 효율적인 개발 환경

- **ESLint & Prettier**: 일관된 코드 스타일과 품질 유지.

[// not support]: # (- **Vitest**: 유닛 테스트를 간단하고 빠르게 설정.)
[// not support]: # (- **Cypress**: 선택적 E2E 테스트 지원으로 품질 보증.)

## 📂 프로젝트 구조

```bash
src/
├── app/               # 애플리케이션 전역 설정
│   ├── plugins/       # 플러그인 설정 (예: Pinia, Router 등)
│   ├── styles/        # 전역 스타일
│   └── main.ts        # 엔트리 포인트
├── shared/            # 재사용 가능한 공통 컴포넌트 및 유틸리티
├── widget/            # 레이아웃 및 위젯
├── features/          # 도메인별 독립적인 기능
└── pages/             # 페이지 단위 뷰
```

## 🚀 시작하기

### 1. 프로젝트 클론

```bash
git clone https://github.com/oobg/vuyah.git
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 개발 서버 실행
```bash
npm run dev
```

### 4. 프로덕션 빌드
```bash
npm run build
```

## 🛠️ 주요 스크립트

- npm run dev: 개발 서버 실행
- npm run build: 프로덕션 빌드
- npm run lint: 코드 린팅
- npm run test: 테스트 실행

## 🌟 Vuyah 의 장점

### 1. 생산성 강화

Vuyah 는 개발 속도를 높이고, 유지보수를 간단하게 만들어줍니다.

### 2. 확장성과 유연성

프로젝트 구조가 명확하고, 기능 확장이 쉽도록 설계되었습니다.

### 3. 최적화된 개발 경험

최신 Vue.js 기술 스택과 도구를 활용해 최고의 개발 환경을 제공합니다.