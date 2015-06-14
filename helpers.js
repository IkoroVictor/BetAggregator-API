/**
 * Created by olaokenyi on 6/14/15.
 */

exports.getGameSearchQuery = function (name) {
    x = {

        $or: [
            {'home': {$regex: (name)}},
            {'away': {$regex: (  name )}},
            {'title': {$regex: ( name  )}},

        ]};

    return x;
}