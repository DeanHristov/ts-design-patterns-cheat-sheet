/**
 * Assuming this is our beauty service within our app that works only with kilometers .
 */
export interface IClient {
  speed(km: number): string;
}

export default class ClientService implements IClient {
  speed(km: number): string {
    //TODO Add your business logic here...

    return `the car ran with speed: ${km} km/h`;
  }
}
