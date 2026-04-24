'use strict';
// 1. Membuat button memunculkan allert
const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
  alert('Button was clicked');
});

// 2. Test JS code
const code1 = document.querySelector('.code1');
const c1 = `
\`\`\`js
function test() {
x = 5;
console.log(x);
}

test();
\`\`\`
`;

code1.innerHTML = marked.parse(c1);
Prism.highlightAll();

const code2 = document.querySelector('.code2');
const c2 = `
\`\`\`js
function test() {
  let x = 5;
  console.log(x);
}

test();
\`\`\`
`;

code2.innerHTML = marked.parse(c2);
Prism.highlightAll();

// 3. Test JS code
const code3 = document.querySelector('.code3');
const c3 = `
\`\`\`js
console.log(a);
let a = 5;
\`\`\`
`;
code3.innerHTML = marked.parse(c3);
Prism.highlightAll();

const code4 = document.querySelector('.code4');
const c4 = `
\`\`\`js
const user = { name: 'A' };
user.name = 'B';

console.log(user.name);
\`\`\`
`;
code4.innerHTML = marked.parse(c4);
Prism.highlightAll();

// 4. Test JS code
const code5 = document.querySelector('.code5');
const c5 = `
\`\`\`js
console.log(typeof []);
console.log(Array.isArray([]));
console.log(typeof null);
console.log(typeof 10n);
\`\`\`
`;
code5.innerHTML = marked.parse(c5);
Prism.highlightAll();

const code6 = document.querySelector('.code6');
const c6 = `
\`\`\`js
const a = { x: 1 };
const b = a;
b.x = 99;

console.log(a.x);
\`\`\`
`;
code6.innerHTML = marked.parse(c6);
Prism.highlightAll();

// 5. Test JS code
const code7 = document.querySelector('.code7');
const c7 = `
\`\`\`js
console.log(Boolean('false'));
console.log(Number(''));
console.log('5' + 2);
console.log('5' * 2);
console.log(true + true);
\`\`\`
`;
code7.innerHTML = marked.parse(c7);
Prism.highlightAll();

// 6. Test JS code
const code8 = document.querySelector('.code8');
const c8 = `
\`\`\`js
console.log(10 % 3);
console.log(2 ** 3);
console.log('5' + 5);
console.log('5' * 5);
\`\`\`
`;
code8.innerHTML = marked.parse(c8);
Prism.highlightAll();

const code9 = document.querySelector('.code9');
const c9 = `
\`\`\`js
let x = 5;
console.log(++x);
console.log(x++);
console.log(x);
\`\`\`
`;
code9.innerHTML = marked.parse(c9);
Prism.highlightAll();

// 7. Test JS code
const code10 = document.querySelector('.code10');
const c10 = `
\`\`\`js
console.log('5' == 5);
console.log('5' === 5);
console.log(false == 0);
console.log(false === 0);
\`\`\`
`;
code10.innerHTML = marked.parse(c10);
Prism.highlightAll();

const code11 = document.querySelector('.code11');
const c11 = `
\`\`\`js
console.log(null == undefined);
console.log(null === undefined);
\`\`\`
`;
code11.innerHTML = marked.parse(c11);
Prism.highlightAll();

// 8. Test JS code
const code12 = document.querySelector('.code12');
const c12 = `
\`\`\`js
let nilai = 85;

if (nilai >= 90) console.log('A');
else if (nilai >= 80) console.log('B');
else console.log('C');
\`\`\`
`;
code12.innerHTML = marked.parse(c12);
Prism.highlightAll();

const code13 = document.querySelector('.code13');
const c13 = `
\`\`\`js
let user = '';

console.log(user || 'Guest');
console.log(user && 'Admin');
\`\`\`
`;
code13.innerHTML = marked.parse(c13);
Prism.highlightAll();

// 9. Test JS code
const code14 = document.querySelector('.code14');
const c14 = `
\`\`\`js
console.log('A' && 'B');
console.log(0 && 100);
console.log('A' || 'B');
console.log('' || 'Fallback');
console.log(1 || 0);
\`\`\`
`;
code14.innerHTML = marked.parse(c14);
Prism.highlightAll();

const code15 = document.querySelector('.code15');
const c15 = `
\`\`\`js
console.log(!!'hello');
console.log(!!0);
console.log(!![]);
\`\`\`
`;
code15.innerHTML = marked.parse(c15);
Prism.highlightAll();

// 10. Test JS code
const code16 = document.querySelector('.code16');
const c16 = `
\`\`\`js
console.log(0 ?? 5);
console.log(0 || 5);
console.log('' ?? 'default');
console.log('' || 'default');
\`\`\`
`;
code16.innerHTML = marked.parse(c16);
Prism.highlightAll();

const code17 = document.querySelector('.code17');
const c17 = `
\`\`\`js
const user = null;

console.log(user?.name);
console.log(user?.name ?? 'Guest');
\`\`\`
`;
code17.innerHTML = marked.parse(c17);
Prism.highlightAll();

// 11. Test JS code
const code18 = document.querySelector('.code18');
const c18 = `
\`\`\`js
for (let i = 1; i <= 5; i++) {
  if (i === 2) continue;
  if (i === 4) break;
  console.log(i);
}
\`\`\`
`;
code18.innerHTML = marked.parse(c18);
Prism.highlightAll();

const code19 = document.querySelector('.code19');
const c19 = `
\`\`\`js
let i = 0;

while (i < 3) {
console.log(i);
}
\`\`\`
`;
code19.innerHTML = marked.parse(c19);
Prism.highlightAll();

// 12. Test JS code
const code20 = document.querySelector('.code20');
const c20 = `
\`\`\`js
switch ('Jumat') {
  case 'Jumat':
    console.log('A');
  case 'Sabtu':
    console.log('B');
    break;
}
\`\`\`
`;
code20.innerHTML = marked.parse(c20);
Prism.highlightAll();

const code21 = document.querySelector('.code21');
const c21 = `
\`\`\`js
const role = 'admin';

switch (role) {
  case 'admin':
  case 'owner':
    console.log('Full access');
    break;
  default:
    console.log('Limited');
}
\`\`\`
`;
code21.innerHTML = marked.parse(c21);
Prism.highlightAll();

// 13. Test JS code
const code22 = document.querySelector('.code22');
const c22 = `
\`\`\`js
function kali(a, b = 2) {
  return a * b;
}

console.log(kali(5));
\`\`\`
`;
code22.innerHTML = marked.parse(c22);
Prism.highlightAll();

const code23 = document.querySelector('.code23');
const c23 = `
\`\`\`js
function test() {}

console.log(test());
\`\`\`
`;
code23.innerHTML = marked.parse(c23);
Prism.highlightAll();

const code24 = document.querySelector('.code24');
const c24 = `
\`\`\`js
function cmToM(cm) {
  return cm / 100;
}
\`\`\`
`;
code24.innerHTML = marked.parse(c24);
Prism.highlightAll();

// 14. Test JS code
const code25 = document.querySelector('.code25');
const c25 = `
\`\`\`js
const fn = function (x) {
  return x * 3;
};

function jalankan(f) {
  return f(4);
}

console.log(jalankan(fn));
\`\`\`
`;
code25.innerHTML = marked.parse(c25);
Prism.highlightAll();

const code26 = document.querySelector('.code26');
const c26 = `
\`\`\`js
(function () {
  console.log('Hello');
})();
\`\`\`
`;
code26.innerHTML = marked.parse(c26);
Prism.highlightAll();

const code27 = document.querySelector('.code27');
const c27 = `
\`\`\`js
const diskon10Persen = function (harga) {
  return harga * 0.1;
};

function applyDiskon(harga, fn) {
  const total = harga - fn(harga);
  return total;
}

const harga = 100;
console.log(applyDiskon(harga, diskon10Persen));
\`\`\`
`;
code27.innerHTML = marked.parse(c27);
Prism.highlightAll();

// 15. Test JS code
const code28 = document.querySelector('.code28');
const c28 = `
\`\`\`js
const fn = (x) => x * 5;

console.log(fn(2));
\`\`\`
`;
code28.innerHTML = marked.parse(c28);
Prism.highlightAll();

const code29 = document.querySelector('.code29');
const c29 = `
\`\`\`js
const arr = [1, 2, 3];

const hasil = arr.map((n) => {
  n * 2;
});

console.log(hasil);
\`\`\`
`;
code29.innerHTML = marked.parse(c29);
Prism.highlightAll();

const code30 = document.querySelector('.code30');
const c30 = `
\`\`\`js
const harga = [1000000, 80000, 2000000, 150000, 200000];

const produkMurah = harga.filter((h) => h < 1000000);
console.log(produkMurah);
\`\`\`
`;
code30.innerHTML = marked.parse(c30);
Prism.highlightAll();

// 16. Test JS code
const code31 = document.querySelector('.code31');
const c31 = `
\`\`\`js
const obj = { a: 1, b: 2 };

console.log(Object.keys(obj));
\`\`\`
`;
code31.innerHTML = marked.parse(c31);
Prism.highlightAll();

const code32 = document.querySelector('.code32');
const c32 = `
\`\`\`js
const key = 'umur';

const user = {
  [key]: 25,
};

console.log(user.umur);
\`\`\`
`;
code32.innerHTML = marked.parse(c32);
Prism.highlightAll();

const code33 = document.querySelector('.code33');
const c33 = `
\`\`\`js
const tahunIni = 2026;

const mahasiswa1 = {
  nama: 'Hary',
  angkatan: 2023,
  hitungUmurAngkatan(tahun) {
    const umurAngkatan = tahun - this.angkatan;
    return umurAngkatan;
  },
};

const mahasiswa2 = {
  nama: 'john',
  angkatan: 2000,
  hitungUmurAngkatan(tahun) {
    const umurAngkatan = tahun - this.angkatan;
    return umurAngkatan;
  },
};

console.log(mahasiswa1.hitungUmurAngkatan(tahunIni));
console.log(mahasiswa2.hitungUmurAngkatan(tahunIni));
\`\`\`
`;
code33.innerHTML = marked.parse(c33);
Prism.highlightAll();

// 1. Test JS code
const code34 = document.querySelector('.code34');
const c34 = `
\`\`\`js
const a = { x: 1 };
const b = a;

b.x = 5;

console.log(a.x);
\`\`\`
`;
code34.innerHTML = marked.parse(c34);
Prism.highlightAll();

const code35 = document.querySelector('.code35');
const c35 = `
\`\`\`js
const user = {
  name: 'A',
  address: {
    city: 'Bandung',
  },
};

const copy = { ...user };
copy.address.city = 'Jakarta';

console.log(user.address.city);
\`\`\`
`;
code35.innerHTML = marked.parse(c35);
Prism.highlightAll();

const code36 = document.querySelector('.code36');
const c36 = `
\`\`\`js
const state = {
  user: {
    name: 'Dicky',
    address: {
      city: 'Bandung',
    },
  },
};

function updateCity(newCity) {
  const newState = { ...state };
  newState.user.address.city = newCity;
  return newState;
}

const newState = updateCity('Jakarta');

console.log(state.user.address.city); // Jakarta
console.log(newState.user.address.city); // Jakarta
\`\`\`
`;
code36.innerHTML = marked.parse(c36);
Prism.highlightAll();

const code37 = document.querySelector('.code37');
const c37 = `
\`\`\`js
const state = {
  user: {
    name: 'Dicky',
    address: {
      city: 'Bandung',
    },
  },
};

function updateCity(newCity) {
  const newState = structuredClone(state);
  newState.user.address.city = newCity;
  return newState;
}

const newState = updateCity('Jakarta');

console.log(state.user.address.city); // Bandung
console.log(newState.user.address.city); // Jakarta
\`\`\`
`;
code37.innerHTML = marked.parse(c37);
Prism.highlightAll();

// 2. Test JS code
const code38 = document.querySelector('.code38');
const c38 = `
\`\`\`js
const user = {
  nama: 'Andi',
  sapa() {
    return this.nama;
  },
};

const fn = user.sapa;

console.log(fn());
\`\`\`
`;
code38.innerHTML = marked.parse(c38);
Prism.highlightAll();

const code39 = document.querySelector('.code39');
const c39 = `
\`\`\`js
const obj = {
  nama: 'Budi',
  sapa: () => this.nama,
};

console.log(obj.sapa());
\`\`\`
`;
code39.innerHTML = marked.parse(c39);
Prism.highlightAll();

const code40 = document.querySelector('.code40');
const c40 = `
\`\`\`js
const user = {
  nama: 'Dewi',
  sapa() {
    setTimeout(function () {
      console.log(this.nama);
    }, 1000);
  },
};

user.sapa(); // undefined
\`\`\`
`;
code40.innerHTML = marked.parse(c40);
Prism.highlightAll();

const code41 = document.querySelector('.code41');
const c41 = `
\`\`\`js
const user = {
  nama: 'Dewi',
  sapa() {
    setTimeout(() => {
      console.log(this.nama);
    }, 1000);
  },
};

user.sapa(); // Dewi
\`\`\`
`;
code41.innerHTML = marked.parse(c41);
Prism.highlightAll();

const code42 = document.querySelector('.code42');
const c42 = `
\`\`\`
user (object)
 └── sapa()  ← this = user
      └── arrow function (setTimeout callback)
           └── pakai this dari sapa()
\`\`\`
`;
code42.innerHTML = marked.parse(c42);
Prism.highlightAll();

// 3. Test JS code
const code43 = document.querySelector('.code43');
const c43 = `
\`\`\`js
function A(nama) {
  this.nama = nama;
}

const a = new A('Dicky');

console.log(a.nama);
\`\`\`
`;
code43.innerHTML = marked.parse(c43);
Prism.highlightAll();

const code44 = document.querySelector('.code44');
const c44 = `
\`\`\`js
function A() {}
A.prototype.say = function () {};

const a1 = new A();
const a2 = new A();

console.log(a1.say === a2.say);
\`\`\`
`;
code44.innerHTML = marked.parse(c44);
Prism.highlightAll();

const code45 = document.querySelector('.code45');
const c45 = `
\`\`\`js
function User(name) {
  this.name = name;
}

User.prototype.say = () => {
  return 'Hi ' + this.name;
};

const u = new User('Dewi');
console.log(u.say());
\`\`\`
`;
code45.innerHTML = marked.parse(c45);
Prism.highlightAll();

const code46 = document.querySelector('.code46');
const c46 = `
\`\`\`js
const user = {
  nama: 'Dewi',
  sapa() {
    setTimeout(() => {
      console.log(this.nama);
    }, 1000);
  },
};

user.sapa(); // Dewi
\`\`\`
`;
code46.innerHTML = marked.parse(c46);
Prism.highlightAll();

function User(name) {
  this.name = name;
}

User.prototype.say = () => {
  console.log(typeof this.name);
  return 'Hi ' + this.name;
};

const u = new User('Dewi');
console.log(u.say());
