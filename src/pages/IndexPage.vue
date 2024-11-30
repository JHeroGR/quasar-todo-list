<template>
  <q-page class="row">
    <q-card class="col-xs-10">
      <q-toolbar>
        <q-input
          dense
          placeholder="Search"
          borderless
          class="full-width"
          :modal-value="search"
        >
          <template #append>
            <q-icon name="search" />
          </template>
        </q-input>
      </q-toolbar>
      <TodoList
        @get-todo-list="getTaskList"
        bordered
      />
    </q-card>
    <div class="bg-dark col-xs-2">
      <q-toolbar class="bg-primary">
        <CreateTodoButton
          fab
          style="margin-bottom: -150px;"
          class="q-mr-lg"
          color="secondary"
          icon="add"
          @add-task="addTask"
        />
      </q-toolbar>
    </div>
  </q-page>
</template>

<script>
import CreateTodoButton from 'src/components/CreateTodoButton.vue'
import TodoList from 'src/components/TodoList.vue'
import { defineComponent } from 'vue'

import TaskList from 'src/utils/TaskList'

export default defineComponent({
  components: {
    CreateTodoButton,
    TodoList
  },
  // name: 'IndexPage',
  props: {
    tasks: {
      type: Array,
      default: this.getTaskList('Shopping'),
      required: true
    }
  },
  methods: {
    getTaskList (val) {
      console.log(TaskList.readTasks(val))
      console.log('this: ' + val)
    }
  }
  // methods: {
  //   addTask (val) {
  //     console.log('passing task')
  //     this.$refs.todoList.addNewTask((val))
  //     console.log('done')
  //   }
  // }
})
</script>
