<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoLists v-bind:propsdata="todoItems" v-on:removeTodo="removeTodo"></TodoLists>
    <TodoFooter v-on:clearTodo="clearTodo"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from '../components/Todo/TodoHeader.vue'
import TodoInput from '../components/Todo/TodoInput.vue'
import TodoLists from '../components/Todo/TodoLists.vue'
import TodoFooter from '../components/Todo/TodoFooter.vue'

export default {
  data() {
    // 데이터 속성 todoItems를 선언
    return {
      todoItems: []
    }
  },
  created() {
        if(this.$cookies.keys().length > 0) {
            for (var i=0; i<this.$cookies.keys().length; i++) {
                this.todoItems.push(this.$cookies.keys()[i]);
                // console.log(this.$cookies.keys()[i])
            }
        }
    },
  methods: {
    addTodo(todoItem) {
      // 쿠키에 데이터를 추가하는 로직
      this.$cookies.set(todoItem, todoItem, 60);;
      this.todoItems.push(todoItem);
    },
    clearTodo() {
        this.$cookies.keys().forEach(cookie => this.$cookies.remove(cookie));
        this.todoItems = [];
    },
    removeTodo(todoItem, index) {
      this.$cookies.remove(todoItem);
      this.todoItems.splice(index, 1);
    },

  },
  components: {
    'TodoHeader':TodoHeader,
    'TodoInput':TodoInput,
    'TodoLists':TodoLists,
    'TodoFooter':TodoFooter
  }
}
</script>

<style>
    body {
        text-align:center;
        background-color: #F6F6F8;
    }
    button {
      border-style:groove;
    }
    .shadow {
      box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
    }
</style>
