function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  return pontoonDistance/youSpeed - sharkDistance/(sharkSpeed * (dolphin ? 0.5 : 1)) < 0 ? "Alive!" : "Shark Bait!"
}