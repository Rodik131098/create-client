<template>
    <div class="field">
        <field-template :error="error" :title="title">
            <template v-slot:content>
                <input  :type="type" 
                        class="input"
                        :name="name" 
                        :value="value" 
                        :placeholder="placeholder" 
                        v-on:input="$emit('input', $event.target.value)">
            </template>
            <template v-slot:error>
                <slot></slot>
            </template>
        </field-template>
    </div>
</template>

<script>
import FieldTemplate from "@/components/FieldTemplate.vue"

export default {
    name: "InputField",
    props: {
        name: String,
        title: String,
        placeholder: String,
        value: String,
        error: Boolean,
        type: {
            type: String,
            default: "text"
        }
    },
    components: {
        FieldTemplate
    }
}
</script>

<style lang="scss" scoped>
    $err-color: rgb(177, 31, 31);
    
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