# Plus Minus Game Server

```json
{
  "period": "2021.03.31. ~ 2021.05.02.",
  "stack": ["Python", "Node.js", "Flask", "REST API", "Socket.IO", "SQLite"],
  "team": "5 (Server 1, Graphic Designer 2, Game Programmer 2)",
  "highlightedTeamRole": "Server",
  "pending": ["매칭 인원"],
  "images": [
    {"file": "image58.png", "width": 1198, "height": 672},
    {"file": "image59.png", "width": 1189, "height": 667}
  ]
}
```

## 개발 목적

2021 스마일게이트 인디게임 공모전 참가를 위해 개발했던 게임

## PPTX 기록

- 회원 가입 및 로그인 기능은 Flask로 구현했습니다.
- SQLite를 이용해 유저의 정보를 저장했습니다.
- 게임 플레이는 Node.js의 Socket.IO를 이용해 개발했습니다.
- 매칭이 되면 Room을 생성하고 플레이어가 순서대로 행동 정보를 주고받습니다.
- Room에서는 Broadcast를 이용해 배팅한 금액과 시간 제한, 유저의 순서를 전달합니다.
- 모든 순서가 끝나면 점수를 계산하여 승/패 결과를 각 플레이어에게 전달합니다.

## 공개 자료로 확인한 내용

Flask의 가입·로그인 처리와 SQLite 연결, Socket.IO의 베팅·결과 이벤트를 확인할 수 있습니다.

- [README.md](https://github.com/DaLae37/PlusMinusGameServer/blob/92cf701b03d2f5e3c2d94c1af899265a1707a85d/README.md)
- [app.py](https://github.com/DaLae37/PlusMinusGameServer/blob/92cf701b03d2f5e3c2d94c1af899265a1707a85d/Python/app.py)
- [app.js](https://github.com/DaLae37/PlusMinusGameServer/blob/92cf701b03d2f5e3c2d94c1af899265a1707a85d/Node.js/app.js)
- [RoomManager.js](https://github.com/DaLae37/PlusMinusGameServer/blob/92cf701b03d2f5e3c2d94c1af899265a1707a85d/Node.js/RoomManager.js)

## 관련 링크

- [시연 영상](https://youtu.be/rMxUhj7QcHI)
