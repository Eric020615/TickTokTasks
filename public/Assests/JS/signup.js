const sign_up_form = document.querySelector('#sign-up-form');
const email_error = document.querySelector('.email-error');
const phone_num_error = document.querySelector('.phone-num-error');
const passoword_error = document.querySelector('.password-error');
sign_up_form.addEventListener('submit', async (e)=>{
    // prevent default action (refresh page)
    e.preventDefault();
    // reset errors
    email_error.textContent = '';
    phone_num_error.textContent = '';
    passoword_error.textContent = '';
    // get value (form.email(input)=>value)
    const email = sign_up_form.email.value;
    const phone_num = sign_up_form.phone_num.value;
    const password = sign_up_form.password.value;
    try{
        // fetch() make asynchrounous requests to server
        // load information that is returned by server onto web pages
        // it return a promise
        const resolve = await fetch('/signup',{
            method: 'POST',
            body: JSON.stringify({email, phone_num, password}),
            headers: {'Content-Type':'application/json'}
        });
        const data = await resolve.json();
        if(data.errors){
            email_error.textContent = data.errors.email;
            phone_num_error.textContent = data.errors.phone_num;
            passoword_error.textContent = data.errors.password;
        }
        if(data.user){
            location.assign('/home');
        }
    }
    catch(err){
        console.log(err);
    }
});