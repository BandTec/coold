function logar() {
    if (email_txt.value.endsWith('.com') ||  email_txt.value.endsWith('.br')) {
        erro_email.innerHTML = `Email Válido!`;
    } else {
        erro_email.innerHTML = `Email Inválido!`;
    }
}