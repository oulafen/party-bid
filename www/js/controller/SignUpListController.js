



function SignUpListController($scope,$navigate){
    $scope.go_list = function(){
        $navigate.go('/activity/list','slide','right')
    }

    $scope.send_sms=function (phone, message) {
        native_access.send_sms(
            {"receivers": [{"name": 'name', "phone": phone}]}
    }

    $scope.native_accessor=function(json_message) {
        judge_and_process_received_apply_message(json_message);
    }


    temp_message = json_message.messages[0].message;

    notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"bm1","phone":"181717833"}]})



    $scope.native_accessor = function(){
        var process_received_message=function (json_message) {
                judge_and_process_received_apply_message(json_message);
            }

        var send_sms=function (phone, message) {
                native_access.send_sms(
                    {"receivers": [{"name": 'name', "phone": phone}]},
                    {"message_content": message}
                );
            }

        var receive_message=function (json_message) {
                if (typeof this.process_received_message === 'function') {
                    this.process_received_message(json_message);
                }
            }
    }

}





