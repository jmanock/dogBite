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

    vm.doglist = [];

    vm.Next = function(){
      vm.dogInfo = true;
      vm.personInfo = true;
    };

    vm.Summary = function(){
      vm.dogInfo = false;
      vm.summary = true;
      vm.doglist.push(
        {
          abuse:vm.dog.abuse,
          adopted:vm.dog.adopted,
          age:vm.dog.age,
          animalInjury:vm.dog.animalInjury,
          animalServices:vm.dog.animalServices,
          area:vm.dog.area,
          bathroom:vm.dog.bathroom,
          breed:vm.dog.breed,
          children:vm.dog.children,
          color:vm.dog.color,
          deployed:vm.dog.deployed,
          doesBreed:vm.dog.doesBreed,
          dogsHome:vm.dog.dogsHome,
          email:vm.dog.email,
          gender:vm.dog.gender,
          humanInjury:vm.dog.humanInjury,
          involvedWork:vm.dog.involvedWork,
          name:vm.dog.name,
          parks:vm.dog.parks,
          reproductive:vm.dog.reproductive,
          sleep:vm.dog.sleep,
          state:vm.dog.state,
          training:vm.dog.training,
          vaccinations:vm.dog.vaccinations,
          veterinarian:vm.dog.veterinarian,
          weight:vm.dog.weight,
          work:vm.dog.work
        }
      );
      vm.dog = '';
      $log.log(vm.doglist);
    };

    vm.Remove = function(index){
      $log.log(index);
      vm.doglist.splice(index, 1);
    };

    vm.Edit = function(dog){
      vm.dogs = dog;
    };

    vm.AddDog = function(){
      vm.summary = false;
      vm.personInfo = false;
    };

    vm.Save = function(){

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
