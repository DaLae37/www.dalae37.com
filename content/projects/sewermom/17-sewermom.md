# Sewer Mom

```json
{
  "period": "2023.05.16. ~ 2023.07.06.",
  "stack": ["C#", "Unity", "Horror", "Puzzle"],
  "team": "5 (Game Programmer 2, Graphic Designer 2, Leader 1)",
  "highlightedTeamRole": "Game Programmer",
  "pending": ["대표 저장소", "경로 탐색 방식"],
  "images": [
    {"file": "image15.png", "width": 1172, "height": 572}
  ]
}
```

## 개발 목적

GIGDC 2023 출품을 위해 Unity로 개발한 공포 게임

## PPTX 기록

- 플레이어는 몬스터를 피해 퍼즐 요소를 해결하며 스토리를 진행하는 선형 게임입니다.
- Text Load 클래스를 만들어 게임 내의 대사와 설명을 별도의 파일로 분리할 수 있게 구현했습니다.
- 공포 게임의 분위기를 만들기 위해 원뿔 모양 빛으로만 주변 환경을 파악할 수 있게 구현했습니다.
- 몬스터가 플레이어를 추적하도록 구현했습니다.

## 공개 자료로 확인한 내용

공개된 Unity 구현의 TextLoader는 대사 파일을 불러와 줄마다 키와 값을 분리합니다.

- [TextLoader.cs](https://github.com/TeshShin/SewerMom/blob/fb5bd7a6a7c32e8bac779a8e7ab4a9a8ea19f5da/Assets/Scripts/GameScene/TextLoader.cs)

## 관련 링크

- [시연 영상](https://youtu.be/e28QdLaREp4)
- [웹 게임](https://www.dalae37.com/games/sewermom/index.html)
