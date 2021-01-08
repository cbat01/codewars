// 解法一：
function mouthSize(animal) {
    return (/alligator/i).test(animal) ? 'small' : 'wide';
}

// 解法二：
function mouthSize(animal) {
    return animal.toLowerCase() == 'alligator' ? 'small' : 'wide';
  }