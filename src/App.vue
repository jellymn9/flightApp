<template>
  <v-container class="container" style="border:1px solid black;">
    <v-row class="main-units">
      <v-col>
        <workers-item
        :workers = "workers"
        @customChange="updateFlightsForWorker"
        ></workers-item>
      </v-col>
    </v-row>
    <v-divider vertical></v-divider>
    <v-row class="main-units" style="height: 100%;">
      <v-col>
        <flights-item
        :flightItem = "flightItem"
        ></flights-item>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FlightsItem from './components/Flights';
import WorkersItem from './components/Workers';
import {getWorkers, getFlightsForWorker} from './provider';

const namesMappingObj = {
  tableData: {
    from: "Origin",
    from_date: "Origin date",
    from_gate: "Origin gate",
    num: "Flight number",
    to: "Destination"
  },
  flightInfoData:{
    to_date: "Destination date",//info
    to_gate: "Destination gate",//info,
    plane: "Plane number",//info
    duration: "Duration of the flight"//info
  }
};

const destruct = (obj, ...keys) => {
  return keys.reduce((a, c) => ({ ...a, [c]: obj[c] }), {});
};
  

export default {
  name: 'App',

  components: {
    FlightsItem,
    WorkersItem
  },

  data: () => ({
    activeWorkerId: "",
    nIntervId: 0,
    workers: [],
    flightItem: {
      headers: [],
      items: []
    }
  }),
  async created(){
    await this.getWorkers();
    this.activeWorkerId = this.workers[0].id;
    await this.updateTablesData();
    await this.timeout();
  },
  methods: {
    async getFlight(){
       return await getFlightsForWorker(this.activeWorkerId);
    },
    async getWorkers(){
      this.workers = await getWorkers;
    },
    async updateTablesData(){
      const newNames = (await this.getFlight()).map((flight) => {
        const newFlightObj = {};
        Object.keys(flight).forEach( (flightKey) => {
          newFlightObj[namesMappingObj.tableData[flightKey] || namesMappingObj.flightInfoData[flightKey]] = flight[flightKey];
        });
        return newFlightObj;
      });
      this.flightItem.headers = Object.values(namesMappingObj.tableData).map( (headerName) => ({
          text: headerName,
          value: headerName.toLowerCase().replace(/ /g, ""),
          sortable: false
        }) 
      );
      this.flightItem.items = newNames.map( (flight) => {
        const o = {};
        const flightDataObject = destruct(flight,...(Object.values(namesMappingObj.tableData)));
        o.item = {};
        this.flightItem.headers.forEach( (headerObj) =>{
          o.item[headerObj.value] = flightDataObject[headerObj.text];
        });
        o.info = destruct(flight,...Object.values(namesMappingObj.flightInfoData));
        return o;
      });
    },
    async timeout(){
      if (!this.nIntervId) {
        this.nIntervId = setInterval(() => this.updateTablesData(), 60000);
      }
    },
    async updateFlightsForWorker(workerId){
      this.activeWorkerId = workerId;
      await this.updateTablesData();
      await this.timeout();
    }
  }
};
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: row;
}

.main-units{
  width: fit-content;
}

</style>