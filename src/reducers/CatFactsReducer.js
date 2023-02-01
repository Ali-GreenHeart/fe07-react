const CatFactsReducer = (state, action) => {
    switch (action.type) {
        case 'GetFacts':
            return action.payload;
        case 'RemoveFact':
            return state.filter(({ fact }) => fact !== action.payload)
        default:
            return state;
    }
}
export default CatFactsReducer;
