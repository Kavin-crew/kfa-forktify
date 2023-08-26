import * as model from './model.js';

import recipeView from './views/recipeView.js';

//polifilling everything to old js version
import 'core-js/stable';
// polifilling async await
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    // to get the id in the url bar
    const id = window.location.hash.slice(1);

    if (!id) return;

    recipeView.renderSpinner(recipeContainer);

    // loading recipe from model
    await model.loadRecipe(id);

    // 2. Rendering recipe to homepage
    recipeView.render(model.state.recipe);
  } catch (error) {
    alert(error);
  }
};

controlRecipes();

['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);
// window.addEventListener('hashchange', controlRecipes);
