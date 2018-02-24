/* ALUNOS */

app.controller("CadAlunosCtrl",['$scope', function($scope){
  // Títulos dos painéis
  $scope.titulo1 = "Inscrição de Aluno";
  $scope.titulo2 = "Alunos Inscritos";
  // Declarando Array Alunos
  $scope.alunos = [{matricula:"79228", nome:"Weslley Alves de Aguiar", cursos: {cod: 1, curso: "Análise e Desenvolvimento de Sistemas"}, turma:"1TDSJ"},
                  {matricula:"77842", nome:"Guilherme Eduardo de Souza Melo", cursos: {cod: 1, curso: "Análise e Desenvolvimento de Sistemas"}, turma:"1TDSJ"},
                  {matricula:"79243", nome:"Italo Rodrigues Silva Souza", cursos: {cod: 1, curso: "Análise e Desenvolvimento de Sistemas"}, turma:"1TDSJ"},
                  {matricula:"78131", nome:"Douglas Silva Conde", cursos: {cod: 1, curso: "Análise e Desenvolvimento de Sistemas"}, turma:"1TDSJ"}];
  // Função para Adicionar Aluno
  $scope.addAluno = function(aluno){
    $scope.alunos.push(angular.copy(aluno));
    delete $scope.aluno;
  };
  // Array de Cursos
  $scope.cursos = [
    {cod: 1, curso: "Análise e Desenvolvimento de Sistemas"},
    {cod: 2, curso: "Sistemas para Internet"},
    {cod: 3, curso: "Ciência da Computação"},
    {cod: 4, curso: "Redes de Computadores"}
  ];
  // Definindo a classe SELECIONADO para o item selecionado na tabela
  $scope.classe1 = "selecionado";
  //Função para Apagar Aluno da tabela
  $scope.apagarAluno = function(alunos){
    $scope.alunos = alunos.filter(function(aluno){
      if (!aluno.selec) {
        return aluno;
      }
    });
  };
  // Verificar se tem aluno selecionado, para habilitar o botão Apagar
  $scope.alunoSelecionado = function(alunos) {
    return alunos.some(function(aluno){
              return aluno.selec;
            });
  };

}]);
