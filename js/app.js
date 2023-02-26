const os = require('os');
const operator = document.querySelector('.operator');
const result = document.querySelector('.result span');
const btns = document.querySelectorAll('button');
const num = document.querySelector('.num');

let currentRes = 0;
console.log(os.type());
const addNumHandle = () => {
  currentRes += +num.value;
  // calcOperand('+', +num.value)
  output();
  nullNum();
}

  const subNumHandle = () => {
    currentRes -= +num.value;
    output();
    nullNum();
  }
  

  const multyNumHandle = () => {
    currentRes *= +num.value;
    output();
    nullNum();
  }

  const divNumHandle = () => {
    currentRes /= +num.value;
    output();
    nullNum();
  }
  
  
  
  const calcOperand = (operand, numVal) => {
      currentRes = `${currentRes} ${operand} ${ numVal}`;
      console.log(currentRes)
  }



  const output= () => {
    result.innerHTML =  currentRes;
  }

  const nullNum = () => {num.value = 0;}

  output();
  console.log(os.type())
 
  btns[0].addEventListener('click',addNumHandle)
  btns[1].addEventListener('click',subNumHandle)
  btns[2].addEventListener('click',multyNumHandle)
  btns[3].addEventListener('click', divNumHandle)
 
 const obj = {
  a:23,
  b:45
 }  
 setInterval(() => {
    document.write('hello')
 },200)
 console.log(obj.a, obj['b']);    
// operator.style.border = '2px solid red';
// result.style.border = '2px solid red';

// inpu form elemen