import angular from 'angular'
import { todosByDisplayMode } from './todos-by-display-mode.filter'

let todoFilters = angular.module('todo-filters', [])
  .filter('todosByDisplayMode', ['DisplayModes', todosByDisplayMode])
  .name

export default todoFilters