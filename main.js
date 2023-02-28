const btn = document.querySelector('.btn');
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');


myForm.addEventListener('submit',onSubmit)


function onSubmit(e) 
{
    e.preventDefault();


    if(nameInput.value === '' ||emailInput.value=== '' )
    {
        alert('Please Enter details');
    }
    else
    {
        const name = e.target.nameInput.value;
        const email = e.target.emailInput.value;
        const obj = {
            name : name,
            email : email
        }
    }

}
