document.body.style.backgroundColor = `darkslategray`;
// Task01
// desciption: Напишите функцию которая может
// перебрать такой массив и отфильтрует его
// оставив только имена файлов с расширениями
// .js .jsx .ts
const fileNames = [
  'module.jsx',
  'index.html',
  'style.css',
  'index.js',
  'file.ts',
  'library.css',
  'my.plugin.js',
];

const extFilter = () => {
  const reg = /\.(js|jsx|ts)$/;
  return fileNames.filter(item => reg.test(item));
};

console.log('new fileNames:', extFilter());
console.log('-----------------------');
// Task02
// Напишите регулярное выражение, которое находит email адреса:
// До символа @ email может содержать не менее одного символа класса \w.
// После символа @ и до .(точки), после которой начинается домен,
// может содержать только буквы и быть не короче трех символов.
// После .(точки) может содержать только буквы и
// быть от 2 до 5 символов в длину.

// Примеры валидные: info@methed.ru, max24@mail.com, java_script@google.io
// Примеры не валидные: my-mail@yandex.ru, tom_yam@ya.ru, zero@mai1.xyz
const input = document.getElementById('input');
const output = document.getElementById('output');
// const str = '';
input.addEventListener('input', () => {
  const validEmails = input.value.replace(
      // Исключил дэш и включил точку в начале емейла до @
      /^(?!.*-)[\w.]+@[a-zA-Z]{3,}\.[a-zA-Z]{2,5}$/gi,
      (...str) => {
        console.log(str);
      });
  if (validEmails) {
    // output.textContent = validEmails.join(', ');
    output.textContent = validEmails;
  } else {
    output.textContent = '';
  }
});

/(\w+)@([a-zA-Z]{3,})\.([a-zA-Z]{2,5})/g; // g1
/(\w+@[a-zA-Z]{3,}\.[a-zA-Z]{2,5})/g; // g2
/^(?!.*-)\w\.+@[a-zA-Z]{3,}\.[a-zA-Z]{2,5}$/; // g3
/(\W+)@([^A-Za-z]{3,})\.([^A-Za-z]{2,5})/gi; // m1
/[a-zA-Z]+@([a-zA-Z]{3,})\.([a-zA-Z]{2,5})/gi; // m2

// Task3
// Напишите регулярное выражение, которое находит текст в скобках
const text = `Здоровый (праздничный) 
ужин вовсе не обязательно должен состоять из шпината,
 гречки и вареной куриной грудки. Самыми лучшими способами приготовления еды
  (по мнению моей мамы) являются следующие:
   варка на пару, запекание или варка в воде.
   Помимо стандартных мандаринов и ананасов,
   отличным украшением любого стола станут необычные,
    экзотические фрукты(например: личи, рамбутан, тамаринд).
    Здоровой может быть даже выпечка, если она приготовлена на пару.`;
const reg3 = /\(.+?\)/gi;
console.log('reg3 test', text.match(reg3));

// Task4
// Напишите функцию которая принимает строку,
// в этой строке находит url адрес и заменяет с помощью replace на тег
// домены вида http://site.ru, https://site.com на
// <a href="http://site.ru"></a>
// <a href="https://site.com"></a>

const replaceURLsWithTags = (text) => {
  const regExp = /(https?:\/\/([A-Za-z-]+\.[A-Za-z]{2,3}))/g;
  return text.replace(
      // regExp, (match, url, domain) => `<a href="${url}">${domain}</a>`);
      regExp, '<a href="$1">$2</a>');
};

const text2 = 'Какой-то текст с разными ссылками например: http://site.ru, or https://site.com (the) end of text.';
const replacedText = replaceURLsWithTags(text2);
console.log(replacedText);


// const text2 = 'Какой-то текст с разными ссылками например: http://site.ru, or https://site.com (the) end of text.';
// const reg4 = /https?:\/\/()\.([A-Za-z]{2,3})/gi;
// text2.replace(reg4, (...result) => {
//   console.log('*', `<a href="${result}">${result}</a>`);
// });
