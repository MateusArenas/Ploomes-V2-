angular.module("ploomesCRM", []);
angular.module("ploomesCRM").controller("ploomesCRMCrl", function($scope){
    $scope.app = "lista";
    $scope.contatos = [
        {nome: "Pedro", telefone: "99999"},
        {nome: "Marcos", telefone: "995454"},
        {nome: "Mateus", telefone: "5456456"},
    ];
    $scope.operadoras = [
        {nome:'oi',codigo:'14'},
        {nome:'vivo',codigo:'5'},
        {nome:'tim',codigo:'10'},
    ];
    $scope.adicionarContato = (contato)=>{
        $scope.contatos.push(angular.copy(contato))
    };
});