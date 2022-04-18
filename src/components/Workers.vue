<template>
    <v-card class="list-wrapper" flat>
        <v-subheader>Workers</v-subheader>
        <div v-for="(worker, i) in workers" :key="i" class="list-item">
            <p @click="sendWorkerIdBackToParent(worker.id)">
                {{worker.name}}
            </p>
        </div>
    </v-card>
</template>

<script>
    export default {
        name: "WorkersItem",
        props: {
            workers: {
                type: Array,
                required: true,
                default: () => []
            }
        },
        methods:{
            sendWorkerIdBackToParent(id){
                this.$emit("customChange", id);
            }
        }
    }
</script>

<style lang="scss" scoped>
.list-item{
    width: fit-content;
    padding: 10px;
}
.list-wrapper{
    width: min-content;
}

</style>