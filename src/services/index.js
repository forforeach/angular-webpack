import angular from 'angular'
import { TodosDataService } from './todos.data-service'

let todoServices = angular.module('todo-services', [])
  .service('todosDataService', TodosDataService)
  .name

export default todoServices