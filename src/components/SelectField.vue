<template>
    <div class="select-field">
        <field-template :title="title">
            <template v-slot:content>
                <select :name="name" 
                        class="select-field__select input"
                        @change="$emit('input', currentOption)"
                        v-model="currentOption">
                    <slot name="options"/>
                </select>
            </template>
            <template v-slot:error>
                <slot name="error"/>
            </template>
        </field-template>
    </div>
</template>

<script>
    import FieldTemplate from "@/components/FieldTemplate.vue"

    export default {
        name: "SelectField",
        props: {
            title: String,
            name: String
        },
        data(){
            return {
                currentOption: ""
            }
        },
        components: {
            FieldTemplate
        }
    }
</script>

<style lang="scss">
</style>