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
          Quasar App
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-toolbar class="bg-primary" />
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
      <TodoListsList ref="todoListLists" />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import TodoListsList from 'src/components/TodoListsList.vue'
import CreateTodoListButton from 'src/components/CreateTodoListButton.vue'
import { ref } from 'vue'

defineOptions({
  name: 'MainLayout',
  components: {
    CreateTodoListButton, TodoListsList
  },
  methods: {
    addTaskList (val) {
      console.log('passing task list: ' + val)
      this.$refs.todoListLists.addNewTaskList((val))
      console.log('done')
    }
  }
})

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
