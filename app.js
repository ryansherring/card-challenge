function ccConfirm(){
    // CC NUMBER
    var field1 = document.getElementById('part1').value;
    var field2 = document.getElementById('part2').value;
    var field3 = document.getElementById('part3').value;
    var field4 = document.getElementById('part4').value;
    var cardNumber = `${field1}-${field2}-${field3}-${field4}`
    document.getElementById('ccnumconfirm').innerHTML=cardNumber;

    // CC DATE
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;
    var expirationDate = `${month}, ${year}`
    document.getElementById('dateconfirm').innerHTML=expirationDate;
    
    
    // CC CVV
    var cvv = document.getElementById('cvv').value;
    document.getElementById('cvvconfirm').innerHTML=cvv;
}


