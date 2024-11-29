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

  readTasks () {
    return this.lists
  }
}

export default TaskList
