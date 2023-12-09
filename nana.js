function calc() {
    let expense = Number(phone.value) + Number(food.value) + Number(coffee.value) + Number(health.value) + Number(trans.value) + Number(oth.value)
    if (expense > 10000) {
      disp.innerHTML = "You can't spend above $10000 in a day!"
    }else if (phone.value == '' && food.value == '' && coffee.value == '' && health.value == '' && trans.value == '' && oth.value == '') {
   
    }
       
    else {
      exp.innerHTML = "-$" + expense
      bal.innerHTML = "$" + (300000 - expense)
      daily.innerHTML = "$" + (10000 - expense)
    }
  
    phone.value = ''
    coffee.value = ''
    food.value = ''
    health.value = ''
    oth.value = ''
    trans.value = ''
  
}