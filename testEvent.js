const {handler} = require('./index'); //include the index.js file

const testEvent = {
    key1:'value1',
    key2:'value2'
};

handler(testEvent)
    .then((response) => {
        console.log('Test Event Response', response);
    })
    .catch((error) => {
        console.error('Test event error');
    }
    );