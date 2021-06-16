import Controller from '../../Common/controllers/Controller'
import Gmail from '../../Common/services/Gmail'
import SubmitTaskView from '../../Common/components/SubmitTask'

export default class SubmitGmailTask extends Controller {
  execute() {
    const { messageId, accessToken } = this.messageMetadata
    const {
      formInput: { message },
    } = this.event

    const mainMessage = new Gmail(accessToken).getMessage(messageId)
    mainMessage.reply(message)

    return new SubmitTaskView()
  }
  navigateTo(view) {
    return view.render()
  }
}
