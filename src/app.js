import angular from 'angular'

import { AppController } from './app.controller'
import services from './services'
import directives from './directives'
import filters from './filters'
import DisplayModes from './common/display-modes'

angular.module('es6-app', [
  services,
  directives,
  filters
])
  .controller('AppController', AppController)
  .value('DisplayModes', DisplayModes)