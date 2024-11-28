<template>
  <q-list>
    <q-item
      v-for="(task, index) in tasks"
      :key="index"
      clickable
    >
      <q-item-section side>
        <UpdateTodoCheckbox
          :model-value="task.task_done"
          @click="updateCheckbox(task)"
        />
      </q-item-section>
      <q-item-section
        clickable
      >
        {{ task.task_name }}
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

export default {
  // name: 'ComponentName',
  components: {
    UpdateTodoCheckbox,
    DeleteTodoButton,
    EditTodoButton
  },
  props: {
    newTask: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      tasks: [
        { task_name: 'Go Shopping', task_done: false },
        { task_name: 'Get Car Fixed', task_done: false },
        { task_name: 'Do Homework', task_done: false }
      ]
    }
  },
  methods: {
    updateCheckbox (val) {
      val.task_done = !val.task_done
    },
    deleteTask (val) {
      this.tasks.splice(val, 1)
    },
    addNewTask (val) {
      console.log('hit the addNewTask: ' + val)
      this.tasks.push({
        task_name: val,
        task_done: false
      })
      console.log('added')
    },
    editTask (val) {
      this.$q.dialog({
        title: 'Edit Name',
        prompt: {
          model: this.tasks.at(val).task_name.toString(),
          type: 'text'
        },
        cancel: true
      }).onOk((newTodoName) => {
        this.tasks[val].task_name = newTodoName
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
