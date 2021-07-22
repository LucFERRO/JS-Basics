// Credit Card

let input_number = document.getElementById('card_number')
let input_owner = document.getElementById('card_owner')
let input_date = document.getElementById('date')
let input_crypt = document.getElementById('crypt')
let img_number = document.getElementById('card_code')
let img_name = document.getElementById('card_name')
let img_date = document.getElementById('card_date')
let img_cvc = document.getElementById('card_cvc')

input_number.onkeypress = input_number.onkeyup = function() {
    img_number.innerHTML = this.value;
    if (input_number.value == ''){
        img_number.innerHTML = '• • • • &nbsp; • • • • &nbsp; • • • • &nbsp; • • • •';
    }
}
input_owner.onkeypress = input_owner.onkeyup = function() {
    img_name.innerHTML = this.value;
    if (input_owner.value == ''){
        img_name.innerHTML = 'FULL NAME';
    }
}
input_date.onkeypress = input_date.onkeyup = function() {
    img_date.innerHTML = this.value;
    if (input_date.value == ''){
        img_date.innerHTML = 'MM/YYYY';
    }
}

