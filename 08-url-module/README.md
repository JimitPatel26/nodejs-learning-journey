# 08 - URL Module

A collection of Node.js programs demonstrating the use of the built-in `url` module to parse URLs and extract query parameters.

---

## 📁 Folder Structure

```
08-url-module/
├── basic-parse.js
├── parse-query.js
├── full-url-object.js
├── without-query-parse.js
├── query-to-object.js
├── leap-year-check.js
├── write-query-to-file.js
├── average-from-query.js
└── README.md
```

---

## 📌 What is the `url` Module?

- Built-in Node.js module — no installation needed
- Used to **parse** URL strings into readable objects
- Helps extract parts of a URL: `protocol`, `host`, `pathname`, `query`, `hash`, etc.

```javascript
const url = require('url');
```

### Syntax
```javascript
url.parse(urlString, parseQueryString)
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `urlString` | String | The full URL to parse |
| `parseQueryString` | Boolean | `true` → query becomes an object, `false` (default) → query stays a string |

---

## 🔍 URL Parts — Quick Reference

Given URL: `http://localhost:8080/default.html?year=2025&month=feb#test`

| Property | Value |
|----------|-------|
| `protocol` | `http:` |
| `host` | `localhost:8080` |
| `hostname` | `localhost` |
| `port` | `8080` |
| `pathname` | `/default.html` |
| `search` | `?year=2025&month=feb` |
| `query` | `year=2025&month=feb` OR `{ year: '2025', month: 'feb' }` |
| `hash` | `#test` |

---

## 📄 Files Overview

---

### 1. `basic-parse.js`

**Concept:** Parse a URL without query string parsing

**What it does:**
- Parses the URL using `url.parse()` with `parseQueryString = false` (default)
- `q.query` returns the query as a **plain string**

**Output:**
```
a=10&b=20
```

> 💡 Without `true` as second argument, query is a raw string — not an object.

---

### 2. `parse-query.js`

**Concept:** Parse query string into an object

**What it does:**
- Passes `true` as the second argument to `url.parse()`
- `q.query` returns an **object** with key-value pairs

**Output:**
```javascript
{ a: '10', b: '20' }
```

> 💡 With `true`, you can access values like `q.query.a` → `'10'`

---

### 3. `full-url-object.js`

**Concept:** View the complete parsed URL object

**What it does:**
- Parses the URL and logs the **entire object**
- Shows all properties: `protocol`, `host`, `pathname`, `query`, etc.

**Output:**
```javascript
Url {
  protocol: 'http:',
  host: 'localhost:3120',
  pathname: '/',
  query: { a: '10', b: '20' },
  ...
}
```

---

### 4. `without-query-parse.js`

**Concept:** Parse a full URL with hash — without query parsing

**What it does:**
- Parses a URL that includes `pathname`, `query string`, and `#hash`
- `parseQueryString` is `false` → query stays as a string

**URL used:** `http://localhost:3120/default.html?year=2025&month=feb#test`

**Key observation:**
- `q.query` → `"year=2025&month=feb"` (string)
- `q.hash` → `"#test"`

---

### 5. `query-to-object.js`

**Concept:** Parse full URL with hash — with query parsing enabled

**What it does:**
- Same URL as above but with `true` → query becomes an object
- Also captures the `#hash` fragment

**URL used:** `http://localhost:8080/default.html?year=2025&month=feb#test`

**Key observation:**
- `q.query` → `{ year: '2025', month: 'feb' }` (object)
- `q.hash` → `"#test"`

---

### 6. `leap-year-check.js`

**Concept:** Extract query param and use it in logic

**What it does:**
- Parses year from the URL query string
- Applies leap year logic on the extracted value

**URL used:** `http://localhost:8080/default.html?year=2025&month=feb`

**Leap Year Logic:**
```
(year % 400 == 0) OR (year % 100 != 0 AND year % 4 == 0)
```

**Output (for year=2025):**
```
Not a Leap Year
```

> ⚠️ Query values are always **strings** — use `Number()` or `parseInt()` for math operations. Here `%` coerces it automatically, but be careful in other cases.

---

### 7. `write-query-to-file.js`

**Concept:** Combine `url` + `fs` modules — save parsed data to a file

**What it does:**
- Parses the URL
- Converts the parsed object to JSON using `JSON.stringify()`
- Writes the JSON to `data.txt` using `fs.writeFileSync()`

**Modules used:** `url`, `fs`

**Output:**
```
Done        ← in console
data.txt    ← created with full parsed URL as JSON
```

---

### 8. `average-from-query.js`

**Concept:** Extract multiple query params and perform calculation

**What it does:**
- Extracts `m1`, `m2`, `m3` marks from the URL
- Converts them from string to number using `Number()`
- Calculates and prints the average

**URL used:** `http://localhost:8080/test?m1=50&m2=60&m3=70`

**Output:**
```
60
```

> 💡 Always use `Number()` or `parseInt()` when doing math with query values — they are strings by default.

---

## 🔑 Key Methods — Quick Reference

| Method | Description |
|--------|-------------|
| `url.parse(str)` | Parse URL → returns Url object (query as string) |
| `url.parse(str, true)` | Parse URL → query as object |
| `url.format(obj)` | Convert URL object back to string |
| `q.query.key` | Access a specific query param (only when `true` passed) |

---

## ⚠️ Important Notes

- `url.parse()` is the **legacy** API — still works but Node.js now recommends the newer `URL` class:
  ```javascript
  const myUrl = new URL("http://localhost:8080/?a=10");
  console.log(myUrl.searchParams.get('a')); // '10'
  ```
- Query values are always returned as **strings** — convert with `Number()` or `parseInt()` before math
- `#hash` is captured in `q.hash` property
- `parseQueryString = false` (default) → `q.query` is a string
- `parseQueryString = true` → `q.query` is an object

---

## ▶️ How to Run

```bash
node basic-parse.js
node parse-query.js
node full-url-object.js
node without-query-parse.js
node query-to-object.js
node leap-year-check.js
node write-query-to-file.js
node average-from-query.js
```

> No external packages needed — `url` and `fs` are both built-in Node.js modules.