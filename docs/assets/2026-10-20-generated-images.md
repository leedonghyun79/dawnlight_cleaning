# 섹션 이미지 생성 기록

- 생성일: 2026-10-20
- 도구: 내장 `image_gen` (CLI/API 사용 없음)
- 스타일: 자연광, 화이트·네이비, 실제 질감을 살린 공간 사진
- 최종 이미지: `public/images/*.webp`
- 히어로 우선 로딩, 그 외 이미지 지연 로딩 및 반응형 크기 적용
- 작업사례·팀 이미지는 실제 현장 촬영본이 아닌 생성 이미지임을 화면에 표시

## about-cabinet-cleaning-embroidered-v3 (현재 메인 소개 섹션)

저장 경로: `public/images/about-cabinet-cleaning-embroidered-v3.webp`

도구: 내장 `image_gen` 편집. 자수 위치를 머리카락 뒤로 옮겨 대부분 가려지고 업체명 끝의 '청소'만 살짝 보이도록 변경.

최종 프롬프트:

```text
Precise minimal photograph edit. The user wants the embroidered company name mostly HIDDEN UNDER THE EXISTING PONYTAIL, not fully visible below it. First completely remove the currently visible logo and '새벽빛 청소' text below the hair, restoring clean navy fabric there. Reposition that small uniform embroidery UPWARD onto the upper back, physically UNDERNEATH the existing ponytail: place the horizontal lockup at approximately x=740..930, y=640..675 in this 1448x1086 image. The natural existing ponytail lies IN FRONT of the uniform and MUST OCCLUDE the logo and the first part of the name. Keep the ponytail exactly where it is, preserving its shape, length, strands and natural cast shadow. About 75-85 percent of the logo/name should disappear behind the hair. Show ONLY a small, subtle right-hand tail of the embroidered wordmark, roughly the last Korean characters '청소' or fragments of those letters, peeking from the RIGHT EDGE of the ponytail on the navy vest. The house logo and the first word '새벽빛' should be completely hidden behind hair. Never put lettering on top of hair, never move hair aside to expose the branding. No visible logo or text in the clear cloth below the ponytail. The barely visible final embroidered characters should use muted gray-blue thread, fine understated stitching with the same photographic softness, perspective, cloth folds, low contrast and lighting as the garment. Do not force the entire brand to be readable; natural occlusion is the goal. Keep EVERYTHING ELSE exactly unchanged: hair position, person, pose, gloves, cloth, room, kitchen cabinets, basin, lighting and original 4:3 landscape composition.
```

## about-cabinet-cleaning-embroidered-v2 (이전 자수 이미지)

저장 경로: `public/images/about-cabinet-cleaning-embroidered-v2.webp`

도구: 내장 `image_gen` 편집. 로고와 업체명 크기를 축소하고 회청색 실로 대비를 낮춰 작은 유니폼 자수로 수정.

최종 프롬프트:

```text
Precisely edit this photograph. The current large bright logo on the back looks like pasted graphic art. Correct that specific problem decisively. Remove ALL the current oversized embroidery and restore the navy cloth beneath it. Replace it with a much SMALLER, understated work-uniform embroidered logo and name: the same house/check/sparkle symbol plus exact Korean text '새벽빛 청소'. The TOTAL new horizontal logo+wordmark width must be only 45 percent of the old lockup width, approximately 130 pixels wide within this 1448-pixel-wide photograph, with approximately 17-pixel-high Korean characters and a 24-pixel-tall icon. Place the compact lockup on the visible upper-middle back just below the ponytail, centered on that cloth panel, around x=825,y=805 in the provided photograph. Use muted light gray-blue thread, NOT bright white or cream: the lettering should be softly visible rather than the brightest object. Fine low-relief direct machine embroidery, thin regular-weight lettering, matte thread, tiny broken stitch texture, subtle navy fibers between stitches, slight fabric puckering. Critically, integrate the logo into the existing garment geometry: nonuniform perspective compression, gentle curved baseline following the back, small local bends following existing cloth ripples, highlights and shadows modulated by the same folds that affect the navy fabric. The logo should have the same photographic softness and focus as surrounding garment seams, with no crisp digital edges, no drop shadow, no bevel, no sticker, no solid rectangular backing. This is a small incidental authentic uniform detail in a candid documentary photo, not an advertising mockup. Keep ALL other scene content exactly unchanged, including person, hair, pose, clothes, cloth, gloves, cabinets, sink, basin, lighting, camera angle and framing. Preserve 4:3 landscape composition.
```

## about-cabinet-cleaning-embroidered (이전 자수 이미지)

저장 경로: `public/images/about-cabinet-cleaning-embroidered.webp`

도구: 내장 `image_gen` 편집. 인쇄 버전의 로고와 업체명을 실의 결, 바느질 방향, 원단 주름에 맞는 입체감이 있는 자수 질감으로 변경.

최종 프롬프트:

```text
Use case: precise-object-edit. Edit only the existing off-white company logo and Korean lettering on the back of this cleaner's navy work vest. Replace the current smooth flat printed look with authentic direct machine EMBROIDERY stitched into the garment, as on a real cleaning-company uniform. Keep the exact existing house/check/sparkle logo, Korean text '새벽빛 청소', placement, size and perspective. Render densely packed off-white satin stitches running across each letter stroke, fine visible parallel thread fibers, subtle thread sheen consistent with room light, tiny raised stitched edges with delicate local contact shadows and slight fabric puckering around the embroidery. The embroidery must bend with the existing folds and body curvature, with small realistic irregularities. It must look physically sewn into the navy fabric, never screen-printed, heat-transfer vinyl, flat vector text, a sticker, an oversized patch or a floating overlay. No rectangular backing or border. This is a normal documentary mid-shot, so thread texture should be appropriately subtle, not an exaggerated macro 3D effect. Preserve EVERYTHING ELSE pixel-faithfully: person, hair, clothing construction, body pose, pink glove, blue cloth, kitchen, cabinets, countertop, basin, scene lighting, original framing and 4:3 aspect ratio. Do not change wording, do not add any other text.
```

## about-cabinet-cleaning-branded (자수 편집 전 이미지)

저장 경로: `public/images/about-cabinet-cleaning-branded.webp`

도구: 내장 `image_gen` 편집. `about-cabinet-cleaning.webp`를 편집 대상으로, `logo-print-reference.png`를 로고 참고 자료로 사용. 등에 새벽빛 청소 로고와 업체명을 원단의 주름과 원근에 맞춘 흰색 인쇄로 추가.

최종 프롬프트:

```text
Use case: precise-object-edit. Image 1 is the edit target: a real-looking documentary photograph of a cleaner wiping a kitchen cabinet door, seen from behind. Image 2 is the supporting logo and exact Korean wordmark reference, NOT a background to paste. Edit ONLY the navy vest on the worker's back by adding the supplied house/check/sparkle symbol and company name exactly '새벽빛 청소' as a modest professional uniform print. Preserve all other image content: the person's identity, hair and ponytail, body pose, pink glove, blue cloth, cabinet, sink, basin, background, lighting, colors and camera crop unchanged. Place the mark and Korean name together as a compact horizontal lockup, centered on the visible mid-back panel below the ponytail, with ample navy fabric margins. Use slightly off-white matte textile ink for both icon and wordmark, no background rectangle, no patch border, no oversized branding. Accurately reproduce the reference icon and Korean spelling. The printed lettering must follow the back panel's perspective, soft cloth folds and curved posture, with natural fabric texture visible through the ink, realistic local shadows and subtle wear so it looks genuinely printed on the uniform when photographed, not a floating digital overlay, not artificially razor sharp. Keep the garment's existing seams and folds. Don't add any other writing, labels or graphics. Do not retouch the face or beautify the photograph. Maintain the original 4:3 landscape composition.
```

## about-cabinet-cleaning (인쇄 추가 전 이미지)

저장 경로: `public/images/about-cabinet-cleaning.webp`

도구: 내장 `image_gen`. 사용자가 첨부한 주방 수납장 청소 사진을 작업 장면과 구도의 참고 이미지로 사용해 새로 생성.

최종 프롬프트:

```text
Use case: photorealistic-natural. Asset type: landscape 4:3 About-section photograph for a Korean professional cleaning company website. Input image: the latest attached photograph is a reference for the cleaning task, candid documentary camera angle and practical work setting, not an edit target. Generate a new realistic photograph of a Korean professional cleaner kneeling in front of open lower kitchen cabinets, carefully wiping the inside of a cabinet door with a folded blue microfiber cloth held in a pink rubber-gloved hand. The worker is seen from behind and slightly above, hair tied in a ponytail, wearing a plain unbranded navy work vest over a black long-sleeved top. Both cabinet doors are open, showing empty clean pale gray shelves, realistic hinges and cabinet edges. The cleaner's hand and cloth visibly contact the inner cabinet door. Contemporary Korean apartment kitchen with gray stone countertop, stainless steel sink and beige tile backsplash. A small blue wash basin and a couple of practical cleaning brushes rest neatly on the countertop. Realistic candid on-site cleaning photograph, not a glossy staged advertisement, natural soft daylight, believable materials, modest everyday interior. Compose with the open cabinet, cloth and worker all legible in a 4:3 crop, no awkwardly clipped head or hands. Convey thorough professional cleaning of overlooked interior surfaces. Preserve the reference's task and documentary authenticity while using a new room and new person. Avoid vacuum cleaners, floor scrubbers, mops, kitchen counter wiping, window cleaning, posed smiling, excessive foam, branded clothing, text, logos, watermarks, distorted hands, duplicate limbs.
```

## about-vacuum-cleaning (이전 메인 소개 이미지)

저장 경로: `public/images/about-vacuum-cleaning.webp`

도구: 내장 `image_gen`. 하단 CONTACT 배경과 구분되도록 전문 청소기로 거실 러그와 소파 주변을 청소하는 장면을 생성.

최종 프롬프트:

```text
Use case: photorealistic-natural. Asset type: landscape 4:3 editorial photograph for the About section of a professional Korean cleaning company website. Primary request: a credible professional cleaning scene that is clearly vacuum cleaning, not mopping, not window cleaning, and not wiping a kitchen counter. One Korean professional cleaner wearing a plain navy polo shirt, beige work trousers, blue protective gloves and closed indoor work shoes is carefully vacuuming the edge of a low-pile light beige rug beside an ivory sofa using a realistic commercial canister vacuum cleaner with a flexible hose, metal wand and appropriate floor nozzle. The canister vacuum is visible on the floor, its hose connected naturally to the wand. The floor nozzle rests flat against the rug close to the sofa. Candid three-quarter side view of the worker looking down at the cleaning area, focused on a careful task, no eye contact or posing. Contemporary Korean apartment living room with pale oak flooring, ivory linen sofa, sheer curtains and one plant, soft warm daylight, uncluttered and believable. Show the worker from head to shoes, the vacuum and actual floor contact within the central 80 percent of the composition so everything important fits a 4:3 website crop. Natural documentary architectural photography, realistic anatomy, textiles and equipment, calm trustworthy atmosphere, warm whites and restrained navy palette. Avoid mop, wet floor, microfiber wiping, window cleaning, kitchen island, excessive luxury, excessive cleaning props, dramatic camera angles, CGI, floating tools, disconnected hose, duplicate limbs. No typography, no text, no logo, no watermark.
```

## hero-window-cleaning (현재 히어로)

저장 경로: `public/images/hero-window-cleaning.webp`

도구: 내장 `image_gen`. 실제 작업 중인 장면을 요청받아, 보호 장갑과 극세사 걸레로 창틀을 닦는 현장 사진 분위기로 새로 생성. 실제 현장 촬영본은 아님.

최종 프롬프트:

```text
Use case: photorealistic-natural. Asset type: landscape 3:2 hero background photograph for a professional Korean cleaning service website. Primary request: show careful professional cleaning actually in progress, with the grounded realism of an on-site documentary photograph. A Korean professional cleaner in a plain navy short-sleeve polo shirt, beige work trousers and blue protective gloves is on the right third of the frame, leaning slightly forward in a natural stance while firmly wiping the inside lower window frame and sill with a folded blue microfiber cloth. Show the gloved hand clearly making real contact with the frame, realistic anatomy and plausible ergonomics, candid three-quarter side/back view, focused on the work rather than looking at camera. The environment is a bright contemporary Korean apartment, large windows with realistic aluminum tracks, pale oak floor and off-white walls, a small unbranded cleaning caddy beside the window. Frame wide enough to show the cleaner from head to knees AND the window cleaning action, with the person's head near 78 percent across and 25 percent down, the wiping hand near 78 percent across and 52 percent down, all important action inside the right third. The left half and center should remain calm and uncluttered, with softly lit wall and clean floor providing negative space for the website's centered white Korean headline and buttons. Warm natural morning daylight, white and subtle navy palette, realistic architectural and documentary photography, honest tactile detail, crisp cleaning action, reassuring professional mood. No relaxation scene, no lounging customer, no posed advertising smile, no handshake, no extreme luxury, no collage, no split panels. No text, no logos, no watermark, no typography.
```

## hero-peace-of-mind (이전 히어로)

저장 경로: `public/images/hero-peace-of-mind.webp`

도구: 내장 `image_gen`. 청소를 맡긴 후의 안도감과 여유를 표현하도록 새로 생성. 모바일에서는 오른쪽 인물이 보이도록 이미지 위치를 조정.

최종 프롬프트:

```text
Use case: photorealistic-natural. Asset type: premium Korean cleaning service website hero photograph, wide landscape 3:2. Primary request: convey the emotional relief of entrusting your home to caring professionals, supporting the Korean headline 'From the moment you entrust it to us, your heart feels lighter'. Scene: an immaculate yet lived-in contemporary Korean apartment living room, soft cream sofa, pale oak floor, linen curtains, a small green plant and a spotless window with warm late morning sunlight. On the RIGHT THIRD of the image, a Korean woman in her early thirties in simple comfortable light neutral clothing relaxes naturally on the sofa with a ceramic cup in her hands, shoulders relaxed, a soft relieved expression, candid side profile gazing toward the window. Her face is around 77 percent across the frame and 38 percent down, remaining within central vertical area. She feels at home after the cleaning has been taken care of, not posing for an advertisement. The CENTER and LEFT HALF should be visually calm with soft neutral interior tones and generous unobstructed space for large white headline and two buttons to be overlaid by the website. Wide architectural lifestyle editorial photography at eye level, real texture and natural anatomy, beautifully balanced but believable family home, bright warm white, soft beige, subtle navy cushion accent. Avoid glossy CGI, overdecorated luxury interiors, office lobby, floating objects, cleaning products, staged thumbs-up or handshakes. Absolutely no typography, numbers, logos, watermarks or text in the image.
```

## hero-lounge (하단 CTA 배경)

저장 경로: `public/images/hero-lounge.webp`

최종 프롬프트:

```text
Use case: photorealistic-natural. Asset type: wide website hero photograph, landscape 3:2. A beautifully clean contemporary Korean office lounge in gentle morning sunlight, floor-to-ceiling windows, pale oak floor, cream sofa on the far right, small plant, light stone surfaces. Sophisticated architectural editorial photography, realistic materials, airy white and subtle navy palette, serene and welcoming. Wide view with quiet uncluttered center suitable for centered website headline overlay; architectural detail around the edges. No people, no text, no logos, no watermark.
```

## service-move-in

저장 경로: `public/images/service-move-in.webp`

최종 프롬프트:

```text
Use case: photorealistic-natural. Asset type: landscape website service card photo 3:2. Freshly cleaned unfurnished contemporary Korean apartment ready for move-in, pristine light oak floor, white walls, large balcony windows, clean white open-plan kitchen visible to one side. Morning natural light, realistic architectural editorial photo, soft warm whites and subtle cool sky blue, immaculate but believable. No furniture except built-in cabinetry, no people, no text, no logos, no watermark.
```

## service-residential

저장 경로: `public/images/service-residential.webp`

최종 프롬프트:

```text
Use case: photorealistic-natural. Asset type: landscape website service card photograph 3:2. A clean lived-in contemporary Korean home living room, ivory linen sofa, neatly folded throw, low oak coffee table, a small green plant, pale wood floor, sheer curtains, adjoining dining area. Soft natural daylight, restrained warm white and pale blue palette, realistic inviting architectural editorial photography. Clean everyday domestic setting, no people, no text, no logos, no watermark.
```

## service-commercial

저장 경로: `public/images/service-commercial.webp`

최종 프롬프트:

```text
Use case: photorealistic-natural. Asset type: landscape website service card photograph 3:2. Pristine modern Korean office, neatly aligned pale desks, navy ergonomic chairs, glass meeting room, broad daylight windows, clean flooring and uncluttered workspace ready for the next working day. Realistic professional architectural editorial photography, soft white and navy accents with light oak details. No people, no screen text, no logos, no watermark.
```

## service-construction

저장 경로: `public/images/service-construction.webp`

최종 프롬프트:

```text
Use case: photorealistic-natural. Asset type: landscape website service card photograph 3:2. Professional cleaner in unbranded navy workwear, gloves and closed work shoes operating a commercial floor cleaning machine in a newly completed contemporary Korean commercial interior, light gray tiles, white walls, large spotless glass windows, no furniture. Candid documentary editorial photograph, worker seen from back at three quarter angle, believable machine and safe work, soft daylight, white and navy palette. No text, no logos, no watermark.
```

## portfolio-office

저장 경로: `public/images/portfolio-office.webp`

최종 프롬프트:

```text
Use case: photorealistic-natural. Asset type: landscape illustrative website portfolio photograph 3:2. Newly completed spacious Korean office floor after a thorough final clean, expansive empty open-plan interior with long window wall, immaculate gray floor tiles, white columns, glass partitions, recessed ceiling fixtures. Realistic architectural editorial photography, clear daylight, soft white and cool gray palette. View that conveys a large commercial space. No people, no construction debris, no text, no logos, no watermark.
```

## portfolio-retail

저장 경로: `public/images/portfolio-retail.webp`

최종 프롬프트:

```text
Use case: photorealistic-natural. Asset type: landscape illustrative website portfolio photograph 3:2. A freshly completed empty Korean street-level retail unit after final cleaning, clean pale terrazzo floor, large storefront glazing, white walls, warm oak trim, doorway to a smaller back room. Realistic architectural editorial photograph, afternoon sunlight, soft white and warm neutral palette, ready for store fitout. No merchandise, no people, no text, no signage, no logos, no watermark.
```

## portfolio-academy

저장 경로: `public/images/portfolio-academy.webp`

최종 프롬프트:

```text
Use case: photorealistic-natural. Asset type: landscape illustrative website portfolio photograph 3:2. Neatly cleaned Korean private academy classroom, rows of individual pale wood desks and navy blue chairs, a blank whiteboard, large side windows, immaculate pale gray floor. Realistic architectural editorial photograph, soft daylight, white and subtle navy palette, orderly and welcoming. Empty room, no people, absolutely no writing on board, no text, no logos, no watermark.
```

## portfolio-apartment

저장 경로: `public/images/portfolio-apartment.webp`

최종 프롬프트:

```text
Use case: photorealistic-natural. Asset type: landscape illustrative website portfolio photograph 3:2. Spotless new Korean apartment interior prepared for move-in, view from living room toward a beautiful white kitchen with stone island, empty pale oak floor, large window and balcony, precise clean window tracks. Realistic architectural editorial photography, warm morning light, soft white and pale beige, a believable contemporary home. No people, no decorative clutter, no text, no logos, no watermark.
```

## brand-team

저장 경로: `public/images/brand-team.webp`

최종 프롬프트:

```text
Use case: photorealistic-natural. Asset type: square brand story website photograph. Two Korean professional cleaners in plain navy polo shirts and beige work trousers, wearing gloves, one wiping a kitchen counter with a blue microfiber cloth while the other checks a spotless window, candid side and back view, in a bright contemporary white and light oak interior. Natural unposed documentary editorial photography, careful professional work, warm daylight, approachable and trustworthy mood, realistic anatomy and cleaning tools. No branding, no text, no watermark.
```
