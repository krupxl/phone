# QWERTY Flip Concept

A concept phone for **communication and creation, not consumption**: a clamshell with a screen and a physical QWERTY keyboard inside, no touchscreen and nothing to swipe, pro-level camera, microphones and video, and everyday speakers.

`index.html` is an interactive 3D model of the phone (three.js, loaded from a CDN). Open it in a browser: drag to turn, scroll to zoom, tap the phone to open or close it. The controls under the model change the hinge angle, finish, view, the switches, and show the phone on a call.

## Design principles

- **No touchscreen, no swiping.** Navigation is a joystick, Back and Menu keys, a keyboard and a side dial. Every action is deliberate.
- **Symmetry.** Everything sits on a centre line or is mirrored across it, and the screen lines up with the keyboard across the fold.
- **Golden proportion.** Open, the phone is φ² (2.618) times its width.
- **Physical controls for big decisions.** Silent and connection levels are hardware switches, not settings.

## Specification

### Size

| | |
|---|---|
| Closed | 77 × 56 × 17 mm, flush camera |
| Open flat | 147 × 56 mm |
| Proportion | Open length = φ² × width |
| Each half | 73.3 × 56 × 7.5 mm |

### Inside, top half

- One sheet of glass over the whole inner face.
- 2.9 in OLED display, 50 × 54 mm, **no touch layer**. Same width as the keyboard, equal 9.5 mm margins top and bottom, lower edge level with the top of the keyboard deck.
- Front camera for video calls and an earpiece slit, both on the centre line above the screen.

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

- **Power button:** flush titanium key with a fingerprint sensor. Rest your thumb on it as you open the lid to unlock; hold to switch off or call for help.
- **Zoom dial:** knurled titanium disc. Zoom in the camera, volume everywhere else. In landscape (camera end on the left) it sits on the top edge under the right index finger.

### Outside

- Almost nothing: one flush rear camera with a flash and a microphone either side of it, and a Grade 5 titanium spine over the hinge.
- Base edge: USB-C (USB 3) in the centre, with five holes on each side (speaker on the right, microphone behind the left).
- Top edge: one microphone.

### Hinge

- Hidden hinge with a full-width titanium spine cover that turns at half the hinge angle.
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

- Four studio-quality microphones; Spatial Audio and stereo recording; wind noise reduction; audio mix.
- Stereo speakers (earpiece plus base-edge grille), at entry-level phone quality on purpose.
- 4K Dolby Vision at 24 to 60 fps; ProRes and ProRes RAW to an external drive over USB-C; log colour profile; ACES; genlock.

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
- Battery size and placement (possibly split across both halves), battery life, charging speed, wireless charging.
- eSIM only, or a SIM tray (which would break the edge symmetry).
- Proximity and light sensors near the earpiece (needed for the call safety feature; not on the model yet).
- Vibration motor, body material (metal needs antenna lines), water and dust resistance, heat during 4K ProRes recording, storage, weight.
- A deliberate decision on missed-call indication with the lid shut.

**Use**
- Vlogging (the front camera is only rated for calls), tripod mount, headphone or microphone socket.
- Left-handed use (the dial is on the right).
- Comfort of typing on a 56 mm wide keyboard; needs a physical mock-up.

**Business**
- Radio, safety and network certification; cost of parts against a minimalist price point; hinge patents; trademarks (avoid other companies' product names in anything public).

## Files

- `index.html`: the interactive 3D model, self-contained apart from three.js and Google Fonts from their CDNs. Generated from `model.html` by `node tools/wrap.js`.
- `model.html`: the source of the model.
- `CLAUDE.md`: how to work on the model and the reasons behind the design.
