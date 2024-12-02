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

import { inject } from 'vue'
import TaskList from 'src/utils/TaskList'

export default {
  // name: 'ComponentName',
  components: {
    UpdateTodoCheckbox,
    DeleteTodoButton,
    EditTodoButton
  },
  props: {
    tasks: {
      type: Array,
      default: this.getTasks(),
      required: true
    }
  },
  setup () {
    console.log('hit')
    const category = inject('category')
    console.log('Injected category: ' + category.value)
    return { category }
  },
  methods: {
    getTasks () {
      console.log('Injected: ' + this.category)
      return TaskList.readTasks(this.category)
    },
    updateCheckbox (val) {
      // val.done = !val.done
    },
    deleteTask (val) {
      // this.tasks.splice(val, 1)
    },
    editTask (val) {
      // this.$q.dialog({
      //   title: 'Edit Name',
      //   prompt: {
      //     model: this.tasks.at(val).name.toString(),
      //     type: 'text'
      //   },
      //   cancel: true
      // }).onOk((newTodoName) => {
      //   // this.tasks[val].name = newTodoName
      //   this.$q.notify({
      //     message: 'Todo Name Updated',
      //     icon: 'check',
      //     color: 'positive'
      //   })
      // })
    }
  }
}
</script>
