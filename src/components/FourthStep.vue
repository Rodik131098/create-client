<template>
    <div class="step">
        <h4>Шаг 4</h4>

        <select-field   title="Тип документа*"
                        name="documetn"
                        v-model="$v.document.$model"
                        :error="$v.document.$error"
                        >
            <template v-slot:options>
                <option value="" disabled selected>Тип документа</option>
                <option value="passport">Паспорт</option>
                <option value="birth-sertificate">Свидетельство о рождении</option>
                <option value="drive-license">Водительское удостоверение</option>
            </template>
            <template v-slot:error>
                <p v-if="!$v.document.required">Поле обязательно для заполнения.</p>
            </template>
        </select-field>

        <input-field  title="Серия" 
                placeholder="Серия" 
                name="siries"
                class="client-form__field"
                v-model="siries">
        </input-field>

        <input-field  title="Номер" 
                placeholder="Номер" 
                name="number"
                class="client-form__field"
                v-model="siries">
        </input-field>
        
        <input-field  title="Кем выдан" 
                placeholder="Кем выдан" 
                name="issued"
                class="client-form__field"
                v-model="issued">
        </input-field>

        <input-field  title="Дата выдачи*" 
                type="date"
                placeholder="Дата выдачи" 
                name="dateIssue"
                class="client-form__field"
                v-model="$v.issueDate.$model" 
                :error="$v.issueDate.$error">
                <p v-if="!$v.issueDate.required">Поле обязательно для заполнения.</p>
        </input-field>

        <custom-button @click.native="next">Отправить</custom-button>
    </div>
</template>

<script>
import InputField from "@/components/base/InputField.vue"
import SelectField from "@/components/base/SelectField.vue"
import CustomButton from "@/components/base/CustomButton.vue"
import { required } from "vuelidate/lib/validators"

export default {
    name: "FourthStep",
    data(){
        return {
            document: "",
            siries: "",
            number: "",
            issueDate: "", 
            issued: ""
        }
    },
    methods: {
        next(){
            this.$v.$touch();
            if(!this.$v.$invalid)
                this.$emit('next', 3);
        }
    },
    validations: {
        document: {
            required
        },
        issueDate: {
            required
        }
    },
    components: {
        InputField,
        SelectField,
        CustomButton
    }
}
</script>