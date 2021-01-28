// 1
function initials(n){
    return n.split(' ').map(x => x[0].toUpperCase()).join('.') + n.split(' ').pop().slice(1);
}

// 2
initials = n =>
  (n = n.split(' ')).map(w => w[0].toUpperCase()).join('.') + n.pop().slice(1);