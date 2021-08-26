const Post = require('../models/Post');

class SiteController{
    index(req, res) {

        Post.find({}, function (err, posts){
            if (!err) res.json(posts);
            else {
                res.status(400).json({error:'ERROR!!'})
            }
        })
        // res.render('home')
    }
}

module.exports = new SiteController