function authReducer(state = { signedIn: false }, action) {
    switch(action.type) {
      case 'SIGNIN':
        return { ...state, signedIn: action.payload };
      default:
        return state;
    }
  }
  
  export default authReducer;
  