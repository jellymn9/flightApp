<template>
    <v-container class=".container">
        <v-row class=".main-units">
            <v-col>
                 <v-data-table
                    :headers="flightItem.headers"
                    :items="localItems"
                    :items-per-page="5"
                    @click:row="handleClick"
                    class="elevation-1"
                ></v-data-table>
            </v-col>
        </v-row>
    </v-container>

</template>

<script>

export default {
    name: "FlightsItem",
    props: ["flightItem"],
    data(){
        return{
            itemIndex: 0
        }
    },
    methods: {
        handleClick(row){
            const itemsToString = this.localItems.map( (item) => {
                return JSON.stringify(item);
            });
            this.itemIndex = itemsToString.indexOf(JSON.stringify(row));
            this.$emit("customChange", this.itemIndex);
        }

    },
    computed: {
        localItems(){
            return this.flightItem.items.map( (itemAndInfo) => {
                return itemAndInfo.item;
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  flex-direction: row;
}

.main-units{
  width: fit-content;
}
</style>