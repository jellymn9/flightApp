<template>
    <div>
        <p v-for="(info,index) in Object.keys(flightInfoComputed)" :key="index" class="flight-info-class">
            {{info}}: {{flightInfoComputed[info]}}
        </p>
    </div>
</template>

<script>
    export default {
        name: "FlightInformation",
        props:{
            flightInfo: {
                type: Object,
                default: ()=> ({
                    "Destination date": "",
                    "Desinaion gate": "",
                    "Plane number": "",
                    "Duration of the flight": ""
                })
            }
        },
        computed:{
            flightInfoComputed(){
                return this.flightInfo;
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