# C-Language Console

```json
{
  "period": "2016.03. ~ 2016.09.",
  "stack": ["C", "Windows Console", "ASCII Rendering"],
  "pending": ["호환 버전"],
  "images": [
    {"file": "image6.png", "width": 754, "height": 628}
  ]
}
```

## 개발 목적

Windows Console을 기반으로 구현한 프레임워크

## PPTX 기록

- C언어 학습자에게 게임 개발 입문을 도울 목적으로 개발했습니다.
- 레거시 Windows 콘솔을 기준으로 설계한 기능을 수정했습니다.
- WinAPI를 사용해 Win32 콘솔을 생성한 후 콘솔의 핸들러를 가져와서 기능을 처리했습니다.
- C언어 문법으로 설계했으며 사용자 입력, 사운드 출력, ASCII 렌더링, 콘솔 사이즈 설정 및 제목 설정 등 기능을 구현했습니다.

## 공개 자료로 확인한 내용

Win32 콘솔 핸들을 가져와 창 크기, 제목, 커서 위치와 글자색을 설정합니다. Scene에서 사운드를 재생합니다.

- [README.md](https://github.com/DaLae37/DL-Engine-Console/blob/a8d2ad9898ee8f5c226e02dbb7fde473e2f36911/README.md)
- [pch.c](https://github.com/DaLae37/DL-Engine-Console/blob/a8d2ad9898ee8f5c226e02dbb7fde473e2f36911/DL-Engine-Console/pch.c)
- [scene.c](https://github.com/DaLae37/DL-Engine-Console/blob/a8d2ad9898ee8f5c226e02dbb7fde473e2f36911/DL-Engine-Console/scene.c)
