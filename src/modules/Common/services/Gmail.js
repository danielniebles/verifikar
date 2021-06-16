export default class Gmail {
  constructor(accessToken) {
    GmailApp.setCurrentMessageAccessToken(accessToken)
  }

  getMessage(messageId) {
    return GmailApp.getMessageById(messageId)
  }
}
