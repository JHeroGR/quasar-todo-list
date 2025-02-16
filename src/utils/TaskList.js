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

    return category.tasks
  },

  // CRUD Methods for Task Lists
  readTaskLists () {
    return this.lists
  },

  createTaskList (categoryName) {
    this.lists.push(
      {
        category: categoryName,
        tasks: {
          name: 'Write your list here',
          done: false
        }
      }
    )
    console.log('success')
    console.log('list: ' + this.lists)
  },

  createTask (categoryName, taskName) {
    this.lists.push(
      {
        category: categoryName,
        tasks: {
          name: taskName,
          done: false
        }
      }
    )
  }
}

export default TaskList
