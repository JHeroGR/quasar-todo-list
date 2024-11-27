<template>
  <q-btn @click="handleButtonClicked" />
</template>

<script>
export default {
  // name: 'ComponentName',
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
    },
    createTodoList (data) {
      this.$q.notify({
        message: 'Todo List Created',
        icon: 'check',
        color: 'positive'
      })
    }
  }
}
</script>
