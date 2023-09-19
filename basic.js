// let sentence = "Somewhere Waldo is hiding in  this text."
let sentence = "The dog chased the cat."
let regex = /the/

let myString1 = "Hello, World!"
let myRegex1 = /Hello/i
let result1 = myRegex1.test(myString1)

console.log("Result:: ", result1)

let waldoIsHiding = "Somewhere Waldo is hiding in this text."
let waldoRegex = /Wal/i
let result2 = waldoRegex.test(waldoIsHiding)

//using test method
console.log("Result2:: ", result2)

let petString = "James has a pet fish."
let petRegex = /dog|cat|bird|fish|dolphin/
let result3 = petRegex.test(petString)

console.log("Result3:: ", result3)

//ignore case sensitive
let fccString = "freecodecamp"
let fccRegex = /freecodecamp/i
let result4 = fccRegex.test(fccString)

console.log("Result4:: ", result4)

//extract matches
let extractStr = "Extract the word 'Coding' from this string."
let codingRegex = /coding/i
let result5 = extractStr.match(codingRegex)

console.log("Result5:: ", result5)

//repeat pattern
let testStr = "Repeat, Repeat, Repeat"
let ourRegex = /Repeat/g
let result6 = testStr.match(ourRegex)

console.log("Result6:: ", result6)

//repeat pattern with multiple flags
let twinkleStar = "Twinkle, twinkle, little star"
let starRegex = /twinkle/ig
let result7 = twinkleStar.match(starRegex)

console.log("Result7:: ", result7)

//match and with define dot chararacter length 
let humStr = "I'll hum a song with a huaaaa and very huge cat"
let hugStr = "Bear hugaaaa"
let huRegex = /hu.../gi
let result8 = humStr.match(huRegex)
let result9 = hugStr.match(huRegex)

console.log("Result8:: ", result8)
console.log("Result9:; ", result9)

//
let exampleStr = "Let's have fun with regular expressions!"
let unRegex = /un/;
let result10 = unRegex.test(exampleStr)

console.log("Result10:: ", result10)







