import { describe } from '@jest/globals';
import ProxyServer from './ProxyServer';
import Server from './Server';

describe('Structural -> Proxy pattern', () => {
  it('Should be able to retrieve cached result', () => {
    const cidrRange: string[] = ['192.168.32.0/24'];
    const server: ProxyServer = new ProxyServer(cidrRange, new Server());

    const outputMessage: string = server.request(
      '10.0.0.1',
      'http://my-site.com',
    );

    expect(outputMessage).toEqual('The request is cached!');
  });

  it('Should be able to retrieve result from the real subject', () => {
    const server: ProxyServer = new ProxyServer(
      ['192.168.32.0/24'],
      new Server(),
    );

    const outputMessage: string = server.request(
      '192.168.32.148',
      'http://my-site.com',
    );

    expect(outputMessage).toEqual('The request is not cached!');
  });
});
