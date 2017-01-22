import template from './todos-list.directive.html'

class TodosListController {
  constructor($scope, todosDataService, DisplayModes) {
    this.todos = []
    this.todosDataService = todosDataService
    this.DisplayModes = DisplayModes
    this.todos = todosDataService.getTodos()
    this.state = todosDataService.state

    this.registerEvents($scope);
  }

  registerEvents(scope) {
    scope.$on('removeTodo', (event, id) => {
      this.todosDataService.remove(id);
    })
    scope.$on('toggleCompleted', (event, {id, text, isCompleted}) => {
      this.todosDataService.update(id, text, isCompleted)
    })
  }

  setDisplayMode(mode) {
    this.todosDataService.setDisplayMode(mode)
  }
}

export let todosListDirective = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller: TodosListController,
    controllerAs: 'vm'
  }
}
