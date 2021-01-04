// 解法一：
function areYouPlayingBanjo(name) {
    // Implement me
    return name.substr(0,1).toLowerCase() == 'r' ? `${name} plays banjo` : `${name} does not play banjo`;
}