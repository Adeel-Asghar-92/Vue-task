<template>
  <div>
    <h3>Banks</h3>
    <table class="table border">
      <thead class="thead-dark">
        <tr>
          <th scope="col">SR</th>
          <th scope="col">Bank Name</th>
          <th scope="col">Branch City</th>
          <th style="text-align: right">Actions</th>
        </tr>
      </thead>
      <tbody v-if="banks.length > 0">
        <tr v-for="(bank, i) in banks" :key="i">
          <td>{{ i + 1 }}</td>
          <td>{{ bank.bank_name }}</td>
          <td>{{ bank.branch_city }}</td>
          <td style="text-align: right">
            <button @click="store.bankEditHandler(bank)">Edit</button
            ><button>Delete</button>
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td colspan="4" style="text-align:center">No Record Found</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
import { store } from "../store";
export default {
  name: "banks",
  //     props: {
  //     tableHeaderColor: {
  //       type: String,
  //       default: "",
  //     },
  //   },
  data() {
    return {
      selected: [],
      store,
      token:
        "Akrx3rA38cmmbjy3-s0DOfWq3_LRb0FmM9khcPHsT5Rz9G_e1uopppzs-f7YEwJtyv9bGcotVuRGey6DzkT3BC3y4TOe9X-FbbEuP79TiPUK35ZXxUFjYZd5TDjpv1VsnI6J7rcVzLgGaKE35aBZ2XYR6VNSJDnZapXwza_RqSQafB-Day03oxfVyENHfBxu1Xz9z2ymktmVtIALHfYAk7eY8LcRM8caLFKXDlM_6yYN2WoE7yyyDYQ4WUabgW0Xr-bEbw3Mk_FrN0sFrq-76dyV2AiGX-aUgHncdamcxCiW-yBnXf-PkWvRfv8mWj7jEmIG8OPNVHCPP7QZiVok_3C5EaDb6yEbUgiDnJbeO-3OgriwNu_oK9w3pumpkSaOtb67Q0Ynm02rRb2BTbNe28_2x9rtccmrCncydo1EsSbrKkZN6rIT3kG8kf1rQ8t-0vPFj2IS-8KVWFpsmgAxd9v2CMjK7DTwrCl5m6dzPFPFl8rCmHB-2KFizMA_7ygoRrUDsEA5HKOs3KOitCxpdA",

      banks: [],
      bankss: [
        { bank_id: "1", bank_name: "City Bank", branch_city: "Faisalabad" },
        { bank_id: "2", bank_name: "MCB Bank", branch_city: "Lahore" },
        { bank_id: "3", bank_name: "BOP", branch_city: "Karachi" },
      ],
    };
  },
  methods: {
    editHandler() {},
  },
  mounted() {
    this.$data.token;
    axios
      .get("http://rightway-api.genial365.com/api/BankNames/GetData", {
        headers: { Authorization: `Bearer ${this.$data.token}` },
      })
      .then((res) => {
        console.log(res.data);
        this.$data.banks = res.data;
      });
  },
};
</script>