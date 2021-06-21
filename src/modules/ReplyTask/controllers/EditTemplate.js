import Controller from '../../Common/controllers/Controller'
import Gmail from '../../Common/services/Gmail'
import TasksService from '../../Common/services/Tasks'
import EditTemplateView from '../components/EditTemplate'

export default class EditTemplate extends Controller {
  execute() {
    const { messageId, accessToken } = this.messageMetadata
    const {
      parameters,
      parameters: { name, id },
    } = this.event

    const mainMessage = new Gmail(accessToken).getMessage(messageId)
    const sender = mainMessage.getFrom()
    const taskParameters = TasksService.getTaskById(name, id)

    //mainMessage.reply(template)
    const {
      parameters: { template },
    } = taskParameters

    return new EditTemplateView({ parameters, template })
  }
  navigateTo(view) {
    return view.render()
  }
}
