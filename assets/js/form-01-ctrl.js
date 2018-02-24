/* FORM 01 */

app.controller('form01', ['$scope', function($scope) {
  $scope.criador = 'Weslley Aguiar';
  $scope.estados = ["Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal","Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins"];

}]);

// Função para as Masks
$(document).ready(function(){
  $('#idMatricula').mask('AA00000');
  $('#idRg').mask('00.000.000-0');
  $('#idCpf').mask('000.000.000-00');
  $('#idTelResid').mask('(00) 0000-0000');
  $('#idCel').mask('(00) 00000-0000');
  $('#idTelRec').mask('(00) 0000-0000');
  $('#idCep').mask('00000-000');
});

// Função para Tooltip
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});
