// 1 ES6
export function freqSeq(str: string, sep: string): string {
    return [...str].map(x => --str.split(x).length).join(sep)
}

// 2 ES3
export function freqSeq(str: string, sep: string): string {
    return str.split('').map(x => {
        return str.split(x).length-1;
    }).join(sep)
}