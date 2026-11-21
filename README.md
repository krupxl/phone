# QWERTY Flip Concept

A concept phone for **communication and creation, not consumption**: a clamshell with a screen and a physical QWERTY keyboard inside, no touchscreen and nothing to swipe, a good camera and microphones for making things, and everyday speakers. Not a pro studio camera: photos and video should be good, not studio-grade.

`index.html` is an interactive 3D model of the phone (three.js, loaded from a CDN). Open it in a browser: drag to turn, scroll to zoom, tap the phone to open or close it. The controls under the model change the hinge angle, the colour, the view and the switches, show the phone on a call or after a missed call, and take the battery door off.

## Design principles

- **No touchscreen, no swiping.** Navigation is a joystick, Back and Menu keys, a keyboard and a side zoom slider. Every action is deliberate.
- **Symmetry.** Everything sits on a centre line or is mirrored across it. One deliberate exception: the keyboard sits low on its half, in the thumb zone, so it no longer mirrors the screen across the fold.
- **Clean proportion.** Each half is exactly 6:5, so the open phone is 12:5.
- **Physical controls for big decisions.** Silent and connection levels are hardware switches, not settings.
- **Ages well.** One material, finished so that wear softens it instead of chipping it.
- **Ergonomics first.** Comfort in the hand is settled with physical mock-ups, not on screen.

## Specification

### Size

| | |
|---|---|
| Closed | 82 × 65.5 × 17 mm, flush camera |
| Open flat | 157 × 65.5 mm |
| Proportion | Each half 6:5 (length : width); open 12:5 |
| Each half | 78.5 × 65.5 × 7.5 mm |
| Weight | About 160 to 180 g (estimate) |

### Core parts

The core hardware is benchmarked against a current entry-level flagship phone, but every part is sourced from independent suppliers. The names below are candidates to confirm against datasheets and supplier quotes, not commitments.

| Part | Target | Candidates |
|---|---|---|
| Chip with 5G modem | Efficient, non-Pro class. Hardware 4K60 HDR video encoding, USB 3 | MediaTek Dimensity 8500 or the current Qualcomm Snapdragon 8s. Final pick depends on the operating system (see Software) |
| Memory and storage | 8 GB RAM, 256 GB minimum | LPDDR5X and UFS 4 |
| Main camera sensor | 48 to 50 MP, about 1/2", 0.8 µm pixels binned to 1.6 µm, phase-detect focus | 50 MP mid-range sensors from Sony (LYTIA), Samsung (ISOCELL) or OmniVision. Sensor size to confirm |
| Main camera lens | 26 mm, f/1.6 to f/1.8, optical stabilisation, flush, under a sapphire cover | A camera module maker's stock module, or a custom one built around the chosen sensor |
| Front camera | About 12 MP, for video calls | Stock module |
| Display | 3.5 in OLED, 59.5 × 67.5 mm, about 1080 × 1224 (460 ppi), 60 Hz, about 1,500 nits outdoors, no touch layer, slim borders | A custom cut from a small-OLED maker. The nearest stock panels are flip-phone cover screens |
| HDR video | HDR up to 4K60 | Dolby Vision (licensed) or HLG (free) |
| Fingerprint | On the power button | Side-key capacitive sensor |
| Haptics | Strong, crisp clicks | X-axis linear resonant actuator, the large kind |
| Sensors | Proximity and ambient light | Combined proximity and light sensor |
| Microphones | Four | MEMS microphones |
| Speakers | Earpiece and base speaker, everyday quality | Stock micro-speaker modules |
| Radios | 5G, Wi-Fi 6E or 7, Bluetooth, NFC, dual-band GPS | Mostly in the chip, plus an eSIM chip |
| USB-C | USB 3 (10 Gb/s) | Needs a chip with USB 3 |
| Battery | 57.5 × 54.5 × 4 mm, about 2,250 mAh | Custom lithium-ion pouch cell from a cell maker |

### Body

- **Bead-blasted aluminium** for the whole shell, the battery door, the spine, the zoom slider, the power button and the card tray, all in the same colour.
- **Five colours.** Three have keys matched to the body (Indigo, Blush, Citrus); two have black keys with white legends (Silver, Carbon). One light neutral, one dark neutral, three colours. Frost, Sky, Champagne and Ink were tried and cut as too close to the others.
- The keyboard deck is always the body colour. A black keyboard well (as on some laptops) was tried on Silver and Carbon and dropped.
- **Matching keys:** The keys are a shade lighter than the body, and the legends are a darker tint of the same colour rather than black ink, so the keyboard looks of a piece with the phone.

| Colour | Finish | Keys | How it ages |
|---|---|---|---|
| Indigo | Dyed anodise, muted slate blue | A lighter slate blue, legends in deep slate | Edges slowly wear to silver |
| Blush | Dyed anodise, pale pink | A lighter pink, legends in deep dusty pink-grey | Edges wear to silver, barely visible on a light colour |
| Citrus | Dyed anodise, pale lemon yellow | A lighter lemon, legends in deep olive-grey | As Blush |
| Silver | Clear anodise | Black, white legends | Wear is the same colour, so edges just soften. Ages best |
| Carbon | Dyed anodise, warm dark grey | Black, white legends | Edges slowly wear to silver |

- The call legends that light up on a call (digits and icons) work on every colour.
- Aluminium spreads heat well; titanium is poor at it, which is why flagship phones have been moving from titanium back to aluminium (see Heat).
- The battery door screws are stainless steel, threaded into steel inserts so repeated battery swaps do not wear the aluminium threads.
- **Bronze was considered** for its patina. It was dropped because it is heavy, can mark damp skin while new, and ages unpredictably from phone to phone.
- **No antenna lines.** A metal shell needs gaps for the radios, but instead of adding bands across the body the antennas use gaps the phone already has:
  - **Hinge joints:** antennas sit at the hinge end of each half, behind the joint where it meets the spine. That joint is already a visible break, so nothing new shows. The hinge end is one end of the phone when shut and the middle when open.
  - **Battery door seam:** the hairline seam round the door works as a slot antenna at the base end, the far end of the phone when open. The door sits on its gasket, and insulating bushes on the screws keep it isolated from the frame.
  - The gaps are filled with polymer tinted to match the aluminium.
  - Two antenna areas at opposite ends give the diversity a phone needs: if a hand covers one, the other still works.
  - Thin, colour-matched bands remain the fallback if radio testing shows the hidden gaps are not enough.
- **Water and dust:** IP68, to the same depth and time as current flagship phones. Seals: a gasket under the battery door, a gasket on the card tray, O-rings on both switches and the zoom slider, mesh membranes behind the speaker and microphone holes, a sealed USB-C port.

### Inside, top half

- One sheet of glass over the whole inner face.
- 3.5 in OLED display, 59.5 × 67.5 mm, **no touch layer**, stretched as far as it goes without a camera hole:
  - **Sides 3 mm:** the strip where the shut glass rests on the keyboard's raised frame and bumpers.
  - **Ends 5.5 mm, equal top and bottom** (symmetry): set by the front camera at the far end.
- Front camera for video calls on the centre line above the screen, with the proximity and light sensors either side. No punch-hole: the screen stays whole.
- The earpiece is a slit in the far-end edge, just behind the glass, so the face is free for the screen.
- Proximity and ambient light sensors under the glass, either side of the front camera. The proximity sensor makes the keys ignore your cheek on a call.

### Inside, bottom half

- Navigation row: the clickable low-profile joystick (a slide pad, so it clears the screen when shut) is the focal control, 12.4 mm across, between two small pill keys (12 × 6.5 mm, as tall as a letter key), each centred between the joystick ring and the keyboard edge. Back has a printed **◁** and Menu a printed **□**, so the row reads triangle, circle, square, mirrored about the centre line. Keys physically shaped as a triangle and a square were tried and rejected. The shapes are the legends. It sits just above the number row.
- 44 keys: a full **number row** (1 to 0) above a QWERTY. Letters and digits are printed. The bottom-left key switches to symbols.
- **Near-square keys in the thumb zone.** Keys are 5.1 mm wide on a 5.8 mm pitch and 6.5 mm tall on a 7.5 mm row pitch, at least 1.5 mm clear of the frame. Earlier keys were 9.2 mm tall on 11.1 mm rows, which spread the keyboard over 68 mm and put Back, joystick and Menu 62 to 74 mm from the base, beyond a comfortable thumb reach. Now the whole block (navigation row, five rows) is 51 mm long, built up from the base: the bottom row is 6 mm from the base edge and the navigation row 45 to 57 mm.
- Microphone centred below the keys.
- **Talk and make keys:** two rows of four wide keys above the navigation row, each marked with a plain outlined shape. Together they spell out the phone's purpose: talk on top, make below.

| Row | Shape | Key |
|---|---|---|
| Talk (top) | Plus | Call: open the dialler or call a favourite |
| Talk | Dash | Message: start a new message |
| Talk | Hexagon | Contacts |
| Talk | Star | Favourites: your few people, one press away |
| Make | Lens (ring and dot) | Camera, from anywhere |
| Make | Wave | Voice note: hold to record, release to save |
| Make | Lines | Note: straight to a blank page |
| Make | Diamond | Yours to assign |

  They cost no battery (they use the keyboard layer). Being the furthest keys from the base, they suit occasional, deliberate presses, never typing. A front speaker was considered for this space but would cost about 400 mAh of battery. Every shape means one thing: triangle and square belong to Back and Menu only.
- **Sculpted keys and frets** (from the research below): on the typing rows each key tilts slightly towards the centre of the keyboard, raised at its outer edge, so each thumb meets its keys squarely and can find them by feel. Thin frets in the body colour run between the rows, 0.3 mm tall: they separate the rows so a thumb does not catch two at once, and give a line to feel for without looking. This is long-standing keyboard-phone practice rather than a measured result.
- A 1.3 mm raised frame with four soft bumpers holds the glass by its edges when closed, so the screen sits 0.7 mm clear of the keys.
- **Thumb notch:** at the centre of the base end, the frame is interrupted for 14 mm and the edge has a shallow scoop (about 1.2 mm deep), so a thumb can lift the shut screen half. It sits on the centre line, above the USB-C port.
- **Keycaps:** double-shot PBT. The legend is moulded through the key in a second plastic, so it can never wear off, and PBT does not go shiny with use: the keyboard ages as well as the body. The backlight shines through the legends.
- **Legibility:** every legend has at least 4.5:1 contrast against its key, so it reads in daylight. The tinted legends first matched the reference photos at only 2.0 to 2.4:1 and were darkened, keeping their tint; the keyboard backlight covers the dark.

### Edges

| | Near the hinge | Halfway down |
|---|---|---|
| **Left** | Silent switch | Connection switch |
| **Right** | Power button with fingerprint sensor | Spring-return zoom slider |

- **Silent switch:** two positions. Mutes ringer and alerts; uncovers an orange strip when on.
- **Connection switch:** three positions. The further you slide it, the more teal shows.

| Position | What's cut | What still works |
|---|---|---|
| Open | Nothing | Everything |
| Talk | All internet: mobile data and Wi-Fi (software-enforced) | Calls, texts, Bluetooth |
| Create | Every radio, cut in hardware | Camera, mics, notes. **No emergency calls:** slide to Talk to make one |

- **Power button:** flush aluminium key with a fingerprint sensor. Rest your thumb on it as you open the lid to unlock; hold to switch off or call for help.
- **Zoom slider:** a spring-return rocker in a 10 mm slot, exactly opposite the connection switch (same position, same size), with a ridged knob so the two are easy to tell apart by feel. Slide towards the hinge to zoom in (volume up elsewhere), away to zoom out (volume down); hold to keep zooming; let go and it springs back to the centre, like a camera's zoom lever. The haptic actuator ticks for each zoom step. It needs only about 2.5 mm of depth, so the battery keeps its full width. In landscape (camera end on the left) it sits on the top edge under the right index finger. A rotating dial was dropped: it stood proud of the edge, and a flush one would have cut into the battery.

- **Create is a true kill switch, with no exceptions:** nothing in hardware or software can turn a radio back on while the switch is in Create, emergency calls included. The switch itself is the way out: sliding it to Talk (under a second) restores calls, emergency calls among them. The screen says so plainly in Create, and if you dial an emergency number it tells you to slide to Talk. A power-button override that re-enabled the cellular radio was considered and dropped: a kill switch with a back door is not a kill switch.
- **Card tray:** on the screen half, halfway along its left edge. It is the mirror of the connection switch across the fold, so when the phone is shut it sits directly over the switch. One double-sided tray, 13 mm long, flush aluminium face with the eject pinhole in it: one nano SIM on one side, one microSD card on the other. Nothing is mirrored opposite it on the right edge; that was a deliberate choice so cards swap without opening the phone.
- The card reader sits in the screen half with the main board, so the keyboard half keeps its space for the battery.

### Battery

- **One user-replaceable cell** behind **one door**: the whole back of the keyboard half. One opening part looks more finished than two.
- **The keyboard half is given over to the battery**, the heaviest part, so the phone is bottom-heavy, as it should be. Only a small sub-board for USB-C and the speaker shares it, at the base end.
- **Everything else goes in the screen half**, which is only 7.5 mm thick because of the camera: the main board (stacked, beside the card reader, below the camera), the card reader, cameras and earpiece. The board reaches the battery through the hinge.
- The door **hooks under the frame at the hinge end** and is clamped at the far end by **two flush Torx T5 screws**, not clips, so a drop cannot knock it off and the gasket is pressed evenly all round. A coin or fingernail will not open it, but a T5 bit is in any precision screwdriver set. To swap the battery: undo two screws, lift the far end, slide the door out of its lip. A gasket under the door seals the bay.
- The cell lifts out by a pull tab at its hinge end: no glue, no prying.

| | |
|---|---|
| Cell | 57.5 × 54.5 mm, about 4 mm thick, nearly the full width of the bay |
| Capacity | About 2,250 mAh (estimate) |
| Below it | A 34 × 5 mm sub-board for USB-C and the speaker |

### Heat

Getting heat out matters more than charging speed. With everyday video processing, it is a modest problem: an efficient, non-Pro chip recording 4K, not a Pro chip encoding professional video formats. There are no vents or fans (they would break IP68).

1. **Spread it in the screen half.** Graphite sheets carry heat from the chip into the aluminium back of the screen half, and a graphite layer behind the display stops hot spots on the screen. A small vapour chamber is added only if prototype testing needs one.
2. **Share it through the hinge.** A flexible graphite strip runs through the hinge into the keyboard half, to a spreader under the keyboard deck bonded to the aluminium frame, as current foldable phones do. It is cheap and roughly doubles the surface shedding heat when the phone is open.
3. **Keep the battery cool.** An insulating sheet sits between that spreader and the battery. Batteries age faster when warm, and the split layout already puts the chip and the battery in different halves.
4. **Target:** 4K60 recording for 30 minutes without throttling, at a surface temperature that is comfortable to hold. To be confirmed on a prototype.

Pro-level cooling (memory beside the chip, a metal-over-foam pad, a large vapour chamber, as in current Pro and foldable flagships) is not needed at this level of processing.

### Sensors and feedback

- Proximity and ambient light sensors by the earpiece (see Inside, top half).
- **Haptics:** a large linear resonant actuator, as strong and crisp as the best phone haptics, in the screen half with the main board. It gives alerts when the silent switch is on, and soft clicks for the joystick and for zoom steps on the slider.
- **The flash's colour LED** (full colour, low power) is the only signal on the outside, and it is used for three things, each distinct:
  - **Missed call:** with the lid shut, it breathes slowly in green until you open the phone.
  - **A favourite calling:** it glows that person's colour (you choose one per favourite), pulsing with the ring, so you know who it is without opening. Anyone else just rings.
  - **Charging:** steady amber while plugged in, soft white when full, off once unplugged.

  Nothing more: the point is to use the phone less, so there is no wider notification system. Each use can be turned off.

### Connectivity and storage

- One nano SIM plus eSIM.
- 256 GB built-in storage at minimum, plus the microSD slot.
- USB-C at USB 3 (10 Gb/s), for moving video off quickly; many entry-level phones are USB 2. Microphones, audio interfaces, drives and power for accessories. No 3.5 mm jack; USB-C audio covers creators.
- No wireless charging. Charging speed is not a priority.

### Ergonomics

- **Width: 65.5 mm, halves 6:5.** At the original 56 mm, ten keys per row gave a 5.0 mm pitch with the outer keys only 0.2 mm from the raised frame, which looked jammed and was cramped for thumbs. Widening to 60 mm (golden proportion kept) gave 5.2 mm. Research on keyboard phones showed width matters most (the best-loved ones were about 67 to 72 mm), so the phone was widened again to 65.5 mm, keeping its 82 mm closed length: each half is now exactly 6:5 and the golden proportion was retired. Keys have a 5.8 mm pitch, 1.5 mm clear of the frame:

| Width | Key pitch | Clear of frame | Closed | Open |
|---|---|---|---|---|
| 56 mm (old) | 5.0 mm | 0.2 mm | 77 × 56 mm | 147 mm |
| 60 mm (φ²) | 5.2 mm | 1.5 mm | 82 × 60 mm | 157 mm |
| **65.5 mm (chosen, 6:5)** | **5.8 mm** | **1.5 mm** | **82 × 65.5 mm** | **157 mm** |
| 64 mm | 5.6 mm | 1.5 mm | 88 × 64 mm | 168 mm |

- The wider body also gave a bigger screen (3.5 in) and battery (about 2,250 mAh).
- **Confirm by hand:** print a keyboard mock-up at 65.5 mm and type on it (speed, errors, thumb strain) before tooling.
- The mock-ups also test the weight and balance in the hand, reaching the zoom slider and power button, and the edges of the battery door.
- **What keyboard phones teach (research, November 2026):**
  - The best-loved keyboard phones were wider than this one (about 67 to 72 mm), and the most praised one gained its reputation partly by widening its keyboard. Width is the single biggest factor, so the 64 mm mock-up is worth making.
  - Those keyboards had four rows and put digits on a phone-style 3×3 block of letter keys. This phone keeps a dedicated number row by choice, accepting one more row of thumb travel.
  - Comfort came from sculpted keys angled towards each thumb, frets between rows, and a light, fast press, more than from key count. This phone adopts the first two; the third is for the key mechanism supplier.
  - Thumb travel is what slows typing; models of two-thumb typing reward short distances and alternating thumbs. Hence the compact block in the thumb zone and the shortcut rows at the far end.
  - A portrait clamshell with a full QWERTY is almost untried (earlier keyboard clamshells opened sideways into landscape), so physical mock-ups matter more here than usual.
- **Left-handed edition:** a limited run with the edges mirrored (zoom slider and power button on the left, switches on the right, card tray on the right). The keyboard stays the same. Because everything is already symmetric, it needs mirrored edge parts, not a new design.

### Outside

- Almost nothing: one flush rear camera with a flash and a microphone either side of it, and an aluminium spine over the hinge. No antenna lines.
- The back of the keyboard half is the battery door: a hairline seam and two flush Torx screws at the far end.
- Base edge: USB-C (USB 3) in the centre, with five holes on each side (speaker on the right, microphone behind the left).
- Top edge: one microphone.

### Hinge

- Hidden hinge with a full-width aluminium spine cover that turns at half the hinge angle. A graphite heat pipe runs through it (see Heat).
- The spine is a solid, rounded barrel in the body colour, with a D-shaped section and rounded ends, so shut it reads as part of the body: it runs flush into both backs and leaves only a 1 mm seam beside the halves' hinge ends. It is flattened (elliptical), standing only 3.5 mm proud of the hinge end instead of a full 8.3 mm half-round. Open flat, it tucks just below the inner faces.
- 0° to 180°, holds any angle. Opens flat so the phone works as a normal camera.
- 1.6 mm gap between the halves when closed.

### Camera

| | |
|---|---|
| Rear | 48 MP, 1/2" sensor, flush with the back under a sapphire cover |
| Pixels | 0.8 µm, 1.6 µm binned to 12 MP |
| Lens | 26 mm, f/1.8 |
| Stabilisation | Optical |
| Front | For video calls |

A larger 1/1.28" sensor (as in current flagship phones) was considered; it needs a camera bump or a 20 mm thick phone, so the smaller flush sensor was chosen.

### Audio and video

- **Everyday processing, on purpose.** The lens and sensor above are good; the processing behind them is at entry-level flagship level, not Pro. No professional formats (raw or intermediate codecs), log, ACES or genlock: those need a Pro chip and heavy cooling, and belong to a studio camera.
- Video: 4K HDR at 24 to 60 fps, strong electronic stabilisation on top of the optical, 8 MP stills while recording 4K.
- Four microphones; spatial and stereo recording; wind noise reduction.
- Stereo speakers (top-edge earpiece slit plus base-edge grille), at entry-level phone quality on purpose.

### Calls

- Open the lid to answer, close it to hang up. On the call screen, End is highlighted by default, so one joystick click also hangs up.
- On a call the controls (Mute, Hold, Speaker, End, Add call, Note, Keypad, Record) are on the eight shape keys, labelled by an on-screen strip just above them; the number row sends tones. See `SOFTWARE.md`, the key strip.
- A proximity sensor ignores all keys while the phone is at your ear.

## Open questions

Not designed yet:

**Software** (foundation decided; see `SOFTWARE.md`)
- Google-certified Android with our own touch-free "ink" interface, a short curated list of third-party apps (WhatsApp, Signal, banking and two-factor, maps and rides) and a links-only browser.
- Open: Google certification for a phone with no touchscreen; the chip vendor's update commitment; testing the curated apps without touch; email; screen-by-screen interface design.

**Hardware**
- Battery life on about 2,250 mAh, especially for 4K recording.
- Confirm on a prototype that graphite spreading is enough for 30 minutes of 4K60, and how warm the keys get.
- Radio performance of the hidden antennas (hinge joints and door seam), especially with the phone shut in a pocket.
- Dent resistance of the aluminium spine and edges after drops.

**Use**
- A keyboard mock-up at 65.5 mm to confirm the width by hand.
- Vlogging (the front camera is only rated for calls) and a tripod mount. One idea: a clip-on cage with a tripod thread that also acts as an extra heat sink for long shoots.

**Name and identity (working idea)**
- Working name: **Ink Flip**, one of several names to explore. Carbon (the existing dark finish) as the signature colour, and a screen that is mostly quiet "ink" (black and white), using colour only where it does a job.
- Not yet decided. To check for any name: existing trademarks; and, for Ink Flip, that "Ink" does not suggest an e-paper display, since this one is OLED.

**Business**
- Radio, safety and network certification; cost of parts against a minimalist price point; hinge patents; trademarks (avoid other companies' product names in anything public).

## Files

- `index.html`: the interactive 3D model, self-contained apart from three.js and Google Fonts from their CDNs. Generated from `model.html` by `node tools/wrap.js`.
- `model.html`: the source of the model.
- `screens/`: the screen designs for the ink interface, 14 screens (see `screens/README.md`).
- `SOFTWARE.md`: the software foundation: principles, base system, controls, home, core and curated apps, the switches in software, signals, accessibility and open questions.
- `ENGINEERING.md`: the engineering brief for the team: construction, internal layout and stack-ups of each half, hinge, every fastener, electrical architecture, heat, antennas, sealing, assembly and repair, testing and the risk list.
- `CLAUDE.md`: how to work on the model and the reasons behind the design.
