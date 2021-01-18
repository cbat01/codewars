// solution 1
const triangle = row => {
    let reduced = row.length > 1 ? '' : row;
    for (let i = 0; i < row.length - 1; i += 1) {
      reduced += row[i] == row[i+1] ? row[i] : 'RGB'.replace(row[i], '').replace(row[i+1], '');
    }
    return reduced.length > 1 ? triangle(reduced) : reduced;
}

// solution 2
function triangle(row) {
    return row.length == 1 ? row : triangle(processedRow(row))
  }
  
  function processedRow(row) {
    return row.split('').map((el, i) => i == row.length-1 ? null : sumLetters(row[i], row[i+1])).join('');
  }
  
  function sumLetters(a, b) {
    switch (a+b) {
      case 'BG':
      case 'GB':
      case 'RR': return 'R'; break;
      case 'BR':
      case 'RB':
      case 'GG': return 'G'; break;
      case 'RG':
      case 'GR':
      case 'BB': return 'B'; break;
    }
}