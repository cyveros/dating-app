
export function count(state = 0, action) {
  if (action.type !== 'INCRE_COUNT' || state >= 5) {
    return state;
  }

  return (state + 1);
}

export function user(state = null, action) {
  if (action.type !== 'RAND_USER') {
    return state;
  }

  return action.user;
}

export function loading(state = false, action) {
  if (action.type !== 'LOAD') {
    return state;
  }

  return action.loading
}