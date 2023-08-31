import { IServer } from './Server';

export interface IProxyServer extends IServer {
  checkAccess(IPV4: string): boolean;
}

/**
 * This is our Proxy server and it acts in front of the real server.
 * The point here is to reduce the workload to the real server with a simple filtering.
 */
export default class ProxyServer implements IProxyServer {
  private cidrClients: Array<string>;
  private readonly realSubject: IServer;

  constructor(CIDRs: string[], server: IServer) {
    //@see: https://aws.amazon.com/what-is/cidr/#:~:text=Classless%20Inter%2DDomain%20Routing%20(CIDR,IP%20address%2C%20associated%20with%20it.
    //@see: https://www.ipaddressguide.com/cidr
    this.cidrClients = CIDRs;
    this.realSubject = server;
  }

  request(IPv4: string, url: string): string {
    if (this.checkAccess(IPv4)) {
      return this.realSubject.request(IPv4, url);
    }

    // TODO Adding extra logic here....
    this.doLog(IPv4);
    return `The request is cached!`;
  }

  //Checking access prior to firing a real request.'
  checkAccess(IPV4: string): boolean {
    return this.isIPv4InCIDRs(IPV4, this.cidrClients);
  }

  private doLog(IPV4: string): void {
    // eslint-disable-next-line no-console
    console.log(`Logged a new activity from IPv4: ${IPV4}`);
  }

  private isIPv4InCIDR = (IPv4: string) => (cidr: string) => {
    const [range, bits = 32] = cidr.split('/');
    const mask = ~(2 ** (32 - Number(bits)) - 1);

    return (this.IPv4ToInt(IPv4) & mask) === (this.IPv4ToInt(range) & mask);
  };

  private isIPv4InCIDRs(IPv4: string, CIDRs: string[]): boolean {
    return CIDRs.some(this.isIPv4InCIDR(IPv4));
  }

  private IPv4ToInt(IPv4: string): number {
    return (
      IPv4.split('.').reduce(
        (int, oct) => (int << 8) + parseInt(oct, 10),
        0,
      ) >>> 0
    );
  }
}
