function sabb(s, val, happiness){
    return val + happiness + (s.match(/[abcilts]/g)||[]).length > 22 ? 'Sabbatical! Boom!' : 'Back to your desk, boy.'
}