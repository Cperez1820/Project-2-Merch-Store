const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
    type: { type: String, required: true },
    color: String,
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    price: { type: Number, required: true, default: 0 }
  }, {
    timestamps: true
  })

module.exports = itemSchema  