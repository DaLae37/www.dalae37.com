# www.dalae37.com

[DaLae37's Website](https://www.dalae37.com)의 소스 코드

![Next.js](https://img.shields.io/badge/Framework-Next.js\_16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?logo=typescript\&logoColor=white)
![Docker](https://img.shields.io/badge/Container-Docker-2496ED?logo=docker\&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/CI-GitHub\_Actions-2088FF?logo=githubactions\&logoColor=white)

## Docker

이미지 :

```text
ghcr.io/dalae37/www.dalae37.com
```

주요 태그 :

- `latest` : `main` 브랜치 최신 이미지
- `v1.0.0` : 버전 태그 이미지
- `sha-<커밋 SHA>` : 특정 커밋 이미지

## 환경 변수

GitHub Actions Variables에서 설정 :

- `RESOURCE_URL` : 이미지 및 PDF 리소스 주소 (AWS S3)
- `WEB_GAME_URL` : 웹 게임 주소

변경 사항은 Docker 이미지를 다시 빌드해야 적용됨

## 로컬 개발

개발 서버 실행 :

```bash
npm ci
npm run dev
```

타입 검증 및 빌드 :

```bash
npx next typegen
npm run typecheck
npm run build
```

## 개발 환경

이 프로젝트는 다음과 같은 환경을 사용함

* **Node.js:** 22 이상
* **Next.js:** 16.3.4
* **React:** 19.2.8
* **TypeScript:** 5.9
* **Container:** Docker

## 라이선스 (License)

[BSD 3-Clause](LICENSE)
