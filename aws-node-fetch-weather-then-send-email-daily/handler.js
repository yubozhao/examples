import sendEmail from './services/send-email';
import createEmailTemplate from './services/email-generator';
import fetchWeather from './services/fetch-weather';


export const reportWeatherLambda = (event, context, callback) => {
  const location = {
    lat: event.lat,
    lon: event.lon,
  };

  fetchWeather(location)
    .then(createEmailTemplate)
    .then(sendEmail)
    .then((res) => {
      callback(null, res);
    })
    .catch((err) => {
      callback(err, null);
    });
};

export default {
  reportWeatherLambda,
};
