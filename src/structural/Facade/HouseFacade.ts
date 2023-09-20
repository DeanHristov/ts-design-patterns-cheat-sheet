import LightSystem from './LightSystem';
import AlarmSystem from './AlarmSystem';

export interface IHouseFacade {
  comingIn(): string;

  goingOut(): string;
}

export default class HouseFacade implements IHouseFacade {
  private readonly lightSystem: LightSystem;
  private readonly alarmSystem: AlarmSystem;

  constructor() {
    this.lightSystem = new LightSystem();
    this.alarmSystem = new AlarmSystem();
  }

  comingIn(): string {
    this.lightSystem.turnOnLight();
    this.alarmSystem.deactivateAlarms();

    return 'The house is not empty';
  }

  goingOut(): string {
    this.lightSystem.turnOffLight();
    this.alarmSystem.activateAlarms();

    return 'The house is empty';
  }
}
