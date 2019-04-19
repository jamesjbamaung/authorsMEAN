const mongoose = require('mongoose');
require('../models/author');
var Author = mongoose.model('Author');

module.exports = {
    index: function (req, res) {
        Author.find({}, function (err, authors) {
            if (err) {
                console.log("Error:", err);
            } else {
                res.json({ message: "Here are all the tasks!", authors: authors })
            }
        });
    },

    details: function (req, res) {
        Author.findOne({ _id: req.params.id }, function (err, author) {
            if (err) {
                res.json({ message: "Error", error: err });
            } else {
                res.json({ message: "Success", author: author })
            }
        });
    },

    addAuthor: function (req, res) {

        Author.countDocuments({ name: req.body.name }, function (err, count) {
            if (err) {
                res.json({ message: "Error", error: err });
            }
            console.log(count);
            if (count == 0) {
                name = req.body.name

                var new_author = new Author({
                    name: name
                });
                new_author.save(function (err, author) {
                    if (err) {
                        res.json({ message: "Could not save new task", errors: err })
                    } else {
                        res.json({ message: 'succes!!!!!s', author: author })
                        // res.redirect('/')
                    }
                });
            }
            else {
                console.log("user already exists")
                res.json({message: "non unique user", count:count} )
            }
        })
    },
    editAuthor: function (req, res) {
        Author.findOneAndUpdate({ _id: req.params.id }, { $set: { name: req.body.name } }, function (err, author) {
            if (err) {
                res.json({ message: "Error", error: err });
            } else {
                res.json({ message: "Success", data: author });
            }
        });
    },

    deleteAuthor: function (req, res) {
        console.log("id form authors.js")
        console.log(req.params.id)
        Author.findOneAndDelete({ _id: req.params.id }, function (err, author) {
            if (err) {
                res.json({ message: "error", data: author })
            } else {
                res.json({ message: "removed task", data: author });
            }
        })
    }
};