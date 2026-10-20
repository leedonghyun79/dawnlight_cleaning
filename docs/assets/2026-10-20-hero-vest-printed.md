# 히어로 조끼 로고 프린팅 편집

- 도구: 내장 `image_gen` 편집
- 편집 대상: `public/images/hero-window-cleaning-vest.png`
- 로고 참고: `public/images/logo-print-reference.png`
- 영상 생성용 원본: `public/images/hero-window-cleaning-vest-printed.png`
- 웹용 이미지: `public/images/hero-window-cleaning-vest-printed.webp`
- 메인 히어로에 PC·모바일 공통 정지 이미지로 적용. 영상 요소는 제거하고 기존 영상 파일은 보관.

## 최종 프롬프트

```text
Use case: precise-object-edit. Image 1 is the edit target: male professional wearing a navy sleeveless work vest while wiping a window sill. Image 2 is the exact logo/wordmark reference, not a patch or background. Add the reference house/check/sparkle logo and the exact Korean company name '새벽빛 청소' as authentic matte SCREEN PRINT on the back panel of the navy vest. Use a compact horizontal lockup, logo on left and name on right, centered on the upper back below the yoke seam. At the source image resolution of 1536x1024, the overall mark should span about 150-170 pixels across the visible back, modest practical uniform branding, not a large billboard. Reproduce the Korean spelling exactly and the symbol faithfully, in slightly warm off-white ink. CRUCIAL: perspective-match the print to the worker's torso turned away and leaning forward. The logo and lettering baseline must follow the sloped yoke and back fabric, curve gently with the shoulder blades, distort locally with wrinkles, narrow with the garment's perspective, inherit the fabric's shadows and highlights, and show fine woven cloth texture through a thin matte ink layer. This must look physically printed on a real uniform before the photo was taken, not a crisp digital logo floating above the vest. No embroidery stitches, no raised 3D edges, no drop shadow, no rectangular patch or backing. Maintain the original garment seams, fabric wear and natural folds. Change ONLY this branding area on the vest. Preserve the same person, face, hair, pose, arms, hands, gloves, cloth, window contact, trousers, bucket, all room architecture, sunlight, shadows, composition and landscape 3:2 aspect ratio exactly. No other text or graphics.
```
