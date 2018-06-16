(function(){
  'use strict';

  angular
    .module('dogBite')
    .controller('InsuranceController', InsuranceController);

  function InsuranceController($log, $stateParams){
    var vm = this;

    vm.states = states;

    var dog = $stateParams.dog;
    var ins = $stateParams.insurance;
    $log.log(dog);
    var total = ins * 50 + 300;
    vm.Coverage = [
      {limit:25000, installments:3, firstBill:'08/03/2018', total:total, downPayment:total/3, installmentAmount:total/3 /3},
      {limit:50000, installments:3, firstBill:'08/03/2018', total:total * .1 + total, downPayment:(total * .1 + total)/3, installmentAmount:(total *.1 + total)/3 /3},
      {limit:100000, installments:3, firstBill:'08/03/2018', total:total * .2 + total, downPayment:(total * .2 + total)/3, installmentAmount:(total * .2 + total)/3 /3},
      {limit:300000, installments:3, firstBill:'08/03/2018', total:total * .3 + total, downPayment:(total * .3 + total)/3, installmentAmount:(total * .3 + total)/3 /3}
    ];

    vm.Total = function(index, install){
      vm.Application = true;
      vm.calculate = true;
    };
  }

})();

var states = [
  'Alabama',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennslvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming'
];
