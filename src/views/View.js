export default class View {
  constructor(props = {}) {
    this.props = props
    this.cardBuilder = CardService.newCardBuilder()
  }
  setHeader() {
    this.cardBuilder.setHeader(this.header)
    return this
  }
  setSections() {
    const { sections } = this
    const addSection = (section) => {
      if (section) this.cardBuilder.addSection(section)
    }
    Array.isArray(sections)
      ? sections.forEach((s) => addSection(s))
      : addSection(sections)
    return this
  }
  setFixedFooter() {
    const { footer } = this
    this.cardBuilder.setFixedFooter(footer)
    return this
  }
  build() {
    return this.cardBuilder.build()
  }
  render() {
    return !this.footer
      ? this.setHeader().setSections().build()
      : this.setHeader().setSections().setFixedFooter().build()
  }
}
