# Working on the QWERTY Flip Concept

Read `README.md` first: it is the spec, and its "Open questions" section is the to-do list. This file is how to work on the model and why the design is the way it is.

## Files

- `model.html`: **the source.** The artifact page (no doctype, head or body tags, because the artifact host adds its own skeleton). Edit this one.
- `index.html`: **generated.** `model.html` wrapped as a full page so it opens straight in a browser. Never edit by hand; rebuild with `node tools/wrap.js`.
- `tools/wrap.js`: the wrapper.
- `ENGINEERING.md`: the engineering brief. Outside dimensions in it come from the model; when the model's geometry changes, update the matching numbers there. Inside numbers are estimates marked *(est.)*.

## Workflow for a change

1. Edit `model.html`.
2. Check the script parses: extract the inline `<script>` and run `node --check` on it.
3. Run `node tools/wrap.js` to rebuild `index.html`.
4. Publish `model.html` to the **existing** artifact, so Krupal keeps one link: https://claude.ai/artifact/Pe98HsHRMc8vmEks1FkVmc. From a new session, read it first with the Artifact tool (`action: "read"`), then publish with `url` set to that link. Do not create a new artifact.
5. Update `README.md` if the spec changed.
6. Commit and push. Before the first commit in a session, run `git var GIT_COMMITTER_IDENT` and confirm it is `Krupal Tandel <krupalktandel@gmail.com>`. This PC falls back to a work address if unset; never commit with it. Push with `git -c credential.helper= -c credential.helper='!"/c/Program Files/GitHub CLI/gh.exe" auth git-credential' push`.

The repo is **public**: no personal details, nothing about Krupal's employer, no private links other than the artifact link above (it is private and only opens for Krupal), and no other companies' phone or product names (trademarks). Component suppliers and licensed standards may be named as candidates.

## Design rules (Krupal's, in priority order)

1. **Communication and creation, not consumption.** No touchscreen, no swiping, nothing that invites endless scrolling. Speakers are deliberately only entry-level.
2. **Symmetry.** Everything sits on the centre line or is mirrored across it. The screen and keyboard are centred on their halves; the keyboard sits low on its half in the thumb zone and does not mirror the screen across the fold, a deliberate exception Krupal accepted for ergonomics. Edge controls are mirrored left to right.
3. **Clean proportion.** Each half is exactly 6:5 (`W = L * 5 / 6`), open 12:5. Krupal retired the earlier golden proportion (φ²) to widen the phone while keeping its length. Do not nudge either dimension by small amounts; that breaks the ratio.
4. **Minimal outside.** Only what must be there: camera, flash, mics, switches, zoom slider, power button, ports.
5. **Physical controls for big decisions** (silent, connection level), not settings.

Krupal decides; when a change has real trade-offs, lay out the options with a recommendation and ask. UK English, no em dashes.

## Why things are the way they are

Do not undo these without asking Krupal:

- **Flat slide-pad joystick, not a thumbstick:** closed, the screen sits only 0.7 mm above the keys. Every key-deck control must stay within the key height (0.86 mm).
- **Raised frame and four bumpers on the keyboard half:** they hold the glass by its edges so the screen never presses on the keys. The 1.6 mm hinge gap (`ZP = 0.08`) exists for this.
- **Back and Menu only:** the lid answers and ends calls (and one joystick click on End), holding Back goes home, Menu replaces long-press and swipe actions. Call, End and Home keys were removed.
- **Flush 1/2" camera:** a flagship 1/1.28" sensor needs a bump or a 20 mm phone. Krupal chose slim and flush.
- **Hidden hinge with a solid aluminium spine** (body colour, D-shaped section, rounded ends; `spineGeom`) turning at half the hinge angle. A thin open shell was tried and looked like a separate flap; opens to 180° so the phone works as a normal camera. The spine is **flattened** (`SB = 0.35`, 3.5 mm proud when closed) because a full half-round looked too big; it must still span the closed thickness (`SR`).
- **Zoom slider, not a dial:** a spring-return rocker halfway down the right edge of the keyboard half (`ZOOM_D`), mirroring the connection switch exactly. Right thumb in portrait, right index finger in landscape (camera end on the left). A rotating dial was tried at 9 mm (stuck out too much) and 12 mm (flush, but cut a notch into the battery); Krupal would not compromise the battery, so the slider replaced it. It needs only about 2.5 mm of depth.
- **Connection switch Open / Talk / Create:** nested levels named by intent. Talk is software-enforced (calls and data share the modem); Create is a hardware cut; the only way through is the emergency override (hold power 5 s re-enables the cellular rail only, through a hardware latch, for one emergency call).
- **Fingerprint sensor on the power button,** not the zoom control.
- **Number row, keyboard in the thumb zone:** Krupal wanted a dedicated 1 to 0 row. Keys are near-square (6.5 mm tall on a 7.5 mm row pitch, `KEY_H`, `ROW_P`) and the block is built up from the base end (`KEYS_END`, `ROW0`, `NAV_D`), so everything is within about 57 mm of the base. Tall 9.2 mm keys were tried and rejected as too long a reach. Above the navigation row are two rows of four shape keys: make keys (`MAKE_D`: lens Camera, wave voice note, lines Note, diamond assignable) and, nearest the hinge, talk keys (`TALK_D`: plus Call, dash Message, hexagon Contacts, star Favourites). Talk on top, make below, mirroring the phone's purpose. The navigation row is a large 12.4 mm joystick (`STICK_R`, the focal control) between two small pill keys (12 × 6.5 mm, `PILL_X`) with a printed ◁ on Back and □ on Menu (Krupal's choice). Keys physically shaped as a triangle and square, in two sizes, were tried and rejected. No other legend may use a triangle or square. Typing keys are sculpted (`sculpt`, tilted towards the centre) with frets between rows, following BlackBerry practice. Krupal kept the dedicated number row after seeing that BlackBerry used digits on letter keys instead. The deck is now full; do not add more keys without a clear job. Krupal asked for shapes like a games controller; the set is deliberately our own plain outlines, not a copy of any console's symbols. Letters and digits are printed; only the call icons are hidden-until-lit. The bottom-left key is symbols (`#+=`).
- **One replaceable battery behind one screwed door, the back of the keyboard half:** Krupal wants it user-replaceable but not able to pop off in a drop, so the door hooks under the frame at the hinge end and two flush Torx T5 screws clamp the far end (uncommon, but the bit is easy to buy), not clips. Krupal chose this over four corner screws so the gasket is pressed evenly. A second door on the screen half was tried and dropped: two opening parts look unpolished. The keyboard half is given over to the battery (plus a small USB-C and speaker sub-board at the base), so the phone is bottom-heavy; everything else, including the main board, goes in the screen half, which is only thick for the camera anyway.
- **SIM and microSD tray on the screen half's left edge, halfway along:** Krupal chose an edge tray over putting the cards under the battery door, accepting nothing mirrored on the right edge. It sits in the screen half (only thick for the camera) so the keyboard half's space goes to the battery, and it mirrors the connection switch across the fold.
- **Bead-blasted, anodised aluminium, one material throughout:** Krupal wants something that ages well, and heat removal is a top priority (weight is not). Clear and hard anodise barely show wear; dyed colours wear to silver at the edges, accepted as honest wear. Bronze was tried and dropped (skin marks, unpredictable ageing, weight); titanium is poor for heat. Only the door screws are stainless steel, in steel inserts. Five colours (`FINISHES`): Indigo, Blush and Citrus with keys a shade lighter than the body and soft legends in a darker tint of the same colour; Silver and Carbon with black keys and white legends. Values were sampled from Krupal's reference photos. Krupal cut Frost, Sky, Champagne and Ink as repetitive, and earlier rejected Navy, Olive, Rosewood, Graphite and Sand; keep the range small and distinct. Do not name the laptops the palette came from in repo files. Indigo is the default.
- **Core hardware matches a reference entry-level flagship, built from independent parts:** Krupal named the reference privately; it only sets the level. Every part comes from independent suppliers (see the Core parts table in the README). Camera keeps the good lens and sensor with everyday processing (4K HDR up to 60 fps). Professional formats, log, ACES and genlock were removed: they made it a studio camera and drove the heat, chip and battery problems. Krupal wants a simple phone, not a full flagship; check new features against that.
- **Heat out comes first, at a modest level:** no vents or fans (IP68). Efficient non-Pro chip, graphite sheets into the aluminium back of the screen half, a graphite strip through the hinge to a spreader under the keyboard (as current foldables do), insulation between that spreader and the battery. A vapour chamber only if prototype testing needs it. Charging speed and wireless charging do not matter (no wireless charging).
- **No antenna lines:** Krupal did not like visible bands. Antennas use existing gaps: the hinge joints at the hinge end of each half, and the battery door seam as a slot antenna at the base end (door isolated by its gasket and insulating screw bushes). Colour-matched thin bands are only a fallback if RF testing fails.
- **Legibility and the thumb notch:** every key legend must keep at least 4.5:1 contrast against its key; the photo-matched tints (2.0 to 2.4:1) were darkened for daylight. A 14 mm thumb notch at the centre of the keyboard half's base end (frame interrupted, `NOTCH_HW`, plus a shallow scoop) lets a thumb open the shut phone.
- **Minimal outside signals:** the flash's RGB LED is the only one, used three ways: missed call (green, breathing), a favourite calling (their chosen colour, pulsing; Krupal's choice for caller ID with the lid shut, instead of an outside screen), charging (amber, white when full, off when unplugged). Nothing else. The point is to use the phone less.
- **Sapphire lens cover and double-shot PBT keycaps:** the flush camera would rub tables; legends must never wear off.
- **65.5 mm wide, halves 6:5:** 56 mm was cramped (keys 0.2 mm from the frame), 60 mm was better, and research showed the best keyboard phones were 67 to 72 mm wide, so Krupal widened to 65.5 mm at the same length. The key pitch `U` is derived from `W` (outer keys always 1.5 mm inside the frame; 5.8 mm at this width). Along the length the inside layout scales with `KY` (from `L`). A mock-up at 65.5 mm confirms it by hand before tooling. The rear camera sits 12 mm from the far end (`camY`), moved 2 mm towards the hinge to clear the front camera module. A limited left-handed edition mirrors the edges only.
- **Screen stretched, borders equal:** Krupal asked for the screen as large as possible without a camera hole, but with equal top and bottom borders. 3 mm sides (`SCREEN_SIDE`, where the shut glass rests on the frame) and 5.5 mm at both ends (`SCREEN_END`, set by the front camera). The earpiece moved into the far-end edge. Do not add a punch-hole camera.
- **Whole inner top face is one sheet of glass;** front camera on the centre line, earpiece in the top edge.

## Code notes

- three.js r128 from cdnjs plus OrbitControls from jsDelivr `three@0.128.0/examples/js`. Units are centimetres.
- Key labels are one canvas texture across the whole keyboard deck; key caps sample it by position because ExtrudeGeometry lid UVs are world x/y (`keyTex.repeat/offset`). The backlight is a second canvas used as `emissiveMap` with the same transform.
- Edge parts on the left use `rotation.y = -π/2` (shape u → world z), on the right `rotation.y = π/2` (shape u → world -z).
- Artifact pages may only load scripts from approved CDNs; keep everything else inline.
