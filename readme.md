# Marked.js + Prism.js + Prism Theme

## 1. marked.js

```html
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
```

### Fungsi

Mengubah Markdown menjadi HTML.

Contoh:

Markdown:

````md
# Hello

```js
console.log('hi');
```
````

Diubah menjadi:

```html
<h1>Hello</h1>

<pre>
  <code class="language-js">
    console.log("hi")
  </code>
</pre>
```

Jadi:

- marked.js hanya mengubah markdown → HTML
- belum memberi warna syntax

---

# 2. prism.js

```html
<script src="https://cdn.jsdelivr.net/npm/prismjs/prism.js"></script>
```

### Fungsi

Membaca code block HTML lalu mendeteksi syntax.

Contoh:

```html
<code class="language-js"></code>
```

Prism akan memberi class syntax seperti:

```html
<span class="token keyword">const</span>
```

Jadi:

- keyword
- string
- function
- comment

semua dikenali.

TAPI:

- belum ada warna
- masih polos

---

# 3. prism-tomorrow.css

```html
<link
  href="https://cdn.jsdelivr.net/npm/prismjs/themes/prism-tomorrow.css"
  rel="stylesheet"
/>
```

### Fungsi

Memberi warna/style pada syntax yang sudah diproses Prism.js.

Contoh:

- keyword jadi ungu
- string jadi hijau
- background jadi gelap

---

# Alur Kerja Lengkap

```text
Markdown Text
      ↓
marked.js
(markdown → HTML)
      ↓
HTML memiliki <code class="language-js">
      ↓
prism.js
(mendeteksi syntax)
      ↓
prism-tomorrow.css
(memberi warna syntax)
```

---

# Hubungan Ketiganya

| Library            | Fungsi              |
| ------------------ | ------------------- |
| marked.js          | Markdown → HTML     |
| prism.js           | Deteksi syntax code |
| prism-tomorrow.css | Warna/style syntax  |

---

# Analogi Mudah

| Bagian             | Analogi                 |
| ------------------ | ----------------------- |
| marked.js          | Penerjemah markdown     |
| prism.js           | Mesin pendeteksi syntax |
| prism-tomorrow.css | Cat / warna tampilannya |

---

# Biasanya Dipakai Bersama

```html
<link
  href="https://cdn.jsdelivr.net/npm/prismjs/themes/prism-tomorrow.css"
  rel="stylesheet"
/>

<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/prismjs/prism.js"></script>
```

---

# Contoh Penggunaan

```js
const markdown = `
# Hello

\`\`\`js
console.log("hello")
\`\`\`
`;

const html = marked.parse(markdown);

document.getElementById('app').innerHTML = html;

Prism.highlightAll();
```

## Penjelasan

```text
marked.parse()
→ ubah markdown jadi HTML

innerHTML
→ tampilkan HTML ke halaman

Prism.highlightAll()
→ warnai semua code block
```
