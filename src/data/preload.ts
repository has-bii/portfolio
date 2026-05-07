const images = [
  '/me.jpg',
  '/me-1.jpeg',
  '/me-2.jpeg',
  '/me-3.jpeg',
  '/me-4.jpeg',
  '/me-5.jpeg',
  '/me-6.jpeg',
] as const

export interface PreloadOptions {
  onProgress?: (percent: number) => void
  timeout?: number
}

export function preloadImages({
  onProgress,
  timeout = 5000,
}: PreloadOptions = {}): Promise<void> {
  return new Promise((resolve) => {
    let loaded = 0
    const total = images.length

    if ((total as number) === 0) {
      onProgress?.(100)
      resolve()
      return
    }

    const timer = setTimeout(() => {
      onProgress?.(100)
      resolve()
    }, timeout)

    function done() {
      loaded++
      onProgress?.(Math.round((loaded / total) * 100))
      if (loaded === total) {
        clearTimeout(timer)
        resolve()
      }
    }

    for (const src of images) {
      const img = new Image()
      img.onload = done
      img.onerror = done
      img.src = src
    }
  })
}

export default images

export function preloadRouteChunks(router: {
  routesByPath: Record<string, { loadRouteChunk?: () => Promise<void> }>
}): Promise<void> {
  const routes = Object.values(router.routesByPath)
  return Promise.all(routes.map((r) => r.loadRouteChunk?.())).then(() => {})
}
