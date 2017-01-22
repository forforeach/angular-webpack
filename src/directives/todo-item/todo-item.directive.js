import template from './todo-item.directive.html'

class TodoItemController {

  constructor($scope) {
    this.scope = $scope;
  }

  removeTodo(id) {
    this.scope.$emit('removeTodo', id)
  }

  toggleCompleted() {
    this.scope.$emit('toggleCompleted', { id: this.todo.id, isCompleted: this.todo.isCompleted })
  }
}


export let todoItemDirective = function () {
  return {
    restrict: 'E',
    template,
    scope: {},
    bindToController: {
      todo: '='
    },
    controller: TodoItemController,
    controllerAs: 'vm'
  }
}
