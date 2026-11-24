# PyGame

```json
{
  "period": "2019.03.19. ~ 2019.06.09.",
  "stack": ["Python", "PyGame", "2D Image Rendering"],
  "images": [
    {"file": "image7.png", "width": 1602, "height": 940}
  ]
}
```

## 개발 목적

PyGame 라이브러리를 효율적으로 사용하기 위해 기능을 정리한 프레임워크

## PPTX 기록

- PyGame으로 게임을 개발하면서 게임 구조 정리를 위해 개발한 프레임워크입니다.
- Scene 기반으로 동작하며 이미지 및 애니메이션 렌더링, 사운드 출력, Camera 기능을 구현했습니다.
- 현재는 PyGame을 사용하지 않아 유지보수를 중단했습니다.
- PyGame 1.9.6 버전을 사용하였습니다.

## 공개 자료로 확인한 내용

애니메이션을 갱신하고 이동하는 오브젝트를 카메라로 추적합니다. 사운드 재생에는 pygame.mixer를 사용합니다.

- [README.md](https://github.com/DaLae37/DL-Engine/blob/d892177669f0916104743ef17ed7f6cbb7a3cd3e/README.md)
- [animation.py](https://github.com/DaLae37/DL-Engine/blob/d892177669f0916104743ef17ed7f6cbb7a3cd3e/PyGame/Framework/animation.py)
- [cameraManager.py](https://github.com/DaLae37/DL-Engine/blob/d892177669f0916104743ef17ed7f6cbb7a3cd3e/PyGame/Framework/cameraManager.py)
- [soundManager.py](https://github.com/DaLae37/DL-Engine/blob/d892177669f0916104743ef17ed7f6cbb7a3cd3e/PyGame/Framework/soundManager.py)
