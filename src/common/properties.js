class CacheablePropertiesService {
  constructor(properties, cache) {
    this.properties = properties
    this.cache = cache
  }
  get(key) {
    return JSON.parse(this.cache.get(key))
  }
  set(key, value) {
    const json = JSON.stringify(value)
    this.cache.put(key, json)
    this.properties.setProperty(key, json)
  }
  remove(key) {
    console.log('remove called')
    this.cache.remove(key)
    this.properties.deleteProperty(key)
  }
}

export const userProperties = new CacheablePropertiesService(
  PropertiesService.getUserProperties(),
  CacheService.getUserCache()
)
