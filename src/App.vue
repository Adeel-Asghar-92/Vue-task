<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Vue-Task</router-link>

      <div v-if="adminShow" class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/banks" class="nav-link">Banks</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/addBank" class="nav-link">Add Bank</router-link>
        </li>
      </div>
      <div v-if="userShow" class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/banks" class="nav-link">Banks</router-link>
        </li>
      </div>
      <div v-if="show">
        <button class="navbar-text bg-dark" @click="logout">Logout</button>
      </div>
    </nav>

    <div class="m-3">
      <router-view />
    </div>
  </div>
</template>

<script>
// import router from './router';
export default {
  name: "app",
  data() {
    return {
      adminShow: localStorage.getItem("role") === "Admin",
      show: localStorage.getItem("role"),
      userShow: localStorage.getItem("role") === "User",
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("role");
      this.$router.go();
    },
  },
};
</script>
