<template>
    <div class="progress-list__skill">
        <p>
            <span class="progress-list__skill-title">{{ title }}</span>
            <span class="progress-list__skill-value">{{ value }}%</span>
        </p>
        <div class="progress">
            <div class="progress-bar" role="progressbar" v-bind:aria-valuenow="value" aria-valuemin="0" aria-valuemax="100" >
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['title','value']
}
</script>