const backendUrl = 'http://86165b50f9f6.ngrok.io'

export function formatBackendUrl(pathname) {
  return `${backendUrl}/${pathname}`
}
