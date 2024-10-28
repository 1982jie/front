<script setup lang="ts">
import {ref, watch} from 'vue'
import type {User} from './conf'
import axios from 'axios';

const userInfo =ref<User>({
  id:0,
  name: '',
  role:0,
})


const login = () => {
  console.log(userInfo.value.id)
  const res = axios.post("/api/getRole", {
    id: userInfo.value.id,
  })
  console.log('res:', res)
}
</script>

<template>
  <div>
    <el-form :inline="true" :model="userInfo">
      <el-form-item label="id">
        <el-input
          v-model="userInfo.id"
          placeholder="please input id"
          clearable
        />
      </el-form-item>
      <el-form-item label="name">
        <el-input 
          v-model="userInfo.name" 
          placeholder="please input name"
          clearable 
          />
      </el-form-item>
      <el-form-item label="role">
        <el-select v-model="userInfo.role" placeholder="pls select role">
          <el-option label="admin" :value="1"></el-option>
          <el-option label="user" :value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">Query</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style>

</style>
