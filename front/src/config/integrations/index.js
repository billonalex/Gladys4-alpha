import deviceEn from './device.en.json';
import deviceFr from './device.fr.json';
import communicationEn from './communication.en.json';
import communicationFr from './communication.fr.json';
import weatherEn from './weather.en.json';
import weatherFr from './weather.fr.json';

const integrations = {
  en: {
    totalSize: deviceEn.length + communicationEn.length + weatherEn.length,
    device: deviceEn,
    communication: communicationEn,
    weather: weatherEn
  },
  fr: {
    totalSize: deviceFr.length + communicationFr.length + weatherFr.length,
    device: deviceFr,
    communication: communicationFr,
    weather: weatherFr
  }
};

communicationEn.forEach(integration => {
  integrations.en[integration.key] = integration;
});

deviceEn.forEach(integration => {
  integrations.en[integration.key] = integration;
});

weatherEn.forEach(integration => {
  integrations.en[integration.key] = integration;
});

communicationFr.forEach(integration => {
  integrations.fr[integration.key] = integration;
});

deviceFr.forEach(integration => {
  integrations.fr[integration.key] = integration;
});

weatherFr.forEach(integration => {
  integrations.fr[integration.key] = integration;
});

export default integrations;
