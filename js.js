(function () {
    var app = angular.module("betApp", []);

    app.controller("X10Controller", ['$scope', '$timeout', function ($scope, $timeout) {
        {
            $scope.btcBase = '0.00000001';
            $scope.btcForBet = $scope.btcBase;
            $scope.balance = $('#balance').text();
            $scope.btcBefore = $scope.balance;
            $scope.btcAfter = $scope.btcBefore;
            $scope.btcPlus = '0.00000100';
            $scope.btcIncrement = subBTC($scope.btcAfter, $scope.btcBefore);

            $scope.payout = 20;
            $scope.betProbe = 3;
            $scope.percentIncrease = 100;

            $scope.betType = 2;


            var loseCount = winCount = probeCount = onBigBetCount = 0;
            var loseList = [];
            $('#balance').bind('DOMSubtreeModified', function (e) {
                if ($(e.currentTarget).is(':contains(".")')) {
                    $timeout(function () {
                        $scope.balance = $('#balance').text();

                        var btcOld = $scope.btcAfter;
                        $scope.btcAfter = $scope.balance;
                        $scope.btcIncrement = subBTC($scope.btcAfter, $scope.btcBefore);

                        // if ($scope.onBetting === true) {
                        if ($scope.btcAfter >= btcOld) {
                            winCount++;
                            $scope.btcForBet = $scope.btcBase;

                            loseList = getLoseList(loseCount, loseList);

                            if ($scope.betType === 1) {
                                if (probeCount === $scope.betProbe) {
                                    probeCount = 0;
                                }
                                $scope.bigBetFlg = false;
                                onBigBetCount = 0;
                            }
                            if ($scope.betType === 2) {
                                if ($scope.bigBetFlg === true && onBigBetCount === 1) {
                                    probeCount = 0;
                                    $scope.btcForBet = $scope.btcPlus;
                                    onBigBetCount++;
                                } else {
                                    $scope.bigBetFlg = false;
                                    onBigBetCount = 0;
                                }
                            }
                            loseCount = 0;
                        } else {
                            loseCount++;
                            if (loseCount === $scope.betProbe) {
                                probeCount++;
                            }

                            if ($scope.betType === 1) {
                                if (probeCount >= 3 && loseCount > $scope.betProbe) {
                                    onBigBetCount++;
                                    $scope.bigBetFlg = true;
                                    $scope.btcForBet = onBigBetCount === 1 ? $scope.btcPlus : multiBTC($scope.btcForBet, getPercent($scope.percentIncrease));
                                } else {
                                    $scope.bigBetFlg = false;
                                    $scope.btcForBet = $scope.btcBase;
                                }
                            }
                            if ($scope.betType === 2) {
                                if (probeCount >= 3 && loseCount > $scope.betProbe) {
                                    $scope.bigBetFlg = true;
                                    onBigBetCount = 1;
                                }
                                if ($scope.bigBetFlg === true && onBigBetCount > 1) {
                                    $scope.btcForBet = multiBTC($scope.btcForBet, getPercent($scope.percentIncrease));
                                    onBigBetCount++;
                                }
                            }

                            winCount = 0;
                        }
                        $scope.loseList = loseList;
                        console.log('loseCount: ' + loseCount, 'probeCount: ' + probeCount, '$scope.bigBetFlg: ' + $scope.bigBetFlg, '$scope.btcForBet: ' + $scope.btcForBet, 'onBigBetCount: ' + onBigBetCount);

                        // $timeout(function () {
                        //     $('#double_your_btc_bet_hi_button').trigger('click');
                        // }, 1000);
                        // }
                    });
                }
            });

            $scope.startBet = function () {
                // $scope.onBetting = true;
                $timeout(function () {
                    $('#double_your_btc_bet_hi_button').trigger('click');
                }, 20);
            };

            $scope.pauseBet = function () {
                $scope.onBetting = false;
            };

            function getLoseList(loseCount, loseList) {
                if (loseCount > 0) {
                    loseList.push({
                        value: loseCount
                    });
                }
                if (loseList.length > 39) {
                    loseList = loseList.slice(1, loseList.length);
                }
                return loseList;
            }

            function sumBTC(btcOne, btcTwo) {
                return (btcOne * 1 + btcTwo * 1).toFixed(8);
            }

            function subBTC(btcOne, btcTwo) {
                return (btcOne * 1 - btcTwo * 1).toFixed(8);
            }

            function multiBTC(btcOne, btcTwo) {
                return ((btcOne * 1) * (btcTwo * 1)).toFixed(8);
            }

            function getPercent(percent) {
                return 1 + (percent / 100);
            }

            $scope.requestBet = function () {
                // if ($scope.onBetting === true) {
                $scope.winFlg = Math.random() >= 0.7;
                if ($scope.winFlg) {
                    $('#balance').text(sumBTC($scope.balance, 0.00000001));
                } else {
                    $('#balance').text(subBTC($scope.balance, 0.00000001));
                }
                $scope.balance = $('#balance').text();
                // }
            };
        }
    }]);
})();