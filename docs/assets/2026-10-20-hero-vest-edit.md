# 히어로 작업조끼 이미지 편집

- 도구: 내장 `image_gen` 편집
- 편집 대상: `public/images/hero-window-cleaning.webp`
- 조끼 참고: `public/images/about-cabinet-cleaning-embroidered-v3.webp`
- 영상 생성용 원본: `public/images/hero-window-cleaning-vest.png`
- 웹용 이미지: `public/images/hero-window-cleaning-vest.webp`
- 기존 웹사이트의 영상 및 연결은 유지. 새 이미지는 영상 재생성용으로 저장.

## 최종 프롬프트

```text
Use case: precise-object-edit. Image 1 is the EDIT TARGET, the landscape photograph of a male professional cleaning a window sill in a bright apartment. Image 2 is a GARMENT REFERENCE ONLY, showing the woman's navy sleeveless work vest. Change ONLY the male worker's outfit in Image 1: put a matching navy sleeveless professional cleaning work vest OVER his current dark navy short sleeve polo. Match the reference vest's muted medium-navy woven fabric, practical boxy workwear cut, black bound armholes and side panels, horizontal upper-back yoke seam, visible double topstitching, subtle lived-in fabric texture and natural wrinkles. Fit the vest realistically over this man's torso and shoulders with the correct men's size and the same bent-forward working pose. The vest must be visibly a separate sleeveless layer over the polo, with the original polo sleeves visible below its armholes; the lower hem hangs naturally over the upper trousers. Use realistic cloth thickness, seam shadows, armhole depth, gravity and tension folds across the shoulder blades caused by reaching toward the window. Preserve the man himself, face, hair, body proportions, arms, gloves, cleaning cloth, hands in contact with the window, trousers, shoes, bucket, architecture, sunny lighting, shadows and camera framing EXACTLY. Do not copy the woman's body or ponytail. Do not transfer the lettering from the garment reference: use a plain unbranded vest, no added logos or text. This should look like a naturally photographed matching team uniform, not a pasted cutout or fashion mockup. Preserve the original landscape 3:2 image and all empty space on the left for website text.
```
