// 할 일 목록 표시 및 특정 할 일 삭제 컴포넌트
// 로컬 스토리지에 저장된 데이터를 불러와서 화면에 보여주는 코드

<template>
    <section>
        <ul>
            <li v-for="(todoItem, index) in propsdata" :key="todoItem" class="shadow">
                <i class="checkBtn fas fa-check" aria-hidden="true"></i>
                {{todoItem}}
                <!-- <span class="editBtn" type="button" @click="editTodo(todoItem, index)">
                    <i class="fas fa-pencil-alt" aria-hidden="true"></i>
                </span> -->
                <span class="removeBtn" type="button" @click="removeTodo(todoItem, index)">
                    <i class="far fa-trash-alt" aria-hidden="true"></i>
                </span> 
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    props: ['propsdata'],
    
    // 삭제버튼 이벤트 추가
    methods: {
        removeTodo(todoItem, index) {
            this.$emit('removeTodo', todoItem, index);
        }
    }
    
}
</script>

<style>
    ul {
        list-style-type: none;
        padding-left: 0px;
        margin-top: 0px;
        text-align: left;
    }
    li {
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }
    .checkBtn {
        line-height: 45px;
        color: #62acde;
        margin-right: 5px;
    }
    .removeBtn {
        margin-left: auto;
        color: #de4343;
    }

</style>