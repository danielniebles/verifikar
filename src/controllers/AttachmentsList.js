import Controller from './Controller'
import AttachmentsListView from '../views/AttachmentsList'
import Gmail from '../model/Gmail'
import TasksHomeModel from '../model/TasksHome'
import { userProperties } from '../common/properties'

export default class AttachmentsList extends Controller {
  execute() {
    const { messageId, accessToken } = this.messageMetadata
    const {
      parameters,
      parameters: { name, id },
    } = this.event
    const message = new Gmail(accessToken).getMessage(messageId)
    const attachments = message.getAttachments()

    const taskParameters = new TasksHomeModel().getTaskById(name, id)
    const {
      parameters: { folderId },
    } = taskParameters
    return new AttachmentsListView({ parameters, attachments, folderId })
  }
  navigateTo(view) {
    return view.render()
  }
}
