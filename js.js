(function () {
    var app = angular.module("betApp", []);

    app.controller("X10Controller", ['$scope', '$timeout', function ($scope, $timeout) {
        {
            $scope.betMode = 1; getBetModes();
            $scope.btcBase = '0.00000001'; getBetBases();
            $scope.payout = 2.5; getPayouts();
            $scope.betProbe = 5; getBetProbes();
            $scope.btcPlus = '0.00000100'; getBtcPlusList();
            $scope.percentIncrease = 100; getPercentIncreases();
            $scope.increaseWhenLost = 1; getIncreaseWhenLosts();
            $scope.betSpeed = 500; getBetSpeeds();

            $scope.betSpeedAuto = true;
            $scope.btcForBet = $scope.btcBase;
            $scope.balance = $('#balance').text();
            $scope.btcBefore = $scope.balance;
            $scope.btcAfter = $scope.btcBefore;
            $scope.btcPlus = '0.00000100';
            $scope.btcIncrement = subBTC($scope.btcAfter, $scope.btcBefore);

            $scope.percentIncrease = 100;

            $scope.betType = 1;

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

            function getBetModes() {
                $scope.betModes = [{
                    name: 'Random',
                    value: 1
                }, {
                    name: 'Alternate',
                    value: 2
                }, {
                    name: 'HI',
                    value: 3
                }, {
                    name: 'LO',
                    value: 4
                }];
            }
            function getBetBases() {
                var btcBases = [];
                for (i = 1; i <= 20; i++) {
                    btcBases.push({
                        value: (i / 100000000).toFixed(8)
                    });
                }
                $scope.btcBases = btcBases;
            }
            function getPayouts() {
                var payouts = [];
                for (i = 2; i <= 20; i++) {
                    if (i === 2) {
                        payouts.push({
                            value: i
                        }, {
                                value: 2.5
                            });
                    } else {
                        payouts.push({
                            value: i
                        });
                    }
                }
                $scope.payouts = payouts;
            }
            function getBetProbes() {
                var betProbes = [];
                for (i = 1; i <= 100; i++) {
                    betProbes.push({
                        value: i
                    });
                }
                $scope.betProbes = betProbes;
            }
            function getBtcPlusList() {
                var btcPlusList = [];
                for (i = 1; i <= 50000; i++) {
                    if (i <= 15) {
                        btcPlusList.push({
                            value: (i / 100000000).toFixed(8)
                        });
                    } else if (i <= 50 && i % 5 == 0) {
                        btcPlusList.push({
                            value: (i / 100000000).toFixed(8)
                        });
                    } else if (i <= 200 && i % 25 == 0) {
                        btcPlusList.push({
                            value: (i / 100000000).toFixed(8)
                        });
                    } else if (i <= 1000 && i % 100 == 0) {
                        btcPlusList.push({
                            value: (i / 100000000).toFixed(8)
                        });
                    } else if (i <= 5000 && i % 500 == 0) {
                        btcPlusList.push({
                            value: (i / 100000000).toFixed(8)
                        });
                    } else if (i <= 50000 && i % 10000 == 0) {
                        btcPlusList.push({
                            value: (i / 100000000).toFixed(8)
                        });
                    }
                }
                $scope.btcPlusList = btcPlusList;
            }
            function getPercentIncreases() {
                var percentIncreases = [];
                for (i = 1; i <= 200; i++) {
                    percentIncreases.push({
                        value: i
                    });
                }
                $scope.percentIncreases = percentIncreases;
            }
            function getIncreaseWhenLosts() {
                var increaseWhenLosts = [];
                for (i = 1; i <= 20; i++) {
                    increaseWhenLosts.push({
                        value: i
                    });
                }
                $scope.increaseWhenLosts = increaseWhenLosts;
            }
            function getBetSpeeds() {
                $scope.betSpeeds = [{
                    name: 'Cực nhanh',
                    value: 15
                }, {
                    name: 'nhanh',
                    value: 300
                }, {
                    name: 'Bình thường',
                    value: 800
                }, {
                    name: 'chậm',
                    value: 1500
                }, {
                    name: 'Cực chậm',
                    value: 2300
                }];
            }

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