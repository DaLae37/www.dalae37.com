# Wave Ocean

```json
{
  "period": "2023.03.23. ~ 2023.06.15.",
  "stack": ["CPP", "CUDA", "Unreal Engine 5", "유체 역학"],
  "team": "4 (GPGPU 구현 및 Unreal 타겟팅 2, 유체 역학 방정식 정리 2)",
  "highlightedTeamRole": "GPGPU 구현 및 Unreal 타겟팅",
  "pending": ["입자 수"],
  "images": [
    {"file": "image8.png", "width": 698, "height": 606}
  ]
}
```

## 개발 목적

CUDA와 Unreal Engine 5를 연동한 GPU 기반 유체 시뮬레이션

## PPTX 기록

- CUDA API로 라이브러리를 빌드하고 Unreal Engine 5에서 링킹했습니다.
- GPU 메모리에 Particle을 할당했습니다.
- Grid 기반으로 Particle 간 충돌과 강체 충돌을 연산했습니다.
- CUDA가 계산한 Position을 Unreal Engine에서 호출해 Actor를 배치했습니다.
- 유체를 작은 구체의 집합으로 가정해 시뮬레이션했습니다.

## 관련 링크

- [시연 영상](https://youtu.be/fjy4igDLMWI)
