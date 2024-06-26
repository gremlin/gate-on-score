const axios = require('axios');

const gremlinTeamID = process.env.INPUT_GREMLIN_TEAM_ID;
const apiKey = process.env.INPUT_API_KEY;
const serviceId = process.env.INPUT_SERVICE_ID;
const threshold = parseInt(process.env.INPUT_THRESHOLD, 10);

const apiCall = async () => {
  try {
    const response = await axios.get(`https://api.gremlin.com/v1/services/${serviceId}/score?teamId=${gremlinTeamID}`, {
      headers: { 'Authorization': `Bearer ${apiKey}` }
    });

    if (Math.round(response.data) < threshold) {
      console.log('Blocking workflow');
      process.exit(1);
    } else {
      console.log('Allowing workflow');
      process.exit(0);
    }
  } catch (err) {
    console.log(`Error: ${err}`);
    process.exit(1);
  }
};

apiCall();
