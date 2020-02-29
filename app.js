
let start = Number(prompt('Start:'))
let finish = Number(prompt('Finish:'))
let interval = Number(prompt('Interval:'))



if(isNaN(start) || isNaN(finish)|| isNaN(interval)){document.getElementById("output").innerHTML = 'Incorrect number format. Please refresh and try again'}

else if (inteval = 0) {document.getElementById("output").innerHTML = 'Inteval cannot be zero. Please refresh and try again'}

else if ((finish-start)%interval !== 0) {document.getElementById("output").innerHTML = 'The difference between the start and finish must be divisible by the interval. Please refresh and try again'}

else if ((finish > start && interval < 0)||(finish < start && interval > 0)){ document.getElementById("output").innerHTML = 'The interval does not move in the right direction. Please refresh and try again'}

else{

homeworkFunction(start, finish, interval)

}

function homeworkFunction(start, finish, interval) {

const initialArray =[]
let arraySum = 0
const binaryArray = []

if(finish > start){
for (let i = start; i <= finish; i += interval) {initialArray.push(i);}}
else {for (let i = start; i >= finish; i += interval) {initialArray.push(i);}}

for (let i = 0; i < initialArray.length; i+=1){
  arraySum += initialArray[i]}

for (let i = 0; i < initialArray.length; i+=1){
  binaryArray.push(initialArray[i].toString(2))
}

document.getElementById("output").innerHTML = `List of numbers: ${initialArray}\nSum of Numbers: ${arraySum}\nBinary of Numbers: ${binaryArray}`
}

/*
function test(age) {
  if(age < 18) { alert('must be 18 or older')}
  else { alert ('you can drive by yourself')}
}

const inputStr = prompt('How old are you?')
const age = Number(inputStr)

if (isNaN(age)) {alert ('Please input valid number')}
else {test(age)}*/