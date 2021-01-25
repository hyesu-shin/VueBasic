// list compoent 글 작성하기 버튼 클릭 --> new component에서 글 작성

<template>
    <div id="app">
        <div class="inputBox shadow">
            <input type="text" v-model="newTitle" placeholder="title">
            <input type="text" v-model="newUser" placeholder="user">
            <input type="textarea" v-model="newText" placeholder="text">

            <span class="addContainer" v-on:click="addTodo">
                <i class="addBtn fas fa-plus" aria-hidden="true"></i>
            </span>
    </div>
    </div>
</template>

<script>
export default {
    
    data() {
        return {
            type: 'board',
            newTitle: '',
            newUser: '',
            newDate: '111111',
            newText: '',
        }
    },
    // created() {
    //     console.log('created');
    // },

    // mounted() {
    //     console.log('mounted');
    // },

    // updated() {
    //     console.log('updated');
    // },
    // destroyed() {
    //     console.log('destroyed');
    // },

    methods: {

        // 추가버튼 이벤트
        addTodo() {
            var length = localStorage.length;
            var newData = [this.type, this.newTitle, this.newUser, this.newDate, this.newText];
            localStorage.setItem(length, JSON.stringify(newData));

            this.$router.push("list");
        }
    }
    
}
</script>

<style scoped>

</style>