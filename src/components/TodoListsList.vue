<template>
  <q-list>
    <q-item
      v-for="(task_list, index) in task_lists"
      :key="index"
      clickable
    >
      <q-item-section side>
        <q-icon
          :name="task_list.task_list_icon"
          :color="task_list.task_list_icon_color"
        />
      </q-item-section>
      <q-item-section class="text-grey-9">
        {{ task_list.task_list_name }}
      </q-item-section>
      <q-item-section side>
        {{ task_list.task_list_count }}
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>

export default {
  // name: 'ComponentName',
  data () {
    return {
      task_lists: [
        { task_list_icon: 'shopping_bag', task_list_icon_color: 'red', task_list_name: 'Go Shopping', task_list_count: 12 },
        { task_list_icon: 'fitness_center', task_list_icon_color: 'green', task_list_name: 'Go Workout', task_list_count: 5 }
      ]
    }
  },
  methods: {
    addNewTaskList (data) {
      console.log('hit the addNewTaskList: ' + data)
      this.task_lists.push({
        task_list_icon: 'fitness_center',
        task_list_icon_color: 'black',
        task_list_name: data,
        task_list_count: 0
      })
      console.log('added')
    }
  }
}
</script>
