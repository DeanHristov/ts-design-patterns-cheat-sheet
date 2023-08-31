export interface IServer {
  request(IPv4: string, url: string): string;
}

/**
 * This is our real server that is protected by Proxy
 */
export default class Server implements IServer {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  request(IPv4: string, url: string): string {
    // TODO Adding extra logic here....
    return `The request is not cached!`;
  }

  // TODO Adding extra logic here....
}
