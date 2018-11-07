
export function getRandUser() {
  return async (dispatch) => {
    dispatch({
      type: 'LOAD',
      loading: true
    });

    let response = await fetch('https://randomuser.me/api');

    let result = await response.json();

    dispatch({
      type: 'RAND_USER',
      user: result.results[0]
    });

    dispatch({
      type: 'LOAD',
      loading: false
    });
  }
}

export function confirm() {
  return {
    type: 'INCRE_COUNT'
  }
}