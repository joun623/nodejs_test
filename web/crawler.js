var Crawler = require("crawler")

var c = new Crawler({
  maxConnections: 10,
  callback: function(error, res, done){
    if (error){
      console.log(error);
    } else {
      var $ = res.$;
      let query = res.request.uri.query;
      let splitedQuery = query.split('=')
      let decodeQueryData = decodeURIComponent(splitedQuery[1]);

      let searchResult = $('#resultStats').text();
      console.log(decodeQueryData + ' = ' + searchResult);
    }
    done();
  }
});

c.queue([
  'https://www.google.com/search?q=' + encodeURIComponent('寿司屋'),
]);
