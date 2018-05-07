export default {
    mounted() {
        document.title = '故障报修';
    },
    data() {
        return {
            list: [{
                key: 1,
                content: '设备故障'
            }, {
                key: 2,
                content: '洗衣体验'
            }, {
                key: 3,
                content: 'APP功能建议'
            }, {
                key: 4,
                content: '其他'
            }],
            result: [1, 4],
            imgList: [
                'http://192.168.0.162/list-rider.png',
                'http://192.168.0.162/list-rider.png',
                'http://192.168.0.162/list-rider.png'
            ],
            comment: '我是测试',
            phone: ''
        };
    },
    methods: {
        onRead(file) {
            console.log(file);
        }
    }
};
