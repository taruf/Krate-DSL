function fn() {



  var config = {
    appId: 'my.app.id',
    appSecret: 'my.secret',
    baseUrl: 'https://api.instantwebtools.net/',
    anotherUrlBase: 'https://another-host.com/v1/'
  }
 config.ENV = Java.type('utils.ConfigReader').getEnv();


  if (config.ENV == 'int') {
    config.baseUrl = 'https://api.instantwebtools.net/--int';
  } else if (config.ENV == 'pqa') {
    config.baseUrl = 'https://api.instantwebtools.net/';
  }

    config.GET_AIRLINE_DETAILS = '/v1/airlines/321';

  return config;
}