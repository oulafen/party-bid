function ActivityListController($scope,$navigate){
    $scope.page = function(){
      $navigate.go('/activity/create','slide','left');
    }


    $scope.order=function() {
        var activename=JSON.parse(localStorage.getItem('activities'));
        $scope.names=activename.reverse()

    }
    $scope.order()


    $scope.delete_activity=function(index){

        var activity=JSON.parse(localStorage.getItem('activities'));
        activity.splice(activity.length-1-index,1);
        localStorage.setItem('activities',JSON.stringify(activity));
        $scope.order();
    }

}
