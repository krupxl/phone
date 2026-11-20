# QWERTY Flip: Engineering Brief

The design input for the engineering team. `README.md` says what the phone is and why; this says how it could be built, half by half, down to the screws.

**How to read the numbers.** Outside dimensions and positions come straight from the 3D model (`model.html`) and are fixed design intent. Everything inside the shell (thicknesses, part sizes, screw counts, signal lists) is a first estimate for the team to verify against supplier datasheets, CAD and prototypes. Estimates are marked *(est.)*. Nothing here replaces CAD, PCB layout or tolerance analysis.

**Open variable: the chip.** The main chip (with its power management chip and modem) is either a MediaTek Dimensity 8500 class or a current Qualcomm Snapdragon 8s class part. The choice waits on the software decision. This brief is written so either fits; where they differ, both are noted.

Positions are given as millimetres **from the hinge** along the length of each half, and **from the centre line** across the width.

---

## 1. Overall

| | |
|---|---|
| Width | 65.5 mm |
| Each half | 78.5 × 65.5 × 7.5 mm, exactly 6:5 |
| Closed | 82 × 65.5 × 17 mm (two halves, 1.6 mm gap, spine 3.5 mm proud of the hinge end) |
| Open flat | 157 × 65.5 mm, 12:5 |
| Corners | 1.4 mm edge bevel all round; outer corners 6.2 mm radius at the far ends, 1.6 mm at the hinge end |
| Material | Bead-blasted 6000-series aluminium, anodised (clear, or dyed for colours) |
| Weight | About 140 to 160 g *(est.)*, unconstrained by design |

**Split of contents (bottom-heavy by design):**

- **Keyboard half:** keyboard, battery, a small USB-C / speaker / charging sub-board, edge controls (silent switch, connection switch, power button, zoom slider), two microphones, base speaker.
- **Screen half:** display, main board (chip, memory, storage, modem, radios), card reader, rear and front cameras, flash, earpiece, haptic actuator, sensors, two microphones.

---

## 2. Construction

Each half is a **machined aluminium unibody** (one block per half: walls, deck or back, and internal ribs and bosses in one part).

- **Keyboard half:** unibody with the keyboard deck on the inside face and an **open back**, closed by the battery door. It assembles **from the back**: keycaps and mechanism go in from behind the deck (as a laptop top case), then the internals, then the battery and door. Everything is reachable through the door.
- **Screen half:** unibody with a **closed back** (camera window machined in) and an **open front**, closed by the cover glass with the display bonded to it. It assembles **from the front**: internals in, display and glass bonded last.
- **Hinge:** a separate module screwed into both unibodies through the hinge end, covered by the aluminium spine.

Why this split: the user-facing repair (battery) is two screws from the back, and the keyboard half needs no glue at all. The screen half uses adhesive only where sealing needs it (the glass).

---

## 3. Keyboard half

### 3.1 Inside face (deck)

| Feature | From the hinge | Notes |
|---|---|---|
| Raised frame | 0 to 2.8 mm and 75.7 to 78.5 mm; 1.4 mm wide all round | 1.3 mm tall; carries the shut glass by its outer margin. Interrupted for 14 mm at the centre of the base end (thumb notch) |
| Thumb notch | Base end, centred, 14 mm wide | Scoop in the unibody's inner edge, about 1.2 mm deep, so a thumb can lift the shut screen half; 0.25 mm or more clear of the USB-C opening below |
| Soft bumpers | 4, on the frame, 17.1 mm either side of the centre line, at both ends | 0.3 mm tall; with the frame they hold the glass 0.7 mm above the keys |
| Talk keys | 4.5 to 11.0 mm | 4 keys, 13.7 × 6.5 mm on a 14.4 mm pitch: plus (Call), dash (Message), hexagon (Contacts), star (Favourites) |
| Make keys | 12.0 to 18.5 mm | 4 keys, 13.7 × 6.5 mm on a 14.4 mm pitch: lens (Camera), wave (voice note), lines (Note), diamond (assignable) |
| Navigation row | 20.5 to 33.9 mm | Back and Menu: pill caps, 12 × 6.5 mm, 11.8 to 23.8 mm either side of the centre line, centred between the joystick ring and the keyboard edge, printed ◁ and □. Joystick: round, 12.4 mm, centre |
| Frets | Between the five typing rows | 4 bars, 56.6 × 0.5 mm, 0.3 mm tall, aluminium in the body colour |
| Joystick | Centred | Slide pad, 12.4 mm cap, in a recess ring 13.5 mm across; clicks |
| Number row | 35.9 to 42.4 mm | 1 to 0 |
| Key rows | 5 rows (numbers, Q–P, A–L, Z–M, bottom), 7.5 mm row pitch, keys 6.5 mm tall × 5.1 mm wide, 5.8 mm pitch across | Ends at 72.4 mm, 6 mm from the base edge. Everything within about 57 mm of the base for thumb reach |
| Keyboard microphone | 74.1 mm, centred | 0.9 mm hole |

**Legends:** printed (pad-printed or laser-etched through a coating, supplier to propose), at least 4.5:1 contrast against the key colour; the call icons are hidden-until-lit ink over the backlight.

**Key mechanism:** keys stand 0.86 mm above the deck. Typing keys are sculpted: each cap tilts about 3.4° towards the centre of the keyboard, raised at its outer edge, with its highest point still at 0.86 mm. With the shut screen 0.7 mm above the key tops, all travel must sit below that line. Target a low-profile scissor or butterfly-style mechanism with **0.5 to 0.6 mm travel** and a metal dome per key *(est.)*. Backlight: a light-guide film under the keys with side LEDs, used for the hidden-until-lit call icons and the legends.

**Keyboard controller:** a small microcontroller on the keyboard flex scans the matrix (44 keys, 8 talk and make keys, Back, Menu and the joystick's four directions and click) and drives the backlight. It talks to the main chip over one I²C or I³C bus, which keeps the wire count through the hinge low.

### 3.2 Back (battery door)

| Feature | Position | Notes |
|---|---|---|
| Door | 60.7 mm wide, 4.4 to 76.1 mm from the hinge; hooks under the frame at the hinge end | The whole back. Corners: 3.8 mm radius at the far end, 0.6 mm at the hinge end |
| Seam | 0.14 mm hairline round the door | Doubles as a slot antenna (section 9) |
| Screws | 2 × Torx T5, 27.5 mm either side of centre, 73.1 mm from the hinge (far end) | Flush heads, stainless steel; the hinge-end lip holds the other end |
| Battery | 57.5 mm wide, 9.7 to 64.2 mm from the hinge (57.5 × 54.5 mm), about 4.0 mm thick | About 2,250 mAh *(est.)*, single cell, 3.85 V nominal |
| Pull tab | Hinge end of the cell, centred, 10 mm wide | Lift-out; no adhesive |
| Sub-board | 34 mm wide, 65.4 to 70.7 mm | USB-C, charger, speaker amp; see 3.4 |

### 3.3 Edges

| Edge | Feature | From the hinge | Notes |
|---|---|---|---|
| Left | Silent switch | 10.5 to 15.5 mm | 2 positions; orange strip shows when on |
| Left | Connection switch | 34.3 to 44.3 mm | 3 positions (Open, Talk, Create); teal strip |
| Right | Power button with fingerprint sensor | 10.5 to 15.5 mm | Flush, mirrors the silent switch |
| Right | Zoom slider | 34.3 to 44.3 mm (centred at 39.3 mm) | Spring-return rocker in a 10 mm slot, mirroring the connection switch; ridged knob, 0.7 mm proud; about 2.5 mm deep |
| Base | USB-C | Centred | 9.0 × 3.2 mm opening |
| Base | Speaker grille (right) and mic grille (left) | 5 holes each, 6.8 to 12.0 mm from centre | Mirrored about USB-C |

**Zoom slider:** a sprung rocker with a centre rest and about 1.5 mm of travel each way, read by two switch contacts (or a Hall sensor for a soft, wear-free feel). A short press steps the zoom; holding keeps it going. The haptic actuator ticks for each step. Sealed with an O-ring round the slider shaft, as on the other switches. Only about 2.5 mm deep, so it stays clear of the battery.

**Connection switch, Create position:** a hardware cut. The switch contact must physically break the enable lines of the radio power rails (cellular, Wi-Fi, Bluetooth, GNSS, NFC), not just signal software. Design it to fail safe: a broken wire reads as "radios off". The UI must warn that Create blocks emergency calls.

### 3.4 Sub-board

Carries the parts that must sit by the USB-C port and the battery, so that only one high-current path crosses the hinge:

- USB-C receptacle (sealed type, 10 Gb/s), ESD protection, USB 3 redriver if testing needs one (section 7).
- **Charger and fuel gauge**, next to the battery: USB power → charger → battery all stays in this half.
- Base speaker amplifier (or the speaker wires go up to a smart amplifier on the main board; decide with the audio supplier).
- Contacts for the base speaker and the two keyboard-half microphones.

**Risk:** at 34 × 5.3 mm this board is tight for the charger, gauge and redriver. It may need to grow to about 34 × 10 mm, which shortens the battery by about 5 mm and costs about 180 mAh *(est.)*.

### 3.5 Stack-up through the keyboard half (7.5 mm) *(est.)*

From the inside face (keys) to the back:

| Layer | Thickness |
|---|---|
| Deck (unibody), with key openings | 0.6 mm |
| Key mechanism, domes, backlight film | 0.9 mm |
| Keyboard flex and controller | 0.4 mm |
| Graphite heat spreader (from the hinge strap) | 0.1 mm |
| Aerogel insulation sheet | 0.4 mm |
| Battery cell | 4.0 mm |
| Door gasket (compressed) and clearance | 0.3 mm |
| Battery door | 0.8 mm |
| **Total** | **7.5 mm** |

There is no slack. The battery thickness is the first thing to give if any layer grows.

---

## 4. Screen half

### 4.1 Inside face

| Feature | Position | Notes |
|---|---|---|
| Cover glass | Whole face, 65.5 × 78.5 mm less the 1.4 mm bevel | Aluminosilicate, about 0.55 mm *(est.)* |
| Display active area | 59.5 × 67.5 mm, 5.5 to 73.0 mm from the hinge, 3.0 mm side borders | 3.5 in OLED, **no touch layer** |
| Front camera | 74.9 mm from the hinge, centred | About 12 MP; ring 2.7 mm across |
| Proximity and light sensors | Beside the front camera, 4.2 mm either side of centre | Under the glass, IR-transparent ink windows |

### 4.2 Back and edges

| Feature | Position | Notes |
|---|---|---|
| Rear camera | Centred at 66.5 mm from the hinge (12 mm from the far end) | 8 mm ring, flush with the back; 48 to 50 MP, about 1/2", 26 mm, OIS |
| Flash | 8.5 mm to one side of the camera | 3.6 mm window in a thin dark bezel: white LED plus a low-power colour LED (missed-call glow) |
| Rear microphone | 8.5 mm to the other side | Mirrors the flash |
| Card tray | Left edge, 32.8 to 45.8 mm (13 mm long) | Directly over the connection switch when shut. Double-sided: nano SIM one side, microSD the other. Gasket |
| Earpiece | Slit in the far-end edge, 10 × 0.5 mm, 1.7 mm behind the glass | Acoustic channel from an offset receiver |
| Top microphone | Far-end edge, centred, below the earpiece slit | |

### 4.3 Internal layout *(est.)*

| Zone | From the hinge | Contents |
|---|---|---|
| Hinge zone | 0 to about 9 mm | Hinge module mounting, flex entry, graphite strap entry |
| Main board | About 9 to 52 mm | Stacked (sandwich) board: chip, memory, storage, modem and RF front end, power management, Wi-Fi/Bluetooth, NFC controller, audio, eSIM. L-shaped to leave room for the card reader |
| Card reader | Left edge, about 32 to 47 mm, 15 mm deep | Edge connector on the main board |
| Haptic actuator | About 52 to 60 mm, centred | Large X-axis linear resonant actuator, about 34 × 8 × 3.5 mm *(est.)* |
| Cameras and receiver | About 62 to 78 mm | Rear camera module, front camera, sensors, earpiece receiver (offset from centre, channelled to the slit) |

**Main board and the display:** the display flex folds back to the board at the far end of the panel, so nothing crosses the hinge for the display.

### 4.4 Stack-up through the screen half (7.5 mm) *(est.)*

Through the main board area:

| Layer | Thickness |
|---|---|
| Cover glass | 0.55 mm |
| OLED panel (no touch) | 0.35 mm |
| Copper plate and graphite sheet behind the display | 0.15 mm |
| Midframe rib (unibody) | 0.6 mm |
| Main board, stacked, with shields | 2.6 mm |
| Graphite sheets to the back | 0.1 mm |
| Back wall (unibody) | 0.8 mm |
| Clearance for component height | 2.35 mm |
| **Total** | **7.5 mm** |

**Camera clash, resolved:** the rear camera module (about 9.5 mm square, about 6 mm tall from the back) and the front camera module (about 5.5 mm square, about 3.5 mm tall from the glass) overlapped by about 1 mm at the far end. Krupal chose to move the rear camera 2 mm towards the hinge: its module now spans about 61.8 to 71.3 mm from the hinge, and the front module 72.2 to 77.7 mm, 0.9 mm clear.

---

## 5. Hinge

| | |
|---|---|
| Type | Hidden, multi-link hinge module, one per phone, screwed into both halves |
| Range | 0° to 180°, holds any angle by friction; firm detents at 0° (shut) and 180° (flat) |
| Gap when shut | 1.6 mm between the halves |
| Spine | Solid aluminium cover in the body colour, 63.5 mm long with rounded ends; D-shaped section (flattened elliptical outside, flat inside); turns at half the hinge angle through a gear train. Shut: 3.5 mm proud of the hinge end, flush into both backs, 1 mm seam beside the hinge ends. Open flat: tucked 0.1 mm below the inner faces |
| Cycle life | 200,000 open and close cycles *(target)* |
| Holding torque | Enough to hold the screen half at any angle with the phone in one hand; open with one thumb *(to set with mock-ups)* |
| Lid sensing | Hall sensor in the screen half and magnet in the keyboard half detect open/shut (answer and end calls). A second Hall sensor or an angle sensor reads the hinge angle |

**Through the hinge** (inside the hinge's central channel, with a service loop):

1. **Main flex**, multi-layer, carrying signals and power (section 7).
2. **Graphite heat strap**, flexible, from the main board area to the spreader under the keyboard (section 8).
3. **Micro-coax cables** for the antennas in the keyboard half (section 9).

Each half is sealed on its own: the flex, strap and coax pass through the wall of each unibody through a sealed slot (overmoulded grommet).

---

## 6. Fasteners

All counts and sizes are *(est.)* except the battery door. Internal screws use Torx heads too, so one kit services the whole phone.

| Where | What it holds | Qty | Type |
|---|---|---|---|
| Battery door | Door to keyboard unibody, far end (the hinge end hooks under a lip in the frame) | 2 | M1.4 × 2.5 mm Torx T5, stainless, flush; into **steel threaded inserts** pressed into the aluminium |
| Keyboard half | Keyboard module to deck | 6 | M1.2 Torx T3 |
| Keyboard half | Sub-board and USB-C bracket (takes plug forces) | 3 | M1.4 Torx T5 |
| Keyboard half | Zoom slider bracket | 2 | M1.2 Torx T3 |
| Keyboard half | Switch brackets (silent, connection) | 4 | M1.2 Torx T3 |
| Keyboard half | Power button and fingerprint bracket | 2 | M1.2 Torx T3 |
| Keyboard half | Speaker module | 2 | M1.2 Torx T3 |
| Both halves | Hinge module | 8 (4 per half) | M1.6 Torx T5, with thread-locker |
| Screen half | Main board | 5 | M1.4 Torx T5 |
| Screen half | Card reader bracket | 2 | M1.2 Torx T3 |
| Screen half | Rear camera bracket | 2 | M1.2 Torx T3 |
| Screen half | Front camera, sensors and receiver bracket | 2 | M1.2 Torx T3 |
| Screen half | Haptic actuator | 2 | M1.2 Torx T3 |
| **Total** | | **42** | |

**No glue** in the keyboard half. In the screen half, adhesive is used only for the cover glass (a sealing gasket adhesive, releasable with heat) and for thin graphite sheets.

**Door clamping, decided:** four corner screws might not press the gasket evenly along a 72 mm door. Krupal chose a **lip at the hinge end** that hooks under the frame, with **two screws** clamping the far end. The lip and the screws together load the gasket from both ends; a door prototype must still confirm even compression along the long sides (a light internal rib is the fallback).

---

## 7. Electrical architecture

### 7.1 Power tree

```
USB-C (keyboard half)
  └─ charger + fuel gauge (sub-board) ── battery (1 cell, 3.85 V nominal, ~2,250 mAh)
                                   │
                                   └─ VSYS (3.4 to 4.4 V) ──► through the hinge flex ──► screen half
                                                                        │
                                       power management chip(s) paired with the main chip
                                         ├─ chip cores, memory, storage
                                         ├─ display (OLED supplies)
                                         ├─ cameras
                                         ├─ radios (modem, RF, Wi-Fi/BT, GNSS, NFC) ◄── gated by the Create switch
                                         ├─ audio, haptics, sensors
                                         └─ back to the keyboard half: keyboard controller and backlight,
                                            fingerprint sensor, zoom slider, switches (low current, via the flex)
```

Only **one high-current path** crosses the hinge (VSYS and its returns). The flex needs several wide copper layers for it: plan for peaks of about 4 A *(est.)*.

### 7.2 Signals through the hinge flex *(est.)*

| Group | Lines |
|---|---|
| Power | VSYS (several), ground (several) |
| USB-C | USB 3 transmit and receive pairs, USB 2 pair, CC1, CC2, SBU |
| Charger and gauge | I²C (2) plus interrupt |
| Keyboard | I²C or I³C (2), interrupt, backlight supply |
| Fingerprint sensor | SPI (4), interrupt, reset |
| Zoom slider | 2 |
| Switches | Silent (1), connection (2), power key (1) |
| Create radio cut | 1 or 2 dedicated lines to the radio rail switches |
| Audio | 2 microphone PDM lines with clock; speaker as I²S (amp on the sub-board) or speaker wires (amp on the main board) |
| Lid sensing | Magnet only (the sensors are in the screen half) |

About 40 lines in all. One wide multi-layer flex, or two narrower ones side by side.

**Risk, USB 3 through a moving hinge:** the 10 Gb/s pairs run about 100 mm from the port to the chip through a flexing cable. Impedance-controlled flex, and possibly a redriver on the sub-board. Validate signal quality over the full hinge cycle life. Fallback: USB 2 (as many entry-level phones ship), at the cost of slower video transfer. **Decided:** design for USB 3 with a redriver on the sub-board; drop to USB 2 only if hinge-cycle testing fails.

### 7.3 Parts list (beyond the Core parts table in the README) *(candidates)*

| Function | Part type |
|---|---|
| Power management | The chip vendor's paired PMIC(s) |
| Charger | Single-cell switching charger with USB Power Delivery |
| Fuel gauge | Single-cell fuel gauge, on the sub-board |
| USB 3 signal | Redriver, only if testing needs it |
| Keyboard | Small microcontroller with matrix scan and LED driver |
| Haptics | Haptic driver for the linear actuator |
| Audio | Smart speaker amplifiers (earpiece and base), codec in the chip or separate |
| Motion | 6-axis IMU (stabilisation, orientation) |
| Lid and angle | Hall sensors, magnet |
| Proximity and light | Combined sensor |
| eSIM | eUICC chip |
| NFC | NFC controller and antenna (section 9) |
| Fingerprint | Side-key capacitive sensor module |

---

## 8. Heat

Restated from the README with placement:

1. The chip touches a graphite stack (copper heat spreader if testing shows it is needed) under the main board shield, which is bonded to the **inside of the screen half's back wall**. The back is the main radiator when open.
2. The **copper plate and graphite sheet behind the display** spread hot spots on the screen side.
3. The **flexible graphite strap through the hinge** carries heat to a spreader under the keyboard deck, bonded to the keyboard half's frame. Open, both halves shed heat.
4. **Aerogel** between that spreader and the battery keeps the cell cool.
5. Target: 30 minutes of 4K60 recording without throttling, at a comfortable surface temperature. To be proven on a thermal prototype.

---

## 9. Antennas

No visible antenna lines. The radios use gaps that are already there:

| Antenna | Where | Why |
|---|---|---|
| Main cellular (transmit) | Battery door seam, at the base end | The far end of the phone from the head on a call, best for SAR |
| Cellular diversity | Hinge end of the screen half, behind the spine joint | Opposite end from the main |
| Wi-Fi and Bluetooth | Hinge end of the keyboard half, behind the spine joint | Away from the hand on the base |
| GNSS (dual-band) | Hinge end of the screen half, sharing with diversity | Faces up when the phone is open in the hand |
| NFC | Coil round the battery door seam slot | **Risk:** NFC through a metal body needs a slot; the door seam is the only one. Test early |

The door must be electrically isolated from the frame where the seam acts as an antenna: the gasket insulates, the hinge-end lip needs an insulating liner, and the two screws need **insulating bushes** (or the inserts are isolated). The modem is in the screen half; feeds to the keyboard-half antennas cross the hinge as micro-coax.

---

## 10. Sealing (IP68)

| Opening | Seal |
|---|---|
| Battery door | Perimeter gasket, compressed by the hinge-end lip and the two far-end screws (section 6) |
| Card tray | Silicone gasket on the tray |
| Silent and connection switches | O-ring on each slider shaft, sealed behind the visible slot |
| Power button | Sealed membrane behind the key |
| Zoom slider | O-ring on the slider shaft |
| USB-C | Sealed receptacle, sealed to the unibody |
| Speaker, microphones, earpiece | Water-resistant mesh membranes behind each opening |
| Cover glass | Sealing adhesive gasket round the glass |
| Hinge crossings | Overmoulded grommets where the flex, strap and coax enter each half |

Target: IP68 at the same depth and time as current flagship phones.

---

## 11. Assembly and repair

### 11.1 Assembly order

**Keyboard half (from the back):**
1. Press steel threaded inserts into the unibody.
2. Fit keycaps and mechanism from behind the deck; fit the keyboard module and flex.
3. Fit the edge controls: switches, power button and fingerprint, zoom slider.
4. Fit the speaker, microphones and sub-board with USB-C.
5. Lay the graphite spreader and aerogel.
6. Fit the battery, connect it, close the door.

**Screen half (from the front):**
1. Fit the camera modules, flash, rear mic, card reader, haptic actuator, receiver.
2. Fit the graphite sheets and main board; connect cameras and card reader.
3. Fit the front camera and sensors.
4. Bond the display and cover glass.

**Join:** route the hinge flex, strap and coax through the grommets, screw the hinge module into both halves, fit the spine.

### 11.2 Repair paths

| Job | Steps | Who |
|---|---|---|
| Battery | 2 × T5 screws, lift the far end, slide the door out of its lip, unplug, lift by the tab | **The owner** |
| SIM or microSD | Pin in the tray | The owner |
| Keyboard | Battery out, then the keyboard module from behind | Repair shop |
| Sub-board, USB-C, speaker | Battery out | Repair shop |
| Screen | Heat, lift the glass and display, reseal | Repair shop |
| Hinge | Battery out (keyboard-half screws), screen off (screen-half screws) | Repair shop |

---

## 12. Testing and certification

| Test | Target |
|---|---|
| Drop | 1.5 m onto hard floor, shut and open, all faces and corners; the door must stay on |
| Hinge cycle | 200,000 cycles; torque, flex and USB signal checked throughout |
| Water and dust | IP68 after hinge cycling and 50 battery-door removals |
| Battery door | 50 open/close cycles without thread wear or gasket loss |
| Keys | Key life and feel; dome life to the supplier's rating |
| Zoom slider, switches, power button | Cycle life to the supplier's rating |
| USB-C | 10,000 insertions |
| Heat | 30 minutes of 4K60 without throttling; surface temperature limits |
| Finish | Sweat and salt exposure on each anodised colour |
| Radio | Antenna efficiency shut and open, in hand and in a pocket; SAR at head and body |
| Regulatory | Radio and safety certification for each market; battery transport (UN 38.3) and cell safety standards |

---

## 13. Risks, in order

1. **Door gasket pressure** with the hinge lip and two screws (section 6). Prototype early.
2. **USB 3 through the hinge** (section 7.2). Fallback is USB 2.
3. **Camera spacing** at the far end of the screen half: resolved on paper (section 4.4) with 0.9 mm clearance; confirm in CAD.
4. **Hidden antennas** in a metal body, especially NFC and reception when shut in a pocket (section 9).
5. **Keyboard half stack-up** has no slack (section 3.5); the battery absorbs any growth.
6. **Sub-board space** for the charger and gauge (section 3.4); may cost battery length.
7. **Custom 3.5 in display** (no touch): supplier, minimum order and cost.
8. **Key travel** within 0.86 mm above the deck and a 0.7 mm screen clearance (section 3.1).
9. **Heat** in a phone with two thirds of a slab phone's surface (section 8).

---

## 14. Not yet decided

- The chip (waits on software), which sets the main board, power management and parts of the hinge flex.
- Width confirmed by hand with a keyboard mock-up (65.5 mm chosen).
- Speaker amplifier placement (sub-board or main board).
