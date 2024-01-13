let nome = document.querySelector("#nome")
let email = document.querySelector("#email")
let subject = document.querySelector("#subject")
let message = document.querySelector("#message")



function validaNome (){
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 3){
       txtNome.innerHTML = "O nome precisa ter mais que 3 caracteres."
    } else {
        txt.innerHTML = ""
    }
}

function validaEmail (){
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf('@')== -1 || email.value.indexOf('.')== -1){
       txtEmail.innerHTML = "O email não é valido"
    } else {
        txtEmail.innerHTML = ""
    }
}


function validaSubject (){
    let txtSubject = document.querySelector("#txtSubject")
    if(subject.value.length > 50 || subject.value.length < 5){
        txtSubject.innerHTML = "O Assunto precisa ter entre 5 e 50 caracteres."
    } else {
        txtSubject.innerHTML = ""
    }
}


function validaMessage (){
    let txtMessage = document.querySelector("#txtMessage")
    if(message.value.length > 500 || message.value.length < 5){
        txtMessage.innerHTML = "A mensagem precisa ter entre 5 e 50 caracteres."
    } else {
        txtMessage.innerHTML = ""
    }
}


