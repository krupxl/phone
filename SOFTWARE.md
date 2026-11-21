# QWERTY Flip: Software

How the phone behaves. `README.md` describes the hardware and `ENGINEERING.md` how it is built; this is the software foundation that the interface and apps are designed on.

Basic and touch-free by intent: the phone is for talking and making things, not for scrolling.

---

## 1. Principles

1. **Communication and creation, not consumption.** Every app and feature has to help you talk to people or make something. No feeds, no infinite scroll, no recommendations, no app store to browse.
2. **Quiet ink.** The screen is mostly black and white. Colour appears only where it does a job: the call keys, a recording light, a warning, a photo. No decorative colour, gradients or wallpapers.
3. **Every action is deliberate.** No touchscreen and no swiping. Moving and choosing are done with the joystick and keys; nothing happens by brushing the phone.
4. **Physical controls are the authority.** The silent switch and the connection switch decide what the phone may do. Software can never quietly override them.
5. **People before apps.** Calls and messages from people come through; apps do not interrupt.
6. **Calm by default, everything readable.** Large clear type, at least 4.5:1 contrast, the same layout everywhere.

---

## 2. Foundation

| | |
|---|---|
| Base | **Google-certified Android**, so banking, payment, two-factor and messaging apps work |
| On top | Our own touch-free interface and core apps (the "ink" interface) replacing the standard home screen and system apps |
| Third-party apps | A **short curated list** only, installed from inside our interface. No app store browsing |
| Browser | **Links only**: opens a link from a message or email, one page at a time |
| Updates | Target: 7 years of system and security updates, to match a phone built to last |

**Why certified Android:** banking, payment and many government apps check that the phone runs Google-certified Android (the Play Integrity check) and refuse to run otherwise. Custom versions of Android usually fail. An open alternative is being built in Europe, but banks have to adopt it one by one. Android without Google, Linux phone systems and KaiOS were considered: KaiOS has lost WhatsApp, and the others lose most banking apps.

**Chip:** certified Android works on both candidates (MediaTek Dimensity 8500 class or the current Qualcomm Snapdragon 8s class). The deciding factor becomes the **length of the vendor's committed update support**, so that the 7-year target is achievable. To confirm with both vendors.

**Biggest risk:** Google certification of a phone with **no touchscreen**. Android's rules allow non-touch devices navigated by D-pad, but certifying one with Google's apps is not routine. Raise it with Google before anything else is committed.

---

## 3. Controls

How every physical control behaves, everywhere in the system.

| Control | Does |
|---|---|
| **Open the lid** | Wakes the phone; answers an incoming call. Rest your thumb on the power button as you open it to unlock with your fingerprint |
| **Close the lid** | Ends a call; locks the phone |
| **Joystick** | Moves the highlight; click to choose |
| **◁ Back** | Goes back one step. **Hold**: home |
| **□ Menu** | Actions for the highlighted item (replaces long-presses and swipe actions) |
| **Talk and make keys** | **Press: this screen's action. Hold: the key's own job** (section 3.1). Their own jobs: + Call (dialler, or call the highlighted person) · – Message (new message) · ⬡ Contacts · ☆ Favourites · Lens: Camera · Wave: record a voice note while held · Lines: a new note · ◇ your choice |
| **Typing from home** | Start typing any name, app or number: the screen searches as you type (a contact, an app, a note, or a number to call) |
| **Number row** | Digits; tones on a call |
| **Microphone key** (bottom row) | **Dictation**: speech into text, wherever you are typing. Different from the Voice note key, which records audio |
| **#+= key** | Symbols and accents |
| **Zoom slider** | Zoom in the camera; volume everywhere else. Hold to keep going |
| **Silent switch** | Silences ringer and alerts; haptic only |
| **Connection switch** | Open / Talk / Create (section 7) |
| **Power button** | Fingerprint; hold to switch off |

On a call, the call controls are on the key strip (section 3.1), digits send tones, and closing the lid ends the call. A proximity sensor ignores keys while the phone is at your ear.

### 3.1 The key strip

The eight shape keys sit just below the screen's bottom edge when the phone is open. Inside an app, a strip of eight cells along the bottom of the screen shows what each key does there, mirroring the keys across the fold: the strip's bottom row is the talk row (+ – ⬡ ☆, nearest the hinge), the row above it the make row (lens, wave, lines, ◇). Each cell shows its key's shape beside the action, so a key is found by shape and position.

- **Press** a key: the action in its cell on this screen.
- **Hold** a key: its own job, the printed meaning, from anywhere (hold lens for the camera, wave to record a voice note, + for the dialler, and so on).
- An inverted cell means that action is on or chosen (Speaker on, Photo mode); colour only where it matters (End in red).
- **Home** has no strip: there, a press is the printed meaning.
- The keyboard stays for typing; letters no longer double as call controls.

| Screen | Make row (upper) | Talk row (lower, nearest the keys) |
|---|---|---|
| On a call | Add call · Note · Keypad · Record | Mute · Hold · Speaker · End |
| Conversation | Photo · Voice · Location · More | Call · Attach · Dictate · Send |
| Camera | Gallery · Front · Grid · Share | Photo · Video · Flash · Timer |

The strip takes about an eighth of the screen height, only on screens that use it.

---

## 4. Home

One screen, no pages and no icons grid.

- **Top line:** signal, connection mode (Open / Talk / Create in words), silent, battery.
- **Time and date**, large.
- **A short list** of what you use, moved with the joystick: Phone, Messages, Camera, Notes, Calendar, and the curated apps you installed. Unread counts appear only for messages from people.
- **Typing searches** (section 3); there is no separate search screen.
- **No widgets, no news, no suggestions.**

---

## 5. Core apps (ours)

Designed for keys from the start.

| App | Notes |
|---|---|
| **Phone** | Dialler (number row), recents, favourites. Lid answers and ends calls |
| **Messages** | SMS and RCS, one thread list, people first. Typing on the keyboard; dictation on the microphone key |
| **Contacts** | Searchable by typing; Favourites carry a chosen colour for the outside light (section 8). Favourite colours come from a set that stays visible (3:1 or more) on both the black ground and the light highlight bar, and each favourite shows the same colour on every screen |
| **Camera** | Opens with the Lens key. Joystick click is the shutter; zoom slider zooms; open flat to shoot like a normal phone. Photo and video, no filters or effects |
| **Notes** | Plain text notes, typed or dictated; the Lines key opens a new one |
| **Voice notes** | Hold the Wave key to record anywhere; a red light dot on screen while recording |
| **Calendar** | Day and agenda views; add events by typing |
| **Clock** | Alarms, timer, stopwatch |
| **Settings** | One list, no nested maze |
| **Files** | Photos, video and recordings; copy off over USB-C |

---

## 6. Third-party apps (curated)

Day-one list (installed from inside our interface, nothing else can be):

| Need | Apps |
|---|---|
| **Messaging** | WhatsApp, Signal |
| **Banking and two-factor** | The major banks per launch market, an authenticator app, contactless payment through NFC |
| **Maps and rides** | A maps app with turn-by-turn directions, the main ride-hailing apps per market |

Later, by decision: music and podcasts.

**How touch apps run without a touchscreen:**
- **Focus mode (default):** the joystick moves focus between buttons and fields, click activates, typing goes to the focused field. Most apps work this way, as Android supports D-pad navigation.
- **Pointer mode (fallback):** for apps with parts focus cannot reach, a press of Menu toggles an on-screen pointer steered by the joystick.
- **Per-app tuning:** each curated app is tested and can get key shortcuts (for example, Message keys straight to a WhatsApp chat). An app only joins the list if it works well this way.

---

## 7. The switches in software

| Switch | Software behaviour |
|---|---|
| **Silent** | Ringer and alert sounds off; haptic taps only. A favourite's light still shows |
| **Connection: Open** | Everything connected |
| **Connection: Talk** | No internet (mobile data and Wi-Fi off, enforced by the system). Calls and SMS work; Bluetooth stays on. Internet-based messaging (WhatsApp, Signal, RCS) **waits** until you return to Open, and the screen says so |
| **Connection: Create** | Every radio cut in hardware. Camera, mics, notes, voice notes, files work. The top line reads "Create: no calls, no emergency calls"; dialling an emergency number tells you to slide to Talk |

Software must never work around either switch.

---

## 8. Signals

- **Outside light** (the flash's colour LED, lid shut): missed call breathes green; a favourite calling glows their colour, pulsing with the ring; charging is amber, white when full. Each can be turned off.
- **Inside:** no banners from apps. Calls and messages from people show; everything else waits quietly in its app. No badges except unread messages from people.
- **Haptics:** a soft tick for joystick clicks and zoom steps; distinct patterns for calls and messages.

---

## 9. Accessibility and input

- **Screen reader** that works entirely with keys and joystick (Android's TalkBack supports D-pad and keyboard).
- **Large text** and a high-contrast mode; the ink style already starts at 4.5:1.
- **Dictation** on the microphone key; **voice control** of the system as an option.
- **Keyboard layouts** per market (QWERTY, AZERTY, QWERTZ and others), with long-press or #+= for accents.

---

## 10. Data

- **USB-C** to a computer shows Photos, Videos and Recordings as plain folders; USB 3 for fast video transfer.
- **Backups:** encrypted, to the user's chosen account or a computer.
- **Privacy:** no ad identifiers, no tracking in our apps; the camera and mics show an on-screen dot when in use.

---

## 11. Interaction details

Exact behaviour, so the phone feels the same everywhere. Calm and quick: things respond at once, move little, and confirm by touch more than by animation.

### 11.1 Timings

| Action | Value |
|---|---|
| **Hold** (shape keys, Back, letters for accents) | 450 ms. A firm haptic tick fires at the moment a hold takes effect, so you feel it before you let go |
| **Repeat** (joystick, Backspace) | Starts after 400 ms held, then every 80 ms, quickening to every 40 ms after 1.5 s. In long lists, after 1.5 s the joystick moves a screen at a time |
| **Double press** (Shift twice for caps lock; a destructive key pressed again to confirm) | Within 3 s for confirmation, 350 ms for caps lock |
| **Screen sleep** with the lid open | Dims at 50 s, sleeps at 60 s. Any key wakes it; the first key only wakes and does nothing else |
| **Returning** | Opening the lid within 5 minutes returns to the last screen; after that, to Home |

Letters do not auto-repeat; only the joystick and Backspace do.

### 11.2 Motion

Motion is minimal and never decorative.

| Element | Behaviour |
|---|---|
| **Highlight bar** | Slides to the next item in 90 ms, easing out |
| **Opening and going back** | The new screen fades in over 120 ms. No slides, zooms, bounces or parallax |
| **Key strip press** | The pressed cell inverts for 120 ms as a visual echo; a toggle (Speaker, Grid) stays inverted while on |
| **Lists** | Scroll so the highlight stays a third of the way from the edge it is moving towards, keeping what comes next in view |
| **Reduce motion** (setting) | All of the above happen instantly |

### 11.3 Haptics

The actuator says things the screen does not need to. Every pattern is short and distinct; each class can be turned down or off.

| Event | Pattern |
|---|---|
| Joystick click, strip key press, zoom step | One light tick |
| A hold taking effect | One firm tick |
| Reaching the end of a list (no wrap-around) | Two light ticks |
| Message from a person | Two short pulses |
| Call ringing | Long, short, repeating; a favourite's call adds a third short pulse |
| Alarm | Strong pulses, rising |
| Something refused (for example, a call in Create) | Three short pulses, with the reason on screen |
| Voice note recording starts / saves | Double tick / single tick |

Moving the highlight item by item gives no haptic, so scrolling is not a buzz. Silent mode keeps haptics; nothing else changes them.

### 11.4 The lid

| Moment | Behaviour |
|---|---|
| Lid passes 30° opening | The screen wakes within 150 ms; with a thumb on the power button, the fingerprint unlocks in the same move |
| Lid opened while a call rings | Answers as the lid passes 30°, debounced for 100 ms so a knock does not answer |
| Lid closing below 15° on a call | Ends the call after a 300 ms grace, so a wobble does not hang up |
| Lid closed otherwise | Locks at once and the screen goes dark. Music or a route in Maps would carry on through the speaker; nothing else runs visibly |

### 11.5 Focus

- **Entering a list:** the highlight starts on the first item, or on the item you last opened there.
- **Going back:** the highlight returns to where it was.
- **Conversation:** the typing field has focus; the joystick moves up into the messages.
- **On a call:** a joystick click ends the call (End is the default action), as do the strip's End key and closing the lid.
- **Third-party apps:** focus mode starts on the app's first control; if an app loses focus entirely, Menu offers pointer mode.

### 11.6 Typing

- **Autocorrect off by default.** Misspellings are underlined; Menu on a word offers suggestions. (Physical keys make far fewer slips than glass.)
- **Shift:** once for the next letter, twice quickly for caps lock (shown in the top line).
- **Accents:** hold a letter to see its accents in a row; the joystick picks one.
- **Symbols:** #+= shows the symbols as a grid laid out like the keys, so each symbol sits where its key is.
- **Dictation** (microphone key) types where the cursor is; speaking "full stop" or "new line" works.

### 11.7 Empty states, errors and confirmation

- **Empty:** one plain sentence and the key that acts. "No notes yet. Lines key: new note."
- **Error:** what happened and what to do, in one or two sentences, with a red dot. "Not sent: no internet in Talk mode. It will send when you slide to Open." Never an error code.
- **Destructive actions** confirm with the same key: "Delete this note? Press – again." Nothing is deleted on one press.
- **No pop-ups** over the screen except an incoming call and an alarm; everything else is a line in place.

---

## 12. Open questions

- **Google certification for a no-touchscreen phone** (section 2): confirm first.
- **Chip vendor update commitment**: which gives the longest support.
- **Curated apps without touch**: test the day-one list in focus and pointer modes; agree shortcuts.
- **Contactless payment** through an aluminium body (NFC antenna at the battery door seam, see `ENGINEERING.md`).
- **RCS and WhatsApp in Talk mode**: confirm the "waits until Open" behaviour is clear enough.
- **Moving video to a computer**: plain USB folders first; a companion app only if needed.
- **Email**: not on the day-one list; decide whether it belongs.
- **Interface design**: the core set of screens and the setup steps are drawn (`screens/`); interaction details are in section 11. The seven setup steps teach the phone by doing (language, moving around, shape keys, switches, fingerprint, favourites, connect). Next: test the timings and haptics on a working prototype, and the screens on a real panel.
