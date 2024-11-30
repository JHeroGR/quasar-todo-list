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
    return this.lists[val].tasks
  },

  // CRUD Methods for Task Lists
  readTaskLists () {
    console.log(this.lists)
    return this.lists
  }
}

export default TaskList
