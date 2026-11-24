# WebGPU

```json
{
  "period": "2024.03.26. ~ 2024.06.21.",
  "stack": ["JavaScript", "HTML", "WebGPU", "3D Object Rendering"],
  "images": [
    {"file": "image4.png", "width": 1639, "height": 1208},
    {"file": "image5.png", "width": 1710, "height": 835}
  ]
}
```

## 개발 목적

WebGPU API를 이용하여 브라우저에서 구현한 3D 렌더링 프레임워크

## PPTX 기록

- 웹 페이지에서 3D 모델을 렌더링하기 위해 개발했습니다.
- 3D Object Rendering(OBJ Model, Cube, Sphere), Texture Mapping, 2D Image Rendering, 사용자 입력, Camera, Lighting 기능이 구현되어 있으며 Scene 기반으로 동작합니다.
- matrix, vector 계산을 위한 모듈을 만들어 Transform Matrix, Vector Product 등의 연산이 정의되어 있습니다.

## 공개 자료로 확인한 내용

OBJ 파일을 파싱하고 WebGPU 렌더 파이프라인을 생성합니다. README에서 세 데모 Scene을 확인할 수 있습니다.

- [README.md](https://github.com/DaLae37/DL-Engine-WebGPU/blob/06d56b6f557d3923f699db230ef6658ffb5d2a91/README.md)
- [Model.js](https://github.com/DaLae37/DL-Engine-WebGPU/blob/06d56b6f557d3923f699db230ef6658ffb5d2a91/Framework/JavaScript/Object/Model.js)
- [MainScene.js](https://github.com/DaLae37/DL-Engine-WebGPU/blob/06d56b6f557d3923f699db230ef6658ffb5d2a91/Resource/Scenes/MainScene.js)

## 관련 링크

- [시연 영상](https://youtu.be/-EQkuyZg0Ck)
- [웹 게임](https://www.dalae37.com/games/3d_models_webgpu/index.html)
