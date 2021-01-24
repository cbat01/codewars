function sortReindeer(reindeerNames) {
    return reindeerNames.sort((a,b) => a.split(' ')[1].localeCompare(b.split(' ')[1]));
}