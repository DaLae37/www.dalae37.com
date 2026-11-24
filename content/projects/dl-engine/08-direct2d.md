# Direct2D

```json
{
  "period": "2016. ~",
  "stack": ["CPP", "WindowsAPI", "DirectX", "2D Rendering"],
  "pending": ["유지보수 상태"],
  "images": [
    {"file": "image3.png", "width": 783, "height": 588}
  ]
}
```

## 개발 목적

WindowsAPI와 DirectX를 이용하여 구현한 렌더링 프레임워크

## PPTX 기록

- 가벼운 프레임워크를 지향하며 Windows 환경에서 2D 게임 개발을 목적으로 개발했습니다.
- Scene 기반으로 동작하며 게임 개발 생산성을 높이기 위한 기능들을 구현했습니다.
- 사용자 입력, 텍스트 렌더링(폰트), 사운드 재생 기능과 Transform, Camera, Frame 애니메이션, AABB 충돌처리 등의 기능이 구현되어 있습니다.
- DirectX9 기반 프레임워크와 Direct2D 기반 프레임워크를 개발했습니다.

## 공개 자료로 확인한 내용

Direct2D 팩토리를 초기화하고 사각형 충돌 판정과 XAudio2 사운드 출력을 처리합니다.

- [README.md](https://github.com/DaLae37/DL-Engine-Direct2D/blob/e308749ee1e1ef9ca7ec473cae3bf497f3a2160c/README.md)
- [Object.cpp](https://github.com/DaLae37/DL-Engine-Direct2D/blob/e308749ee1e1ef9ca7ec473cae3bf497f3a2160c/DL-Engine/Object.cpp)
- [Application.cpp](https://github.com/DaLae37/DL-Engine-Direct2D/blob/e308749ee1e1ef9ca7ec473cae3bf497f3a2160c/DL-Engine/Application.cpp)
- [SoundManager.cpp](https://github.com/DaLae37/DL-Engine-Direct2D/blob/e308749ee1e1ef9ca7ec473cae3bf497f3a2160c/DL-Engine/SoundManager.cpp)
