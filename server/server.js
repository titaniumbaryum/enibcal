var express = require('express'),
    request = require('request'),
    fs = require("fs"),
    mysql = require('mysql');


var app = express();

var con = mysql.createConnection({
  host: "localhost",
  user: "enibcal",
  password: "password",
  database: "ical3",
	insecureAuth: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //if("api" in req.originalUrl || "proxy" in req.originalUrl)
    next();
  });
   app.use(express.static(__dirname + '/dist'));
  // 'http://localhost:4242/proxy'
  app.use('/proxy', function(req, res) {
    console.log("proxy");
    req.pipe(request("http://edt.enib.fr/ics.php" + req.url)).pipe(res);
  });
  app.get('/api/palette', function(req, res) {
    console.log("palette");
    fs.readFile( __dirname + "/data/" + "palettes.json", 'utf8', function (err, data) {
         res.end( data );
     });
  });
  app.get('/api/homeworks/get', function(req, res) {
    console.log("homeworks/get");
    if(typeof req.query.stream !== "undefined"){
      con.query("SELECT * FROM homeworks WHERE `stream`=\""+req.query.stream+"\"", function (err, result, fields) {
        if (err) throw err;
        var j=0;
        function completers(i){
          con.query("SELECT * FROM `completers` WHERE `homeworkid`="+parseInt(result[i].id), function (err, rc, fields) {
            if (err) throw err;
            var completers=[];
            for(var k = 0; k < rc.length; k++){
              completers.push(rc[k].user);
            }
            result[i].completers=completers;
            j++;
            if(j==result.length)res.end( JSON.stringify(result));
          });
        }
        if(result.length == 0) res.end( JSON.stringify([]));
        for(var i = 0; i < result.length; i++){
          completers(i);
        }
      });
    }else res.end( JSON.stringify([]));
  });
  app.get('/api/homeworks/complete', function(req, res) {
    if(typeof req.query.id !== "undefined" && typeof req.query.user !== "undefined"){
      con.query("INSERT INTO `completers` (`id`, `homeworkid`, `user`) VALUES (NULL, '"+parseInt(req.query.id)+"', '"+req.query.user+"');", function (err, rc, fields) {
        res.end( JSON.stringify([]));
      });
    }else res.end( JSON.stringify([]));
  });
  app.get('/api/homeworks/uncomplete', function(req, res) {
    if(typeof req.query.id !== "undefined" && typeof req.query.user !== "undefined"){
      con.query("DELETE FROM `completers` WHERE `homeworkid`='"+req.query.id+"' AND `user`='"+req.query.user+"'", function (err, rc, fields) {
        res.end( JSON.stringify([]));
      });
    }else res.end( JSON.stringify([]));
  });
  app.get('/api/homeworks/add', function(req, res) {
    console.log("homeworks/add");
    let p={};
    for(let i = 0; i < req.query.updates.length; i++){
      let d=JSON.parse(req.query.updates[i]);
      p[d.param]=d.value;
    }
    console.log(p);
    if("stream" in p && "title" in p && "end" in p && "description" in p && "author" in p){
      console.log("homeworks/add/set");
      var date=new Date(parseInt(p["end"]));
      console.log(date);
      date = date.getUTCFullYear() + '-' +
    ('00' + (date.getUTCMonth()+1)).slice(-2) + '-' +
    ('00' + (date.getUTCDate()+1)).slice(-2) + ' ' +
    ('00' + date.getUTCHours()).slice(-2) + ':' +
    ('00' + date.getUTCMinutes()).slice(-2) + ':' +
    ('00' + date.getUTCSeconds()).slice(-2);
      con.query("INSERT INTO `homeworks` (`id`, `stream`, `end`, `title`, `author`, `description`) VALUES (NULL, '"+p["stream"].replace(/'/g,'\\\'')+"', '"+date+"', '"+p["title"].replace(/'/g,'\\\'')+"', '"+p["author"].replace(/'/g,'\\\'')+"', '"+p["description"].replace(/'/g,"\\"+"'")+"');", function (err, rc, fields) {
        res.end( JSON.stringify(rc));
      });

    }else res.end( JSON.stringify([]));
  });
  app.get('/api/homeworks/remove', function(req, res) {
    if(typeof req.query.id !== "undefined"){
      con.query("DELETE FROM `homeworks` WHERE `id`='"+req.query.id+"'", function (err, rc, fields) {
        res.end( JSON.stringify([]));
      });
    }else res.end( JSON.stringify([]));
  });
  app.get('*', function(req, res){
    fs.readFile( __dirname + "/dist/" + "index.html", 'utf8', function (err, data) {
      res.end( data );
    });
  });

  function clearHomeworks(){
    con.query("DELETE FROM `homeworks` WHERE `end`<NOW()", function (err, rc, fields) {
      console.log("cleared homeworks");
    });
  }
  setInterval(function(){
    clearHomeworks();
  },1000*3600);
  clearHomeworks();

	app.listen(80);
});
