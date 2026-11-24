# Amazing Checks

```json
{
  "period": "2017, 2020",
  "stack": ["CPP", "Windows Console", "Python", "PyGame", "Chess"],
  "images": [
    {"file": "image18.png", "width": 1115, "height": 628},
    {"file": "image19.png", "width": 477, "height": 497}
  ]
}
```

## 개발 목적

CPP와 Python으로 구현한 체스 게임

## PPTX 기록

- 객체지향 언어의 다형성을 응용해보기 위해 진행한 프로젝트입니다.
- Piece 클래스에 가상함수를 선언한 후 상속받는 각 클래스에서 기능을 오버라이딩해 구현하였습니다.
- CPP 프로젝트는 DL-Engine-Console 을 바탕으로 구현했습니다.
- Python 프로젝트는 DL-Engine-PyGame 을 바탕으로 구현했습니다.
- Python 프로젝트에서는 AI 모드를 추가하였습니다.
- Minimax 알고리즘을 바탕으로 동작하는 인공지능이고 depth는 3까지 탐색하게 구현했습니다.

## 공개 자료로 확인한 내용

C++판은 기물의 이동과 입력을 순수 가상 함수로 정의합니다. Python판은 AI 장면에서 minimaxRoot에 깊이 3을 전달합니다.

- [README.md](https://github.com/DaLae37/AmazingChecks_CPP/blob/21063bd39156838ff1985a3a778d7c7dd9cf47c2/README.md)
- [Pieces.h](https://github.com/DaLae37/AmazingChecks_CPP/blob/21063bd39156838ff1985a3a778d7c7dd9cf47c2/Chess/Pieces.h)
- [README.md](https://github.com/DaLae37/AmazingChecks_Python/blob/c951081277373dd6c3f48413acffcdc890b19c6a/README.md)
- [ai.py](https://github.com/DaLae37/AmazingChecks_Python/blob/c951081277373dd6c3f48413acffcdc890b19c6a/Objects/ai.py)
- [aiGameScene.py](https://github.com/DaLae37/AmazingChecks_Python/blob/c951081277373dd6c3f48413acffcdc890b19c6a/Scenes/aiGameScene.py)

## 관련 링크

- [시연 영상 (C++)](https://youtu.be/LdOO4mi9PCE)
- [시연 영상 (Python)](https://youtu.be/fZe9kpEeQ0E)
