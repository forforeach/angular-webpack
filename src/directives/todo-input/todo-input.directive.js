import template from './todo-input.directive.html'
import './todo-input.directive.css'

class TodoInputController {
  constructor($scope, todosDataService, DisplayModes) {
    this.text = ''
    this.state = todosDataService.state
    this.todosDataService = todosDataService
    this.DisplayModes = DisplayModes
  }

  displayCompleteAll() {
    return this.state.displayMode === this.DisplayModes.all
  }

  addTodo() {
    this.todosDataService.add(this.text)
    this.text = ''
  }

  toggleCompleteAll() {
    if (this.state.allCompleted) {
      this.todosDataService.completeAll()
    } else {
      this.todosDataService.uncompleteAll()
    }
  }
}

export let todoInputDirective = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller: TodoInputController,
    controllerAs: 'vm'
  }
}
