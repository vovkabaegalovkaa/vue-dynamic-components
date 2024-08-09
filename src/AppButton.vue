<template>
    <button :class="['btn', this.color]" @click="$emit('action')">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props:{
        color:{
            type: String,
            required: false,
            default: "",
        }
    },
    emits: ['action'],
}
</script>