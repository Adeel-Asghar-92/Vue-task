import { reactive } from "@vue/reactivity";
import router from "./router";

export const store = reactive({
    selectedBank:{},
    bankEditHandler(bank) {
        console.log(bank);
        this.selectedBank = bank
        router.push({name: "addBank"})
    }
})