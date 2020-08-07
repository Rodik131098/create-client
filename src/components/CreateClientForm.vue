<template>
    <div>
        <form action="" class="create-client-form">

            <InputTemplate v-for="item in fields" 
                           class="create-client-form__named-input named-input" 
                           :title="item.title"
                           :key="item.id">

                <select v-if="item.type === 'select'"
                        :multiple="item.multiple" 
                        :name="item.name" 
                        :id="item.id">
                    <option v-for="(value, name, index) in item.options" 
                            :value="name" 
                            :key="index">{{ value }}</option>
                </select>

                <div v-else-if="item.type === 'group'">

                    <InputTemplate v-for="field in item.fields" :title="field.title"  :key="field.id">

                        <select v-if="field.type ==='select'" :name="field.name" :id="field.id">
                            <option v-for="(value, name, index) in field.options" 
                                    :value="name"
                                    :key="index">{{ value }}</option>
                        </select>
                        <input v-else :type="field.type" :placeholder="field.placeholder">

                    </InputTemplate>

                </div>

                <input v-else :type="item.type" :name="item.name" :placeholder="item.placeholder">

            </InputTemplate>
            
        </form>
    </div>
</template>

<script>
import InputTemplate from "@/components/InputTemplate.vue"
import fields from "@/common/fields.js"

export default {
    name: "CreateClientForm",
    data(){
        return {
            fields: fields
        }
    },
    components: {
        InputTemplate
    }
}
</script>

<style lang="scss">
    $form-element-margin: 5px;


</style>