export default class Controller {
  constructor({ event } = {}) {
    this.event = event
    this.messageMetadata = event && event.messageMetadata
  }
  run(args) {
    return this.navigateTo(this.execute(args))
  }
}
