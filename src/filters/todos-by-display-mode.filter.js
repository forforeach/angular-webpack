export let todosByDisplayMode = function (DisplayModes) {
  function filterByDisplayMode(displayMode, todo) {
    if (displayMode === DisplayModes.completed) {
      return todo.isCompleted === true
    } else if (displayMode === DisplayModes.uncompleted) {
      return todo.isCompleted === false
    }
    return false
  }

  return (todos, displayMode) => {
    if (displayMode === DisplayModes.all) {
      return [...todos]
    }
    return todos.filter(filterByDisplayMode.bind(null, displayMode))
  }
}