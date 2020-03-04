
//set up input variables and array constant
const start = Number(prompt('Enter the start:'))
const finish = Number(prompt('Enter the finish:'))
const interval = Number(prompt('Enter the step:'))
const initialArray =[]

//give error if any input is not a number
if(isNaN(start) || isNaN(finish)|| isNaN(interval)){document.getElementById("lineOne").innerHTML = 'Invalid integer input, please reload and try again.'}

//give error if step is zero
else if (inteval = 0) {document.getElementById("lineOne").innerHTML = 'Step cannot be zero, please reload and try again.'}

//give error if difference between start and finish can't be divided by the step
else if ((finish-start)%interval !== 0 || finish === start) {document.getElementById("lineOne").innerHTML = 'The difference between the start and finish must be divisible by the step, please reload and try again.'}

//give error if the step goes in wrong direction
else if ((finish > start && interval < 0)||(finish < start && interval > 0)){ document.getElementById("lineOne").innerHTML = 'The step does not move in the right direction, please reload and try again.'}

//if the inputs are correct call the three functions
else{
arrayFunction(start, finish, interval)
sumFunction(initialArray)
binaryFunction(initialArray)
}

//function to fill in the array with numbers from start to finish adding the interval at each round of the loop
function arrayFunction(start, finish, interval) {
  if(finish > start){
    for (let i = start; i <= finish; i += interval) {initialArray.push(i);}}
    else {for (let i = start; i >= finish; i += interval) {initialArray.push(i);}}

    document.getElementById("lineOne").innerHTML = `The generated array is ${initialArray}`
}

//function to add up all the numbers within the array
function sumFunction(initialArray){
  let arraySum = 0
  for (let i = 0; i < initialArray.length; i+=1){
    arraySum += initialArray[i]}
    
    document.getElementById("lineTwo").innerHTML = `The sum is ${arraySum}`
}

//convert each number in the array to binary
function binaryFunction(initialArray){
  const binaryArray = []
  for (let i = 0; i < initialArray.length; i+=1){
    binaryArray.push(initialArray[i].toString(2))}
    
    document.getElementById("lineThree").innerHTML = `The binary of absolute element values are: ${binaryArray}`
}