<template>
    <div class="step">
        <h4>Шаг 2</h4>
        <input-field  title="Номер телефона*" 
                placeholder="79990001122" 
                name="phone-number"
                class="client-form__field"
                :error="$v.phoneNumber.$error" 
                v-model="$v.phoneNumber.$model">
            <p v-if="!$v.phoneNumber.required">Поле обязательно для заполнения.</p>
            <p v-if="!$v.phoneNumber.isPhone">Начинается с 7, затем 10 цифр.</p>
        </input-field>

        <field-template title="Пол">
            <template v-slot:content>
                <div class="field__radio">
                    <custom-radio   primValue="male"
                                    :value="gender" 
                                    name="gender"  
                                    v-model="gender">Мужчина</custom-radio>
                    <custom-radio   primValue="female"
                                    :value="gender"
                                    name="gender" 
                                    v-model="gender">Женщина</custom-radio>
                </div>
            </template>
        </field-template>

        <checkbox-group title="Группа клиентов*" :error="$v.clientsGroup.$error">
            <template v-slot:content>
                <checkbox-field @input="$v.clientsGroup.$touch"
                                primValue="VIP" 
                                v-model="clientsGroup.vip" 
                                :checked="clientsGroup.vip">
                    <template v-slot:label>VIP</template>
                </checkbox-field>
                <checkbox-field @input="$v.clientsGroup.$touch"
                                primValue="problem" 
                                v-model="clientsGroup.problem" 
                                :checked="clientsGroup.problem">
                    <template v-slot:label>Проблемные</template>
                </checkbox-field>
                <checkbox-field @input="$v.clientsGroup.$touch"
                                primValue="OMS" 
                                v-model="clientsGroup.oms" 
                                :checked="clientsGroup.oms">
                    <template v-slot:label>ОМС</template>
                </checkbox-field>
            </template>
            <template v-slot:error>
                <p v-if="!$v.clientsGroup.notEmpty">Поле обязательно для заполнения.</p>
            </template>
        </checkbox-group>

        <select-field   title="Лечащий врач"
                        name="phisician"
                        v-model="phisician"
                        >
            <template v-slot:options>
                <option value="" disabled selected>Лечащий врач</option>
                <option value="Ivanov">Иванов</option>
                <option value="Zaharov">Захаров</option>
                <option value="Chernisheva">Чернышева</option>
            </template>
        </select-field>

        <checkbox-field primValue="push-sms" v-model="pushSms" :checked="pushSms" class="checkbox-field_margin-bottom_20">
            <template v-slot:label>Отправлять смс</template>
        </checkbox-field>

        <custom-button arrow @click.native="next">Шаг 3</custom-button>
    </div>
</template>

<script>
import InputField from "@/components/base/InputField.vue"
import FieldTemplate from "@/components/base/FieldTemplate.vue"
import CustomRadio from "@/components/base/CustomRadio.vue"
import SelectField from "@/components/base/SelectField.vue"
import CheckboxField from "@/components/base/CheckboxField.vue"
import CheckboxGroup from "@/components/base/CheckboxGroup.vue"
import CustomButton from "@/components/base/CustomButton.vue"
import { required } from "vuelidate/lib/validators"

export default {
    name: "SecondStep",
    data(){
        return {
            phoneNumber: "",
            gender: "male",
            clientsGroup: {
                vip: false,
                problem: false,
                oms: false
            },
            phisician: "",
            pushSms: true 
        }
    },
    methods: {
        next(){
            this.$v.$touch();
            if(!this.$v.$invalid)
                this.$emit('next', 1);
        }
    },
    validations: {
        phoneNumber: {
            required,
            isPhone(value){
                /* 
                Начинаем обработку только если поле содержит символы
                иначе обработкой занимается required
                */
                if(value.length >= 1) {
                    // Начинается с 7 следом 10 цифр
                    let pattern = /^7[0-9]{10,10}$/;
                    //Вырежем все символы не являющиеся цифрами
                    let str = value.replace(/[^0-9]/g, "");
                    return pattern.test(str);
                }
                return true;
            }
        },
        clientsGroup: {
            notEmpty(value){
                return value.vip || value.problem || value.oms
            }
        }
    },
    components: {
        InputField,
        FieldTemplate,
        CustomRadio,
        SelectField,
        CheckboxField,
        CheckboxGroup,
        CustomButton
    }
}
</script>