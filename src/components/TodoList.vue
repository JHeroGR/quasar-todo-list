<template>
  <q-list>
    <q-item
      v-for="(task, index) in getTasks"
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

import TaskList from 'src/utils/TaskList'

export default {
  // name: 'ComponentName',
  components: {
    UpdateTodoCheckbox,
    DeleteTodoButton,
    EditTodoButton
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    category: {
      type: String,
      required: false
    }
  },
  computed: {
    getTasks () {
      const tasksFrom = this.$route.params.category || TaskList.readFirstTaskListCategory()
      return TaskList.readTasks(tasksFrom)
    }
  },
  methods: {
    // getTasks () {
    //   const localCategory = this.category || this.$route.params.category || 'Shopping'
    //   console.log(localCategory, this.category, this.$route.params.category)
    //   return TaskList.readTasks(localCategory)
    // },
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
