// 게시판 리스트

<template>
    <div id="app">
        <h2>게시판 리스트</h2>

        <div class="listWrap">
            <table class="postList">
                <colgroup>
                    <col width="25%" />
                    <col width="25%" />
                    <col width="25%" />
                    <col width="25%" />
                </colgroup>
                <tr>
                    <th>no</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>날짜</th>
                </tr>
                <tr v-for="(boardItem, index) in boardItems" :key="index">
                    <td>{{boardItem[1]}}</td>
                    <!-- 게시글 제목 -> 상세페이지로 연결되는 링크 -->
                    <td><a href="javascript:;" @click="viewDetail(index)">{{boardItem[1]}}</a></td>
                    <td>{{boardItem[2]}}</td>
                    <td>{{boardItem[3]}}</td>
                </tr>
            </table>
        </div>

        <div class="moveToWrap">
            <a @click="addNew()" class="addNewBtn">등록</a>
        </div> 
    </div>
</template>

<script>
export default {
    data() {
        return {
            boardItems: []
        }
    },

    created() {
        if (localStorage.length > 0) {
            for (var i=0; i<localStorage.length; i++) {
                var data = localStorage.getItem(i);
                var jsonData = JSON.parse(data);

                if (jsonData !== null) {
                    this.boardItems.push(jsonData);
                }
            }
        }

        console.log('created');
    },

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
        addNew() {
            this.$router.push("new");
        },

        viewDetail(index) {
            // this.body.num = index;
            // 게시판 리스트의 index를 id --> detail page로 이동
            this.$router.push({ path: "detail", query: { id: index }});
        }
    }
    
}
</script>

<style scoped>

</style>