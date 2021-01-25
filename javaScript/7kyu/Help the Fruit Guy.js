function removeRotten(bagOfFruits){
    return bagOfFruits ? bagOfFruits.map(x => x.replace(/rotten/,'').toLowerCase()) : [];
}