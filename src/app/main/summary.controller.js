(function(){
  'use strict';

  angular
    .module('dogBite')
    .controller('SummaryController', SummaryController);

    function SummaryController($log, $stateParams){
      var vm = this;

      vm.dogList = [];
      var dog = $stateParams.dogs;

      vm.dogList.push(
        {
          abuse: dog.abuse,
          adopted: dog.adopted,
          age: dog.age,
          animalInjury: dog.animalInjury,
          animalServices: dog.animalServices,
          area: dog.area,
          bathroom: dog.bathroom,
          breed: dog.breed,
          children: dog.children,
          color: dog.color,
          deployed: dog.deployed,
          doesBreed: dog.doesBreed,
          dogsHome: dog.dogsHome,
          email: dog.email,
          gender: dog.gender,
          humanInjury: dog.humanInjury,
          involovedWork: dog.involvedWork,
          name: dog.name,
          parks: dog.parks,
          reproductive: dog.reproductive,
          sleep: dog.sleep,
          state: dog.state,
          training: dog.training,
          vaccinations: dog.vaccinations,
          veterinarian: dog.veterinarian,
          weight: dog.weight,
          work: dog.work
        }
      );

      vm.Edit = function(x,y){
        if(x === 'Edit'){
          vm.dogs = y;
        }
        vm.addEdit = true;
        vm.summary = true;

      };
    }
})();
