import { describe } from '@jest/globals';
import ClientService from './ClientService';
import ClientAdapter from './ClientAdapter';
import ExternalService from './ExternalService';

describe('Structural -> Adapter design pattern', () => {
  it('Should be able to work with miles/h', () => {
    const client: ClientService = new ClientAdapter(new ExternalService());

    expect(client.speed(2)).toMatch(/3.218688 miles/g);
  });

  it('Should be able to work with km/h', () => {
    const client: ClientService = new ClientService();

    expect(client.speed(2)).toMatch(/2 km/g);
  });
});
