
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


function calculateItem(numberField,value){
    const quantity = document.getElementById(numberField).value;    
    const price = parseFloat(quantity) * parseFloat(value);
    return price;
}
function setPrice(numberField,displayId,value){
    const price = calculateItem(numberField,value);
    const displayPrice = document.getElementById(displayId);
    displayPrice.innerText = price;
}

document.getElementById('btn-phone-plus').addEventListener('click', function(){ 
    setInputNumberPhone('phone-number-field', true);
    setPrice('phone-number-field','phone-total',1219);
   
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){ 
    setInputNumberPhone('phone-number-field', false);
    setPrice('phone-number-field','phone-total',1219);   
})
document.getElementById('btn-case-plus').addEventListener('click', function(){ 
    setInputNumberPhone('case-number-field', true);
    setPrice('case-number-field','case-total','59');
   
})

document.getElementById('btn-case-minus').addEventListener('click', function(){ 
    setInputNumberPhone('case-number-field', false);
    setPrice('case-number-field','case-total','59');   
})

