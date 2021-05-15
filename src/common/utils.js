const backendUrl = 'http://70f604eaa3a5.ngrok.io'

export function formatBackendUrl(pathname) {
  return `${backendUrl}/${pathname}`
}
