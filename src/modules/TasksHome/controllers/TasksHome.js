import Controller from '../../Common/controllers/Controller'
import Gmail from '../../Common/services/Gmail'
import TasksHomeView from '../components/TasksHome'
import TasksService from '../../Common/services/Tasks'

export default class TasksHome extends Controller {
  execute() {
    const { messageId, accessToken } = this.messageMetadata
    const message = new Gmail(accessToken).getMessage(messageId)
    const subject = message.getSubject()
    const sender = message.getFrom()
    const tasksList = TasksService.getTasks()
    return new TasksHomeView({ subject, sender, tasksList })
  }
  navigateTo(view) {
    return view.render()
  }
}
