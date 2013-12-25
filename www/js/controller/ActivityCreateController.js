function ActivityCreateController($scope,$navigate){
    $scope.name='';
    $scope.list = function(){
        $navigate.go('/activity/list');
    }

    $scope.show_button=function(){
        if(!JSON.parse(localStorage.getItem('activities'))){
            $scope.show=false;
            return ;
        }
        if(JSON.parse(localStorage.getItem('activities')).length==0){
            $scope.show=false;
            return;
        }
        $scope.show=true;
    }
    $scope.show_button()


    $scope.activename=function(){
        if (!$scope.gray){
            var activities=JSON.parse(localStorage.getItem('activities')) || [];
            for(var i= 0,j=activities.length;i<j;i++)
            {
                if($scope.name==activities[i]){
                    $scope.content=true;
                    break;
                }

            }
            if(i==j){
                activities.push($scope.name)
                localStorage.setItem('activities',JSON.stringify(activities));
                $navigate.go('/sign_ups','slide','left');
            }
        }
    }

    $scope.button_status=function(){
        $scope.name.length==0?$scope.gray=true:$scope.gray=false;
    }

    $scope.change=function(){
        $scope.button_status();
    }

    $scope.button_status();



}
