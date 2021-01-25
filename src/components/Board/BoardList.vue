// 게시판 리스트

<template>
    <div id="app">
        <h2>게시판 리스트</h2>

        <!-- 리스트 테이블 -->
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
                    <td>{{index}}</td>
                    <!-- 게시글 제목 -> 상세페이지로 연결되는 링크 -->
                    <td><a href="javascript:;" @click="viewDetail(index)">{{boardItem[1]}}</a></td>
                    <td>{{boardItem[2]}}</td>
                    <td>{{boardItem[3]}}</td>
                </tr>
                <tr v-if="boardItems.length == 0">
                    <td colspan="4">데이터가 없습니다</td>
                </tr>
            </table>
        </div>

        <!-- 페이징 처리
        <div class="pagination" v-if="paging.totalCount > 0">
            
        </div> -->

        <div class="moveToWrap">
            <a @click="addNew()" class="addNewBtn btn">등록</a>
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

    // created 사이클에서 localstorage데이터 받아오기 
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

// style scoped의 경우 현재 컴포넌트의 엘리먼트에서만 적용
<style scoped>
    .postList th {
        border-top: 1px solid #888;
    }

    .postList th, .postList td {
        border-bottom: 1px solid #eee;
        padding: 5px 0;
    }

    .postList td.text_left {
        text-align : left;
    }

    .moveToWrap {
        text-align: right;
        margin: 10px 0 0 0;
    }
</style>