function isSameLanguage(list) {
    return list.every(x => x.language === list[0].language)
}