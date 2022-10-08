<template>
<form @submit="submitHandler">
  <div class="submit-form">
    <h5 for="login">Login</h5>
    <div class="card bg-light p-5" style="max-width: 158rem">
      <div class="form-group">
        <label for="userName">User Name</label>
        <input
          type="text"
          required
          name="userName"
          id="userName"
          class="form-control"
          v-model="userName"
        />
      </div>

      <div class="form-group">
        <label for="role">Role</label>
        <select
          name="role"
          required
          class="form-control"
          v-model="selected"
          @change="changeHandler"
        >
          <option :value="role.name" v-for="(role, i) in roles" :key="i">
            {{ role.name }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <button  type="submit" class="btn btn-success">Submit</button>
      </div>
    </div>
  </div>
</form>
</template>
<script>
import router from "../router";
export default {
  name: "login-form",
  data() {
    return {
      userName: "",
      roles: [{ name: "Admin" }, { name: "User" }],
      selected: "",
    };
  },
  methods: {
    changeHandler(e) {
      console.log(e.target.value);
      this.selected = e.target.value;
    },
    submitHandler(e) {
      e.preventDefault();
      localStorage.setItem("role", this.selected);
      this.$router.go();
      router.push({ name: "banks" });
    },
  },
};
</script>
<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>