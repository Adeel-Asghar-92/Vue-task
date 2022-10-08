<template>
  <div class="submit-form">
    <div class="form-group">
      <h5 for="AddBanks">Add Banks</h5>
      <input
        type="text"
        name="bank_name"
        id="bank_name"
        class="form-control"
        v-model="bank_name"
      />
    </div>

    <div class="form-group">
      <select
        name="branch_city"
        class="form-control"
        v-model="branch_city"
        @change="changeHandler"
      >
        <option
          :value="option.city_name"
          v-for="(option, i) in cities"
          :key="i"
        >
          {{ option.city_name }}
        </option>
      </select>
    </div>
    <div class="form-group">
      <button @click="submitHandler" class="btn btn-success">Submit</button>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "add-bank",
  data() {
    return {
      store,
      bank_name: store.selectedBank.bank_name
        ? store.selectedBank.bank_name
        : "",
      branch_city: store.selectedBank.branch_city
        ? store.selectedBank.branch_city
        : "",
      cities: [],
      token:
        "Akrx3rA38cmmbjy3-s0DOfWq3_LRb0FmM9khcPHsT5Rz9G_e1uopppzs-f7YEwJtyv9bGcotVuRGey6DzkT3BC3y4TOe9X-FbbEuP79TiPUK35ZXxUFjYZd5TDjpv1VsnI6J7rcVzLgGaKE35aBZ2XYR6VNSJDnZapXwza_RqSQafB-Day03oxfVyENHfBxu1Xz9z2ymktmVtIALHfYAk7eY8LcRM8caLFKXDlM_6yYN2WoE7yyyDYQ4WUabgW0Xr-bEbw3Mk_FrN0sFrq-76dyV2AiGX-aUgHncdamcxCiW-yBnXf-PkWvRfv8mWj7jEmIG8OPNVHCPP7QZiVok_3C5EaDb6yEbUgiDnJbeO-3OgriwNu_oK9w3pumpkSaOtb67Q0Ynm02rRb2BTbNe28_2x9rtccmrCncydo1EsSbrKkZN6rIT3kG8kf1rQ8t-0vPFj2IS-8KVWFpsmgAxd9v2CMjK7DTwrCl5m6dzPFPFl8rCmHB-2KFizMA_7ygoRrUDsEA5HKOs3KOitCxpdA",
    };
  },
  methods: {
    changeHandler(e) {
      console.log(e.target.value);
      this.branch_city = e.target.value;
    },

    submitHandler(e) {
      e.preventDefault();
      axios({
        method: `${this.$data.store.selectedBank.bank_id ? "Put" : "Post"}`,
        url: `${"http://rightway-api.genial365.com/api"}/BankNames/${
          this.$data.store.selectedBank.bank_id
            ? `PutData?id=${this.$data.store.selectedBank.bank_id}`
            : "PostData"
        }`,
        data: {
          bank_name: this.bank_name,
          branch_city: this.branch_city,
          page_name: "add/edit bank",
        },
        headers: {
          authorization: `Bearer ${this.token}`,
        },
      })
        .then((res) => {
          this.bank_name= ""
          this.branch_city= ""
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${res.data}`,
            showConfirmButton: false,
            timer: 1500,
            // showCloseButton: true
          });
          
          //   clearState();
        })
        .catch((error) => {
          this.bank_name= ""
          this.branch_city= ""
          if (error.response) {
            Swal.fire({
              position: "center",
              icon: "error",
              title: `${error.response.data.Message}`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    },
  },
  mounted() {
    this.$data.token;
    axios
      .get("http://rightway-api.genial365.com/api/CityNames/GetData", {
        headers: { Authorization: `Bearer ${this.$data.token}` },
      })
      .then((res) => {
        console.log(res.data);
        this.$data.cities = res.data;
      });
  },
};
</script>
