<template>
  <div>
		<button>原生的按钮</button>
		<input type="text">
		<element-row>
			<element-button>默认按钮</element-button>
			<element-button type="primary">主要按钮</element-button>
			<element-button type="success">成功按钮</element-button>
			<element-button type="info">信息按钮</element-button>
			<element-button type="warning">警告按钮</element-button>
			<element-button type="danger">危险按钮</element-button>
		</element-row>
		<element-date-picker type="date" placeholder="选择日期"></element-date-picker>
		<element-row>
			<element-button icon="el-icon-search" circle></element-button>
			<element-button type="primary" icon="el-icon-s-check" circle></element-button>
			<element-button type="success" icon="el-icon-check" circle></element-button>
			<element-button type="info" icon="el-icon-message" circle></element-button>
			<element-button type="warning" icon="el-icon-star-off" circle></element-button>
			<element-button type="danger" icon="el-icon-delete" circle></element-button>
		</element-row>
  </div>
</template>

<script>
	export default {
		name:'App',
	}
</script>
