<template>
  <q-page class="row">
    <q-card class="col-xs-9">
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
      <TodosList
        ref="todoList"
        bordered
      />
    </q-card>
    <div class="bg-dark col-xs-3">
      <q-toolbar class="bg-primary">
        <CreateTodoButton
          fab
          style="margin-bottom: -150px;"
          class="q-ml-lg"
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
import TodosList from 'src/components/TodosList.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    CreateTodoButton,
    TodosList
  },
  // name: 'IndexPage',
  data () {
    return {
      search: ''
    }
  },
  methods: {
    addTask (val) {
      console.log('passing task')
      this.$refs.todoList.addNewTask((val))
      console.log('done')
    }
  }
})
</script>
