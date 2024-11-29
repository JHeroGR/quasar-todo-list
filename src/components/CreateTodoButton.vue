<template>
  <q-btn @click="handleButtonClicked" />
</template>

<script>
export default {
  // name: 'ComponentName',
  // emits: ['add-task'],
  methods: {
    handleButtonClicked () {
      this.$q.dialog({
        title: 'Create Todo',
        prompt: {
          model: '',
          type: 'text'
        },
        cancel: true
      }).onOk(this.createTodo)
        .onCancel(() => {
          this.$q.notify({
            message: 'Todo Cancelled',
            icon: 'cancel',
            color: 'warning'
          })
        })
    },
    createTodo (data) {
      if (data.trim() === '') {
        console.log('task name cannot be empty')
        this.$q.notify({
          message: 'task name cannot be empty!',
          icon: 'warning',
          color: 'negative'
        })
        return
      }
      console.log('adding task: ' + data)
      // this.$emit('add-task', data)
      console.log('passed task: ' + data)

      this.$q.notify({
        message: 'Todo Created',
        icon: 'check',
        color: 'positive'
      })
    }
  }
}
</script>
