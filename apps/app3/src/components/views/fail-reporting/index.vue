<template>
    <div class="fail-reporting">
        <p class="title">发现洗衣故障</p>
        <div class="code">
            洗衣机编码:
            <span>FJ3202022022</span>
        </div>
        <van-checkbox-group v-model="result">
            <van-checkbox v-for="(item, index) in list"
                          :key="item.key"
                          :name="item.key">
                {{ item.content }}
            </van-checkbox>
        </van-checkbox-group>
        <div class="img-list">
            <template v-for="item in imgList">
                <div class="img-wrap">
                    <img :src="item"
                         alt="">
                    <van-icon name="clear"></van-icon>
                </div>

            </template>
            <div class="img-wrap upload-wrap">
                <van-uploader :after-read="onRead"
                              accept="image/gif, image/jpeg"
                              multiple>
                    <van-icon name="photograph" />
                </van-uploader>
            </div>
        </div>
        <van-checkbox-group>
            <van-field v-model="comment"
                       label="留言"
                       type="textarea"
                       placeholder="请输入留言"
                       rows="3"
                       autosize />
        </van-checkbox-group>
        <button class="submit">立即提交</button>
    </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
