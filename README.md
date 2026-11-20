# QWERTY Flip Concept

A concept phone for **communication and creation, not consumption**: a clamshell with a screen and a physical QWERTY keyboard inside, no touchscreen and nothing to swipe, a good camera and microphones for making things, and everyday speakers. Not a pro studio camera: photos and video should be good, not studio-grade.

`index.html` is an interactive 3D model of the phone (three.js, loaded from a CDN). Open it in a browser: drag to turn, scroll to zoom, tap the phone to open or close it. The controls under the model change the hinge angle, the wear, the view and the switches, show the phone on a call or after a missed call, and take the battery door off.

## Design principles

- **No touchscreen, no swiping.** Navigation is a joystick, Back and Menu keys, a keyboard and a side dial. Every action is deliberate.
- **Symmetry.** Everything sits on a centre line or is mirrored across it, and the screen lines up with the keyboard across the fold.
- **Golden proportion.** Open, the phone is φ² (2.618) times its width.
- **Physical controls for big decisions.** Silent and connection levels are hardware switches, not settings.
- **Ages well.** One material, finished so that wear softens it instead of chipping it.
- **Ergonomics first.** Comfort in the hand is settled with physical mock-ups, not on screen.

## Specification

### Size

| | |
|---|---|
| Closed | 77 × 56 × 17 mm, flush camera |
| Open flat | 147 × 56 mm |
| Proportion | Open length = φ² × width |
| Each half | 73.3 × 56 × 7.5 mm |

### Core parts

The core hardware is benchmarked against a current entry-level flagship phone, but every part is sourced from independent suppliers. The names below are candidates to confirm against datasheets and supplier quotes, not commitments.

| Part | Target | Candidates |
|---|---|---|
| Chip with 5G modem | Efficient, non-Pro class. Hardware 4K60 HDR video encoding, USB 3 | MediaTek Dimensity 8500 or the current Qualcomm Snapdragon 8s. Final pick depends on the operating system (see Software) |
| Memory and storage | 8 GB RAM, 256 GB minimum | LPDDR5X and UFS 4 |
| Main camera sensor | 48 to 50 MP, about 1/2", 0.8 µm pixels binned to 1.6 µm, phase-detect focus | 50 MP mid-range sensors from Sony (LYTIA), Samsung (ISOCELL) or OmniVision. Sensor size to confirm |
| Main camera lens | 26 mm, f/1.6 to f/1.8, optical stabilisation, flush | A camera module maker's stock module, or a custom one built around the chosen sensor |
| Front camera | About 12 MP, for video calls | Stock module |
| Display | 2.9 in OLED, 50 × 54 mm, no touch layer | A custom cut from a small-OLED maker. The nearest stock panels are flip-phone cover screens |
| HDR video | HDR up to 4K60 | Dolby Vision (licensed) or HLG (free) |
| Fingerprint | On the power button | Side-key capacitive sensor |
| Haptics | Strong, crisp clicks | X-axis linear resonant actuator, the large kind |
| Sensors | Proximity and ambient light | Combined proximity and light sensor |
| Microphones | Four | MEMS microphones |
| Speakers | Earpiece and base speaker, everyday quality | Stock micro-speaker modules |
| Radios | 5G, Wi-Fi 6E or 7, Bluetooth, NFC, dual-band GPS | Mostly in the chip, plus an eSIM chip |
| USB-C | USB 3 (10 Gb/s) | Needs a chip with USB 3 |
| Battery | 48 × 49 × 4 mm, about 1,700 mAh | Custom lithium-ion pouch cell from a cell maker |

### Body

- **Bead-blasted aluminium with a thin clear anodise** for the whole shell, the battery door, the spine, the dial, the power button and the card tray. Wear exposes metal of the same colour underneath, so edges soften to a gentle polish instead of showing chips, as coloured anodising would. The model shows it new, after a year and after years.
- Aluminium spreads heat well; titanium is poor at it, which is why flagship phones have been moving from titanium back to aluminium (see Heat).
- The battery door screws are stainless steel, threaded into steel inserts so repeated battery swaps do not wear the aluminium threads.
- **Bronze was considered** for its patina. It was dropped because it is heavy, can mark damp skin while new, and ages unpredictably from phone to phone.
- **No antenna lines.** A metal shell needs gaps for the radios, but instead of adding bands across the body the antennas use gaps the phone already has:
  - **Hinge joints:** antennas sit at the hinge end of each half, behind the joint where it meets the spine. That joint is already a visible break, so nothing new shows. The hinge end is one end of the phone when shut and the middle when open.
  - **Battery door seam:** the hairline seam round the door works as a slot antenna at the base end, the far end of the phone when open. The door sits on its gasket, and insulating bushes on the screws keep it isolated from the frame.
  - The gaps are filled with polymer tinted to match the aluminium.
  - Two antenna areas at opposite ends give the diversity a phone needs: if a hand covers one, the other still works.
  - Thin, colour-matched bands remain the fallback if radio testing shows the hidden gaps are not enough.
- **Water and dust:** IP68, to the same depth and time as current flagship phones. Seals: a gasket under the battery door, a gasket on the card tray, O-rings on both switches and the dial shaft, mesh membranes behind the speaker and microphone holes, a sealed USB-C port.

### Inside, top half

- One sheet of glass over the whole inner face.
- 2.9 in OLED display, 50 × 54 mm, **no touch layer**. Same width as the keyboard, equal 9.5 mm margins top and bottom, lower edge level with the top of the keyboard deck.
- Front camera for video calls and an earpiece slit, both on the centre line above the screen.
- Proximity and ambient light sensors under the glass, either side of the front camera. The proximity sensor makes the keys ignore your cheek on a call.

### Inside, bottom half

- Navigation row: Back, a clickable low-profile joystick (a slide pad, so it clears the screen when shut), Menu.
- 34-key QWERTY. Letter-only legends at rest; digits and call icons are printed in hidden-until-lit ink and only appear when the key backlight shows them.
- Microphone centred below the keys.
- A 1.3 mm raised frame with four soft bumpers holds the glass by its edges when closed, so the screen sits 0.7 mm clear of the keys.

### Edges

| | Near the hinge | Halfway down |
|---|---|---|
| **Left** | Silent switch | Connection switch |
| **Right** | Power button with fingerprint sensor | Camera-style zoom dial |

- **Silent switch:** two positions. Mutes ringer and alerts; uncovers an orange strip when on.
- **Connection switch:** three positions. The further you slide it, the more teal shows.

| Position | What's cut | What still works |
|---|---|---|
| Open | Nothing | Everything |
| Talk | All internet: mobile data and Wi-Fi (software-enforced) | Calls, texts, Bluetooth |
| Create | Every radio, cut in hardware | Camera, mics, notes. **No emergency calls** |

- **Power button:** flush aluminium key with a fingerprint sensor. Rest your thumb on it as you open the lid to unlock; hold to switch off or call for help.
- **Zoom dial:** knurled aluminium disc. Zoom in the camera, volume everywhere else. In landscape (camera end on the left) it sits on the top edge under the right index finger.

- **Card tray:** on the screen half, halfway along its left edge. It is the mirror of the connection switch across the fold, so when the phone is shut it sits directly over the switch. One double-sided tray, 13 mm long, flush aluminium face with the eject pinhole in it: one nano SIM on one side, one microSD card on the other. Nothing is mirrored opposite it on the right edge; that was a deliberate choice so cards swap without opening the phone.
- The card reader sits in the screen half with the main board, so the keyboard half keeps its space for the battery.

### Battery

- **One user-replaceable cell** behind **one door**: the whole back of the keyboard half. One opening part looks more finished than two.
- **The keyboard half is given over to the battery**, the heaviest part, so the phone is bottom-heavy, as it should be. Only a small sub-board for USB-C and the speaker shares it, at the base end.
- **Everything else goes in the screen half**, which is only 7.5 mm thick because of the camera: the main board (stacked, beside the card reader, below the camera), the card reader, cameras and earpiece. The board reaches the battery through the hinge.
- The door is held by **four flush Torx T5 screws**, one in each corner, not clips, so a drop cannot knock it off. A coin or fingernail will not open it, but a T5 bit is in any precision screwdriver set. A gasket under the door seals the bay.
- The cell lifts out by a pull tab at its hinge end: no glue, no prying.

| | |
|---|---|
| Cell | 48 × 49 mm, about 4 mm thick, full width between the screw rows |
| Capacity | About 1,700 mAh (estimate) |
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
- **Haptics:** a large linear resonant actuator, as strong and crisp as the best phone haptics, in the screen half with the main board. It gives alerts when the silent switch is on, and soft clicks for the joystick and for zoom steps on the dial.
- **Missed calls:** the flash has a low-power coloured LED. With the lid shut, it breathes softly after a missed call until you open the phone. Nothing more: the point is to use the phone less, so there is no wider notification system. It can be turned off.

### Connectivity and storage

- One nano SIM plus eSIM.
- 256 GB built-in storage at minimum, plus the microSD slot.
- USB-C at USB 3 (10 Gb/s), for moving video off quickly; many entry-level phones are USB 2. Microphones, audio interfaces, drives and power for accessories. No 3.5 mm jack; USB-C audio covers creators.
- No wireless charging. Charging speed is not a priority.

### Ergonomics

- **Key pitch.** At 56 mm wide, ten keys per row gives a 5.0 mm pitch and 4.3 mm caps, which is cramped for thumbs. Widening keeps the golden proportion, so the phone grows in length too:

| Width | Key pitch | Closed | Open |
|---|---|---|---|
| 56 mm (current) | 5.0 mm | 77 × 56 mm | 147 mm |
| 60 mm | 5.4 mm | 82 × 60 mm | 157 mm |
| 64 mm | 5.8 mm | 88 × 64 mm | 168 mm |

- **Decision method:** print keyboard mock-ups at all three widths and type on them (speed, errors, thumb strain) before choosing. The model stays at 56 mm until then.
- The mock-ups also test the weight and balance in the hand, reaching the dial and power button, and the edges of the battery door.
- **Left-handed edition:** a limited run with the edges mirrored (dial and power button on the left, switches on the right, card tray on the right). The keyboard stays the same. Because everything is already symmetric, it needs mirrored edge parts, not a new design.

### Outside

- Almost nothing: one flush rear camera with a flash and a microphone either side of it, and an aluminium spine over the hinge. No antenna lines.
- The back of the keyboard half is the battery door: a hairline seam and four flush Torx screws.
- Base edge: USB-C (USB 3) in the centre, with five holes on each side (speaker on the right, microphone behind the left).
- Top edge: one microphone.

### Hinge

- Hidden hinge with a full-width aluminium spine cover that turns at half the hinge angle. A graphite heat pipe runs through it (see Heat).
- The spine is flattened (elliptical), so when closed it stands only 3.5 mm proud of the hinge end instead of a full 8.3 mm half-round. Open, it sits inside the halves.
- 0° to 180°, holds any angle. Opens flat so the phone works as a normal camera.
- 1.6 mm gap between the halves when closed.

### Camera

| | |
|---|---|
| Rear | 48 MP, 1/2" sensor, flush with the back |
| Pixels | 0.8 µm, 1.6 µm binned to 12 MP |
| Lens | 26 mm, f/1.8 |
| Stabilisation | Optical |
| Front | For video calls |

A larger 1/1.28" sensor (as in current flagship phones) was considered; it needs a camera bump or a 20 mm thick phone, so the smaller flush sensor was chosen.

### Audio and video

- **Everyday processing, on purpose.** The lens and sensor above are good; the processing behind them is at entry-level flagship level, not Pro. No professional formats (raw or intermediate codecs), log, ACES or genlock: those need a Pro chip and heavy cooling, and belong to a studio camera.
- Video: 4K HDR at 24 to 60 fps, strong electronic stabilisation on top of the optical, 8 MP stills while recording 4K.
- Four microphones; spatial and stereo recording; wind noise reduction.
- Stereo speakers (earpiece plus base-edge grille), at entry-level phone quality on purpose.

### Calls

- Open the lid to answer, close it to hang up. On the call screen, End is highlighted by default, so one joystick click also hangs up.
- On a call the keyboard becomes call controls (the icons light up): **M** mute, **H** hold, **S** speaker, **A** add a call, **N** take a note, **1 to 0** tones, **hold X** to end.
- A proximity sensor ignores all keys while the phone is at your ear.

## Open questions

Not designed yet:

**Software (the biggest gap)**
- Own minimal system or an adapted Android? Most people talk through WhatsApp and similar apps, which are built for touch.
- Banking and two-factor apps, maps, email, contactless payments.
- Moving large video files to a computer; a companion app for editing.
- Accessibility (screen reader, large text, voice control) and non-English input.

**Hardware**
- Battery life on about 1,700 mAh, especially for 4K recording.
- Confirm on a prototype that graphite spreading is enough for 30 minutes of 4K60, and how warm the keys get.
- Radio performance of the hidden antennas (hinge joints and door seam), especially with the phone shut in a pocket.
- Dent resistance of the aluminium spine and edges after drops.

**Use**
- Keyboard mock-ups at 56, 60 and 64 mm; choose the width.
- Vlogging (the front camera is only rated for calls) and a tripod mount. One idea: a clip-on cage with a tripod thread that also acts as an extra heat sink for long shoots.

**Business**
- Radio, safety and network certification; cost of parts against a minimalist price point; hinge patents; trademarks (avoid other companies' product names in anything public).

## Files

- `index.html`: the interactive 3D model, self-contained apart from three.js and Google Fonts from their CDNs. Generated from `model.html` by `node tools/wrap.js`.
- `model.html`: the source of the model.
- `CLAUDE.md`: how to work on the model and the reasons behind the design.
