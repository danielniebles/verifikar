import Controller from '../Controller'
import Gmail from '../../model/Gmail'
import TasksHomeModel from '../../model/TasksHome'
import GmailExecutedView from '../../views/compose/OnGmailExecuted'

export default class AttachmentsList extends Controller {
  execute() {
    const { messageId, accessToken } = this.messageMetadata
    const {
      parameters: { name, id },
    } = this.event

    const mainMessage = new Gmail(accessToken).getMessage(messageId)
    const sender = mainMessage.getFrom()
    const taskParameters = new TasksHomeModel().getTaskById(name, id)

    const {
      parameters: { message, subject },
    } = taskParameters

    const messageWithSender = message.replace(
      '${sender}',
      sender.substring(0, sender.indexOf('<'))
    )
    mainMessage.reply(messageWithSender, {
      subject: subject,
    })

    return new GmailExecutedView()
  }
  navigateTo(view) {
    return view.render()
  }
}
