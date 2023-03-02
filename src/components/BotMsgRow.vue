<template>
    <div class="chat-container">
        <div class="avatar avatar-bot">
            <img src="../assets/images/bot.svg" alt="" />
        </div>
        <div class="content">
            <slot name="content" v-if="slot"></slot>
            <template v-else>
                <p class="text" v-html="props.response"></p>
                <br />
                <!-- <el-link class="translation" size="large" type="success" @click="translate">
                    语言不对？点我翻译</el-link>
                <div class="translation-response" v-if="translationResponse">
                    <p>翻译结果:</p>
                    <p style="white-space: pre-wrap" v-html="translationResponse"></p>
                </div> -->
            </template>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue"
// import axios from "axios";
const props = defineProps({
    response: {
        type: String,
        default: ""
    },
    slot: {
        type: Boolean,
        default: false
    }
})
const translationResponse = ref("");
// function translate(): void {
//     let params = {
//         from: "auto",
//         to: "zh",
//         q: props.response,
//         token: "fR7yScCnVM7cCCbM",
//     };
//     axios.get("https://v2.alapi.cn/api/fanyi", { params }).then((res) => {
//         translationResponse.value = res.data.data.dst;
//     });
// }
</script>
<style scoped>
.chat-container {
    display: flex;
    margin-bottom: 20px;
}

.avatar {
    width: 40px;
    height: 40px;
}

.avatar img {
    width: 30px;
    height: 30px;
    background: rgb(16, 163, 127);
    padding: 5px;
    color: white;
}

.avatar-me img {
    background: transparent;
}

.content {
    margin-left: 20px;
}

.text {
    white-space: pre-wrap
}

.translation-response {
    border: 1px dotted #ccc;
    box-sizing: border-box;
    padding: 10px;
    line-height: normal;
    font-size: 12px;
    color: skyblue;
}
</style>