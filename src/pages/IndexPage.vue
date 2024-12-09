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

export default {
  // name: 'IndexPage',
  components: {
    CreateTodoButton,
    TodoList
  },
  computed: {
    currentCategory () {
      console.log('hit: ' + this.$route.params.category)
      return this.$route.params.category
    }
  },
  methods: {
    addTask () {
      console.log('hit')
    }
  }
}
</script>
