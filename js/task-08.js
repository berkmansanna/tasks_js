const formRef = document.querySelector(`.login-form`);
const formBtn = document.querySelector(`button`);

formRef.addEventListener(`submit`, onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const mail = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    mail,
    password,
  };

  if (formData.mail === '' || formData.password === '') {
    window.alert('Enter the text on input!');
    return;
  } else {
    console.log(formData);
  }
  formRef.reset();
}
