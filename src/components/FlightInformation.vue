<template>
    <div>
        <p v-for="(info,index) in Object.keys(flightInfo)" :key="index" class="flight-info-class">
            {{info}}: {{flightInfo[info]}}
        </p>
    </div>
</template>

<script>
    export default {
        name: "FlightInformation",
        props:{
            flightInfo: {
                type: Object,
                default: ()=> ({})
            }
        }
    }
</script>

<style lang="scss" scoped>
.flight-info-class{
    padding-left: 20px;
    padding-top: 15px;
}
</style>