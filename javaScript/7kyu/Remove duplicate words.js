// solution 1
function removeDuplicateWords (s) {
  return [...new Set(s.split(' '))].join(' ');
}

// solution 2
const removeDuplicateWords = s => {
  const set = new Set(s.split(' '));
  return Array.from(set).join(' ');
}