// The context class
export default abstract class State {
  protected ctx!: State;
  protected readonly name: string;

  protected constructor(name: string) {
    this.name = name;
  }

  setState(ctx: State) {
    this.ctx = ctx;
  }

  getState(): string {
    return this.ctx.name;
  }

  abstract toggleState(): void;
}
