<template>
    <div class="radio-field">
        <label>
            <input  type="radio"
                    @change="$emit('input', primValue)"  
                    :value="primValue"  
                    :name="name"
                    :checked="primValue === value" 
                    class="radio-field__radio">
                <slot/>
        </label>
        
        
    </div>
</template>

<script>
    export default {
        name: "CustomRadio",
        props: {
            primValue: String,
            value: String,
            name: String
        }
    }
</script>

<style lang="scss" scoped>
.radio-field{
    margin-right: 10px;
    &__radio{
        margin: 0 5px 0 0;
    }
}
</style>