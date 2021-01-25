<template>
    <div id="app">
        <h2>게시판 상세보기</h2>

        <div class="detailWrap">
            <table class="postDetail">
                <colgroup>
                    <col width="25%" />
                    <col width="*" />
                </colgroup>
                <tr>
                    <th>no</th>
                    <td>{{this.contentId}}</td>
                </tr>
                <tr>
                    <th>제목</th>
                    <td>{{this.contentTitle}}</td>
                </tr>
                <tr>
                    <th>작성자</th>
                    <td>{{this.contentUser}}</td>
                </tr>
                <tr>
                    <th>날짜</th>
                    <td>{{this.contentDate}}</td>
                </tr>
                <tr>
                    <th>내용</th>
                    <td class="content">{{this.content}}</td>
                </tr>
            </table>
        </div>

        <div class="detailBtnWrap">
            <a href="javascript:;" v-on:click="backList()" class="backBtn btn">목록</a>
            <a href="javascript:;" v-on:click="editContent()" class="editBtn btn">수정</a>
            <a href="javascript:;" v-on:click="deleteContent()" class="deleteBtn btn">삭제</a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            contentId: '',
            contentTitle: '',
            contentUser: '',
            contentDate: '',
            content: ''
        }
    },

    created() {
        var id = this.$route.query.id;
        var data = localStorage.getItem(id);
        var jsonData = JSON.parse(data);

        this.contentId = id;
        this.contentTitle = jsonData[1];
        this.contentUser = jsonData[2];
        this.contentDate = jsonData[3];
        this.content = jsonData[4];

        console.log(this.contentDetail);
    },

    methods: {
        backList() {
            this.$router.push("list");
        },

        editContent() {
            this.$router.push({path: "new", query: {id : this.contentId}});
        },

        deleteContent() {
            localStorage.removeItem(this.contentId);
            this.$router.push("list");
        }
    }
}
</script>

<style scoped>
    .postDetail {
        border-top: 1px solid #888;
    }

    .postDetail th, .postDetail td {
        border-bottom: 1px solid #eee;
        padding: 5px 0;
    }

    .postDetail td {
        padding: 10px 10px;
        box-sizing: border-box;
        text-align: left;
    }

    .postDetail td.content {
        height: 300px;
        vertical-align: top;
    }

    .detailBtnWrap {
        text-align: center;
        margin: 20px 0 0 0;
    }

    .detailBtnWrap a {
        margin: 0 10px;
    }

    .backBtn {
        background: #34445c;
    }

    .editBtn {
        background: #43b984;
    }

    .deleteBtn {
        background: #43b984;
    }

</style>