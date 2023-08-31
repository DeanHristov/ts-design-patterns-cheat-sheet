/**
 * Imagine this is a third-party analytics service that works only with miles/h
 */

export interface IExternal {
  doAnalytics(mile: number): string;
}

export default class ExternalService implements IExternal {
  doAnalytics(mile: number): string {
    //TODO Add your business logic here...

    return `the car ran with speed: ${mile} miles/h`;
  }
}
