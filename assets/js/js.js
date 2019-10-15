function addCadastro() {

    if (!validadePassword()) {
        alert("Senha precisa ter no mínimo oito caracteres");
        return;
    }
    if (validadeEmail()) {

        var pessoa = JSON.stringify({
            name: $("#txtName").val(),
            email: $("#txtEmail").val(),
            password: $("#txtPassword").val()
        });
        console.log("pessoa:", pessoa)
        localStorage.setItem("pessoa", pessoa);
        //alert("Registro adicionado.");
        //alert(localStorage.getItem(pessoa));
        location.href = 'result.html';
    } else {
        alert("Email inválido!");
    }
}

function validadePassword() {
    return $("#txtPassword").val().length > 7
}

function validadeEmail() {
    var email = $("#txtEmail").val();

    return /\S+@\S+\.\S+/.test(email);

}

$(document).ready(function() {
    console.log("Ready!");
    $("#submitCadastro").click(addCadastro);
});