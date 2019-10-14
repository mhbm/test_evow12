function addCadastro() {
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
}

$(document).ready(function() {
    console.log("Ready!");
    $("#submitCadastro").click(addCadastro);
});