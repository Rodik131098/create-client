<template>
    <div class="field">
        <p class="field__title">{{ title }}</p>
        <slot name="content"></slot>
        <div class="field__error" :class="{'field__error_show': error}">
            <slot name="error"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "FieldTemplate",
    props: {
        title: String,
        error: Boolean,
    }
}
</script>

<style lang="scss" scoped>
    $err-color: rgb(177, 31, 31);
    .field{
        &__title{
            display: block;
            text-align: left;
            font-size: 10px;
            color: #999;
            margin: 0;
        }
        &__error{
            visibility: hidden;
            height: 15px;
            margin-top: 5px;
            &_show{
                visibility: visible;
            }
        }
        &__error p{
            text-align: left;
            font-size: 10px;
            color: $err-color;
            margin: 0;
        }
        &__radio{
            display: flex;
            margin-top: 10px;
        }
    }
</style>