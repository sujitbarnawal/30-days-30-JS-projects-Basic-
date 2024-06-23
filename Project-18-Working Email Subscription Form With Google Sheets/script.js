const scriptURL = 'https://script.google.com/macros/s/AKfycbzMC2suMhj_OYkbGHYOjf--eRUi379QO_BGUYEoQSpOyvY7pAWInp2vfMJa-cPwOCfF/exec'
  const form = document.forms['submit-to-google-sheet']
  let successMessage=document.getElementById("hide")
  let emailInput=document.getElementById("email")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        successMessage.innerHTML=`Thankyou for subscribing!`
        setTimeout(()=>{
            successMessage.innerHTML=""
            emailInput.value=""
        },3000)
        // form.reset()
    })
      .catch(error => console.error('Error!', error.message))
  })