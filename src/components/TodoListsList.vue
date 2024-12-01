<template>
  <q-list>
    <q-item
      v-for="(task_list, index) in task_lists"
      :key="index"
      clickable
      @click="getTaskListCategory(task_list.category)"
    >
      <!-- <q-item-section side>
        <q-icon
          :name="task_list.task_list_icon"
          :color="task_list.task_list_icon_color"
        />
      </q-item-section> -->
      <q-item-section
        class="text-grey-9"
      >
        {{ task_list.category }}
      </q-item-section>
      <q-item-section side>
        {{ task_list.tasks.length }}
      </q-item-section>
      <q-item-section side>
        <EditTodoListButton
          flat
          round
          icon="edit"
          clickable
          @click="editTodoList(index)"
        />
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import EditTodoListButton from './EditTodoListButton.vue'

import TaskList from 'src/utils/TaskList'

export default {
  // name: 'ComponentName',
  emits: ['get-task-list-category'],
  components: {
    EditTodoListButton
  },
  data () {
    return {
      task_lists: this.getTaskLists()
    }
  },
  methods: {
    getTaskLists () {
      return TaskList.readTaskLists()
    },
    getTaskListCategory (val) {
      this.$emit('get-task-list-category', val)
    }
  }
}
</script>
