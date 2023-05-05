export const showName = {
	methods: {
		showName(){
			alert(this.email)
		}
    },
    mounted() {
        console.log("mixin.js") // 该函数先于组件的mounted()执行
    },
}
export const mydata = {
	data() {
        return {
            sex: '女',
            age:18
		}
	},
}
