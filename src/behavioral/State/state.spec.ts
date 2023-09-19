import { describe, it } from '@jest/globals';
import OffState from './OffState';
import OnState from './OnState';
import State from './State';

describe('Behaviours -> State design pattern', () => {
  it('Should be able to toggle state from "off" to "On"', () => {
    const stateOff: State = new OffState('OffState');

    stateOff.toggleState();
    expect(stateOff.getState()).toEqual('OnState');
  });

  it('Should be able to toggle state from "On" to "Off"', () => {
    const stateOn: State = new OnState('OnState');

    stateOn.toggleState();
    expect(stateOn.getState()).toEqual('OffState');
  });
});
