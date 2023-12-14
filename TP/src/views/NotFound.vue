<template>
    <div>
        <h1 style="width: 100%;margin: 0;">Page Not Found</h1>
        <span>Go back to </span>
        <RouterLink to="/">Home</RouterLink>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

    export default {
    components: { RouterLink }
}
</script>