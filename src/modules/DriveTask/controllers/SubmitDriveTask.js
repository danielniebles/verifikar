import Controller from '../../Common/controllers/Controller'
import Gmail from '../../Common/services/Gmail'
import DriveService from '../../Common/services/Drive'
import SubmitDriveTaskView from '../components/SubmitDriveTask'

export default class SubmitDriveTask extends Controller {
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

    const folder = DriveService.getFolderById(folderId)
    filteredAttachments.forEach((attachment) => folder.createFile(attachment))
    const savedAttachmentsCount = filteredAttachments.length.toString()

    return new SubmitDriveTaskView({ folderId, savedAttachmentsCount })
  }
  navigateTo(view) {
    return view.render()
  }
}
