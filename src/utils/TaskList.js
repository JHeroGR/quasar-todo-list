const TaskList = {
  lists: [
    {
      category: 'Shopping',
      tasks: [
        { name: 'Tomatoes', done: false },
        { name: 'Bananas', done: false }
      ]
    },
    {
      category: 'Workout',
      tasks: [
        { name: 'Pushups', done: false },
        { name: 'Sit Ups', done: false },
        { name: 'Burpees', done: false }
      ]
    }
  ],

  // CRUD Methods for Tasks
  readTasks (val) {
    const category = this.lists.find(tasks => tasks.category === val)

    if (!category) {
      console.error('Invalid index:', val)
      return null
    }

    return category.tasks
  },

  // CRUD Methods for Task Lists
  readTaskLists () {
    return this.lists
  }
}

export default TaskList
