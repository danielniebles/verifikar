import Controller from '../Controller'
import Gmail from '../../model/Gmail'
import TasksHomeModel from '../../model/TasksHome'
import GmailExecutedView from '../../views/compose/OnGmailExecuted'
import GmailEditView from '../../views/compose/GmailEdit'

export default class AttachmentsList extends Controller {
  execute() {
    const { messageId, accessToken } = this.messageMetadata
    const {
      parameters,
      parameters: { name, id },
    } = this.event

    const mainMessage = new Gmail(accessToken).getMessage(messageId)
    const sender = mainMessage.getFrom()
    const taskParameters = new TasksHomeModel().getTaskById(name, id)

    console.log(taskParameters)
    //mainMessage.reply(template)
    const {
      parameters: { template },
    } = taskParameters

    return new GmailEditView({ parameters, template })
  }
  navigateTo(view) {
    return view.render()
  }
}
