$(document).ready(function() {
    console.log("Ready!");
    var pessoa;
    if (localStorage)
        pessoa = JSON.parse(localStorage.getItem("pessoa"));
    //alert(JSON.stringify(pessoa));

    if (pessoa) {
        $("#resultNome").text(pessoa.name)
        $("#resultEmail").text(pessoa.email)
        $("#resultSenha").text(pessoa.password)
    }
});