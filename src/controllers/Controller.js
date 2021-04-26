export default class Controller {
  constructor(event) {
    this.event = event
  }
  run(args) {
    console.log(args)
    return this.navigateTo(this.execute(args))
  }
}
