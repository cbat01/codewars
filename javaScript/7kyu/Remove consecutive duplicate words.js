// 1
const removeConsecutiveDuplicates = s => s.split(' ').filter((val,i,arr) => val != arr[i-1]).join(' ');

// 2
const removeConsecutiveDuplicates = s => s.split(' ').map((item,i) => {
    return item == s.split(' ')[i-1] ? '' : item
},[]).join(' ').replace(/\s+/g,' ').trim()