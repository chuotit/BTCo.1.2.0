(function () {
    var app = angular.module("betApp", []);

    app.controller("X10Controller", ['$scope', '$timeout', function ($scope, $timeout) {
        {
            getBetModes(1);
            getBetBases('0.00000001');
            getPayouts(2.5);
            getBetProbes(1);
            getBtcPlusList('0.00000050');
            getbetTargetList(20000);
            getPercentIncreases(100);
            getIncreaseWhenLosts(1);
            getBetSpeeds(68);
            getBetAfterProbes(3);
            $scope.updateBetList = function () {
                updateBetList();
            };

            var betButton = 'hi';
            $scope.betSpeedAuto = true;
            $scope.btcForBet = $scope.btcBase;
            $scope.balance = $('#balance').text();
            $scope.btcBefore = $scope.balance;
            $scope.btcAfter = $scope.btcBefore;
            $scope.btcIncrement = subBTC($scope.btcAfter, $scope.btcBefore);
            $scope.betMaxLose = $scope.betCount = 0;
            $scope.btcMaxLose = '0.00000001';
            $scope.betHiFlg = true;

            $scope.betType = 3;

            var loseCount = winCount = probeCount = onBigBetCount = 0, btcLose = 0, betTypeCount = 0;
            var generalList = [];
            $scope.bigBetFlg = false;
            $('#balance').bind('DOMSubtreeModified', function (e) {
                if ($(e.currentTarget).is(':contains(".")')) {
                    $timeout(function () {
                        $scope.balance = $('#balance').text();
                        betButton = getBetButton($scope.betMode);
                        var btcOld = $scope.btcAfter;
                        $scope.btcAfter = $scope.balance;
                        $scope.btcIncrement = subBTC($scope.btcAfter, $scope.btcBefore);
                        if ($scope.onBetting === true) {
                            $scope.betCount++;
                            if ($scope.btcAfter >= btcOld) {
                                btcLose = 0;
                                winCount++;

                                generalList = getGeneralist(loseCount, generalList, 'lose-item');

                                $scope.betMaxLose = $scope.betMaxLose > loseCount ? $scope.betMaxLose : loseCount;
                                $scope.btcMaxLose = $scope.btcForBet > $scope.btcMaxLose ? $scope.btcForBet : $scope.btcMaxLose;

                                $scope.btcForBet = $scope.btcBase;

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
                                if ($scope.betType === 3) {
                                    if ($scope.bigBetFlg === true) {
                                        betTypeCount = 0;
                                        $scope.bigBetFlg = false;
                                        onBigBetCount = 0;
                                    }
                                }
                                loseCount = 0;
                            } else {
                                loseCount++;
                                var lastWin = generalList[generalList.length - 1] ? generalList[generalList.length - 1].value : 0;
                                var lastLose = generalList[generalList.length - 2] ? generalList[generalList.length - 2].value : 0;

                                if (loseCount === $scope.betProbe && !$scope.bigBetFlg) {
                                    probeCount++;
                                }

                                generalList = getGeneralist(winCount, generalList, 'win-item');

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
                                    if (loseCount > $scope.betProbe) {
                                        if ((probeCount >= 2) || (lastWin === 1 && lastLose >= $scope.betProbe && loseCount >= ($scope.betProbe * 2))) {
                                            $scope.bigBetFlg = true;
                                            onBigBetCount = 1;
                                        }
                                    }
                                    if ($scope.bigBetFlg === true && onBigBetCount > 1) {
                                        $scope.btcForBet = onBigBetCount <= 9 ? multiBTC($scope.btcForBet, getPercent($scope.percentIncrease)) : $scope.btcBase;
                                        onBigBetCount++;
                                    }
                                }
                                if ($scope.betType === 3) {
                                    if (winCount >= 4) {
                                        betTypeCount++;
                                    }
                                    if(betTypeCount === 1) {
                                        $scope.bigBetFlg = true;
                                    }
                                    if ($scope.bigBetFlg === true) {
                                        onBigBetCount++;
                                        $scope.btcForBet = getBtcBet(onBigBetCount, $scope.btcForBet, btcLose);
                                    }
                                }
                                btcLose = sumBTC(btcLose, $scope.btcForBet);
                                winCount = 0;
                            }
                            $scope.generalList = generalList;

                            $timeout(function () {
                                $('#double_your_btc_bet_' + betButton + '_button').trigger('click');
                            }, $scope.betSpeed);
                        }
                    });
                }
            });

            $scope.startBet = function () {
                $scope.onBetting = true;
                $timeout(function () {
                    $('#double_your_btc_bet_' + betButton + '_button').trigger('click');
                }, $scope.betSpeed);
            };

            $scope.pauseBet = function () {
                $scope.onBetting = false;
            };

            function getBetModes(betModeDefault) {
                $scope.betMode = betModeDefault;
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
            function getBetBases(btcBaseDefault) {
                $scope.btcBase = btcBaseDefault;
                var btcBases = [];
                for (i = 1; i <= 20; i++) {
                    btcBases.push({
                        value: numberToSts(i)
                    });
                }
                $scope.btcBases = btcBases;
            }
            function getPayouts(payoutDefault) {
                $scope.payout = payoutDefault;
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
            function getBetProbes(betProbeDefault) {
                $scope.betProbe = betProbeDefault;
                var betProbes = [];
                for (i = 1; i <= 100; i++) {
                    betProbes.push({
                        value: i
                    });
                }
                $scope.betProbes = betProbes;
            }
            function getBtcPlusList(btcPlusDefault) {
                $scope.btcPlus = btcPlusDefault;
                var btcPlusList = [];
                for (i = 1; i <= 50000; i++) {
                    if (i <= 15) {
                        btcPlusList.push({
                            value: numberToSts(i)
                        });
                    } else if (i <= 50 && i % 5 === 0) {
                        btcPlusList.push({
                            value: numberToSts(i)
                        });
                    } else if (i <= 200 && i % 25 === 0) {
                        btcPlusList.push({
                            value: numberToSts(i)
                        });
                    } else if (i <= 1000 && i % 100 === 0) {
                        btcPlusList.push({
                            value: numberToSts(i)
                        });
                    } else if (i <= 5000 && i % 500 === 0) {
                        btcPlusList.push({
                            value: numberToSts(i)
                        });
                    } else if (i <= 50000 && i % 10000 === 0) {
                        btcPlusList.push({
                            value: numberToSts(i)
                        });
                    }
                }
                $scope.btcPlusList = btcPlusList;
            }
            function getbetTargetList(betTargetDefault) {
                $scope.betTarget = betTargetDefault;
                var betTargetList = [];
                for (i = 100; i <= 50000; i++) {
                    if (i <= 100 && i % 5 === 0) {
                        betTargetList.push({
                            value: i
                        });
                    } else if (i <= 200 && i % 25 === 0) {
                        betTargetList.push({
                            value: i
                        });
                    } else if (i <= 1000 && i % 100 === 0) {
                        betTargetList.push({
                            value: i
                        });
                    } else if (i <= 5000 && i % 500 === 0) {
                        betTargetList.push({
                            value: i
                        });
                    } else if (i <= 50000 && i % 10000 === 0) {
                        betTargetList.push({
                            value: i
                        });
                    }
                }
                $scope.betTargetList = betTargetList;
            }
            function getPercentIncreases(percentIncreaseDefault) {
                $scope.percentIncrease = percentIncreaseDefault;
                var percentIncreases = [];
                for (i = 1; i <= 200; i++) {
                    percentIncreases.push({
                        value: i
                    });
                }
                $scope.percentIncreases = percentIncreases;
            }
            function getIncreaseWhenLosts(increaseWhenLostDefault) {
                $scope.increaseWhenLost = increaseWhenLostDefault;
                var increaseWhenLosts = [];
                for (i = 1; i <= 20; i++) {
                    increaseWhenLosts.push({
                        value: i
                    });
                }
                $scope.increaseWhenLosts = increaseWhenLosts;
            }
            function getBetSpeeds(betSpeed) {
                $scope.betSpeed = betSpeed;
                $scope.betSpeeds = [{
                    name: 'Cực nhanh',
                    value: 68
                }, {
                    name: 'nhanh',
                    value: 566
                }, {
                    name: 'Bình thường',
                    value: 868
                }, {
                    name: 'chậm',
                    value: 1666
                }, {
                    name: 'Cực chậm',
                    value: 2666
                }];
            }

            function getBetAfterProbes(betAfterProbe) {
                $scope.betAfterProbe = betAfterProbe;
                var betAfterProbes = [];
                for (i = 1; i <= 100; i++) {
                    betAfterProbes.push({
                        value: i
                    });
                }
                $scope.betAfterProbes = betAfterProbes;
            }

            function getGeneralist(count, generalList, style) {
                if (count > 0) {
                    generalList.push({
                        value: count,
                        style: style
                    });
                }
                if (generalList.length > 65) {
                    generalList = generalList.slice(1, generalList.length);
                }
                return generalList;
            }

            updateBetList();
            function updateBetList() {
                var btcBet = $scope.btcForBet;
                var index = 1, btcWin = 0, btcLose = 0, btcRemain = $scope.btcAfter;
                var betList = [];

                do {
                    btcBet = getBtcBet(index, btcBet, btcLose);
                    btcWin = subBTC(multiBTC(btcBet, $scope.payout - 1), btcLose);
                    btcLose = sumBTC(btcLose, btcBet);
                    btcRemain = subBTC(btcRemain, btcBet);

                    var betItem = {
                        index: index,
                        btcBet: btcBet,
                        btcWin: btcWin,
                        btcLose: btcLose,
                        btcRemain: btcRemain
                    };
                    if (btcBet < 0.00000001) {
                        betList = [];
                        return;
                    } else {
                        betList.push(betItem);
                    }
                    index++;

                } while (getBtcBet(index, btcBet, btcLose) < btcRemain);
                $scope.betList = betList;
                $scope.betAllowed = betList.slice(-1)[0];
            }
            function getBtcBet(index, btcPrevBet, btcLose) {
                var btcBet = btcPrevBet;
                if (index > $scope.betProbe && index % $scope.increaseWhenLost === $scope.betProbe % $scope.increaseWhenLost) {
                    btcBet = (btcPrevBet * getPercent($scope.percentIncrease)).toFixed(8);
                }
                if ($scope.betAfterProbe && index >= $scope.betAfterProbe) {
                    btcBet = (btcLose / ($scope.payout - 1)).toFixed(8);
                }
                return index === $scope.betProbe ? ($scope.btcPlus * 1).toFixed(8) : btcBet;
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

            function getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            function getBetButton(betMode) {
                var betButton = 'hi';
                switch (betMode) {
                    case 1:
                        var random_boolean = Math.random() >= 0.5;
                        $scope.betHiFlg = random_boolean;
                        break;
                    case 2:
                        $scope.betHiFlg = !$scope.betHiFlg;
                        break;
                    case 3:
                        $scope.betHiFlg = true;
                        break;
                    case 4:
                        $scope.betHiFlg = false;
                        break;
                }
                if ($scope.betHiFlg) {
                    betButton = 'hi';
                } else {
                    betButton = 'lo';
                }
                return betButton;
            }

            function numberToSts(num) {
                return (num / 100000000).toFixed(8);
            }

            $scope.requestBet = function () {
                if ($scope.onBetting === true) {
                    $scope.winFlg = Math.random() >= 0.7;
                    if ($scope.winFlg) {
                        $('#balance').text(sumBTC($scope.balance, $scope.btcForBet * ($scope.payout - 1)));
                    } else {
                        $('#balance').text(subBTC($scope.balance, $scope.btcForBet));
                    }
                    $scope.balance = $('#balance').text();
                }
            };
        }
    }]);
})();