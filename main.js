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
        const name = nameInput.value;
        const email =emailInput.value;
        const obj = {
            name : name,
            email : email
        };
        const serialized = JSON.stringify(obj);
        localStorage.setItem(email,serialized);
    }

}
