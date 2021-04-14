// https://www.codewars.com/kata/582dace555a1f4d859000058
function findAdmin(list, lang) {
    return list.filter((val) => {
        return val.language === lang && val.githubAdmin === 'yes';
    })
}