const twilio = require('twilio');

const accountSid = 'AC286ee861d6c889835aa28adc1e69db49';
const authToken = '650798bb68a6dd9402694132665acd53';

module.exports = new twilio.Twilio(accountSid, authToken);
