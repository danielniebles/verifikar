import Controller from './Controller'
import Gmail from '../model/Gmail'
import TasksHomeView from '../views/TasksHome'
import TasksHomeModel from '../model/TasksHome'

export default class TasksHome extends Controller {
  execute() {
    const { messageId, accessToken } = this.messageMetadata
    const message = new Gmail(accessToken).getMessage(messageId)
    const subject = message.getSubject()
    const sender = message.getFrom()
    const tasksList = new TasksHomeModel().getTasks()
    return new TasksHomeView({ subject, sender, tasksList })
  }
  navigateTo(view) {
    return view.render()
  }
}
