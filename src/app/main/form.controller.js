(function() {
  'use strict';

  angular
    .module('dogBite')
    .controller('FormController', FormController);

  /** @ngInject */
  function FormController($log, $window, $scope) {
    var vm = this;

    vm.states = states;
    vm.breeds = breeds;
    vm.policy = {
      info:[
        {
          name:'Sam',
          state:'Georgia',
          emai:'sam@gmail.com',
          breed:'Pit Bull',
          color:'Brown',
          weight:10,
          bathroom:'Leash',
          gender:'Female',
          sleep:'Inside',
          vaccinations:'Yes',
          parks:'No',
          veterinarian:'Annually',
          training:'Advcanced',
          area:'City',
          doesBreed:'No',
          children:'No',
          abuse:'No',
          dogsHome:'1',
          animalServices:'No',
          work:'No',
          involvedWork:'No',
          animalInjury:'Never',
          humanInjury:'Never',
          deployed:'No',
          adopted:'No'
        },
        {
          name:'Bogie',
          state:'Illinois',
          email:'bogie@gmail.com',
          breed:'Black n White',
          color:'Mix',
          weight:6,
          bathroom:'Outside Loose',
          gender:'Male',
          sleep:'Inside',
          vaccinations:'Yes',
          parks:'No',
          veterinarian:'Never',
          training:'None',
          area:'City',
          doesBreed:'No',
          children:'No',
          abuse:'No',
          dogsHome:'1',
          animalServices:'No',
          work:'No',
          involvedWork:'No',
          animalInjury:'Never',
          humanInjury:'Never',
          deployed:'No',
          adopted:'No'
        },
        {
          name:'Woodie',
          state:'Florida',
          email:'woodie@test.com',
          breed:'Skiny',
          color:'Brown',
          weight:8,
          bathroom:'Leash',
          gender:'Female',
          sleep:'Inside',
          vaccinations:'Yes',
          parks:'No',
          veterinarian:'Annually',
          training:'Intermediate',
          area:'Country',
          doesBreed:'No',
          children:'No',
          abuse:'No',
          dogsHome:'1',
          animalService:'No',
          work:'No',
          involvedWork:'No',
          animalInjury:'Never',
          humanInjury:'Never',
          deployed:'No',
          adopted:'No'
        }
      ]
    };
    // vm.dogs = [
    //   {
    //     name:'Bogie',
    //     state:'Illinois',
    //     email:'Bogie@gmail.com',
    //     breed:'Black n White',
    //     color:'Black',
    //     weight:7,
    //     bathroom:'Outside Loose',
    //     gender:'Male',
    //     sleep:'Inside',
    //     vaccinations:'Yes',
    //     parks:'No',
    //     veterinarian:'Annually',
    //     training:'None',
    //     area:'City',
    //     doesBreed:'No',
    //     children:'No',
    //     abuse:'No',
    //     dogsHome:'1',
    //     work:'No',
    //     involvedWork:'No',
    //     animalServices:'Once',
    //     animalInjury:'Never',
    //     humanInjury:'Never',
    //     deployed:'No',
    //     adopted:'No'
    //   },
    //   {
    //     name:'Woodie',
    //     state:'New York',
    //     email:'Woodie@gmail.com',
    //     breed:'Normal',
    //     color:'Red',
    //     weight:7,
    //     bathroom:'Inside Fenced',
    //     gender:'Male',
    //     sleep:'Inside',
    //     vaccinations:'Yes',
    //     parks:'No',
    //     veterinarian:'Annually',
    //     training:'None',
    //     area:'City',
    //     doesBreed:'No',
    //     children:'No',
    //     abuse:'No',
    //     dogsHome:'1',
    //     animalServices:'No',
    //     work:'No',
    //     involvedWork:'No',
    //     animalInjury:'Never',
    //     humanInjury:'Never',
    //     deployed:'No',
    //     adopted:'No'
    //   }
    // ]

    vm.Next = function(Dog, x){
      if (x === 'dg') {
        vm.personInfo = true;
        vm.dogInfo = true;

      } else if (x === 'hi') {
        vm.dogInfo = false;
        vm.homeInfo = true;
        $window.scrollTo(0,0);
        if(Dog.gender === 'Male'){
          Dog.hisHers = 'him';
          Dog.heShe = 'he';
        } else{
          Dog.hisHers = 'her';
          Dog.heShe = 'she';
        }
      } else {
        vm.homeInfo = false;
        vm.summaryDog = true;
        var dogs = angular.copy(Dog);
        doggie.push(dogs);
        vm.doggie = doggie;
        //$log.log(doggie);
      }
    };

    vm.summaryDog = true;

    vm.AddDog = function(){
      vm.editForm = true;
      vm.addTitle = true;
      vm.editTitle = false;
      vm.userObject = {};
    };

    vm.objectIndex = '';

    vm.edit = function(id){
      vm.editForm = true;
      vm.editTitle = true;
      vm.addTitle = false;
      vm.objectIndex = id;
      vm.userObject = angular.copy(vm.policy.info[id]);
      $log.log(vm.objectIndex);
    };

    vm.delete = function(id){
      $log.log(vm.policy.info[id]);
      vm.policy.info.splice(id,1);
    };

    vm.save = function(){
      $log.log(vm.objectIndex);
      if(vm.policy.info[vm.objectIndex] == null){
        vm.policy.info.push(vm.userObject);
      } else {
        vm.policy.info[vm.objectIndex] = vm.userObject;
      }
      vm.userObject = {};
      vm.objectIndex = '';
      vm.editForm = false;
    };

    vm.cancle = function(){
      vm.editForm = false;
    };

    vm.calculate = function(x){
      vm.calculate = false;
      vm.summaryDog = false;
    }
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

var breeds = [
  'Mix less than Ten Pounds',
  'Mix Eleven to Twenty Four Pounds',
  'Mix Twenty Five to Forty Nine Pounds',
  'Mix Fifty to Seventy Four Pounds',
  'Mix Seventy Five to Ninty Nine Pounds',
  'Mix One Hundred to One Hundred and Forty Nine Pounds',
  'Mix Over One Hundred and Forty Nine Pounds',
  'Abruzzen',
  'Affenpinscher',
  'Afghan Hound',
  'Aidi',
  'Ainu',
  'Airedale Terrie',
  'Akbash',
  'Akita',
  'Akita American',
  'Akita Japnese',
  'Alapha Blue Blood Bulll Dog',
  'Alaskan Husky',
  'Alaskan Klee Kai',
  'Alaskan Malamute',
  'American Bandogge',
  'American Bulldog',
  'American Bull Terrier',
  'American Eskimo',
  'American Foxhound',
  'American Hairless Terrier',
  'American Pit Bull Terrier',
  'American Stanffordshire Terrier',
  'American Water Spaniel',
  'Anatolian Shepard',
  'Anglo-Francais Tricolor',
  'Appenzell Mountain Dog',
  'Argentien Dogo',
  'Ariegeois',
  'Aussiedoodle',
  'Australian Cattle Dog',
  'Australian Kelpie',
  'Australian Shepherd',
  'Australian Silky Terrier',
  'Australian Terrier',
  'Austrain Hound',
  'Austrain Short-Haired Pinscher',
  'Azawakh',
  'Balkan Hound',
  'Barbet',
  'Basenji',
  'Basset Artesien Normand',
  'Basset Blew De Gascigne',
  'Basset Fauve De Bretagne',
  'Basset Griffon Vedeen',
  'Basset Hound',
  'Bavarian Mountain Hound',
  'Beagle',
  'Beagle Harrier',
  'Beaglier',
  'Bearder Collie',
  'Beauceron',
  'Bedlington Terrier',
  'Belgian Griffon',
  'Belgian Malinois',
  'Belgian Sheepdog',
  'Belgian Shepherd Laeenois',
  'Belgian Shepherd Malinois',
  'Belgian Shepherd Tervuren',
  'Belgian Tervuren',
  'Bergamasco',
  'Berger Picard',
  'Bernese Hound',
  'Bernese Mountain Dog',
  'Bichon Avanese',
  'Bichon Frise',
  'Bichpoo',
  'Black & Tan Coonhound',
  'Black & Tan Toy Terrier',
  'Black Forest Hound',
  'Black Mouth Cur',
  'Black Russian Terrier',
  'Bloodhound',
  'Bluetick Coonhound',
  'Bolognese',
  'Border Collie',
  'Border Terrier',
  'Borzoi',
  'Bosnian Hound',
  'Boston Terrier',
  'Bouvier Des Flandres',
  'Boxer',
  'Boxer Mix',
  'Boxerdoole',
  'Boykin Spaniel',
  'Bracco Italiano',
  'Braque Ariegois',
  'Braque D Auvergne',
  'Braque Du Bourbonnais',
  'Braque Dupuy',
  'Briard',
  'Briquet',
  'Briquet Griffon Vendeen',
  'Brittany Spaniel',
  'Brussels Griffon',
  'Bull Terrier',
  'Bulldog',
  'Bully Breed',
  'Cairn Terrier',
  'Cairnoodle',
  'Cannon Dog',
  'Cane Corso Mastiff',
  'Cao Da Serra De Aires',
  'Cao Da  Serra De Extrela',
  'Cao Da Serra De Laboreiro',
  'Cao De Castro Laboreiro',
  'Carolina',
  'Catahoula Leopard Dog',
  'Catalan Sheepdog',
  'Caucasian',
  'Cavalier King Charles Spaniel',
  'Cavapoo',
  'Central Asian Ovtcharka',
  'Ceskey Terrier',
  'Cheaspeake Bay Retriever',
  'Chesapeake Bay Terrier',
  'Chien Francais',
  'Chihuahua',
  'Chinesse Chongging Dog',
  'Chinese Crested',
  'Chinese Foo Dog',
  'Chinese Imperial Chin',
  'Chinese Shar-pei',
  'Chinese Temple Dog',
  'Chinook',
  'Chipoo',
  'Chow Mix',
  'Chow Chow',
  'Cirneco Dell Etna',
  'Clumber Spaniel',
  'Cockapoo',
  'Cocker Spaniel',
  'Collie',
  'Corgi',
  'Coton De Tulear',
  'Croatian Sheepdog',
  'Curly Coated Retriever',
  'Czechoslovakian Wolfdog',
  'Dachshund',
  'Dalmatian',
  'Dalmation Mix',
  'Dachsbracke, Motano-Alpine',
  'Dachsvracke, Westphalian',
  'Dandi Dinmont Terrier',
  'Dashshund Miniture',
  'Dashshund Smooth',
  'Dashshund Wire',
  'Deerhound',
  'Doberman Pinscher',
  'Dobi Mix',
  'Dogo Argentno',
  'Dogue De Bordeaux',
  'Doodleman Pinscher',
  'Drentse Patrijshond',
  'Drentse Patrijshond',
  'Drever',
  'Dunker',
  'Dutch Shepherd',
  'English Bulldog',
  'English Cocker Spaniel',
  'English Coonhound',
  'English Foxhound',
  'English Pointer',
  'English Setter',
  'English Shepherd',
  'English Springer Spaniel',
  'English Toy Spaniel',
  'Entlebucher Mountain Dog',
  'Eskimo Dog',
  'Estrela Mountain',
  'Field Spaniel',
  'Fila Brasileiro',
  'Finnish Hound',
  'Finnish Lapphund',
  'Finnish Spitz',
  'Flat Coater Retriever',
  'Fox Terrier Smooth',
  'Fox Terrier, Toy',
  'Fox Terrier, Wire',
  'French Bulldog',
  'French Pointer',
  'French Spaniel',
  'Gammel Dask Honsehund',
  'German Hovawart',
  'German Hunting Terrier',
  'German Long-Haired Pointer',
  'German Pinscher',
  'German Shepherd',
  'German Shepherd Mix',
  'Germain Shorthaired Pointer',
  'German Wirehaired Pointer',
  'Glen of Imaal Terrier',
  'Golden Retriever',
  'Goldendoodle',
  'Gordon Setter',
  'Grand Anglo-Francais',
  'Grand Bleu De Gascogne',
  'Grand Gascon Saintongeois',
  'Grand Griffon Vendeen',
  'Great Dane',
  'Great Pyrenees',
  'Great Spitz',
  'Great Swiss Mountain Dog',
  'Greek Hound',
  'Greenland',
  'Griffon Brabancon',
  'Griffon Fauve De Bretagne',
  'Griffon Nivernais',
  'Grosser Musterlander',
  'Gull Dong',
  'Hairless Dog',
  'Haldenstover',
  'Hamilton Hound',
  'Harlekinpinscher',
  'Havanese',
  'Heeler',
  'Hokkaidoken',
  'Hovawart',
  'Hunt Terrier',
  'Husky',
  'Husky Siberian',
  'Husky Japnese',
  'Husky Sakhlin',
  'Hygenhund',
  'Ibizan Hound',
  'Iceland Sheepdog',
  'Illyrian Sheepdog',
  'Irish Setter',
  'Irish Terrier',
  'Irish Water Spaniel',
  'Irish Wolfhound',
  'Italian Greyhound',
  'Italian Hound',
  'Italian Spinone',
  'Jack Russell',
  'Japanese Chin',
  'Japanese Spitz',
  'Jindo',
  'Jura Hound',
  'Kai Dog',
  'Karelian Bear Dog',
  'Karst Sheepdog',
  'Keeshond',
  'Keery Blue Terrier',
  'Kishu Ken',
  'Kleiner Musterlander',
  'Komondor',
  'Kooikerhondje',
  'Kromfohrlander',
  'Kuvasz',
  'Kyushu',
  'Labradoodle',
  'Labrador Retriever',
  'Lab Mix',
  'Lakeland Terrier',
  'Lancashire Heeler',
  'Lagotto Romagnolo',
  'Landseer',
  'Lapphund',
  'Lapponian Herder',
  'Levesque',
  'Leonberger',
  'Lhasa Apso',
  'Lhasapoo',
  'Littler Lion Dog',
  'Lowchen',
  'Lucernese Hound',
  'Lundehund',
  'Magyar Agar',
  'Malshi',
  'Maltese',
  'Maltipoo',
  'Manchester Terrier',
  'Manchester Terrier, Toy',
  'Maremma Sheepdog',
  'Mastiff',
  'McNab',
  'Mexican Hairless',
  'Minature AMerican Shepherd',
  'Minature Austrlian Shepherd',
  'Mini Dachshund',
  'Miniature Bull Terrier',
  'Miniature Pinscher',
  'Miniature Poodle',
  'Morkie',
  'Mountain Cur',
  'Mudi',
  'Neapolitan Mastiff',
  'Musterlander',
  'New Guinea Singing Dog',
  'Newfoundland',
  'Norfolk Terrier',
  'Noorbottenspets',
  'Norsk Buhund',
  'Norwegian Elkhound',
  'Norwegian Lundehund',
  'Norwich Terrier',
  'Nova Scotia Duck Tolling Retriever',
  'Olde English Bulldogge',
  'Olde English Sheepdog',
  'Otterhound',
  'Papillion',
  'Papoo',
  'Parson Russell Terrier',
  'Patterdale Terrier',
  'Peek-A-Pom',
  'Pekepoo',
  'Pekingese',
  'Perdiguero De Burgos',
  'Perdiguero Portugues',
  'Peruvian Inca Orchid',
  'Petit Anglo-Francais',
  'Petit Bleu De Gascogne',
  'Petite Basset Griffon',
  'Pharaoh Hound',
  'Picardy Sheepdog',
  'Picardy Spaniel',
  'Pinshcher',
  'Pit Bull',
  'Pit Mix',
  'Ploot Hound',
  'Podenco ibicenco',
  'Podengo Portugueso',
  'Pointer',
  'Poitevin',
  'Polish Hound',
  'Polish Lowland Sheepdog',
  'Polish Owczarek Nizinny',
  'Polish Tatra Sheepdog',
  'Pomchi',
  'Pomeranian',
  'Pont-Audemere Spaniel',
  'Poodle, Minature',
  'Poodle, Standard',
  'Poodle, Toy',
  'Porcelaine',
  'Portuguese Podengo',
  'Portuguese Pointer',
  'Portuguese Water Dog',
  'Posavac Hound',
  'Presa Canario',
  'Pudelpointer',
  'Pug',
  'Puli',
  'Pumi',
  'Pyrenean Mastiff',
  'Pyrenean Shepherd',
  'Queensland Heeler',
  'Rafeiro Do Alentejo',
  'Rastreador Brasileiro',
  'Rat Terrier',
  'Redbone Coonhound',
  'Redtick Coonhound',
  'Rhodesian Ridgeback',
  'Rottweiler',
  'Rotti Mix',
  'Rough-Coated Bohemain Pointer',
  'Sabueso Espanol',
  'Saint Bernard',
  'Saluki',
  'Samoyed',
  'Sanshu',
  'Sarplaninac',
  'Schapendoes',
  'Schillerstovare',
  'Schipperke',
  'Schnauzer, Giant',
  'Schnauzer, Miniature',
  'Schanuzer, Standard',
  'Schnnoodle',
  'Scottish Deerhound',
  'Scottish Terrier',
  'Scottish Terrier',
  'Sealyham Terrier',
  'Shar-Pei',
  'Sheltie',
  'Shetlan Sheepdog',
  'Shiba Inu Dogs',
  'Shih Tzu',
  'Shihpoo',
  'Shiloh Shepherd',
  'Siberian Husky',
  'Siberian Mastiff',
  'Silky Terrier',
  'Skye Terrier',
  'Sloughi',
  'Slovak Tchouvatch',
  'Smalandsstovare',
  'Small Continental Spaniel',
  'Small Gray Elk Dog',
  'Small Spitz',
  'Small Swiss Hound',
  'Smooth-Haired Istrian Hound',
  'Smooth-Muzzled Pyrenees Sheepdog',
  'Soft-Coated Griffon',
  'Soft Coated Wheaten Terrier',
  'Somerset Harrier',
  'South African Boerboel',
  'South Russian Ovcharka',
  'Spanish Greyhound',
  'Spinone Italiano',
  'Staby-houn',
  'Staffordshire Bull Terriers',
  'Steinbracke',
  'Stichelhaar',
  'Sussex Spaniel',
  'Swedish Elkhound',
  'Swedish Shepherd',
  'Swedish Vallhund',
  'Swiss Hound',
  'Tamaskan',
  'Tatra Sheepdog',
  'Telomian',
  'Thai Ridgeback',
  'Tibetan Mastiff',
  'Tibetan Spaniel',
  'Tibetan Terrier',
  'Tosa Inu',
  'Toy Terrier',
  'Transylvanian Hound',
  'Treeing Tennesse Brindle',
  'Treeing Walker Coonhound',
  'Trigg Hound',
  'Valee Sheepdog',
  'Vizsla',
  'Volopino Italiano',
  'Weimaraner',
  'Welsh Corgi, Cardigan',
  'Welsh Corgi, Pembroke',
  'Welsh Springer Spaniel',
  'Welsh Terrier',
  'West Highland WHite Terrier',
  'Westie',
  'Westiepoo',
  'Wetterhoun',
  'Whipper',
  'Wirehaired Pointing Griffon',
  'Wirehaired Styrian Mountain Hound',
  'Wolf Hybrid',
  'Xoloitzcuintli',
  'Yorkiepoo',
  'YOrkshire Terrier',
  'Yugoslavian Mountain Hound',
  'Yugoslavian Tricolor Hound'
];
