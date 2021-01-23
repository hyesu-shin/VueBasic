// 할 일 입력 및 추가 컴포넌트
// 입력을 위한 텍스트 상자, 버튼
// 로컬 스토리지의 setItem() API이용하여 저장
// key : value 형태로 저장됨

<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" placeholder="Type what you have to do">
        <span class="addContainer" v-on:click="addTodo">
            <i class="addBtn fas fa-plus" aria-hidden="true"></i>
        </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newTodoItem: ''
        }
    },
    methods: {
        // 추가버튼 이벤트
        addTodo() {
            if(this.newTodoItem !== "") {
                var value = this.newTodoItem && this.newTodoItem.trim();
                this.$emit('addTodo', value);
                // 로컬 스토리지 저장 후 인풋박스 비우기
                this.clearInput();
            }
        },
        clearInput() {
            this.newTodoItem ='';
        }
    }
}
</script>

<style scoped>
    input:focus {
        outline: none;
    }
    .inputBox {
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    }
    .inputBox input {
        border-style: none;
        font-size: 0.9rem;
    }
    .addContainer {
        float: right;
        background: linear-gradient(to right, #6478FB, #8763FB);
        display: block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }
    .addBtn {
        color: white;
        vertical-align: middle;
    }

</style>