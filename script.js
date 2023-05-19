document.body.style.backgroundColor = `darkslategray`;

const str = `javascript html css ecmascript #JS 
python php_8 scriptprium react typescript 
4.6 406 4-6 4\\6 Регулярные выражения 
#methed script #git выполни мёрж java`;

// regExp
// const reg = new RegExp('js', 'i');
// const reg2 = /js/i;
// reg.test(str); // (регулярное выражение).(метод)(передали строку)
const regExp1 = /\S+script/g;
const regExp2 = /java\S+/g;

console.log('regExp1 test', regExp1.test(str));
console.log('regExp2 test', regExp2.test(str));
console.log('/test/', /test/.test(str));
console.log('-----------------------');

// exec
const exec1 = regExp1.exec(str);
const exec2 = regExp2.exec(str);
const exec3 = /test/.exec(str);

console.log('🚀 ~ exec1: ', exec1);
console.log('🚀 ~ exec2: ', exec2);
console.log('🚀 ~ exec3:', exec3);
console.log('-----------------------');

// preview: match / search / split / replace
const match1 = str.match(regExp1);
const match2 = str.match(regExp2);
const match3 = str.match(/test/);

console.log('🚀 ~ match1:', match1);
console.log('🚀 ~ match2:', match2);
console.log('🚀 ~ match3:', match3);
console.log('-----------------------');

const replace1 = str.replace(regExp1, '*');
const replace2 = str.replace(regExp2, '*');
const replace3 = str.replace(/\s+\s*/g, '*');

console.log('🚀 replace1:', replace1);
console.log('🚀 replace2:', replace2);
console.log('🚀 replace3:', replace3);
console.log('-----------------------');

// match + replace
// /*/g, - искать везде, /*/i, - не учитывать регистр
// \w /[A-za-z0-9_]/ латиница,
// \s перенос строк и пробелы ,
// \d нумерация
// /^java/ , /java$/ - искать в конце или в начале строки
// /\bjava/, /B\java/, /script\b/, /script\B/ искать в начале и конце слова
// /yaho?/,  /yah?o/, - прошлый символ есть или нет.
// /yaho+/, прошлый символ должен повториться хотябы один раз
// /yaho*/, прошлый символ от 0 до max
// /yaho{2}/, /yaho{2,3}/, прошлый символ повторится x раз или {от,до}
// /<[^>]+>/ , - сделать исключение жадному квантификатору
// /<.+?>/ , - отучить от жадности '+'
// /gray|grow/g,
// /gray|grow/,
// /gr(ay|ow)/g,
// /gr(a|e)y/g, /gr[ae]y/g,- или, или с группировкой
// /(ta|tu)-\1/g, обратная связь (символы первой группы)
// /(?<name>ta|tu)-\k<name>/g, ключ группы

const regExp = /\W/g;
const match = str.match(regExp, '*');
console.log('🚀 ~ file: script.js:66 ~ match:', match);
const replace = str.replace(regExp, '*');
console.log('🚀 ~ file: script.js:68 ~ replace:', replace);
console.log('str', str);

// Примеры использования:
const input = document.getElementById('input');

input.addEventListener('input', () => {
  input.textContent = input.value.replace(/(\w+)@(\w+)\.(\w+)/g,
      (...str) => str.toUpperCase(str));
});
