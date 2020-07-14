const url = 'http://localhost:5050/'

export const fetchingRecipes = async ({value}) => {
  try {
    const response = await fetch(url + `view-all/all-recipes/page:${value}`, {
      method: 'GET'
    })
    const data = await response.json()
    return data
  } catch (e) {
    return e
  }
}

export const fetchingCreateRecipe = async ({recipe}) => {
  try {
    const response = await fetch(url + 'create/new-recipe', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: recipe.title,
        description: recipe.description,
        image: recipe.image
      })
    })
    const data = await response.json()
    if(data.message === 'Duplicate recipe') throw new Error(data.message)
    return data
  } catch (e) {
    throw e
  }
}

export const fetchingEditRecipe = async ({payload: {recipe: {title, description}, id}}) => {
  try {
    const response = await fetch(url + `update/using:${id}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
      })
    })
    const data = await response.json()
    return data
  } catch (e) {
    throw e
  }
}

export const fetchingDeleteRecipe = async ({id}) => {
  try {
    const response = await fetch(url + `delete/by:${id}`, {
      method: 'GET',
    })
    const data = await response.json()
    return data
  } catch (e) {
    throw e
  }
}