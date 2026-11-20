# Working on the QWERTY Flip Concept

Read `README.md` first: it is the spec, and its "Open questions" section is the to-do list. This file is how to work on the model and why the design is the way it is.

## Files

- `model.html`: **the source.** The artifact page (no doctype, head or body tags, because the artifact host adds its own skeleton). Edit this one.
- `index.html`: **generated.** `model.html` wrapped as a full page so it opens straight in a browser. Never edit by hand; rebuild with `node tools/wrap.js`.
- `tools/wrap.js`: the wrapper.

## Workflow for a change

1. Edit `model.html`.
2. Check the script parses: extract the inline `<script>` and run `node --check` on it.
3. Run `node tools/wrap.js` to rebuild `index.html`.
4. Publish `model.html` to the **existing** artifact, so Krupal keeps one link: https://claude.ai/artifact/Pe98HsHRMc8vmEks1FkVmc. From a new session, read it first with the Artifact tool (`action: "read"`), then publish with `url` set to that link. Do not create a new artifact.
5. Update `README.md` if the spec changed.
6. Commit and push. Before the first commit in a session, run `git var GIT_COMMITTER_IDENT` and confirm it is `Krupal Tandel <krupalktandel@gmail.com>`. This PC falls back to a work address if unset; never commit with it. Push with `git -c credential.helper= -c credential.helper='!"/c/Program Files/GitHub CLI/gh.exe" auth git-credential' push`.

The repo is **public**: no personal details, nothing about Krupal's employer, no private links other than the artifact link above (it is private and only opens for Krupal).

## Design rules (Krupal's, in priority order)

1. **Communication and creation, not consumption.** No touchscreen, no swiping, nothing that invites endless scrolling. Speakers are deliberately only entry-level.
2. **Symmetry.** Everything sits on the centre line or is mirrored across it. The screen and the keyboard deck start and end at the same distances from the hinge, so they line up across the fold. Edge controls are mirrored left to right.
3. **Golden proportion.** Open length = φ² × width (`L = W * PHI * PHI / 2` in the code). Do not trim the height by small amounts; that breaks the ratio.
4. **Minimal outside.** Only what must be there: camera, flash, mics, switches, dial, power button, ports.
5. **Physical controls for big decisions** (silent, connection level), not settings.

Krupal decides; when a change has real trade-offs, lay out the options with a recommendation and ask. UK English, no em dashes.

## Why things are the way they are

Do not undo these without asking Krupal:

- **Flat slide-pad joystick, not a thumbstick:** closed, the screen sits only 0.7 mm above the keys. Every key-deck control must stay within the key height (0.86 mm).
- **Raised frame and four bumpers on the keyboard half:** they hold the glass by its edges so the screen never presses on the keys. The 1.6 mm hinge gap (`ZP = 0.08`) exists for this.
- **Back and Menu only:** the lid answers and ends calls (and one joystick click on End), holding Back goes home, Menu replaces long-press and swipe actions. Call, End and Home keys were removed.
- **Flush 1/2" camera:** a flagship 1/1.28" sensor needs a bump or a 20 mm phone. Krupal chose slim and flush.
- **Hidden hinge with a titanium spine** turning at half the hinge angle; opens to 180° so the phone works as a normal camera. The spine is **flattened** (`SB = 0.35`, 3.5 mm proud when closed) because a full half-round looked too big; it must still span the closed thickness (`SR`).
- **Zoom dial halfway down the right edge of the keyboard half:** right thumb in portrait, right index finger in landscape (camera end on the left).
- **Connection switch Open / Talk / Create:** nested levels named by intent. Talk is software-enforced (calls and data share the modem); Create is a hardware cut and blocks emergency calls, which the UI must say.
- **Fingerprint sensor on the power button,** not the dial (a turning, ridged dial cannot read a fingerprint).
- **Key legends:** letters only at rest; digits and call icons are hidden-until-lit (printed keys cannot change their legends).
- **Whole inner top face is one sheet of glass;** front camera and earpiece on the centre line.

## Code notes

- three.js r128 from cdnjs plus OrbitControls from jsDelivr `three@0.128.0/examples/js`. Units are centimetres.
- Key labels are one canvas texture across the whole keyboard deck; key caps sample it by position because ExtrudeGeometry lid UVs are world x/y (`keyTex.repeat/offset`). The backlight is a second canvas used as `emissiveMap` with the same transform.
- Edge parts on the left use `rotation.y = -π/2` (shape u → world z), on the right `rotation.y = π/2` (shape u → world -z).
- Artifact pages may only load scripts from approved CDNs; keep everything else inline.
