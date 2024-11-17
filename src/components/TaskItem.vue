

<template>
    <div class="task-item">
        <span>{{ task.text }}</span>
    </div>
</template>

<script>
export default {
    props: {
        task: Object
    }
};
</script>