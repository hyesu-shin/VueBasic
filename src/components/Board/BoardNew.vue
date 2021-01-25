// list compoent 글 작성하기 버튼 클릭 --> new component에서 글 작성

<template>
    <div id="app">
        <!-- index값에 따라서 제목 변경 -->
        <h2>게시글 {{index ? '수정':'작성'}}</h2>

        <div class="newWrap">
            <form>
                <table class="postNew">
                    <colgroup>
                        <col width="15%">
                        <col width="*">
                    </colgroup>
                    <tr>
                        <th>제목</th>
                        <td><input type="text" v-model="newTitle" placeholder="title"></td>
                    </tr>
                    <tr v-if="!index">
                        <th>작성자</th>
                        <td>
                            <input type="text" v-model="newUser" placeholder="user">
                        </td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td><textarea v-model="newText" placeholder="text" /></td>
                    </tr>
                </table>
            </form>
        </div>
            
        <div class="newBtnWrap">
            <a href="javascript:;" v-on:click="backList()" class="backBtn btn">목록</a>
            <a v-if="!index" href="javascript:;" v-on:click="addNew()" class="addBtn btn">등록</a>
            <a v-else href="javascript:;" v-on:click="editContent()" class="addBtn btn">수정</a>
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
            newText: '',
            index: this.$route.query.id
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
        addNew() {
            // localStorage의 key값을 결정하기 위해 localStorage의 길이 받아오기
            var length = localStorage.length;

            // 게시글 작성 시간 --> addNew() 호출되는 현재 시간
            var now = new Date();

            var newData = [this.type, this.newTitle, this.newUser, now.toLocaleString() , this.newText];
            localStorage.setItem(length-1, JSON.stringify(newData));

            this.$router.push("list");
        },

        // 수정버튼 이벤트
        editContent() {
            var data = localStorage.getItem(this.index);
            var jsondata = JSON.parse(data);
            var user = jsondata[2];
            var time = jsondata[3];

            var editData = [this.type, this.newTitle, user, time, this.newText];
            localStorage.setItem(this.index, JSON.stringify(editData));

            // detail page로 돌아가기
            this.$router.push({ path: "detail", query: { id: this.index }});
        },

        backList() {
            this.$router.push("list");
        },
    }
    
}
</script>

<style scoped>

    .postNew {
        border-top: 1px solid #888;
    }

    .postNew th, .postNew td {
        border-bottom: 1px solid #eee;
        padding: 5px 0;
    }

    .postNew td {
        padding: 10px 10px;
        box-sizing: border-box;
    }

    .postNew td input {
        width: 100%;
        min-height: 30px;
        box-sizing: border-box;
        padding: 0 10px;
    }

    .postNew td textarea {
        width: 100%;
        min-height: 300px;
        padding: 10px;
        box-sizing: border-box;
    }

    .newBtnWrap {
        text-align: center;
        margin: 20px 0 0 0;
    }

    .newBtnWrap a {
        margin: 0 10px;
    }

    .addBtn {
        background: #43b984;
    }

    .backBtn {
        background: #34445c;
    }
</style>