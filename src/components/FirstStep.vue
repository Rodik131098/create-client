<template>
    <div class="step">
        <h4>Шаг 1</h4>
        <input-field  title="Фамилия*" 
                placeholder="Фамилия" 
                name="last-name"
                class="client-form__field"
                :error="$v.lastName.$error" 
                v-model="$v.lastName.$model">
            <p v-if="!$v.lastName.required">Поле обязательно для заполнения.</p>
        </input-field>

        <input-field  title="Имя*" 
                placeholder="Имя" 
                name="first-name"
                class="client-form__field"
                :error="$v.firstName.$error" 
                v-model="$v.firstName.$model">
            <p v-if="!$v.firstName.required">Поле обязательно для заполнения.</p>
        </input-field>

        <input-field  title="Отчество" 
                placeholder="Отчество" 
                name="middle-name"
                class="client-form__field"
                :error="false" 
                v-model="middleName">
        </input-field>

        <input-field  title="Дата рождения*"
                type="date" 
                placeholder="Дата рождения" 
                name="birth-date"
                class="client-form__field"
                :error="$v.birthDate.$error" 
                v-model="$v.birthDate.$model">
            <p v-if="!$v.birthDate.required">Поле обязательно для заполнения.</p>
        </input-field>

        <custom-button arrow @click="next">Шаг 2</custom-button>
    </div>
</template>

<script>
import InputField from "@/components/base/InputField.vue"
import CustomButton from "@/components/base/CustomButton.vue"
import { required } from "vuelidate/lib/validators"

export default {
    name: "FirstStep",
    data(){
        return {
            lastName: "",
            firstName: "",
            middleName: "",
            birthDate: ""
        }
    },
    validations: {
        lastName: {
            required
        },
        firstName: {
            required
        },
        birthDate: {
            required
        }
    },
    methods: {
        next(){

        }
    },
    components: {
        InputField,
        CustomButton
    }
}
</script>