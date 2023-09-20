const [canvas] = document.getElementsByTagName('canvas')

function isCanvasElement(element?: HTMLElement): element is HTMLCanvasElement {
  return element ? 'getContext' in element : false
}

if (!isCanvasElement(canvas)) {
  throw new Error('Not a canvas element')
}

const maybeContext = canvas.getContext('2d')

if (!maybeContext) {
  throw new Error('No canvas context found')
}

export const context = maybeContext
