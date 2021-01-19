var ListSettings = require('../models/ListSettingsModel');

// Create list settings (POST)
exports.create = (req,res) =>
{
    const listSettings = new ListSettings({
        listTitle: req.body.listTitle,
        listDescription: req.body.listDescription
    });
    listSettings
        .save(listSettings)
        .then(data=>{
            res.json(data);
        })
        .catch(err=>{
            res.status(500).send({
                message: err.message || "Some error occurred while creating the List Settings."
            });
        })
}

// Retrieve list settings from database (GET)
exports.get = (req,res) =>
{
    ListSettings.findOne({})
        .then(data=>{
            res.json(data);
        })
        .catch(err=>{
            res.status(500).send({
                message: err.message || "Error occured while retrieving List Settings."
            })
        });
};

// Update list settings data (PUT)
exports.update = (req,res) => {
    if(!req.body)
    {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    const id = req.params.id;
    
    ListSettings.findOneAndUpdate({},req.body)
        .then(data=>{
            if(!data)
            {
                res.status(404).send({
                    message: `Cannot update List Settings with id=${id}. Maybe List Settings was not found!`
                });
            }
            else
            {
                res.send({ message: "List Settings was updated successfully." });
            }
        })
        .catch(err=>{
            res.status(500).send({
                message: "Error updating List Settings"
            });
        });
}

// Clear list settings data (DEL)
exports.clear = (req,res) =>
{
    ListSettings.findOneAndDelete({})
        .then(data=>{
            res.send({
                message: `List Settings were cleared successfully!`
            })
        })
        .catch(err=>{
            res.status(500).send({
                message: err.message || "Error occured while clearing List Settings."
            })
        })
};