<template>
    <h1 class="py-10 text-h3 font-weight-bold bg-light-blue-lighten-4">{{ titleText }}</h1>
</template>

<script>
export default {
    name: 'PageTitle',
    props: {
        titleText: {
            type: String,
            required: true
        }
    }
}
</script>