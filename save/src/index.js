var angular = require('angular');

var techsModule = require('./app/techs/index');
require('angular-ui-router');
var routesConfig = require('./routes');

var main = require('./app/main');
var header = require('./app/header');
var title = require('./app/title');
var footer = require('./app/footer');
var about = require('./app/routs/about');
var questions = require('./app/routs/questions');
var privacy = require('./app/routs/privacy');
var terms = require('./app/routs/terms');
var form = require('./app/routs/form');

require('./index.css');

angular
  .module('app', [techsModule, 'ui.router'])
  .config(routesConfig)
  .component('app', main)
  .component('fountainHeader', header)
  .component('fountainTitle', title)
  .component('fountainFooter', footer)
  .component('fountainAbout', about)
  .component('fountainQuestions', questions)
  .component('fountainPrivacy', privacy)
  .component('fountainTerms', terms)
  .component('fountainForm', form);
