$(document).ready(function () {
  // Array para armazenar as tarefas adicionadas
  const tarefasList = [];

  // Adicionar nova tarefa ao enviar o formulário
  $("form").on("submit", function (e) {
    e.preventDefault();

    // Obtém o valor do input e remove espaços em branco do início e do fim
    const tarefa = $("form input[type='text']").val().trim();

    // Verifica se o valor não está vazio e se a tarefa não foi adicionada anteriormente
    if (tarefa && !tarefasList.includes(tarefa)) {
      // Adiciona a tarefa ao array
      tarefasList.push(tarefa);

      // Cria um novo item de lista com a tarefa e define o estilo de display
      const novoItem = $("<li></li>").text(tarefa).css("display", "none");

      // Adiciona o novo item à lista
      $(".respostas ul").append(novoItem);

      // Exibe o novo item com uma animação de desvanecimento
      novoItem.fadeIn(900);

      // Limpa o campo de entrada
      $("form input[type='text']").val("");
    } else if (tarefasList.includes(tarefa)) {
      // Caso a tarefa já tenha sido adicionada, exibe uma mensagem
      alert(`A tarefa "${tarefa}" já foi adicionada!`);
    } else {
      // Caso o campo esteja vazio, exibe uma mensagem
      alert("O campo de tarefa está vazio!");
    }
  });

  // Adicionar evento de click aos itens da lista para riscar o texto
  $(".respostas ul").on("click", "li", function () {
    // Toggle do text-decoration line-through
    $(this).toggleClass("riscado");
  });
});
