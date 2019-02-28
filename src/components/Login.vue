<template>
    <div>
      <h3>登录页面</h3>
      <p>
        用户名：<input type="text" placeholder="请输入用户名">
      </p>
      <p>
        密码：<input type="password" placeholder="请输入密码">
      </p>
      <router-link :to="{name:'HelloWorld'}">回首页</router-link>
      <div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Welcome'
      }
    }
  }
</script>


<style scoped>

</style>
