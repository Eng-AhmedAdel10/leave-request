const reducer = (state, action) => {
  if (action.type === 'HANDLE_SIDEBAR')
    return { ...state, sidebar: !state.sidebar }
  if (action.type === 'HANDLE_DROPDOWN') {
    return { ...state, dropdown: !state.dropdown }
  }
  if (action.type === 'HANDLE_CHANGE') {
    return { ...state, data: action.payload }
  }
  if (action.type === 'HANDLE_SUBMIT') {
    return {
      ...state,
      list: [...state.list, action.payload.data],
      data: action.payload.initData,
    }
  }
  if (action.type === 'HANDLE_ALERT') {
    return {
      ...state,
      alert: {
        show: true,
        msg: action.payload.msg,
        state: action.payload.state,
      },
    }
  }
  if (action.type === 'REMOVE_ALERT') {
    return {
      ...state,
      alert: { show: false, msg: '', state: '' },
    }
  }
  if (action.type === 'HANDLE_ID') {
    return {
      ...state,
      id: action.payload,
    }
  }
  if (action.type === 'REMOVE_ITEM') {
    return {
      ...state,
      list: state.list.filter((item) => item.id !== state.id),
      id: null,
    }
  }
  if (action.type === 'HANDLE_EDIT') {
    return {
      ...state,
      data: state.list.find((item) => item.id === state.id),
    }
  }
  if (action.type === 'SUBMIT_EDIT') {
    return {
      ...state,
      list: state.list.map((item) => {
        if (item.id === state.id) {
          return state.data
        } else {
          return item
        }
      }),
      data: action.payload,
      id: null,
    }
  }
  if (action.type === 'ADD_REQUEST') {
    return {
      ...state,
      id: null,
      data: action.payload,
    }
  }
  if (action.type === 'HANDLE_CANCEL') {
    return {
      ...state,
      data: action.payload,
    }
  }
  if (action.type === 'HANDLE_SEARCH') {
    return {
      ...state,
      search: action.payload,
      search_result: state.list.filter((item) => {
        if (!action.payload.trim().length) {
          return false
        } else if (
          item.name.toLowerCase().includes(action.payload.toLowerCase()) ||
          item.id === +action.payload ||
          item.job_title.toLowerCase().includes(action.payload.toLowerCase())
        ) {
          return item
        }
      }),
    }
  }
  if (action.type === 'SELECT_ITEM_FROM_SEARCH') {
    return {
      ...state,
      item_selected_from_search: state.search_result.find(
        (item) => item.id === action.payload
      ),
      search: '',
      search_result: [],
    }
  }
  if (action.type === 'CLEAR_SEARCH') {
    return {
      ...state,
      item_selected_from_search: action.payload,
    }
  }
  return {
    ...state,
  }
}
export default reducer
