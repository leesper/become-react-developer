import * as ReadableAPI from '../ReadableAPI'

export const CATEGORIES_REQUEST = "CATEGORY_REQUEST";
export const categoriesRequest = () => ({type: CATEGORIES_REQUEST});

export const CATEGORIES_SUCCESS = "CATEGORY_SUCCESS";
export const categoriesSuccess = (categories) => ({type: CATEGORIES_SUCCESS, categories});

export const CATEGORIES_FAILURE = "CATEGORY_FAILURE";
export const categoriesFailure = (err) => ({type: CATEGORIES_FAILURE, err});

export const fetchCategories = () => (dispatch => {
  dispatch(categoriesRequest());
  ReadableAPI.getAllCategories()
  .then(
    rsp => rsp.json(),
    err => dispatch(categoriesFailure(err))
  )
  .then(categories => dispatch(categoriesSuccess(categories)));
});

export const CATEGORY_CHANGE = "CATEGORY_CHANGE";
export const categoryChange = (category) => ({type: CATEGORY_CHANGE, category});
