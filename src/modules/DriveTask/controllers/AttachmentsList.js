import Controller from '../../Common/controllers/Controller'
import AttachmentsListView from '../components/AttachmentsList'
import Gmail from '../../Common/services/Gmail'
import TasksService from '../../Common/services/Tasks'

export default class AttachmentsList extends Controller {
  execute() {
    const { messageId, accessToken } = this.messageMetadata
    const {
      parameters,
      parameters: { name, id },
    } = this.event
    const message = new Gmail(accessToken).getMessage(messageId)
    const attachments = message.getAttachments()

    const taskParameters = TasksService.getTaskById(name, id)
    const {
      parameters: { folderId },
    } = taskParameters
    return new AttachmentsListView({ parameters, attachments, folderId })
  }
  navigateTo(view) {
    return view.render()
  }
}
