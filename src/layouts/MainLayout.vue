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
        clickable
        @category-selected="categorySelected"
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

import TaskList from 'src/utils/TaskList'

export default {
  // name: 'MainLayout',
  components: {
    CreateTodoListButton, TodoListsList
  },
  data () {
    return {
      selectedCategory: null,
      leftDrawerOpen: false
    }
  },
  methods: {
    categorySelected (val) {
      this.selectedCategory = val
      this.$router.push({ name: 'Category', params: { category: this.selectedCategory } })
      this.leftDrawerOpen = false
    },
    toggleLeftDrawer () {
      this.leftDrawerOpen = !this.leftDrawerOpen
    },
    addTaskList (data) {
      console.log('hit: add task list function: ' + data)
      TaskList.createTaskList(data)
      console.log('success')
    }
  }
}
</script>
