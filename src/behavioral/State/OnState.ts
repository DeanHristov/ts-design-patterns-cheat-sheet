import State from './State';
import OffState from './OffState';

// Concrete state (2) called OnState
export default class OnState extends State {
  constructor(name: string) {
    super(name);
    super.setState(this);
  }

  toggleState(): void {
    super.setState(new OffState('OffState'));
  }
}
