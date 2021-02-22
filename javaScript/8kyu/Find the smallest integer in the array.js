// https://www.codewars.com/kata/55a2d7ebe362935a210000b2

// 1
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a,b) => a-b)[0];
  }
}

// 2
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
}