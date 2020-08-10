<template>
    <div class="field">
        <field-template :error="error" :title="title">
            <template v-slot:content>
                <input  :type="type" 
                        class="input"
                        :name="name" 
                        :value="value" 
                        :placeholder="placeholder" 
                        @input="$emit('input', $event.target.value)">
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
