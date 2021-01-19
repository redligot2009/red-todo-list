var mongoose = require("mongoose");

var listSettingsSchema = new mongoose.Schema(
    {
        listTitle: String,
        listDescription: String
    },
    {timeStamps:true}
);

listSettingsSchema.method("toJSON", function(){
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = mongoose.model('ListSettings',listSettingsSchema);