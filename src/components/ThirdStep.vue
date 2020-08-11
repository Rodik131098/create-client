<template>
    <div class="step">
        <h4>Шаг 3</h4>
        
        <input-field  title="Индекс" 
                placeholder="Индекс" 
                name="index"
                class="client-form__field"
                :error="false" 
                v-model="index">
        </input-field>

        <input-field  title="Страна" 
                placeholder="Страна" 
                name="country"
                class="client-form__field"
                :error="false" 
                v-model="country">
        </input-field>

        <input-field  title="Область" 
                placeholder="Область" 
                name="region"
                class="client-form__field"
                :error="false" 
                v-model="region">
        </input-field>

        <input-field  title="Город*"
                placeholder="Город" 
                name="city"
                class="client-form__field"
                :error="$v.city.$error" 
                v-model="$v.city.$model">
            <p v-if="!$v.city.required">Поле обязательно для заполнения.</p>
        </input-field>

        <input-field  title="Улица" 
                placeholder="Улица" 
                name="street"
                class="client-form__field"
                :error="false" 
                v-model="street">
        </input-field>

        <input-field  title="Дом" 
                placeholder="Дом" 
                name="house"
                class="client-form__field"
                :error="false" 
                v-model="house">
        </input-field>

        <custom-button arrow @click.native="next">Шаг 4</custom-button>
    </div>
</template>

<script>
import InputField from "@/components/base/InputField.vue"
import CustomButton from "@/components/base/CustomButton.vue"
import { required } from "vuelidate/lib/validators"

export default {
    name: "ThirdStep",
    data(){
        return {
            index: "",
            country: "",
            region: "",
            city: "",
            street: "",
            house: ""
        }
    },
    validations: {
        city: {
            required
        }
    },
    methods: {
        next(){
            this.$v.$touch();
            if(!this.$v.$invalid)
                this.$emit('next', 2);
        }
    },
    components: {
        InputField,
        CustomButton
    }
}
</script>