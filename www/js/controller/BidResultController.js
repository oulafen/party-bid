function BidResultController($scope, $navigate, $timeout) {

    $scope.bid_winner = Bid.get_bid_winner();
    $timeout(function () {
        if ($scope.bid_winner == undefined) {
            $('#bid_fail').modal('show');
            $scope.show_fail = true;
            $timeout(function () {
                $('#bid_fail').modal('hide');
            }, 3000)
        } else {
            $('#bid_succeed').modal('show');
            $scope.show_succeed = true;
            $timeout(function () {
                $('#bid_succeed').modal('hide');
            }, 3000);
        }
    }, 0)
    $scope.go_bid_list = function () {
        $navigate.go('/bid/list');
    }
    $scope.go_bid_price_statistics = function () {
        $navigate.go('/bid/price/statistics');
    }
    $scope.bid_peoples = Bid.get_bid_peoples_by_price();
    $scope.click_biding_name = Bid.get_click_biding_name();
}