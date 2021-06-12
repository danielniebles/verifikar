import HttpClient from './HttpClient'
import { formatBackendUrl } from '../common/utils'
import { userProperties } from '../common/properties'

export default class Onboarding {
  constructor() {
    this.httpClient = new HttpClient()
  }

  saveTask({ taskName, taskId, folderName, folderId }) {
    const url = formatBackendUrl('tasklist')
    const payload = { taskName, taskId, folderName, folderId }
    const body = {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify(payload),
    }
    const response = this.httpClient.execute(url, body)
    const responseCode = response.getResponseCode()
    return responseCode
  }
}
