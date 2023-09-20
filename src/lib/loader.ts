export const loader = {
  async image(source: string) {
    return new Promise<HTMLImageElement>((resolve) => {
      const image = new Image()

      image.onload = () => {
        resolve(image)
      }

      image.src = source
    })
  }
}
