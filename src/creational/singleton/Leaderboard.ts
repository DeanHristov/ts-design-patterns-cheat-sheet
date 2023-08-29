/**
 * Singleton Design Pattern
 */

export interface IRankedData {
  uid: number;
  rank: number;
  name: string;
  score: number;
}

export default class Leaderboard {
  private static instance: Leaderboard;
  private board: IRankedData[] = [];

  private constructor() {}

  public static getInstance(): Leaderboard {
    if (!Leaderboard.instance) {
      this.instance = new Leaderboard();
    }

    return this.instance;
  }

  /**
   * @description Adding data to the leaderboard
   * @see: https://edit.org/photos/img/blog/ine-sports-leaderboard-template-free-download.jpg-840.jpg
   */
  public pushData(name: string, score: number): void {
    this.board.push({
      uid: Math.floor(Math.random() * Date.now()),
      rank: 0,
      name,
      score,
    });
    // Adding naive sorting by scores
    this.board.sort((a: IRankedData, b: IRankedData) => {
      return b.score - a.score;
    });

    // naively calculated the rank
    this.board = this.board.map((item: IRankedData, idx: number) => {
      item.rank = idx + 1;
      return item;
    });
  }

  public getBoard(): IRankedData[] {
    return this.board;
  }
}
