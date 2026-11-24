# Mint And Choco (Three.js)

```json
{
  "period": "2023.03.29. ~ 2023.06.05.",
  "stack": ["HTML/JS/CSS", "Three.js", "WebGame", "Shooting"],
  "pending": ["실측 성능"],
  "images": [
    {"file": "image55.png", "width": 1152, "height": 791}
  ]
}
```

## 개발 목적

Three.js로 개발한 웹 페이지

## PPTX 기록

- 3D 모델 로딩, 카메라, 텍스처 등의 기능을 사용했습니다.
- 30×30 지형을 생성할 때 Geometry Merge를 적용했습니다.
- 캐릭터의 이동과 점프, 시점 이동, 총알 발사 기능을 구현했습니다.
- 땅, 돌, 나무 등 지형은 웹 페이지 로딩 시마다 무작위로 생성되게 구현했습니다.

## 공개 자료로 확인한 내용

30×30 지형을 생성하고 같은 종류의 지형 기하를 병합합니다. 무작위 장애물 배치와 플레이어의 점프·발사를 구현했습니다.

- [map.js](https://github.com/DaLae37/www.dalae37.com/blob/2075fea61538901517d3c50450889513d481d695/public/games/mintandchoco_remake/Framework/map.js)
- [player.js](https://github.com/DaLae37/www.dalae37.com/blob/2075fea61538901517d3c50450889513d481d695/public/games/mintandchoco_remake/Framework/player.js)
- [bullet.js](https://github.com/DaLae37/www.dalae37.com/blob/2075fea61538901517d3c50450889513d481d695/public/games/mintandchoco_remake/Framework/bullet.js)

## 관련 링크

- [시연 영상](https://youtu.be/BIe44GGeaes)
- [웹 게임](https://www.dalae37.com/games/mintandchoco_remake/index.html)
