const axios = require('axios');
const { resourceLimits } = require('worker_threads');
require('dotenv').config();

exports.handler = async(event) => 
{
    try{
     const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
     return {
        statusCode : 200,
        body : JSON.stringify(response.data),
     };
    }
    catch(error)
    {
        console.error('Error while fetching the data:',error);
        return{
            statusCode : 500,
            body: JSON.stringify({error:'Internal Server error'}),
        };
    }
};

//for local testing
if(require.main === module){
    exports.handler({test:'event'})
    .then((result) => console.log('Lambda response:', result))
    .catch((error) => console.error('Error:',error));
}