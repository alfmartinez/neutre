export const getServerStatus = () => {
  return dispatch => {
      fetch('/api')
      .then(response => response.text())
      .then(text => dispatch(setStatus(text)));
  };
};

export const setStatus = (message) => ({
  type: 'STATUS',
  message
});
