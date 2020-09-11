import type from './type'

const userInitial = {
  nickName:'',
  email:'',
  isLogin:false
}

export default (state = userInitial, action) => {
  switch (action.type) {
    case type.set:
      return { ...state, ...action.value }
    default:
      return state
  }
}
