let Temp1 = "Celsius";//assigns Celsius
let Temp2 = "fahrenheit";//assigns Fahrenheit
let Temp3 = "Kelvin";//assigns Kelvin

let metric = prompt("What metric is the Temperature you are converting?"+`
${Temp1}
${Temp2}
${Temp3}`);//promps user to enter the metric is the temperature you are converting

let nNumber = Number(prompt("What Number would you like to convert?"));//user enters number
let metric2 = prompt("What metric would you like to convert the temperature to?"+`
${Temp1}
${Temp2}
${Temp3}`);//prompts user enter the meric they would like to convert the temperature to

let ConvertCtoF=(nNumber)*9/5+32;//converts number to fahrenheit
let ConvertFtoC=(nNumber)-32*5/9;//converts number to Celsius
let ConvertCtoK=(nNumber)+273;//converts number to Kelvin
let ConvertKtoC=(nNumber)-273;//converts number to Celsius
let ConvertFtoK=(nNumber)*9/5==459.67;//converts number to Kelvin
let ConvertKtoF=(nNumber)+459.67*5/9;//converts number to fahrenheit
let ConvertAll = ConvertCtoF+ConvertCtoK+ConvertFtoC+ConvertFtoK+ConvertKtoC+ConvertKtoF+nNumber;//all convertions combined

switch (ConvertCtoF) {//if celsius to fahrenheit
  case ConvertCtoF:
    console.log("The Temperature is"+ConvertCtoF+"Fahrenheit" );//prints out The temperature is convertion fahrenheit

  case ConvertFtoC:
    console.log("The Temperature is"+ConvertFtoC+" "+"Celsius");//prints out The temperature is convertion Celsius
    break;

  case  ConvertCtoK:
    console.log("The Temperature is"+ConvertCtoK+" "+"Kelvin");// prints out The temperature is convertion Kelvin 
    break;
  
  case ConvertKtoC:
    console.log("The Temperature is"+ConvertKtoC+" "+"Celsius");//prints out the temperature is convertion Celsius
    break;
   
  case ConvertFtoK:
    console.log("The Temperature is"+ConvertFtoK+" "+"Kelvin");//prints out the temperature is convertion Kelvin
    break;
  
  case ConvertKtoF:
    console.log("The Temperature is"+ConvertKtoF+" "+"Fahrenheit");//prints out the temperature is convertion Fahrenheit

  default://else
    console.log("End Thank you");//prints out End Thank you
    break;
}    