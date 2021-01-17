var Item = require('../models/Item');
var mongoose = require('mongoose');

listItems = [
];


//Create and save new item in database (POST)
exports.create = (req,res) =>
{
    // data validation
    if(!req.body.itemTitle || !req.body.itemDescription)
    {
        res.status(400).send({ message: "Content cannot be empty!" });
        return;    
    }

    const item = new Item({
        itemTitle: req.body.itemTitle,
        itemDescription: req.body.itemDescription,
        checked: req.body.checked || false
    });

    item
        .save(item)
        .then(data=>{
            res.json(data);
        })
        .catch(err=>{
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tutorial."
            });
        });
};

//Retrieve all items in database (GET)
exports.findAll = (req,res) =>
{
    //const title = req.query.title;
    //let condition = title 
    Item.find({})
        .then(data=>{
            res.json(data);
        })
        .catch(err=>{
            res.status(500).send({
                message: err.message || "Error occured while retrieving items."
            })
        });
};

//Find item by id (GET)
exports.findItem = (req,res) =>
{
    const id=req.params.id;
    Item.findById(id)
        .then(data=>{
            if(!data)
            {
                res.status(404).send({message: "No item with id: " + id + " found."});
            }
            else
            {
                res.json(data);
            }
        })
        .catch(err=>{
            res
                .status(500)
                .send({message:"Error retrieving item with id: " + id});
        });
};

//Delete item from list based on id (DEL)
exports.deleteItem = (req,res) =>
{
    const id = req.params.id;

    Item.findByIdAndRemove(id)
        .then(data=> {
            res.status(404).send({
                message: "Cannot delete item with id: " + id + ". Item might not have been found."
            })
        })
        .catch(err=>{
            res.status(500).send({
                message: "Could not delete item with id: " + id
            })
        });
};

// Delete all items from list (DEL)
exports.deleteAll = (req,res) =>
{
    Item.deleteMany({})
        .then(data=>{
            res.send({
                message: `${data.deletedCount} items were deleted successfully!`
            })
        })
        .catch(err=>{
            res.status(500).send({
                message: err.message || "Error occured while removing all items."
            })
        })
};