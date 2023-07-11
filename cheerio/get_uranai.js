const request = require('request')
const cheerio = require('cheerio')
// const url = 'https://info.felissimo.co.jp/contents/feature/hoshimoyo/'
const url = 'https://info.felissimo.co.jp/contents/feature/hoshimoyo/cancer/2020810816-3.html'
const titles_arr = []

request(url, (e, response, body) => {
    if (e) {
        console.error(e)
    }
    try{
        const $ = cheerio.load(body)
        $('.txt').each((i, elem) => {
            titles_arr[i] = $(elem).html()

        })
        console.log(titles_arr)
    } catch(e) {
        console.error(e)
    }
})
