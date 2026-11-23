# Hit A Ball

```json
{
  "period": "2019.05.19. ~ 2019.06.09.",
  "stack": ["Python", "PyGame", "Golf"],
  "pending": ["메모리 사용량", "이미지 사용 범위"],
  "images": [
    {"file": "image22.png", "width": 1602, "height": 940}
  ]
}
```

## 개발 목적

PyGame을 이용해 개발한 골프 게임

## PPTX 기록

- 돌을 타격해 땅 위로 떨어지게 만들면 성공, 물 위로 떨어지게 만들면 실패이며 타격에 실패할 때까지 게임을 진행하는 시스템을 기획했습니다.
- DL-Engine-PyGame을 구현하게 된 프로젝트입니다.
- 포물선 운동 공식으로 돌의 움직임을 구현했습니다.
- 스페이스바로 게이지를 충전해 힘의 양을 조절하고 마우스 클릭을 통해 발사각을 조절합니다.
- 물리량을 정한 후 엔터 버튼을 누르면 돌이 발사됩니다.
- 땅과 물이 계속 생성되기 때문에 카메라 위치에 따른 리소스 관리를 구현했습니다.
- 카메라를 기준으로 지나간 오브젝트는 Scene의 Resource 리스트에서 제외했습니다.

## 공개 자료로 확인한 내용

삼각함수와 중력 항으로 타구 궤적을 계산합니다. 입력으로 힘과 각도를 정하고 지나간 오브젝트를 Scene 목록에서 제거합니다.

- [README.md](https://github.com/DaLae37/HitABall/blob/cba1e990857622619f339c5866eb2bb6f8db0b5e/README.md)
- [ball.py](https://github.com/DaLae37/HitABall/blob/cba1e990857622619f339c5866eb2bb6f8db0b5e/Objects/ball.py)
- [gameScene.py](https://github.com/DaLae37/HitABall/blob/cba1e990857622619f339c5866eb2bb6f8db0b5e/gameScene.py)

## 관련 링크

- [시연 영상](https://youtu.be/PbmwTzbQRQ8)
