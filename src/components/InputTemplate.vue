<template>
    <div>
        <h6 class="named-input__title">{{ title }}</h6>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "InputTemplate",
    props: {
        title: String
    }
}
</script>