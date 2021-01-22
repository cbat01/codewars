function sortReindeer(reindeerNames) {
    return reindeerNames.sort((a,b) => {
        return a.split(' ')[1][0].charCodeAt() - b.split(' ')[1][0].charCodeAt()
    })
}