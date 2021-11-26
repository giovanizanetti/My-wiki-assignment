import { DELETE_ARTICLES, SAVE_ARTICLES } from '../config/constants'

const initialState = {
  articles: [],
}

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    // case SET_SUGGESTIONS:
    //   console.log('REDUCER: ', action)
    //   return {
    //     ...state,
    //     suggestions: [...action.payload],
    //   }
    case DELETE_ARTICLES:
      return {
        ...state,
        articles: state.articles.filter((article) => article.pageid !== action.payload),
      }
    case SAVE_ARTICLES:
      return {
        ...state,
        articles: [...state.articles, ...action.payload],
      }
    default:
      return state
  }
}
