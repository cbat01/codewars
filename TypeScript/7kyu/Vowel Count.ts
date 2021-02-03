export class Kata {
    static getCount(str: string) {
      return (str.match(/[aeiou]/g)||[]).length;
    }
}