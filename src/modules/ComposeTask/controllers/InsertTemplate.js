import Controller from '../../Common/controllers/Controller'
import Gmail from '../../Common/services/Gmail'
import TasksService from '../../Common/services/Tasks'
import InsertTemplateView from '../components/InsertTemplate'

export default class InsertTemplate extends Controller {
  execute() {
    const {
      parameters,
      parameters: { name, id },
    } = this.event

    const taskParameters = TasksService.getTaskById(name, id)

    const {
      parameters: { template },
    } = taskParameters

    return new InsertTemplateView({ parameters, template })
  }
  navigateTo(view) {
    return view.render()
  }
}
