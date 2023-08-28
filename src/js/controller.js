import { async } from 'regenerator-runtime';
import * as model from './model.js';

import recipeView from './views/recipeView.js';
import resultsView from './views/resultsView.js';

//polifilling everything to old js version
import 'core-js/stable';
// polifilling async await
import 'regenerator-runtime/runtime';
import searchView from './views/searchView.js';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

// from parcel
if (module.hot) {
  module.hot.accept();
}

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
    recipeView.renderError();
  }
};

controlRecipes();

const controlSearchResults = async function () {
  try {
    // 1. Get search query
    const query = searchView.getQuery();
    if (!query) return;
    resultsView.renderSpinner();

    // 2. Load search results
    await model.loadSearchResults(query);

    console.log(model.state.search.results);
    resultsView.render(model.state.search.results);
  } catch (error) {
    throw error;
  }
};

// publisher subscriber pattern
const init = function () {
  recipeView.addHandleRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
