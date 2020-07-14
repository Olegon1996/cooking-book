const {Router} = require('express')
const {check, validationResult} = require('express-validator')

const Recipe = require('../schemes/recipe.schema')

const router = Router()

const handleData = (data) => {
  return data.map(recipe => ({
    id: recipe._id,
    createdDate: recipe.createdDate,
    title: recipe.title,
    image: 'data:image/png;base64,' + recipe.image,
    description: recipe.description
  }))
}

router.post(
  '/new-recipe',
  [
    check('title').exists(),
    check('description').exists(),
  ],
  async (req, res) => {

    const {title, description, image} = req.body
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(422).json({errors: errors.array()});
    }
    try {
      const foundRecipe = await Recipe.findOne({title: title})

      if (foundRecipe) return res.status(400).json({message: 'Duplicate recipe'})

      const newRecipe = new Recipe({title, description, image: image})

      await newRecipe.save()

      const recipe = await Recipe.findOne({title: title})

      res.json({message: 'Created the new Recipe', recipe: handleData([recipe])})

    } catch (e) {
      res.status(400).json({message: `Error! Something goes wrong ${e}`})
    }
  })

router.post(
  '/using:id',
  [
    check('title').exists(),
    check('description').exists(),
  ],
  async (req, res) => {

    const id = req.params.id.slice(1,)
    const {title, description} = req.body
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(422).json({errors: errors.array()});
    }

    try {
      await Recipe.findByIdAndUpdate(id, {
        title, description
      })

      const recipe = await Recipe.findById(id)

      res.json({message: `Success updated`, recipe: handleData([recipe])})
    } catch (e) {
      res.status(400).json({message: `Something goes wrong ${e}`})
    }
  })

router.get('/by:id', async (req, res) => {
  const id = req.params.id.slice(1,)

  try {
    await Recipe.findByIdAndRemove(id)

    res.json({message: `Success deleted`, id})
  } catch (e) {
    res.status(400).json({message: `Something goes wrong ${e}`})
  }
})

router.get('/all-recipes/page:number', async (req, res) => {
  const pageCount = req.params.number.slice(1,)

  try {
    const limitRecipes = await Recipe.find().sort({$natural:-1}).skip((pageCount - 1) * 5).limit(5)
    const allRecipes = await Recipe.find()

    if (!limitRecipes) return res.status(200).json({message: 'Any recipe yet'})

    res.json({recipes: handleData(limitRecipes), pages: Math.ceil(allRecipes.length / 5)})
  } catch (e) {
    res.status(400).json({message: `Something goes wrong ${e}`})
  }
})

module.exports = router