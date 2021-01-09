function aliasGen(a,b){
  return /^[A-Z]/i.test(a[0]) && /^[A-Z]/i.test(b[0]) ? `${firstName[a[0].toUpperCase()]} ${surname[b[0].toUpperCase()]}` : 'Your name must start with a letter from A - Z.';
}