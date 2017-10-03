<template>
    <div>
        <p>{{ msg }}</p>
    </div>
</template>

<script>
    import  { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters({
                msg: 'home/msg'
            })
        }
    }
</script>
