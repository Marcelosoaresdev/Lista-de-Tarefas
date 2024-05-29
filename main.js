$(document).ready(function () {
  // Adicionar nova tarefa ao enviar o formulário
  $("form").on("submit", function (e) {
    e.preventDefault();

    // Obtém o valor do input
    const tarefa = $("form input[type='text']").val();

    // Verifica se o valor não está vazio
    if (tarefa) {
      // Cria um novo item de lista com a tarefa e define o estilo de display
      const novoItem = $("<li></li>").text(tarefa).css("display", "none");

      // Adiciona o novo item à lista
      $(".respostas ul").append(novoItem);

      // Exibe o novo item com uma animação de desvanecimento
      novoItem.fadeIn();

      // Limpa o campo de entrada
      $("form input[type='text']").val("");
    }
  });

  // Adicionar evento de click aos itens da lista para riscar o texto
  $(".respostas ul").on("click", "li", function () {
    // Toggle do text-decoration line-through
    $(this).toggleClass("riscado");
  });
});
