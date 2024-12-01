<template>
  <q-layout view="hHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar Todo App
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-item class="bg-grey-3">
        <q-item-section>
          Lists
        </q-item-section>
        <q-item-section side>
          <CreateTodoListButton
            icon="add"
            size="sm"
            flat
            round
            @add-task-list="addTaskList"
          />
        </q-item-section>
      </q-item>
      <TodoListsList
        @get-task-list-category="getTaskList"
        clickable
      />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import TodoListsList from 'src/components/TodoListsList.vue'
import CreateTodoListButton from 'src/components/CreateTodoListButton.vue'
// import { ref } from 'vue'

export default {
  // name: 'MainLayout',
  // emits: ['retrieve-task-list'],
  components: {
    CreateTodoListButton, TodoListsList
  },
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    getTaskList (val) {
      console.log('hi dad: ' + JSON.stringify(val))
      const todoList = this.$refs.todoList
      if (todoList && todoList.getTasks) {
        todoList.getTasks(val)
      } else {
        console.error('TodoList ref is not available or does not have a getTasks method')
      }
    },
    toggleLeftDrawer () {
      this.leftDrawerOpen = !this.leftDrawerOpen
    }
  }
}
</script>
