const backendUrl = 'http://163385598a16.ngrok.io'

export function formatBackendUrl(pathname) {
  return `${backendUrl}/${pathname}`
}
