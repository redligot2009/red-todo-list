var mongoose = require("mongoose");

var itemSchema = new mongoose.Schema(
    {
        itemTitle: String,
        itemDescription: String,
        checked: Boolean
    },
    {timeStamps:true}
);

itemSchema.method("toJSON", function(){
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = mongoose.model('Item',itemSchema);