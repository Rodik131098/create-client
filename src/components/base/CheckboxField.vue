<template>
    <div class="checkbox-field">
        
        <label class="checkbox-field__field">
            <input @change="changeHandler"
                    :checked="checked"
                    type="checkbox" 
                    :value="primValue" 
                    class="checkbox-field__input">
            <slot name="label"/>
        </label>
            
    </div>
</template>

<script>
    
    export default {
        name: "CheckboxField",
        props: {
            primValue: String,
            checked: {
                type: Boolean,
                defalut: false
            }
        },
        methods: {
            changeHandler(e){
                this.$emit('input', e.target.checked)
            }
        }
    }
</script>

<style lang="scss" scoped>
.checkbox-field{
    &__field{
        display: flex;
        align-items: center;
        width: 100%;
    }
    &__input{
        margin: 0 5px 0 0;
    }
    &_margin-bottom_20{
        margin-bottom: 20px;
    }
}
</style>