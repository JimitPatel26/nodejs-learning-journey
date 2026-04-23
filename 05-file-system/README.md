# Node.js `fs` (File System) Module — Learning Notes

A complete reference of everything I learned about Node.js's built-in `fs` module, covering file and directory operations in both synchronous and asynchronous styles.

---

## Table of Contents

1. [Sync vs Async — The Core Concept](#sync-vs-async)
2. [Reading Files](#reading-files)
3. [Writing Files](#writing-files)
4. [Appending to Files](#appending-to-files)
5. [Copying Files](#copying-files)
6. [Renaming Files](#renaming-files)
7. [Deleting Files](#deleting-files)
8. [Creating Directories](#creating-directories)
9. [Removing Directories](#removing-directories)
10. [Key Takeaways](#key-takeaways)

---

## Sync vs Async — The Core Concept

> **File:** `sync-vs-async.js`

This is the foundation of everything in the `fs` module. Every operation comes in two flavours:

| | Synchronous | Asynchronous |
|---|---|---|
| **Naming** | `fs.operationSync()` | `fs.operation()` |
| **Blocks execution?** | ✅ Yes — waits to finish | ❌ No — runs in background |
| **Returns value?** | ✅ Yes — returns result directly | ❌ No — uses a callback |
| **Error handling** | `try/catch` | Callback's `err` parameter |
| **Best for** | Scripts, startup config | Servers, performance-sensitive apps |

### Example output order

```js
fs.writeFileSync('data/test.txt', 'Hello World');
console.log("Synchronous Write Completed");   // prints 1st
console.log("Outside Synchronous");           // prints 2nd

fs.writeFile('data/test1.txt', 'Hello World', (err) => {
    console.log('Asynchronous Write completed.');  // prints 3rd (whenever I/O finishes)
});
console.log("Outside Asynchronous");          // prints 2nd (before async callback!)
```

**Key insight:** `"Outside Asynchronous"` prints *before* `"Asynchronous Write completed."` because the async operation is non-blocking — Node.js moves on immediately and runs the callback later.

---

## Reading Files

> **Files:** `sync-read.js`, `async-read.js`, `utf8-read.js`

### Sync Read

```js
const data = fs.readFileSync('data/data.txt');
console.log(data.toString()); // Buffer returned — must call .toString()
```

### Async Read

```js
fs.readFile('data/data.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString()); // Also a Buffer by default
});
```

### Reading with UTF-8 Encoding

Pass `'utf-8'` as the second argument to get a string directly — no `.toString()` needed:

```js
// Async
fs.readFile('data/data.txt', 'utf-8', (err, data) => {
    console.log(data); // Already a string ✅
});

// Sync
const data = fs.readFileSync('data/data.txt', 'utf-8');
console.log(data); // Already a string ✅
```

> **Tip:** Always pass `'utf-8'` unless you need raw binary data. It makes your code cleaner.

---

## Writing Files

> **File:** `sync-vs-async.js`

Writing creates the file if it doesn't exist, or **overwrites** it if it does.

```js
// Sync
fs.writeFileSync('data/test.txt', 'Hello World');

// Async
fs.writeFile('data/test1.txt', 'Hello World', (err) => {
    if (err) throw err;
    console.log('Write completed.');
});
```

> ⚠️ **Warning:** `writeFile` / `writeFileSync` replaces the entire file content. Use `appendFile` to add without overwriting.

---

## Appending to Files

> **File:** `append-file-sync-async.js`

Appends content to the end of a file. Creates the file if it doesn't exist.

```js
// Async
fs.appendFile('data/data.txt', '\nNew Line Added', (err) => {
    if (err) console.log(err);
    else console.log("Content Appended");
});

// Sync
fs.appendFileSync('data/data.txt', '\nNew Line 2 Added');
console.log("Data Appended");
```

> **Tip:** Use `\n` at the start of your string to ensure the new content starts on a fresh line.

---

## Copying Files

> **File:** `copy-file-sync-async.js`

```js
// Async
fs.copyFile('data/source.txt', 'destination.txt', (err) => {
    if (err) console.log(err);
    else console.log("Copied File");
});

// Sync
fs.copyFileSync('data/source.txt', 'data/destination.txt');
console.log("Copied File");
```

> **Note:** `copyFile` overwrites the destination if it already exists.

---

## Renaming Files

> **File:** `rename-file-sync-async.js`

`rename` is also used to **move** files by changing the path.

```js
// Async
fs.rename('data/data.txt', 'data/new_data.txt', (err) => {
    if (err) throw err;
    console.log("File Renamed");
});

// Sync
fs.renameSync('data/data.txt', 'data/new_data.txt');
console.log("File Renamed");
```

---

## Deleting Files

> **File:** `delete-file-sync-async.js`

Uses `unlink` (Unix terminology for removing a file).

```js
// Async
fs.unlink('data/new_data.txt', (err) => {
    if (err) throw err;
    console.log("File Deleted");
});

// Sync
fs.unlinkSync('data/new_data.txt');
console.log("File Deleted");
```

> ⚠️ **Warning:** Deletion is permanent — there is no recycle bin.

---

## Creating Directories

> **File:** `create-dir-sync-async.js`

```js
// Async
fs.mkdir('myfolder', (err) => {
    if (err) console.log(err);
    else console.log("Directory Created");
});

// Sync
fs.mkdirSync('myfolder');
console.log("Folder Created");
```

> **Note:** Throws an error if the folder already exists. Use `{ recursive: true }` as an option to avoid this.

---

## Removing Directories

> **File:** `remove-dir-sync-async.js`

```js
// Async
fs.rmdir('myfolder', (err) => {
    if (err) console.log("Error in Removing Folder");
    else console.log("Folder Removed");
});

// Sync
fs.rmdirSync('myfolder');
console.log("Folder Removed");
```

> **Note:** `rmdir` only works on **empty** directories. Use `fs.rm('myfolder', { recursive: true })` for non-empty ones (Node.js v14.14+).

---

## Key Takeaways

1. **Every `fs` method has a sync version** — just add `Sync` to the name.
2. **Async callbacks always receive `err` as the first argument** — always check it.
3. **Sync methods block the event loop** — fine for scripts, avoid in web servers.
4. **Always pass `'utf-8'`** when reading text files to get a string instead of a Buffer.
5. **`writeFile` overwrites; `appendFile` adds** — choose carefully!
6. **`rename` can also move files** by specifying a different directory in the destination path.

---

## Methods Summary

| Operation | Async | Sync |
|---|---|---|
| Read | `fs.readFile()` | `fs.readFileSync()` |
| Write | `fs.writeFile()` | `fs.writeFileSync()` |
| Append | `fs.appendFile()` | `fs.appendFileSync()` |
| Copy | `fs.copyFile()` | `fs.copyFileSync()` |
| Rename / Move | `fs.rename()` | `fs.renameSync()` |
| Delete file | `fs.unlink()` | `fs.unlinkSync()` |
| Create folder | `fs.mkdir()` | `fs.mkdirSync()` |
| Remove folder | `fs.rmdir()` | `fs.rmdirSync()` |