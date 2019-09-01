var listaContatos = angular.module('master', []);

angular.module('master').controller('masterCtrl', function($scope){
    $scope.menu = [
        {id: 0, name:'Início', notifications: 200, img:"https://www.gstatic.com/images/icons/material/system/1x/inbox_gm_googlered600_20dp.png"},
        {id: 1,name:'Negócios', notifications: 2, img:"https://www.gstatic.com/images/icons/material/system/1x/grade_black_20dp.png"},
        {id: 2,name:'Documentos', notifications: 0, img:"https://www.gstatic.com/images/icons/material/system/1x/watch_later_black_20dp.png"},
        {id: 3,name:'Produtos', notifications: 0, img:"https://www.gstatic.com/images/icons/material/system/1x/send_black_20dp.png"},
        {id: 4,name:'Relatórios', notifications: 0, img:"https://www.gstatic.com/images/icons/material/system/1x/insert_drive_file_black_20dp.png"},
        {id: 5,name:'E-Mails', notifications: 1, img:"https://www.gstatic.com/images/icons/material/system/1x/label_important_black_20dp.png"},
    ];
    $scope.menuTogle = false;
    $scope.menuColapse = function(){
        if(!$scope.menuTogle)
            $scope.menuTogle = true;
        else
            $scope.menuTogle = false; 
    };
    $scope.optab = 0;
    $scope.selectMenu = function(curtab){
        $scope.optab = curtab;
    };
});