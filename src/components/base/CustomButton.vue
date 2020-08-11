<template>
    <div class="button" :class="{'button_arrow': arrow}">
        <p>
            <slot/>
        </p>
    </div>
</template>

<script>
    export default {
        name: "CustomButton",
        props: {
            arrow: Boolean
        }
    }
</script>

<style lang="scss" scoped>
    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 150px;
        height: 35px;
        background-color: rgb(72, 82, 179);
        color: #fff;
        margin: 0 auto;
        border-radius: 15px;
        cursor: pointer;
        &_arrow{
            p {
                &:after {
                    content: ">";
                    margin-left: 10px;
                }
            }
        }
        p{
            margin: 0;
        }
        &:hover {
            background-color: rgb(63, 74, 173);
        }
        &:active {
            background-color: rgb(53, 61, 139);
        }
    }
</style>