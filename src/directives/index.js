import angular from 'angular'
import { todoItemDirective } from './todo-item/todo-item.directive'
import { todosListDirective } from './todos-list/todos-list.directive'
import { todoInputDirective } from './todo-input/todo-input.directive'

let todoDirectives = angular.module('todo-directives', ['todo-services'])
  .directive('todoItem', todoItemDirective)
  .directive('todosList', todosListDirective)
  .directive('todoInput', todoInputDirective)
  .name

export default todoDirectives