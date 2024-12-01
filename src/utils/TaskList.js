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
    // const index = Number(val)
    // console.log(index)
    // if (!Number.isInteger(index) || index < 0 || index >= this.lists.length) {
    //   console.error('Invalid index:', val)
    //   return null
    // }
    // console.log(val)
    // return this.lists[val].tasks
    return category.tasks
  },

  // CRUD Methods for Task Lists
  readTaskLists () {
    console.log(this.lists)
    return this.lists
  }
}

export default TaskList
