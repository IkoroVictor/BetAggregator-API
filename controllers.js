/**
 * Created by olaokenyi on 6/14/15.
 */





exports.getDays = function(db, req, res)
{
    db.createCollection("days", function (err, bet_days) {
        if (!err) {
            var cursor = bet_days.find({});
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
            var cursor = games.find({'date': date });
            cursor.toArray(function (err, documents) //TODO Don't use 'toArray().length' find a better method to get item count
            {
                  res.json(documents)
            });
        }
    })
}