// 1
function myParseInt(str) {
    return /^\d+$/.test(str.trim()) ? parseFloat(str) : NaN;
}

// 2
function myParseInt(str) {
    return /^\s*\d+\s*$/.test(str) ? +str : NaN;
}