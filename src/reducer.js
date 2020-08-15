const Reducer = (state = 0, {type}) => {
    switch (type) {
      case 'INC':
        return state + 1;
      case 'DEC':
        return state - 1;
      case 'RES':
        return state = 0;
  
      default:
        return state;
    }
};
export default Reducer;