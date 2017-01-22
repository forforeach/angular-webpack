export class TodosDataService {
  constructor(DisplayModes) {
    this.todos = [{ text: 'trololo', isCompleted: false, id: 0 }, { text: '333 ggg', isCompleted: false, id: 1 }]
    this.state = {
      allCompleted: this.areAllCompleted(),
      displayMode: DisplayModes.all
    }
  }

  setDisplayMode(mode) {
    this.state.displayMode = mode
  }

  areAllCompleted() {
    return this.todos.every(todo => todo.isCompleted === true)
  }

  updateAllCompleted() {
    this.state.allCompleted = this.areAllCompleted()
  }

  getTodos() {
    return this.todos
  }

  add(text, isCompleted = false) {
    this.todos.push({ id: this.todos.length, text, isCompleted });
    this.updateAllCompleted()
  }

  remove(id) {
    let todoIndex = this.todos.findIndex(todo => todo.id === id);
    this.todos.splice(todoIndex, 1)
    this.updateAllCompleted()
  }

  update(id, text, isCompleted) {
    this.updateAllCompleted()
  }

  completeAll() {
    this.todos.forEach(todo => todo.isCompleted = true)
    this.state.allCompleted = true
  }

  uncompleteAll() {
    this.todos.forEach(todo => todo.isCompleted = false)
    this.state.allCompleted = false
  }
}