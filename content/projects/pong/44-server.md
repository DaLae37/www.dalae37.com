# Pong Game Server

```json
{
  "period": "2023.05.23. ~ 2023.06.10.",
  "stack": ["CPP", "WinSocket"],
  "pending": ["당시 배포 환경"],
  "images": [
    {"file": "image57.png", "width": 1280, "height": 720}
  ]
}
```

## 개발 목적

Pong Game 멀티플레이를 위해 개발한 서버

## PPTX 기록

- Socket 통신으로 클라이언트 간 데이터를 주고 받을 수 있게 구현했습니다.
- 클라이언트에서 매칭을 시작하면 서버의 queue에 클라이언트 소켓을 추가합니다.
- 두 명이 매칭 상태일 경우 두 개의 소켓을 queue에서 꺼내 Room을 생성하고 Thread로 게임 프로세스를 실행시킵니다.
- 게임이 시작되면 매 프레임마다 유저는 8byte를 주고 받습니다.
- WinSocket 라이브러리를 사용하기 위해 Windows Server를 지원하는 IaaS 플랫폼인 Azure를 사용했습니다.

## 공개 자료로 확인한 내용

대기열에서 두 클라이언트를 매칭한 후 Room 스레드를 생성합니다. 위치와 준비 상태를 8바이트 버퍼로 주고받습니다.

- [README.md](https://github.com/DaLae37/PongGameServer/blob/2cb4b2058f83221d00c59974a86db8a0529ad352/README.md)
- [PongGameServer.cpp](https://github.com/DaLae37/PongGameServer/blob/2cb4b2058f83221d00c59974a86db8a0529ad352/PongGameServer.cpp)
- [Room.cpp](https://github.com/DaLae37/PongGameServer/blob/2cb4b2058f83221d00c59974a86db8a0529ad352/Room.cpp)
- [stdafx.h](https://github.com/DaLae37/PongGameServer/blob/2cb4b2058f83221d00c59974a86db8a0529ad352/stdafx.h)
