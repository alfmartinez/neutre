const reducers = (state = '', action) => {
  switch(action.type) {
    case 'STATUS':
      const {message} = action;
      return message;
    default:
    return state;
  }
}

export default reducers;
