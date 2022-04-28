// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
let i = 1
let result = 1
while (i < 11) {
    result = result *2
    i++
}
console.log(result)

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

//Вариант 1
const power = function(num) {
    let result =1
    for(let i = 1; i <= num; i++){
        result = result *2
    }
    return result
}
console.log(power(10))

//Вариант 2
const power2 = function(num) {
    return 2**num
}
console.log(power2(10))

//Вариант 3
const power3 = function(num) {
    return Math.pow(2,num)
}
console.log(power3(10))

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

let word = '=) '
let result2 = ''
for (let i=1; i<=5; i++) {
    result2+=word
    console.log(result2)
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

//Вариант 1
function printSmile(stroka, numberOfRows) {
    let result = ''
    for (let i=1; i<=numberOfRows; i++){
        result+=stroka
        console.log(result)
    }
}
printSmile('=)) ',5)

//Вариант 2
function printSmile(stroka, numberOfRows) {
    for (let i=1; i<=numberOfRows; i++){
        console.log(stroka.repeat(i))
    }
}
printSmile('=))) ',6)

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

//Вариант 1
const getWordStructure = function(word) {
    let n = 0
    let k = 0
    let gl=['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
    let sgl=['b', 'B', 'c', 'C', 'd', 'D', 'f', 'F', 'g', 'G', 'h', 'H', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'p', 'P', 'r', 'R', 's', 'S', 't', 'T', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z', 'q', 'Q']

    for(i = 0; i < word.length; i++){
        for(j = 0; j < gl.length; j++){
            if(word[i] === gl[j]){
                n++
                break
            }
        }
        for(q = 0; q < sgl.length; q++){
            if(word[i] === sgl[q]){
                k++
                break
            }
        }
    }
    console.log('1. Слово ' + word + ' состоит из ' + n + ' гласных и ' + k + ' согласных букв.')
}
getWordStructure('Margarita Z.')

//Вариант 2
function getWordStructure2(word) {
    const vowels = 'aeiou'.split('')
    const consonants = 'bcdfghjklmnpqrstvwxyz'.split('')
    let numberOfVowels = 0
    let numberOfConsonants = 0
    for(char of word.toLowerCase()){
        if (vowels.includes(char)) numberOfVowels++
        if (consonants.includes(char)) numberOfConsonants++
    }
    console.log('2. Слово ' + word + ' состоит из ' + numberOfVowels + ' гласных и ' + numberOfConsonants + ' согласных букв.')
}
getWordStructure2('Margarita Z.')
getWordStructure2('margarita')

//Вариант 3
function getWordStructure3 (word) {
    let vowels = word.match(/[aeiou]/gi)
    let consonants = word.match(/[bcdfghjklmnpqrstvwxyz]/gi)
    console.log('3. Слово ' + word + ' состоит из ' + vowels.length + ' гласных и ' + consonants.length + ' согласных букв.')
}
getWordStructure3('Margarita')
getWordStructure3('margarita')
getWordStructure3('Case')

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

//Вариант 1
function isPalindrom(word) {
    let newStroka = ''
    for(i = word.length - 1; i >= 0; i --){
        newStroka = newStroka + word[i]
    }
    if (word.toLowerCase() == newStroka.toLowerCase()) {
        console.log(word, ' - палиндром!')
    } else {
        console.log(word, ' - НЕ палиндром!')
    }
}
isPalindrom('Ab1ba')
isPalindrom('Un12nu')

//Вариант 2
function isPalindrom2(word){
    return word.toLowerCase() == word.toLowerCase().split('').reverse().join('')
}
console.log (`${isPalindrom2('UMMU') ? 'It is a palindrome' : 'It is not a palindrome'}`)

//Вариант 3
function isPalindrom3(str) {
    str = str.toLowerCase()
    const len = str.length
    for (let i =0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return 'It is not a palindrome'
        }
    }
    return 'It is a palindrome'
}
console.log(isPalindrom3('addfdda'))
