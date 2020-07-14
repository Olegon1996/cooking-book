const {Schema, model} = require('mongoose')

const recipeSchema = new Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  image: { type: String },
  createdDate: {type: Date, default: new Date},
})

module.exports = model('Recipes', recipeSchema)