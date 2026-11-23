# Element Arithme

```json
{
  "period": "2023.11.10. ~ 2023.11.11.",
  "stack": ["C#", "Unity", "Roguelike", "Elementary Arithmetic"],
  "team": "3 (Game Design 1, Game Programmer 2)",
  "pending": ["담당 역할", "수상 기록", "이미지 사용 범위"],
  "images": [
    {"file": "image14.png", "width": 1038, "height": 584}
  ]
}
```

## 개발 목적

Unity로 개발한 사칙 연산 Roguelike 게임

## PPTX 기록

- 2023 경희대학교 해커톤 프로젝트로 ‘교육’이라는 주제로 개발한 게임입니다.
- 카드 선택을 통해 수식을 만든 뒤 그 수식의 결과가 범위 안에 들어올 경우 상대 플레이어에게 대미지를 주는 방식을 기획했습니다.
- Unity의 ExpressionEvaluator 클래스를 이용하여 문자열로 입력된 수식을 계산했습니다.

## 공개 자료로 확인한 내용

BattleController에서 ExpressionEvaluator로 수식을 계산하고 피해를 적용합니다.

- [README.md](https://github.com/Team-Wally/ElementArithme/blob/c5276f1765d6912e9a355e7a9111ff7e4360475d/README.md)
- [BattleController.cs](https://github.com/Team-Wally/ElementArithme/blob/c5276f1765d6912e9a355e7a9111ff7e4360475d/Assets/Scripts/BattleController.cs)

## 관련 링크

- [웹 게임](https://www.dalae37.com/games/element_arithme/index.html)
