// DOM Manipulation
// buat elemen baru
const pBaru = document.createElement('p');
const teksBaru = document.createTextNode('Paragraf Baru');
// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksBaru);
// simpan pBaru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

const liBaru = document.createElement('li');
const tekLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(tekLiBaru);
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(liBaru, li2);

const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Sub-Judul Baru!');
h2Baru.appendChild(teksH2Baru);
sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightblue';
h2Baru.style.backgroundColor = 'cyan';