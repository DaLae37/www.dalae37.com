# Pong

```json
{
  "period": "2023.05.23. ~ 2023.06.10.",
  "stack": ["CPP", "WindowsAPI", "WinSocket", "Table Tennis"],
  "pending": ["실측 성능"],
  "images": [
    {"file": "image16.png", "width": 1280, "height": 720}
  ]
}
```

## 개발 목적

WindowsAPI 기능을 이용해 개발한 탁구 게임

## PPTX 기록

- Atari의 Pong을 모티브로 제작했습니다.
- 탄성충돌 공식을 이용해 공이 튕기는 기능을 구현하였습니다.
- 구체의 방향 벡터를 충돌체의 방향 벡터에 사영한 벡터를 구하고 충돌 여부를 판단해서 충돌한 경우 구체가 방향 벡터에 따라 다른 방향으로 튕기게 구현했습니다.
- 충돌이 진행될수록 충돌체의 질량으로 인해 구체가 가속도를 얻게 구현했습니다.
- 일정한 간격으로 Update를 호출해 공의 위치를 계산하도록 구현했습니다.
- WinSocket을 이용한 서버로 멀티 플레이를 구현했습니다.

## 공개 자료로 확인한 내용

공과 패들의 충돌을 처리하고 WinSock으로 데이터를 주고받습니다. 게임 루프는 경과 시간이 1/60초에 도달했을 때 Update를 호출합니다.

- [README.md](https://github.com/DaLae37/Pong/blob/84eaf6053d8176d793e9bb2985e2855b3efc94a3/README.md)
- [PongGame.cpp](https://github.com/DaLae37/Pong/blob/84eaf6053d8176d793e9bb2985e2855b3efc94a3/KhuGle/PongGame.cpp)
- [KhuGleWin.cpp](https://github.com/DaLae37/Pong/blob/84eaf6053d8176d793e9bb2985e2855b3efc94a3/KhuGle/KhuGleWin.cpp)

## 관련 링크

- [시연 영상](https://youtu.be/OfasKujaIms)
