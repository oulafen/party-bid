function SignUpListController($scope,$navigate){
    $scope.page = function(){
        $navigate.go('/activity/list','slide','right')
    }



}