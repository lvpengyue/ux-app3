<template>
    <div class="feedback">
        <textarea name=""
                  id=""
                  placeholder="请写下您的意见或建议"
                  rows="8"></textarea>
        <p class="title">请选择你的反馈类型</p>
        <van-checkbox-group v-model="result">
            <van-checkbox v-for="(item, index) in list"
                          :key="item.key"
                          :name="item.key">
                {{ item.content }}
            </van-checkbox>
        </van-checkbox-group>
        <p class="title">联系方式</p>
        <input type="number" v-model="phone">
        <button class="submit">立即提交</button>
    </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
