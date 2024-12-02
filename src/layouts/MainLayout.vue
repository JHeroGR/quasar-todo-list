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
        @get-task-list-category="provideTaskListCategory"
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

import { provide, ref } from 'vue'
// import { ref } from 'vue'

export default {
  // name: 'MainLayout',
  // emits: ['retrieve-task-list'],
  components: {
    CreateTodoListButton, TodoListsList
  },
  setup () {
    const category = ref(null)
    const leftDrawerOpen = ref(false)

    provide('category', category)

    const provideTaskListCategory = (newCategory) => {
      category.value = newCategory
      console.log('Category provided: ', category)
    }

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    return {
      category,
      provideTaskListCategory,
      leftDrawerOpen,
      toggleLeftDrawer
    }
  }
}
</script>
