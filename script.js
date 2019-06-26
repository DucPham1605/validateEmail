function is_Email(str) {
    let regexp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(.[A-Za-z0-9]+)$/;
    if (regexp.test(str)) {
        return true;
    }
    else {
        return false;
    }

}

let email = "abc@hotmail.com";
console.log(is_Email(email));
email = "@dasda";
console.log(is_Email(email));

