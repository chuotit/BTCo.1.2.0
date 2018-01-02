(function () {
    var app = angular.module("betApp", []);

    app.controller("X10Controller", ['$scope', '$timeout', function ($scope, $timeout) {
        {
            $scope.balance = $('#balance').text();
            $('#balance').bind('DOMSubtreeModified', function (e) {
                if ($(e.currentTarget).is(':contains(".")')) {
                    $timeout(function () {
                        $scope.balance = $('#balance').text();
                    });
                }
            });

            $scope.startBet = function () {
                $scope.onBetting = true;
                $timeout(function () {
                    $('#double_your_btc_bet_hi_button').trigger('click');
                }, 20);
            };

            $scope.$watch('balance', function (newBalance, oldBalance) {
                if($scope.onBetting === true) {
                    if (newBalance >= oldBalance) {
                        console.log('win');
                    } else {
                        console.log('lose');
                    }
    
                    $timeout(function () {
                        $('#double_your_btc_bet_hi_button').trigger('click');
                    }, 1000);
                }
            });

            $scope.pauseBet = function () {
                $scope.onBetting = false;
            };

            function sumBTC(btcOne, btcTwo) {
                return (btcOne * 1 + btcTwo * 1).toFixed(8);
            }

            function subBTC(btcOne, btcTwo) {
                return (btcOne * 1 - btcTwo * 1).toFixed(8);
            }

            $scope.requestBet = function() {
                if($scope.onBetting === true) {
                    $scope.winFlg = Math.random() >= 0.7;
                    if ($scope.winFlg) {
                        $('#balance').text(sumBTC($scope.balance, 0.00000001));
                    } else {
                        $('#balance').text(subBTC($scope.balance, 0.00000001));
                    }
                    $scope.balance = $('#balance').text();
                }
            }
        }
    }]);
})();