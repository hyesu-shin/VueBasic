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
                    <td>{{index}}</td>
                    <td>{{boardItem[1]}}</td>
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
                var jsonData = JSON.parse(data)
                this.boardItems.push(jsonData);
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
            this.$router.push("./new");
        }
    }
    
}
</script>

<style scoped>

</style>