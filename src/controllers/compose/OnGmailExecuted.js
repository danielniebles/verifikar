import Controller from '../Controller'
import Gmail from '../../model/Gmail'
import TasksHomeModel from '../../model/TasksHome'
import GmailExecutedView from '../../views/compose/OnGmailExecuted'

export default class OnGmailExecuted extends Controller {
  execute() {
    const { messageId, accessToken } = this.messageMetadata
    const {
      formInput: { message },
    } = this.event

    const mainMessage = new Gmail(accessToken).getMessage(messageId)
    mainMessage.reply(message)

    return new GmailExecutedView()
  }
  navigateTo(view) {
    return view.render()
  }
}
