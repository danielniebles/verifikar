export default class Controller {
  constructor(event) {
    this.event = event
  }
  run(args) {
    return this.navigateTo(this.execute(args))
  }
}
