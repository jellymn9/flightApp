const axios = require('axios');

const getWorkers = axios.get('https://interview-mock.herokuapp.com/api/workers/')
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    console.log(error);
  });

  const getFlightsForWorker = async function(workerId){
     return await axios.get(`https://interview-mock.herokuapp.com/api/workers/${workerId}`)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  export {getWorkers, getFlightsForWorker};