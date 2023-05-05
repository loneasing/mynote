<template>
    <div>
        <h3>姓名：{{name}}</h3>
        <h3>年龄：{{age}}</h3>
        <h3>性别：{{sex}}</h3>
    </div>
</template>

<script>
export default {
    name:'Student',
    data:{
        name:'Tom',  // 会优先考虑props接收到的参数，因为props的优先级比data高
        myName:this.name    // props的加载顺序先于data，所以可以使用props中的数据
    },
    // props配置项：接收参数，props配置项接收的数据也会倍被代理到组件实例上
    // 方式一：只负责接收
    // props:['name','sex','age']  // 接收传递过来的参数

    // 方式二：限制类型接收
    // props:{
    //     name:String,    // name只能是String类型
    //     age:Number,     // age只能是Number类型
    //     sex:String      
    // }

    // 方式三：限制类型、必要性、指定默认值
    props:{
        name:{
            type:String,
            required:true   // 必须传递name参数
        },
        age:{
            type:Number,
            default:18  // 若没有传递age参数则使用默认值
        },
        sex:{
            type:String,
            required:true
        }
    }
}
</script>

<style></style>