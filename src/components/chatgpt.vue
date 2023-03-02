<template>
  <div class="main">
    <div>
      <div>
        <div class="header" style="background: black;">
          <div class="back" @click="back">
            <span style="color: white;">
              返回首页
            </span>
          </div>
          <div class="feedback" @click="feedback">
            <img src="../assets/images/fankui.svg" alt="" srcset="">
          </div>
        </div>
      </div>
      <div class="el-main">
        <div class="chatting-records">
          <div class="chatting-record" v-for="(item, index) in chattingRecords" :key="index">
            <component :is="item.createById == 0 ? BotMsgRow : MeMsgRow" :response="item.msgData.text"
              :loading="loading" />
          </div>
          <MeMsgRow :response="promptOld" v-if="loading" />
          <BotMsgRow :slot="true" v-if="loading" >
            <template #content>
              思索中
              <!-- <el-icon class="is-loading">
                <Loading />
              </el-icon> -->
            </template>
          </BotMsgRow>
        </div>
        <div class="footer">
          <div class="col-params">
            <div class="el-input">
              <div class="el-input__wrapper">
                <input class="el-input__inner" v-model="prompt" @keyup.enter="submitForm" placeholder="请输入想要咨询的任何问题" />
              </div>
            </div>
            <button class="send-btn" @click="submitForm" >
              发送</button>
          </div>
        </div>
      </div>
    </div>
    <ContactMe ref="contactMeEl" />
  </div>
</template>

<script setup  lang="ts">
import { ref, Ref, nextTick } from "vue";
import axios from "axios";
// import { getNowDate } from "../utils/time";
import { msgSender, Chitchat, MsgStatus, msgDataType } from "../types/Main.type";
import BotMsgRow from "./BotMsgRow.vue";
import MeMsgRow from "./MeMsgRow.vue";
import ContactMe from "./ContactMe.vue";
import { ElMessage } from "element-plus";

const chattingRecords = ref<Chitchat[]>([]);
const loading: Ref<boolean> = ref<boolean>(false);

const key = "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";
// const key = "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";
const prompt: Ref<string> = ref("");
const promptOld: Ref<string> = ref("");
const temperature = 1;
const top_p = 1;
const max_tokens = 2048;
const frequency_penalty = 0;
const presence_penalty = 0;
const stop: Ref<string[]> = ref<string[]>(["Human:", "AI:"]);
const model: Ref<string> = ref<string>("text-davinci-003");
const models: Ref<string[]> = ref([
  "text-davinci-003",
  "text-davinci-002",
  "text-curie-001",
]);
const response: any = ref("");
const submitForm = () =>{
  if (prompt.value.trim() == "") {
    ElMessage({
      message: "输入内容为空",
      type: "warning",
    });
    return;
  }
  promptOld.value = prompt.value;
  let data = {
    prompt: prompt.value + "。",
    temperature,
    top_p,
    model: model.value,
    max_tokens,
    frequency_penalty,
    presence_penalty,
    stop: stop.value,
  };
  loading.value = true;
  prompt.value = "";
  axios.post("https://api.openai.com/v1/completions", data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ` + key,
    },
  })
  .then((res) => {
    loading.value = false;
    let resText = res.data.choices[0].text;
    resText = resText.trim();
    saveUserAsk(msgSender.me, { text: data.prompt });
    saveUserAsk(msgSender.bot, { text: resText });
  })
  .catch((error) => {
    loading.value = false;
    saveUserAsk(msgSender.me, { text: data.prompt });
    saveUserAsk(msgSender.bot, {
      text: "status-429,操作频繁,请稍候再试...",
      status: MsgStatus.error,
    });
    console.log(error);
  });
}

const saveUserAsk= (createById: msgSender, msgData: msgDataType)=> {
  let res: Chitchat = {
    time: "",
    name: "",
    avatar: "",
    msgData,
    createById,
  };
  chattingRecords.value.push(res);
}
function back() {
  console.log(1)
}
function feedback() {}
</script>

<style scoped>
@import "../assets/main.css";
</style>
