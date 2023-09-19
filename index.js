// match vowel
let bgRegex = /b[aiu]g/

let qouteSample = "Beware of bugs in the above code; I have only proved it correct"
let vowelRegex = /[aeiou]/ig

let result = qouteSample.match(vowelRegex)
console.log("Result:: ", result)
