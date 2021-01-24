function findScreenHeight(width, ratio) {
  return `${width}x${width*ratio.split(':')[1]/ratio.split(':')[0]}`
}