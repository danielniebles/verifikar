import Controller from './Controller'
import AttachmentsListView from '../views/AttachmentsList'
import Gmail from '../model/Gmail'
import { userProperties } from '../common/properties'

export default class AttachmentsList extends Controller {
  execute() {
    const { messageId, accessToken } = this.messageMetadata
    const { parameters } = this.event
    const message = new Gmail(accessToken).getMessage(messageId)
    const attachments = message.getAttachments()
    return new AttachmentsListView({ parameters, attachments })
  }
  navigateTo(view) {
    return view.render()
  }
}
