<template>
    <div class="step">

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

        <checkbox-field primValue="push-sms" v-model="pushSms" :checked="pushSms">
            <template v-slot:label>Отправлять смс</template>
        </checkbox-field>
    </div>
</template>

<script>
import InputField from "@/components/InputField.vue"
import FieldTemplate from "@/components/FieldTemplate.vue"
import CustomRadio from "@/components/CustomRadio.vue"
import SelectField from "@/components/SelectField.vue"
import CheckboxField from "@/components/CheckboxField.vue"
import CheckboxGroup from "@/components/CheckboxGroup.vue"
import { required } from "vuelidate/lib/validators"

export default {
    name: "FirstStep",
    data(){
        return {
            lastName: "",
            firstName: "",
            middleName: "",
            birthDate: "",
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
    validations: {
        lastName: {
            required
        },
        firstName: {
            required
        },
        birthDate: {
            required
        },
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
        CheckboxGroup
    }
}
</script>