function add(a,b)
{
   return a+b;
}
function divide(a,b)
{
    return a/b;
}
function subtract(a,b)
{
    return a-b;
}
function multiply(a,b)
{
    return a*b;
}
console.log(add(8,4));
console.log(subtract(8,4));
console.log(divide(8,4));
console.log(multiply(8,4));
let firstNumber=0;
let secondNumber=0;
const result=document.createElement('div');
const containerOperator=document.createElement('p');



function operate(number1,number2,operatorP)
{
    if(operatorP=='+')
    {
       return  add(number1,number2);
    }
    else   if(operatorP=='-')
    {
       return  subtract(number1,number2);
    }
    else   if(operatorP=='/')
    {
        if(number2==0)
        return'Error';
        else
       return  divide(number1,number2);
    }
    else   if(operatorP=='x')
    {
       return  multiply(number1,number2);
    }
}

let auxContainer=document.createElement('div');
let string="";

let display=document.querySelector('#display');
let number=document.querySelectorAll('#number');
number.forEach(button=>button.addEventListener('click',()=>{display.textContent+=button.textContent;
    let displayValue=display.textContent;
    console.log(displayValue);
    
  string+=button.textContent;

   
    }
    ));
    
   

    let operatorValue=0;
    let stringOperator="";
    
    let operator=document.querySelectorAll('#operator');
   operator.forEach(button=>button.addEventListener('click',()=>{display.textContent=button.textContent;
        
        
       stringOperator+=button.textContent;
        createElement()
        string="";
      


       }));
     
     
    function createElement()
    {
        let element=document.createElement('p');
        element.textContent=string;
        result.appendChild(element);
    }
   
    let i=0;
       let equal=document.querySelector('#equal');
    equal.addEventListener('click',()=>{
        containerOperator.textContent=stringOperator;
        let arrayOperators=containerOperator.children;
        createElement()
        let arrayChildren=result.children;
        firstNumber=Number(arrayChildren[i].textContent);
        secondNumber=Number(arrayChildren[i+1].textContent);
        operatorValue=containerOperator.textContent;
        display.textContent=operate(firstNumber,secondNumber,operatorValue)
        stringOperator="";
        let element=document.createElement('p');
        string=display.textContent;
       
        
        console.log(firstNumber)
        console.log(secondNumber)
        console.log(operatorValue);
        i=i+2;
    
    }) 
    console.log(equal);
    
    let clear=document.querySelector('#clear');
    clear.addEventListener('click',()=>{display.textContent="";
    string="";
    stringOperator="";
})
           
       
         const backspace=document.querySelector('#delete');
        backspace.addEventListener('click',()=>{
            string=string.substring(0,string.length-1);
            display.textContent=string;
        });
        
   
      