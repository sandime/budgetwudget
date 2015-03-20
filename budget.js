/**
 * Created by SHERRI on 3/19/15.
 */
function TestCtrl($scope) {

    $scope.totalExpenses = function(){
        var rent = $scope.rent;
        var utilities = $scope.utilities;
        var autoPayment = $scope.autoPayment;
        return rent + utilities + autoPayment;
    };


    $scope.difference = function(){
        var income = $scope.income;
        return income + totalExpenses;
    };


}
