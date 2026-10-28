let release: (() => void) | null = null

export function waitForPageLeave(maxWait = 500): Promise<void> {
  return new Promise((resolve) => {
    const timer = setTimeout(done, maxWait)

    function done() {
      clearTimeout(timer)
      release = null
      resolve()
    }

    release = done
  })
}

export function pageLeft() {
  release?.()
}
