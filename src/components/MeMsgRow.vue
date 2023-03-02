<template>
  <div class="me">
    <div class="chat-container">
      <div class="content" v-html="props.response" />
      <div class="avatar avatar-bot">
        <img src="../assets/images/gqq.jpeg" alt="" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  response: {
    type: String,
    default: ""
  }
});
</script>
<style scoped>
.me {
  display: flex;
  flex-direction: row-reverse;
}

.chat-container {
  display: flex;
  margin-bottom: 20px;
  float: right;
}

.avatar {
  width: 40px;
  height: 40px;
}

.avatar img {
  width: 30px;
  height: 30px;
  padding: 5px;
  color: white;
}

.avatar-me img {
  background: transparent;
}

.content {
  margin-left: 20px;
  white-space: pre-wrap
}
</style>