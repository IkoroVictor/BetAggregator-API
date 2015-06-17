/**
 * Created by olaokenyi on 6/14/15.
 */
var helper = require('./helpers')

exports.getDays = function(db, req, res)
{
    db.createCollection("days", function (err, bet_days) {
        if (!err) {
            var cursor = bet_days.find({}).sort({ timestamp: 1});
            cursor.toArray(function (err, documents) //TODO Don't use 'toArray().length' find a better method to get item count
            {
                  res.json(documents);
            });
        }
    })
}


exports.getGames = function(db,date, req, res)
{
    db.createCollection("games", function (err, games) {
        if (!err) {
            var cursor = games.find({'date': date },
                {
                    id:1,

                    title:1,

                    datetime:1,
                    time:1,
                    date:1,

                    home:1,
                    away: 1,
					category_key: 1,
                    'odds.1': 1,
                    'odds.x': 1,
                    'odds.2': 1,
                    'play_codes.1': 1,
                    'play_codes.x': 1,
                    'play_codes.2': 1

                }

            ).sort({ category_key: 1, timestamp: 1});
            cursor.toArray(function (err, documents) //TODO Don't use 'toArray().length' find a better method to get item count
            {
                  res.json(documents)
            });
        }
    })
}
exports.getGame = function(db, req, res)
{
    db.createCollection("games", function (err, games) {
        if (!err) {
            var cursor = games.find({'id': req.params.id, timestamp : parseFloat(req.params.timestamp) });
            cursor.toArray(function (err, documents) //TODO Don't use 'toArray().length' find a better method to get item count
            {
                  res.json(documents)
            });
        }
    })
}
exports.getGameByID = function(db, req, res)
{
    db.createCollection("games", function (err, games) {
        if (!err) {
            var cursor = games.find({'id': req.params.id});
            cursor.toArray(function (err, documents) //TODO Don't use 'toArray().length' find a better method to get item count
            {
                  res.json(documents)
            });
        }
    })
}

exports.getSearchGames = function(db,name, req, res)
{
    db.createCollection("games", function (err, games) {
        if (!err) {
            var cursor = games.find(helper.getGameSearchQuery(name.toLowerCase()),
                {
                    id:1,

                    title:1,

                    datetime:1,
                    time:1,
                    date:1,

                    home:1,
                    away: 1,
                    category_key: 1,

                    'odds.1': 1,
                    'odds.x': 1,
                    'odds.2': 1,
                    'play_codes.1': 1,
                    'play_codes.x': 1,
                    'play_codes.2': 1

                }

            ).sort({ category_key: 1, timestamp: 1});;
            cursor.toArray(function (err, documents) //TODO Don't use 'toArray().length' find a better method to get item count
            {
                  res.json(documents)
            });
        }
    })
}