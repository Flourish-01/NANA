// function calc() {
//     let expenses = Number(phone.value) + Number(food.value) + Number(coffee.value) + Number(health.value) + Number(trans.value) + Number(oth.value)
//     if (expenses > 10000) {
//       disp.innerHTML = "You can't spend above $10000 in a day!"
//     }else if (phone.value == '' && food.value == '' && coffee.value == '' && health.value == '' && trans.value == '' && oth.value == '') {
   
//     }
       
//     else {
//       exp.innerHTML = "-$" + expenses
//       bal.innerHTML = "$" + (300000 - expenses)
//       daily.innerHTML = "$" + (10000 - expenses)
//     }
  
//     phone.value = ''
//     coffee.value = ''
//     food.value = ''
//     health.value = ''
//     oth.value = ''
//     trans.value = ''
  
// }



function calc() {
  let expenses = Number(phone.value) + Number(food.value) + Number(coffee.value) + Number(health.value) + Number(trans.value) + Number(oth.value);
  
  if (expenses > 10000) {
      disp.innerHTML = "You can't spend above $10000 in a day!";
  } else  {
      
      if(phone.value !== '' || food.value !== '' || coffee.value !== '' || health.value !== '' || trans.value !== '' || oth.value !== '') {
          exp.innerHTML = "-$" + expenses;
          bal.innerHTML = "$" + (300000 - expenses);
          daily.innerHTML = "$" + (10000 - expenses);
      }
  }

 
  phone.value = '';
  coffee.value = '';
  food.value = '';
  health.value = '';
  oth.value = '';
  trans.value = '';
}
