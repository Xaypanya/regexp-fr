// important ig == match everything
// matchs vowel
let bgRegex = /b[aiu]g/

let qouteSample = "Beware of bugs in the above code; I have only proved it correct"
let vowelRegex = /[aeiou]/ig

let result = qouteSample.match(vowelRegex)
console.log("Result:: ", result)

// matchs alphabet 
let qouteSample2 = "The quick brown fox jumps over the lazy dog." 
let alphabetRegex = /[a-z]/ig
let result2 = alphabetRegex.test(qouteSample2)
let result3 = qouteSample2.match(alphabetRegex)

console.log("Result2:: ", result2)
console.log("Result3:: ", result3)

// matches number
let qouteSample3 = "Blueberry 3.141592653s are dilicious"
let myRegex = /[2-6h-s]/ig
let result4 = qouteSample3.match(myRegex)

console.log("Result4:: ", result4)

// match single characters not specified = ignore or nagative search
let qouteSample4 = "3 blind mice."
let myRegex2 = /[^0-9a-z]/ig
let result5 = qouteSample4.match(myRegex2)

console.log("Result5:: ", result5)

// match chracters that occur on or more times

let difficultSpelling = "Mississippi"
let myRegex6 = /s+/g
let result6 = difficultSpelling.match(myRegex6)

console.log("Result6:: ", result6)

// soccer world
let soccerWord = "gooooaooooal!"
let gPhrase = "gut feeling"
let oPhrase = "over the moon"
let goRex = /go*/

let result7 = soccerWord.match(goRex)
let result8 = gPhrase.match(goRex)
let result9 = oPhrase.match(goRex)

let chewieQoute = "Aaaaaaaaaaarrrgh!"
let chewieRegex = /Aa*/
let result10 = chewieQoute.match(chewieRegex)

console.log("Result7:: ", result7)
console.log("Result8:: ", result8)
console.log("Result9:: ", result9)
console.log("Result10:: ", result10)



