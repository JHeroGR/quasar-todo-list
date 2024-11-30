<template>
  <q-list>
    <q-item
      v-for="(task_list, index) in task_lists"
      :key="index"
      clickable
      @click="getTaskList(task_list.category)"
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
  emits: ['get-task-list'],
  components: {
    EditTodoListButton
  },
  data () {
    return {
      task_lists: this.getTaskLists()
      // task_lists: [
      //   { id: 1, task_list_name: 'Go Shopping', task_list_count: 12 },
      //   { id: 2, task_list_name: 'Go Workout', task_list_count: 5 }
      // ]
    }
  },
  methods: {
    getTaskList (val) {
      this.$emit('get-task-list', val)
    },
    getTaskLists () {
      return TaskList.readTaskLists()
    },
    addNewTaskList (data) {
      console.log('hit the addNewTaskList: ' + data)
      this.task_lists.push({
        task_list_name: data,
        task_list_count: 0
      })
      console.log('added')
    },
    editTodoList (val) {
      console.log(val)
      console.log(this.task_lists.at(val).task_list_name)
      this.$q.dialog({
        title: 'Edit Name',
        prompt: {
          model: this.task_lists.at(val).task_list_name.toString(),
          type: 'text'
        },
        cancel: true
      }).onOk((newTodoListName) => {
        this.task_lists[val].task_list_name = newTodoListName
        this.$q.notify({
          message: 'Todo List Name Updated',
          icon: 'check',
          color: 'positive'
        })
      })
    }
  }
}
</script>
