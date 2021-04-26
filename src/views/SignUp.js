import View from './View'

export default class SignUp extends View {
  get header() {
    //const { title = 'SignUp' } = this.props
    const { event } = this.props

    console.log(event)

    var accessToken = event.gmail.accessToken
    GmailApp.setCurrentMessageAccessToken(accessToken)

    var messageId = event.gmail.messageId
    var message = GmailApp.getMessageById(messageId)
    var subject = message.getSubject()

    return CardService.newCardHeader().setTitle(subject)
  }
}
