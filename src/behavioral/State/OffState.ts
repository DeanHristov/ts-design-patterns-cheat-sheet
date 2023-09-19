import State from "./State";
import OnState from "./OnState";

// Concrete state (1) called OffState
export default class OffState extends State {
  constructor(name: string) {
    super(name);
    super.setState(this);
  }

  toggleState(): void {
    super.setState(new OnState('OnState'));
  }
}
