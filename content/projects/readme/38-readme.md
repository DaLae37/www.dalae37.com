# ReadMe

```json
{
  "period": "2019.11.22. ~ 2019.12.21.",
  "stack": ["Kotlin", "Android Studio", "OCR", "TTS", "Flask", "Camera"],
  "pending": ["서버 구현"],
  "images": [
    {"file": "image49.png", "width": 295, "height": 640}
  ]
}
```

## 개발 목적

‘시각장애인을 위한 독서 도우미 어플’ 기획으로 구현한 안드로이드 앱

## PPTX 기록

- 책의 페이지를 사진 찍었을 때 해당 이미지를 BASE64로 인코딩하고 서버로 전송합니다.
- 이미지에서 글자를 추출하고 음성으로 읽어 주는 방식을 기획했습니다.
- 음성 데이터를 앱에 전달하는 흐름으로 구성했습니다.
- 어플리케이션에서 음성 파일을 재생해 책을 읽어주는 기능을 구현했습니다.

## 공개 자료로 확인한 내용

Android 클라이언트는 촬영한 이미지를 Base64로 인코딩해 전송하고, 응답의 음성 데이터를 디코딩해 MediaPlayer로 재생합니다.

- [README.md](https://github.com/Team-Wally/ReadMe_Android/blob/adcfa68404a69285865151beebfb5f68478e35d6/README.md)
- [CameraActivity.kt](https://github.com/Team-Wally/ReadMe_Android/blob/adcfa68404a69285865151beebfb5f68478e35d6/app/src/main/java/com/dalae37/readme/CameraActivity.kt)
- [ResultActivity.kt](https://github.com/Team-Wally/ReadMe_Android/blob/adcfa68404a69285865151beebfb5f68478e35d6/app/src/main/java/com/dalae37/readme/ResultActivity.kt)

## 관련 링크

- [시연 영상](https://youtu.be/OEjVzqKQlkk)
