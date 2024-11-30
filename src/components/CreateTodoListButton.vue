<template>
  <q-btn @click="handleButtonClicked" />
</template>

<script>

export default {
  // name: 'ComponentName',
  // emits: ['add-task-list'],
  methods: {
    handleButtonClicked () {
      this.$q.dialog({
        title: 'Create Todo List Name',
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
        this.$q.notify({
          message: 'task list name cannot be empty!',
          icon: 'warning',
          color: 'negative'
        })
        return
      }
      // this.$emit('add-task-list', data)
      this.$q.notify({
        message: 'Todo List Created',
        icon: 'check',
        color: 'positive'
      })
    }
  }
}
</script>
