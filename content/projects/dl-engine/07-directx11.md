# DirectX11

```json
{
  "period": "2023. ~",
  "stack": ["CPP", "WindowsAPI", "DirectX", "2D & 3D Rendering"],
  "pending": ["빌드 시간"],
  "images": [
    {"file": "image2.png", "width": 1066, "height": 1073}
  ]
}
```

## 개발 목적

WindowsAPI와 DirectX11, Direct2D를 이용하여 구현한 렌더링 프레임워크

## PPTX 기록

- DirectX11과 Direct2D를 상호 운용해서 3D 렌더링은 DX11, 2D 렌더링은 D2D가 처리하게 구현했습니다.
- Scene 기반으로 동작하며 게임 개발 생산성을 높이기 위한 기능들을 구현했습니다.
- 3D 모델 로딩(ASSIMP 기반), Camera, Lighting, Texture Mapping, Object Transform 등의 기능을 구현하고 있습니다.
- 컴파일 및 빌드 최적화를 위해 한 솔루션에 Engine과 Game, 두 개의 프로젝트를 배치했습니다.
- Engine의 빌드 결과는 라이브러리, Game의 빌드 결과는 실행 파일로 구성했습니다.

## 공개 자료로 확인한 내용

Direct3D 11과 Direct2D 장치를 초기화하고 Assimp로 모델을 읽습니다. Engine은 정적 라이브러리로, Game은 실행 파일로 빌드합니다.

- [README.md](https://github.com/DaLae37/DL-Engine-DirectX11/blob/18f490a5b8ceaaf8009f8370d3756cd2fa3d23ed/README.md)
- [Device.cpp](https://github.com/DaLae37/DL-Engine-DirectX11/blob/18f490a5b8ceaaf8009f8370d3756cd2fa3d23ed/Engine/Device.cpp)
- [Model.cpp](https://github.com/DaLae37/DL-Engine-DirectX11/blob/18f490a5b8ceaaf8009f8370d3756cd2fa3d23ed/Engine/Model.cpp)
- [Engine.vcxproj](https://github.com/DaLae37/DL-Engine-DirectX11/blob/18f490a5b8ceaaf8009f8370d3756cd2fa3d23ed/Engine/Engine.vcxproj)
- [Game.vcxproj](https://github.com/DaLae37/DL-Engine-DirectX11/blob/18f490a5b8ceaaf8009f8370d3756cd2fa3d23ed/Game/Game.vcxproj)
