const Task = {
  data: [
    // { name: 'Go Shopping', done: false },
    // { name: 'Get Car Fixed', done: false },
    // { name: 'Do Homework', done: false }
  ],

  createTask (val) {
    const task = { name: val, done: false }
    this.data = [...this.data, task]
  },

  readTasks () {
    return this.data
  }
}

export default Task
