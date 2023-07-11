const request = require('request')
const cheerio = require('cheerio')
const url = 'https://eiga.com/now/all/rank/'
const titles_arr = []

request(url, (e, response, body) => {
    if (e) {
        console.error(e)
    }
    try{
        const $ = cheerio.load(body)
        console.log($('a','.title'))
        $('a', '.title').each((i, elem) => {
            titles_arr[i] = $(elem).text()
        })
        console.log(titles_arr)
    } catch(e) {
        console.error(e)
    }
})
