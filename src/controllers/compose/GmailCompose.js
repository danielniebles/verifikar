import Controller from '../Controller'
import GmailComposeView from '../../views/compose/GmailCompose'
import DriveModel from '../../model/Drive'
import { getNavigationActionResponse } from '../navigationHandler'
import { userProperties } from '../../common/properties'

export default class GmailCompose extends Controller {
  execute() {
    const { parameters, formInput } = this.event
    const { type, taskName } = formInput
    const { name } = parameters
    const taskId = name

    taskName ? userProperties.set('currentConfigTaskName', taskName) : ''
    let taskTemplate = userProperties.get('currentTaskTemplate')

    if (!taskTemplate) {
      taskTemplate = new DriveModel().getTaskTemplate(taskId)
      userProperties.set('currentTaskTemplate', taskTemplate)
      userProperties.set('currentTaskId', taskId)
    }

    return new GmailComposeView({
      taskTemplate,
      taskName,
      type,
    })
  }

  navigateTo(view) {
    const card = view.render()
    return card
  }
}
