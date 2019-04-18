const mongoose = require('mongoose');
require('../models/author');
var Author = mongoose.model('Author');

module.exports = {
    index: function(req,res){
        console.log('doooo')
        Author.find({}, function(err, authors){
          console.log('foo');
            if(err){
                console.log("Error:", err);
            } else{
                res.json({message: "Here are all the tasks!", authors: authors})
            }
        });
    },

    details: function(req,res){
        Author.findOne({_id:req.params._id}, function(err, author){
            if(err){
                res.json({message: "Error", error:err});
            } else {
                res.json({message: "Success", author:author})
            }
        });
    },

    addAuthor: function(req,res){
        console.log("hit the add author route")
        console.log('12121212121212121212121212121')
        name = req.body.name

        var new_author = new Author ({
            name: name
        });
        // console.log(new_task)
        new_author.save(function(err, author){
            if(err){
                res.json({message: "Could not save new task", errors:err})
            } else{
                res.json({message: 'succes!!!!!s', author: author})
                // res.redirect('/')
            }
        });
    },
    // addAuthor: function(req, res){
    //     Author.create({name: req.body.name}, function(err, author){
    //         if(err){
    //             res.json({message: "Error!", error: err});
    //         }
    //         else{
    //             res.json({message: "Success!", added: true});
    //         }
    //     })
    // },
    editAuthor: function(req,res){
        Author.findOneAndUpdate({_id:req.params._id}, {$set: {name:req.body.name}}, function(err, author){
            if(err){
                res.json({message:"Error", error:err});
            } else{
                res.json({message:"Success", data:author});
            }
        });
    },

    deleteAuthor: function(req,res) {
        Author.findOneAndDelete({_id:req.params._id}, function(err, author){
            if(err){
                res.json({message: "error", data: author})
            } else{
                res.json({message: "removed task", data: author});
            }
        })
    }
};