
function setInputNumberPhone (fieldId,Increase){ 
    const numberField = document.getElementById(fieldId);
    const numberString = numberField.value; 
    let num = parseFloat(numberString); 
    if(Increase == true){
        num++;   
    }   
    else{
        num--;
    }  
       
    numberField.value = num;
}


function calculateItem(numberField){
    const quantity = document.getElementById(numberField).value;    
    const price = parseFloat(quantity) * 1219;
    return price;
}
function setPrice(numberField,displayId){
    const price = calculateItem(numberField);
    const displayPrice = document.getElementById(displayId);
    displayPrice.innerText = price;
}

document.getElementById('btn-phone-plus').addEventListener('click', function(){ 
    setInputNumberPhone('phone-number-field', true);
    setPrice('phone-number-field','phone-total');
   
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){ 
    setInputNumberPhone('phone-number-field', false);
    setPrice('phone-number-field','phone-total');   
})
document.getElementById('btn-case-plus').addEventListener('click', function(){ 
    setInputNumberPhone('case-number-field', true);
    setPrice('case-number-field','case-total');
   
})

document.getElementById('btn-case-minus').addEventListener('click', function(){ 
    setInputNumberPhone('case-number-field', false);
    setPrice('case-number-field','case-total');   
})

