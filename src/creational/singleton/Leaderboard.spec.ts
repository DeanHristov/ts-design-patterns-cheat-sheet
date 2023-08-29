import { describe } from '@jest/globals';
import Leaderboard from './Leaderboard';

describe('Creational -> Singleton pattern', () => {
  it('Should always refer to a single object', () => {
    const leaderboard1: Leaderboard = Leaderboard.getInstance();
    const leaderboard2: Leaderboard = Leaderboard.getInstance();

    expect(leaderboard1).toEqual(leaderboard2);
  });

  it('Should be able to get the data from cross-components', () => {
    const leaderboard1: Leaderboard = Leaderboard.getInstance();
    const leaderboard2: Leaderboard = Leaderboard.getInstance();

    leaderboard1.pushData('Orenda', 32);
    leaderboard1.pushData('David', 44);

    expect(leaderboard1.getBoard()).toEqual(leaderboard2.getBoard());
  });
});
