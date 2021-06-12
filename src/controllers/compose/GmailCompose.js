import Controller from '../Controller'
import GmailComposeView from '../../views/compose/GmailCompose'
import DriveModel from '../../model/Drive'
import { getNavigationActionResponse } from '../navigationHandler'
import { userProperties } from '../../common/properties'

export default class GmailCompose extends Controller {
  execute() {
    const { parameters } = this.event
    const { name } = parameters
    const taskId = name

    const taskTemplate = new DriveModel().getTaskTemplate(taskId)
    userProperties.set('currentTaskTemplate', taskTemplate)
    userProperties.set('currentTaskId', taskId)

    return new GmailComposeView({
      taskTemplate,
    })
  }

  navigateTo(view) {
    const card = view.render()
    return card
  }
}
