export default {
    mounted() {
        document.title = '故障排查';
    },
    methods: {
        toReport() {
            this.$router.push({
                name: 'fail-reporting'
            });
        }
    }
};
