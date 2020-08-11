<template>
    <div>
        <form action="" class="client-form">
            <h1 v-if="!steps[4]">Создание клиента</h1>
            <div class="client-form__control-elements">
                <first-step v-if="steps[0]" @next="next"/>
                <second-step v-if="steps[1]" @next="next"/>
                <third-step v-if="steps[2]" @next="next"/>
                <fourth-step v-if="steps[3]" @next="next"/>
                <finish-step v-if="steps[4]" @next="next"/>
            </div>
        </form>
    </div>
</template>

<script>
import FirstStep from "@/components/FirstStep.vue"
import SecondStep from "@/components/SecondStep.vue"
import ThirdStep from "@/components/ThirdStep.vue"
import FourthStep from "@/components/FourthStep.vue"
import FinishStep from "@/components/FinishStep.vue"


export default {
    name: "ClientForm",
    data(){
        return {
            steps: [true, false, false, false, false]
        }
    },
    methods: {
        next(elem){
            let steps = [false, false, false, false, false];
            steps[elem + 1] = true;
            this.steps = steps;
        }
    },
    components: {
        FirstStep,
        SecondStep,
        ThirdStep,
        FourthStep,
        FinishStep
    }
}
</script>

<style lang="scss">
    $err-color: rgb(177, 31, 31);
    
    .client-form{
        $r: &;
        width: 100%;
        max-width: 350px;
        margin: 0 auto;
        padding: 20px 30px;
        padding-bottom: 30px;
        box-sizing: border-box;
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        h1 {
            margin: 0 0 20px;
        }
        &__field{
            margin-bottom: 10px;
        }
    }
    
    .input{
        width: 100%;
        box-sizing: border-box;
        height: 35px;
        padding: 0;
        font-size: 16px;
        border: none;
        border-bottom: 2px solid #999;
        outline: none;
        &:focus{
            border-color: rgb(72, 82, 179);
        }
    }
</style>