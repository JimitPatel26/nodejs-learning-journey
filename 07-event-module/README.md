# 07 - Event Module

A collection of Node.js programs demonstrating the use of the built-in `events` module and the `EventEmitter` class.

---

## 📁 Folder Structure

```
07-event-module/
├── basic-event.js
├── connection-event.js
├── multiple-listeners.js
├── perimeter-events.js
└── README.md
```

---

## 📌 What is the `events` Module?

- Built-in Node.js module — no installation needed
- Provides the `EventEmitter` class
- Used to **emit** (trigger) and **listen** (handle) custom events
- Core of Node.js's asynchronous, event-driven architecture

```javascript
const EventEmitter = require('events');
const ee = new EventEmitter();
```

---

## 📄 Files Overview

---

### 1. `basic-event.js`

**Concept:** Basic event emitting with arguments

**What it does:**
- Registers a listener for the `"start"` event
- Emits the event with two arguments: `start` and `end`
- Prints the start and end values

**Key methods used:**
| Method | Purpose |
|--------|---------|
| `ee.on(event, callback)` | Register a listener |
| `ee.emit(event, ...args)` | Trigger the event with arguments |

**Output:**
```
Started at 1 and ended at 100
```

---

### 2. `connection-event.js`

**Concept:** Chaining events — one event triggers another

**What it does:**
- Listens for `"connection"` event → prints success message → emits `"data-received"`
- Listens for `"data-received"` event → prints data received message
- Shows how events can be chained/cascaded

**Flow:**
```
emit("connection")
   → "Connection Successfull"
   → emit("data-received")
       → "Data received successfully"
→ "Done"
```

**Output:**
```
Connection Successfull
Data received successfully
Done
```

> ⚠️ Note: `console.log("Done")` runs **after** emit because event listeners are synchronous by default in Node.js.

---

### 3. `multiple-listeners.js`

**Concept:** Registering, removing, and managing multiple event listeners

**What it does:**
- Registers `fun1` for `myEvent1` (twice) and `fun2` for `myEvent2` (twice)
- Removes one listener from `myEvent2` using `removeListener`
- Removes all listeners from `myEvent1` using `removeAllListeners`
- Emits both events to observe which listeners still fire

**Key methods used:**
| Method | Purpose |
|--------|---------|
| `ee.on(event, fn)` | Add a listener |
| `ee.removeListener(event, fn)` | Remove a specific listener |
| `ee.removeAllListeners(event)` | Remove ALL listeners for an event |

**Output:**
```
(nothing — both listeners were removed before emit)
```

> 💡 `fun2` was registered **twice** but `removeListener` only removes **one** instance. Since it was added twice, one instance remains — but in this code both registrations are removed because `removeListener` is called once per registration effectively. Test and observe!

---

### 4. `perimeter-events.js`

**Concept:** Conditional event emitting based on input validation

**What it does:**
- Listens for `"negradius"` → prints error message for negative radius
- Listens for `"negside"` → prints error message for negative side
- Listens for `"findval"` → validates inputs and either emits error events or calculates perimeters

**Logic inside `"findval"`:**
```
if radius < 0  → emit("negradius")
else           → calculate circle perimeter = 2 × π × r

if side < 0    → emit("negside")
else           → calculate square perimeter = 4 × s
```

**Formula used:**
- Circle perimeter: `2 × 3.14 × r`
- Square perimeter: `4 × s`

**Output (with r=10, s=3):**
```
62.800000000000004
12
```

---

## 🔑 Key EventEmitter Methods — Quick Reference

| Method | Description |
|--------|-------------|
| `ee.on(event, fn)` | Listen for an event (permanent) |
| `ee.once(event, fn)` | Listen only for the **first** occurrence |
| `ee.emit(event, ...args)` | Trigger an event, pass arguments |
| `ee.removeListener(event, fn)` | Remove a specific listener |
| `ee.removeAllListeners(event)` | Remove all listeners for an event |
| `ee.listeners(event)` | Get array of listeners for an event |
| `ee.listenerCount(event)` | Get count of listeners for an event |

---

## ▶️ How to Run

```bash
node basic-event.js
node connection-event.js
node multiple-listeners.js
node perimeter-events.js
```

> Make sure Node.js is installed. No external packages needed — `events` is a built-in module.

---

## 💡 Key Concepts to Remember

- `require('events')` → built-in, no `npm install` needed
- `EventEmitter` is the base class for most Node.js core modules (like `fs`, `http`, `stream`)
- Events are **synchronous** by default — listeners run immediately when emitted
- You can emit events **inside** listeners to chain them
- `removeListener` removes only **one** instance of a listener
- `removeAllListeners` removes **every** listener for that event