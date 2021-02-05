// https://www.codewars.com/kata/57cf3dad05c186ba22000348

function decodeResistorColors(bands) {
    var codeList = {'black': 0, 'brown': 1, 'red': 2, 'orange': 3, 'yellow': 4, 'green': 5, 'blue': 6, 'violet': 7, 'gray': 8, 'white': 9}
    var val = (codeList[bands.split(' ')[0]] * 10 + codeList[bands.split(' ')[1]]) * Math.pow(10,codeList[bands.split(' ')[2]])
    var ohmsVal = (val < 1000000 ? (val >= 1000 ? val/1000 + 'k': val) : val/1000000 + 'M')
    tolerance = bands.split(' ').pop() === 'gold' ? '5%' : (bands.split(' ').pop(-1) === 'silver' ? '10%' : '20%')
    return `${ohmsVal} ohms, ${tolerance}`
}