const axios = require('axios');
const url = "https://625ea343873d6798e2ab226c.mockapi.io";

const getWorkers = axios.get(url + '/workers')
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    console.log(error);
  });

  const getFlightsForWorker = async function(workerId){
     return await axios.get(url + `/workers/${workerId}/flights`)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  export {getWorkers, getFlightsForWorker};