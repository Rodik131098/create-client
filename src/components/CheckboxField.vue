<template>
    <div>
        <field-template>
            <label for=""><input type="checkbox" :value="value"></label>
            
        </field-template>
    </div>
</template>

<script>
    import FieldTemplate from "@/components/FieldTemplate.vue"
    export default {
        name: "CheckboxField",
        components: {
            FieldTemplate
        }
    }
</script>

<style lang="scss" scoped>

</style>