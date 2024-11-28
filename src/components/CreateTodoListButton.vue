<template>
  <q-btn @click="handleButtonClicked" />
  <!-- <q-color /> -->
</template>

<script>

export default {
  // name: 'ComponentName',
  emits: ['add-task-list'],
  methods: {
    handleButtonClicked () {
      this.$q.dialog({
        title: 'Create Todo',
        prompt: {
          model: '',
          type: 'text'
        },
        cancel: true
      }).onOk(this.createTodoList)
        .onCancel(() => {
          this.$q.notify({
            message: 'Todo List Cancelled',
            icon: 'cancel',
            color: 'warning'
          })
        })
    },
    createTodoList (data) {
      if (data.trim() === '') {
        console.log('task list name cannot be empty')
        this.$q.notify({
          message: 'task list name cannot be empty!',
          icon: 'warning',
          color: 'negative'
        })
        return
      }
      console.log('adding task list: ' + data + '-' + this.selectedColor)
      this.$emit('add-task-list', data)
      this.$q.notify({
        message: 'Todo List Created',
        icon: 'check',
        color: 'positive'
      })
    }
  }
}
</script>
