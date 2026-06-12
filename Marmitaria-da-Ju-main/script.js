function enviarMensagem() {
    const formulario = document.getElementById("contato-whatsapp");
    const nome = document.getElementById("nome");
    const mensagem = document.getElementById("mensagem");
    const mensagemCompleta = document.getElementById("mensagem-completa");
    // capiturar os dados do formulário


    let pedido = "";
    //declarar a variável pedido para armazenar os itens selecionados e suas quantidades

    const marmitas = document.querySelectorAll(".marmitas_item");

    marmitas.forEach(item => {
        const checkbox = item.querySelector('input[type="checkbox"]');
        const quantidade = item.querySelector(".quantidade");

        if (checkbox.checked) {
            pedido += `🍽 ${checkbox.value} - ${quantidade.value} unidade(s)\n`;
        }
    });
    // Iterar sobre cada item de marmita, verificar se o checkbox está marcado e, se estiver, adicionar o nome da marmita e a quantidade selecionada à variável pedido. 


    // Validação para garantir que pelo menos uma marmita e nome seja colocado
    if (pedido === "") {
        alert("Selecione pelo menos uma marmita.");
        return;
    }
    if (nome.value.trim() === "") {
    alert("Por favor, informe seu nome.");
    nome.focus();
    return;
}
    

    const texto =
`Olá!

Meu nome é ${nome.value}.

Gostaria de pedir:

${pedido}

📝 Observações:
${mensagem.value}`;

    const telefone = "+5515998046007"; 

    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
}
