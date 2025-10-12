# 🏆 K-Hackathon 2024 결선 진출
# 🚌 모두버스 (ModuBus)

> 모두가 편리하게 이용할 수 있는 버스 서비스

모두버스는 장애인, 노약자를 포함한 버스 탑승 경험에 불편감이 있는 모든 사람들과 버스 기사님들을 위해 개발된 서비스입니다. 승객과 기사 간의 원활한 소통을 통해 더 나은 버스 탑승 경험을 제공합니다.

## [기획의도 및 서비스 소개 보러가기](https://github.com/user-attachments/files/22871192/_PPT.pdf)
## [소개영상 보러가기](https://github.com/user-attachments/assets/ccc7ca32-9d6b-480e-b83b-e9fafca31cc0)

## 📋 목차

- [주요 기능](#-주요-기능)
- [기술 스택](#-기술-스택)
- [시작하기](#-시작하기)
- [프로젝트 구조](#-프로젝트-구조)

## ✨ 주요 기능

### 👥 승객용 기능
- **버스 찾기**: 실시간으로 버스 위치 확인 및 탑승 버스 검색
- **탑승 요청**: 휠체어 탑승, 좌석 필요 등 개인화된 탑승 요청 설정
- **요청 확인**: 설정한 탑승 요청 확인 및 수정
- **텍스트 디스플레이**: 하차 정류장 안내 등 정보 표시
- **설정**: 즐겨찾기 및 개인 설정 관리

### 🚌 기사용 기능
- **버스 정보 등록**: 버스 번호 및 코드 등록
- **탑승객 정보 확인**: 각 정류장별 탑승 대기 승객 정보 실시간 확인
- **운행 상태 관리**: 현재 위치 및 다음 정류장 탑승객 정보 표시
- **승객 요청 대응**: 휠체어 탑승, 좌석 요청 등 승객 니즈 사전 파악

## 🛠 기술 스택

### Frontend
- **React 18.3** - UI 라이브러리
- **TypeScript** - 타입 안정성
- **Vite** - 빌드 도구 및 개발 서버
- **Tailwind CSS** - 스타일링

### 상태 관리 & 네비게이션
- **Zustand** - 전역 상태 관리
- **Stackflow** - 페이지 스택 관리 및 네비게이션
- **React Router DOM** - 라우팅

### 데이터 페칭
- **TanStack Query (React Query)** - 서버 상태 관리
- **Axios** - HTTP 클라이언트

### 개발 도구
- **ESLint** - 코드 품질 관리
- **PostCSS & Autoprefixer** - CSS 처리

## 🚀 시작하기

### 사전 요구사항

- Node.js (v16 이상 권장)
- npm 또는 yarn

### 설치

1. 저장소 클론
```bash
git clone <repository-url>
cd modubus
```

2. 의존성 설치
```bash
npm install
# 또는
yarn install
```

3. 환경 변수 설정
```bash
# .env 파일 생성 및 필요한 환경 변수 설정
cp .env.example .env
```

4. 개발 서버 실행
```bash
npm run dev
# 또는
yarn dev
```

5. 브라우저에서 `http://localhost:5173` 접속

### 빌드

```bash
npm run build
# 또는
yarn build
```

### 프로덕션 미리보기

```bash
npm run preview
# 또는
yarn preview
```

### 배포된 앱 실행

```bash
npm start
# 또는
yarn start
```

## 📁 프로젝트 구조

```
modubus/
├── public/              # 정적 파일
├── src/
│   ├── api/            # API 요청 관련
│   │   ├── config/     # Axios 설정
│   │   ├── driver/     # 기사 관련 API
│   │   └── user/       # 승객 관련 API
│   ├── components/     # 재사용 가능한 컴포넌트
│   │   ├── basic/      # 기본 컴포넌트 (SplashScreen 등)
│   │   ├── driver/     # 기사용 컴포넌트
│   │   ├── onBoard/    # 온보딩 컴포넌트
│   │   └── user/       # 승객용 컴포넌트
│   ├── pages/          # 페이지 컴포넌트
│   │   ├── driver/     # 기사 페이지
│   │   ├── onBoard/    # 온보딩 페이지
│   │   └── user/       # 승객 페이지
│   ├── stackflow/      # Stackflow 설정 및 스택 정의
│   ├── store/          # Zustand 상태 관리
│   ├── types/          # TypeScript 타입 정의
│   ├── utils/          # 유틸리티 함수
│   ├── constant/       # 상수 정의
│   ├── App.tsx         # 메인 앱 컴포넌트
│   └── main.tsx        # 앱 진입점
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## 💡 사용 방법

### 승객 모드

1. **온보딩**: 앱 시작 시 사용자 유형 선택 (승객/기사)
2. **버스 찾기**: 원하는 버스 노선 검색
3. **탑승 요청 설정**: 
   - 휠체어 탑승 여부 선택
   - 좌석 필요 여부 선택
   - 하차 정류장 설정
4. **요청 확인**: 설정한 정보 확인 및 수정
5. **버스 탑승**: 기사님께서 요청 사항을 확인하고 준비

### 기사 모드

1. **버스 정보 등록**: 
   - 버스 번호 입력
   - 인증 코드 입력
2. **운행 시작**: 버스 정보 제출
3. **탑승객 정보 확인**:
   - 다음 정류장 탑승 대기 승객 확인
   - 승객별 요청 사항 확인 (휠체어, 좌석 등)
   - 하차 정류장 정보 확인






