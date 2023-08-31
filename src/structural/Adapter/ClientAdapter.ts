import ClientService from './ClientService';
import ExternalService from './ExternalService';

export default class ClientAdapter extends ClientService {
  private readonly externalService: ExternalService;
  private mile: number = 1.609344;

  constructor(externalService: ExternalService) {
    super();
    this.externalService = externalService;
  }

  public speed(km: number): string {
    return this.externalService.doAnalytics(km * this.mile);
  }
}
