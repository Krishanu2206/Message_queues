const {Queue} = require('bullmq'); //using the ioredis
const connection = require('./client');

const notificationqueue = new Queue('email-queue', {connection});

async function init(){
    const result = await notificationqueue.add('email-to-arka', { email : 'arka@gmail.com', subject : 'welcome to bullmq', body : 'welcome to bullmq, arka'});
    console.log('Message added to queue:', result.id);
}

init();