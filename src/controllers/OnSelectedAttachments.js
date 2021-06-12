import Controller from './Controller'
import Gmail from '../model/Gmail'
import Drive from '../model/Drive'
import OnExecutedTaskView from '../views/OnExecutedTask'

export default class OnSelectedAttachments extends Controller {
  execute() {
    const { messageId, accessToken } = this.messageMetadata
    const {
      formInputs: { selectedAttachments },
      parameters,
    } = this.event
    const { folderId } = parameters

    const message = new Gmail(accessToken).getMessage(messageId)
    const attachments = message.getAttachments()
    const filteredAttachments = selectedAttachments.map((value) => {
      const filteredAttachment = attachments.filter(
        (attachment) => attachment.getName() === value
      )
      return filteredAttachment[0]
    })

    const folder = new Drive().getFolderById(folderId)
    filteredAttachments.forEach((attachment) => folder.createFile(attachment))
    const savedAttachmentsCount = filteredAttachments.length.toString()

    return new OnExecutedTaskView({ folderId, savedAttachmentsCount })
  }
  navigateTo(view) {
    return view.render()
  }
}
