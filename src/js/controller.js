import { async } from 'regenerator-runtime';
import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';

import searchView from './views/searchView.js';
import recipeView from './views/recipeView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';

//polifilling everything to old js version
import 'core-js/stable';
// polifilling async await
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

// from parcel
// if (module.hot) {
//   module.hot.accept();
// }

const controlRecipes = async function () {
  try {
    // to get the id in the url bar
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner(recipeContainer);

    // update results view to mark selected search  result
    resultsView.update(model.getSearchResultsPage());
    bookmarksView.update(model.state.bookmarks);

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

    // 3. Render results
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultsPage());

    // 4. Render pagination
    //  pass the results to its view so we can determine the number of pages
    paginationView.render(model.state.search);
  } catch (error) {
    throw error;
  }
};

const controlPagination = function (goToPage) {
  // 1. Render NEW results
  resultsView.render(model.getSearchResultsPage(goToPage));

  // 2. Render NEW pagination
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // update the recipe servings (in state)
  model.updateServings(newServings);

  // update the view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // add/remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // update recipe view
  recipeView.update(model.state.recipe);

  // render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    //show loading spinner
    addRecipeView.renderSpinner();

    // upload new recipe
    await model.uploadRecipe(newRecipe);

    // render the recipe
    recipeView.render(model.state.recipe);

    bookmarksView.render(model.state.bookmarks);

    // change ID in the url
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    // success message
    addRecipeView.renderMessage();

    // close the form window
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (error) {
    addRecipeView.renderError(error.message);
  }
};

// publisher subscriber pattern
const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandleRender(controlRecipes);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  recipeView.addHandlerUpdateServings(controlServings);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);

  addRecipeView.addHandlerUpload(controlAddRecipe);
};
init();
