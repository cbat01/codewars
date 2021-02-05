// https://www.codewars.com/kata/598ab63c7367483c890000f4

// 1
function stringTask(s){
    return /[^aeiouy]/.test(s) ? '.'+(s.toLowerCase().match(/[^aeiouy]/g)||[]).join('.') : ''
}

// 2
function stringTask(s){
    return s.toLowerCase().replace(/[aeiouy]/g,'').replace(/./g,v=>'.'+v)
}