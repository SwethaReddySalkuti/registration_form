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
        localStorage.setItem(nameInput.value,emailInput.value);
    }

}
