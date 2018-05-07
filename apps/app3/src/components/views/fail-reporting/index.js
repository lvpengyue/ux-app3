export default {
    mounted() {
        document.title = '故障报修';
    },
    data() {
        return {
            list: [{
                key: 1,
                content: '付款未成功'
            }, {
                key: 2,
                content: '付款后无法启动'
            }, {
                key: 3,
                content: '桶内积水'
            }, {
                key: 4,
                content: '洗不干净'
            }, {
                key: 5,
                content: '其他'
            }],
            result: [1, 5],
            imgList: [
                'http://192.168.0.162/list-rider.png',
                'http://192.168.0.162/list-rider.png',
                'http://192.168.0.162/list-rider.png'
            ],
            comment: 'sfsfsfsdfdsf'
        };
    },
    methods: {
        onRead(file) {
            console.log(file);
        }
    }
};
