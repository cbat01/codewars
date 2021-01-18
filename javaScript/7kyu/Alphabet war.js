function alphabetWar(fight){
    var lWin = 0;
    var rWin = 0;
    fight.split('').map(n => {
      switch(n){
          case 'w':
            lWin += 4;break;
          case 'p':
            lWin += 3;break;
          case 'b':
            lWin += 2;break;
          case 's':
            lWin += 1;break;
          case 'm':
            rWin += 4;break;
          case 'q':
            rWin += 3;break;
          case 'd':
            rWin += 2;break;
          case 'z':
            rWin += 1;break;
      }
    })
    return lWin > rWin ? 'Left side wins!' :(lWin == rWin ? "Let's fight again!" : 'Right side wins!')
}