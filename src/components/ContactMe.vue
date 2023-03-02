<template>
    <div>
        <!-- <el-dialog v-model="outerVisible" :show-close="false" title="帮助/反馈" width="80%">
            <p class="say">对开发略懂皮毛 咨询我太难的问题的话其实我也不会<img class="cry" src="@/assets/images/wulianku.svg" alt="" srcset=""> </p>
            <div class="qr-code">
                <img src="https://www.linfengya.cn/content/uploadfile/static/lfwxqrcode.jpg" alt="" srcset="">
            </div>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="outerVisible = false">Close</el-button>
                </div>
            </template>
        </el-dialog> -->
    </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue'
let outerVisible: Ref<boolean> = ref(false);
function show() {
    outerVisible.value = !outerVisible.value;
}
defineExpose({
    show
})

</script>

<style scoped>
:deep(.el-dialog__body) {
    padding: 10px;
}

.qr-code {
    width: 100%;
    height: 100%;
}

.say {
    width: 80%;
    margin: 0 auto;
}

.cry {
    width: 32px;
    position: absolute;
}

.qr-code img {
    width: 80%;
    margin-left: 10%;
    margin-top: 20px;
    height: 50%;
}
</style>