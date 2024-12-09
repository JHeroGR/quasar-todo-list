const TaskList = {
  lists: [
    {
      category: 'Christmas Wish List',
      tasks: [
        { name: 'Music', done: false }
      ]
    },
    {
      category: 'Workout',
      tasks: [
        { name: 'Pushups', done: false },
        { name: 'Sit Ups', done: false },
        { name: 'Burpees', done: false }
      ]
    },
    {
      category: 'Shopping',
      tasks: [
        { name: 'Tomatoes', done: false },
        { name: 'Bananas', done: false }
      ]
    }
  ],

  // Get First TaskList Category
  readFirstTaskListCategory () {
    return this.lists[0].category
  },

  // CRUD Methods for Tasks
  readTasks (val) {
    if (!val) {
      return null
    }

    const category = this.lists.find(tasks => tasks.category === val)

    if (!category) {
      console.error('Invalid index:', val)
      return null
    }

    console.log(category)

    return category.tasks
  },

  // CRUD Methods for Task Lists
  readTaskLists () {
    return this.lists
  }
}

export default TaskList
