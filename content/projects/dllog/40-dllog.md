# DL-Log

```json
{
  "period": "2018.05.03 ~ 2018.06.24.",
  "stack": ["Java", "Android Studio", "API", "SQLite", "JSON"],
  "images": [
    {"file": "image52.png", "width": 229, "height": 380},
    {"file": "image53.png", "width": 240, "height": 382}
  ]
}
```

## 개발 목적

‘게임 League of Legends 전적 조회 어플’ 기획으로 구현한 안드로이드 앱

## PPTX 기록

- Riot API를 호출해 최근 20개의 전적을 불러옵니다.
- API로 받은 JSON을 파싱해 유저의 UID, 레벨, 전적 정보를 분리합니다.
- 전적 목록은 List View에 Adapter로 추가시키는 것으로 구현했습니다.
- 받아온 정보는 SQLite로 저장해두고 Calendar Activity에서 게임 플레이 시간을 시각화 하는 용도로 사용했습니다.
- 게임 플레이를 많이 할수록 해당 일에 적색에 가까운 색깔로 표시되게 구현했습니다.
