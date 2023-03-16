let passwdInputs = document.querySelectorAll(".password");
let inputs = document.querySelectorAll('input');
let form = document.querySelector('form');
let html = document.querySelector('html');
let firstName = inputs[0];
let lastName = inputs[1];
let phoneNumber = inputs[3];
let password = inputs[4];
let passwordConfirm = inputs[5];
console.log(inputs);

html.addEventListener('mouseover', () => {
        if (password.value !== passwordConfirm.value)
        {
            password.setAttribute('style', 'border: 3px red solid');
            passwordConfirm.setAttribute('style', 'border: 3px red solid');
            
        }
        else if (password.value === passwordConfirm.value && password.value.length > 0)
        {
            password.setAttribute('style', 'border: 3px green solid');
            passwordConfirm.setAttribute('style', 'border: 3px green solid');
        }
});


firstName.addEventListener('mouseleave', () => {
    if (firstName.value.length <= 0)
            firstName.setAttribute('style', 'border: 3px red solid');
    else
        firstName.style.border = 'none';
})

lastName.addEventListener('mouseleave', () => {
    if (lastName.value.length <= 0)
        lastName.setAttribute('style', 'border: 3px red solid');
    else
        lastName.style.border = 'none';
})

phoneNumber.addEventListener('input', () => {
    
    // console.log(phoneNumber.value);
    if (phoneNumber.value.length === 3)
        phoneNumber.value = `(${phoneNumber.value}) `;
    if (phoneNumber.value.length === 9)
        phoneNumber.value = `${phoneNumber.value}-`;
    if (phoneNumber.value.length >= 9)
        phoneNumber.value = `${phoneNumber.value}`;
})


