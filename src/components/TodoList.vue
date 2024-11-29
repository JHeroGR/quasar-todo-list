<template>
  <q-list>
    <q-item
      v-for="(task, index) in tasks"
      :key="index"
      clickable
    >
      <q-item-section side>
        <UpdateTodoCheckbox
          :model-value="task.done"
          @click="updateCheckbox(task)"
        />
      </q-item-section>
      <q-item-section
        clickable
      >
        {{ task.name }}
      </q-item-section>
      <q-item-section side>
        <DeleteTodoButton
          flat
          round
          size="sm"
          icon="delete"
          @click="deleteTask(index)"
        />
      </q-item-section>
      <q-item-section side>
        <EditTodoButton
          flat
          round
          size="sm"
          icon="edit"
          @click="editTask(index)"
        />
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import EditTodoButton from './EditTodoButton.vue'
import DeleteTodoButton from './DeleteTodoButton.vue'
import UpdateTodoCheckbox from './UpdateTodoCheckbox.vue'

import Task from 'src/utils/TaskList.js'

export default {
  // name: 'ComponentName',
  components: {
    UpdateTodoCheckbox,
    DeleteTodoButton,
    EditTodoButton
  },
  data () {
    return {
      tasks: Task.readTasks()
    }
  },
  methods: {
    updateCheckbox (val) {
      val.done = !val.done
    },
    deleteTask (val) {
      this.tasks.splice(val, 1)
    },
    addNewTask (val) {
      console.log('hit the addNewTask: ' + val)
      Task.createTask(val)
      console.log('added')
      this.tasks = Task.readTasks()
    },
    editTask (val) {
      this.$q.dialog({
        title: 'Edit Name',
        prompt: {
          model: this.tasks.at(val).name.toString(),
          type: 'text'
        },
        cancel: true
      }).onOk((newTodoName) => {
        this.tasks[val].name = newTodoName
        this.$q.notify({
          message: 'Todo Name Updated',
          icon: 'check',
          color: 'positive'
        })
      })
    }
  }
}
</script>
