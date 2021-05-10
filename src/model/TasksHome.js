import HttpClient from './HttpClient'
import { formatBackendUrl } from '../common/utils'
import { userProperties } from '../common/properties'

export default class TasksHome {
  constructor() {
    this.httpClient = new HttpClient()
  }

  getTasks() {
    const url = formatBackendUrl('tasklist')
    const body = {
      method: 'get',
    }
    const response = this.httpClient.execute(url, body)
    return JSON.parse(response.getContentText())
  }
}
