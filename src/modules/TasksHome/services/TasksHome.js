import HttpClient from '../../Common/services/HttpClient'
import { formatBackendUrl } from '../../utils'

export default class TasksHome {
  constructor() {
    this.httpClient = new HttpClient()
  }

  getTasks() {
    var user = Session.getActiveUser().getEmail()
    const url = formatBackendUrl(`tasks/${user}/gmail`)
    const response = this.httpClient.execute(url)
    return JSON.parse(response.getContentText())
  }

  getTaskById(name, id) {
    const url = formatBackendUrl(`tasks/id/${id}/${name}`)
    const response = this.httpClient.execute(url)
    return JSON.parse(response.getContentText())
  }
}
