const fetch = require('node-fetch')
const defaultURL = "https://acuityscheduling.com/api/v1"
const defaultOptions = {
  method:"GET",
  headers: {
    "User-Agent": "AcuityScheduling-js/0.1.9",
    "host":"acuityscheduling.com",
    "authorization": "Basic MjE3OTExNDk6ZTIzMjQxNzlkY2QzZmQ0OTgxZTU1MWJhNjdiNDM0OTE=",
    "accept":"application/json"
  }
}
const ATID = "17486294";

const handler = async function (event, context, callback) {
  const data = [];
  const days = [];
  try {
    const { currentWeek, size } = JSON.parse(event.body);
    for (let i = (currentWeek * size); i < ((currentWeek * size) + size); i++) {
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + i);
      days.push(tomorrow);

  
      const year = tomorrow.getFullYear();
      const month = parseInt((tomorrow.getMonth() + 1) / 10) < 1 ? `0${tomorrow.getMonth() + 1}` : `${tomorrow.getMonth() + 1}`;
      const day = tomorrow.getDate();
  
      data.push(fetch(`${defaultURL}/availability/times?appointmentTypeID=${ATID}&date=${year}-${month}-${day}`, defaultOptions)
      .then(res => res.json()))
    }
    const appointments = await Promise.all(data)
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        days: days,
        appointments: appointments
      })
    }
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({message: "missing date range!"})
    }
  }
}

module.exports = { handler }
