# 니르너스 마법학교 생활 (2017년 원작)

```json
{
  "period": "2017.09.05. ~ 2017.11.13.",
  "stack": ["CPP", "DirectX9", "RPG"],
  "team": "4 (Game Programmer 1, Graphic Designer 2, Leader 1)",
  "highlightedTeamRole": "Game Programmer",
  "pending": ["판본별 기능"],
  "images": [
    {"file": "image25.png", "width": 1021, "height": 797},
    {"file": "image26.png", "width": 1026, "height": 800}
  ]
}
```

## 개발 목적

CPP와 DirectX9 프레임워크를 사용하여 개발한 게임

## PPTX 기록

- 마법학교라는 배경으로 RPG 게임을 기획했습니다.
- 퀘스트를 클리어하며 스토리를 진행하는 게임입니다.
- 플레이어가 바닥에 착지할 수 있는 플랫폼 기능을 구현했습니다.
- 스토리의 진행을 위해 Event Trigger를 구현했습니다.
- 특정 맵에 진입했을 때 각 조건을 순회하며 Event 실행 여부를 확인합니다.
- 조건을 만족했을 경우 해당 Event가 출력되게 구현했습니다.

## 공개 자료로 확인한 내용

공개 저장소는 리메이크입니다. 리메이크의 Application은 Direct2D를 초기화합니다.

- [README.md](https://github.com/DaLae37/NirnusMagicSchoolLife_Remake/blob/2ec1c0794690b3f4782f58d32aa0c2d98372bd51/README.md)
- [Application.cpp](https://github.com/DaLae37/NirnusMagicSchoolLife_Remake/blob/2ec1c0794690b3f4782f58d32aa0c2d98372bd51/NirnusMagicSchoolLife/DL-Engine/Application.cpp)
- [GameScene.cpp](https://github.com/DaLae37/NirnusMagicSchoolLife_Remake/blob/2ec1c0794690b3f4782f58d32aa0c2d98372bd51/NirnusMagicSchoolLife/DL-Engine/GameScene.cpp)

## 관련 링크

- [시연 영상](https://youtu.be/OZJGQs3KwNk)
