const LIKE = 'LIKE'
const ADD_CARDS = 'ADD_CARDS'
const REMOVE_CARDS = 'REMOVE_CARDS'

let initialState = {
  cards: []
}

const cardsReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_CARDS:
      return {...state, cards: action.payload}
    case LIKE:
      return {
        ...state,
        cards: state.cards.map(
          card => card.id === action.payload
          ? {
            ...card,
            isLike: !card.isLike
          }: card
        )
      }
    case REMOVE_CARDS:
      return {...state, cards: state.cards.filter(card => card.id !== action.payload)}
    default:
      return state
  }
}

export const likeChanger= (payload) => ({type: LIKE, payload})

export const addCards = (payload) => ({type: ADD_CARDS, payload})

export const removeCards = (payload) => ({type: REMOVE_CARDS, payload})

export default cardsReducer;