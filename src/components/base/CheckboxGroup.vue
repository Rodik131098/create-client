<template>
    <div class="checkbox-group">
        <field-template :title="title" :error="error">
            <template v-slot:content>
                <div class="checkbox-group__container">
                    <slot name="content"/>
                </div>
            </template>
            <template v-slot:error>
                <slot name="error"/>
            </template>
        </field-template>
    </div>
</template>

<script>
    import FieldTemplate from "@/components/base/FieldTemplate.vue"
    export default {
        name: "CheckboxGroup",
        props: {
            title: String,
            error: Boolean
        },
        components: {
            FieldTemplate
        }
    }
</script>

<style lang="scss">
    .checkbox-group{
        &__container{
            display: flex;
            flex-wrap: wrap;
            .checkbox-field{
                margin: 10px 10px 0 0;
            }
        }
    }
</style>