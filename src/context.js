import React, { useContext, useReducer, useEffect } from 'react'
import reducer from './reducer'
import { useHistory } from 'react-router-dom'
const AppContext = React.createContext()
const initData = {
  leave_to_avail: 'local',
  require_leave_salary_advance: 'no',
  expected_leaving_date: '',
  expected_rejoining_date: '',
  leave_type: '',
  num_of_days: '',
  guarantor: 'guarantor1',
  replacement: 'replacement1',
  address: '',
  contact_no: '',
  email: '',
  remarks: '',
  attachments: '',
  job_title: '',
  salary_profile: '',
  joining_date: '',
  location: '',
  name: '',
  image: '/images/avatar.png',
}
const AppProvider = ({ children }) => {
  const history = useHistory()
  const initState = {
    sidebar: false,
    dropdown: false,
    id: null,
    list: JSON.parse(localStorage.getItem('list')) || [],
    data: initData,
    alert: { show: false, msg: '', state: '' },
    search: '',
    search_result: [],
    item_selected_from_search: initData,
  }

  const [state, dispatch] = useReducer(reducer, initState)

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(state.list))
  }, [state.list])

  const handleSidebar = () => {
    dispatch({ type: 'HANDLE_SIDEBAR' })
  }

  const handleDropdown = () => {
    dispatch({ type: 'HANDLE_DROPDOWN' })
  }

  const handleChange = (e) => {
    dispatch({
      type: 'HANDLE_CHANGE',
      payload: { ...state.data, [e.target.name]: e.target.value },
    })
  }

  const handleAlert = (msg, state) => {
    dispatch({
      type: 'HANDLE_ALERT',
      payload: { msg, state },
    })
    const removeAlert = setTimeout(() => {
      dispatch({ type: 'REMOVE_ALERT' })
    }, 3000)
    return () => clearTimeout(removeAlert)
  }

  const validateInputs = () => {
    const {
      expected_leaving_date,
      expected_rejoining_date,
      leave_type,
      num_of_days,
      address,
      contact_no,
      email,
      remarks,
      job_title,
      salary_profile,
      joining_date,
      location,
      name,
    } = state.data
    if (
      !expected_leaving_date ||
      !expected_rejoining_date ||
      !leave_type ||
      !name ||
      !num_of_days ||
      !address ||
      !contact_no ||
      !email ||
      !remarks ||
      !job_title ||
      !salary_profile ||
      !joining_date ||
      !location
    ) {
      return false
    } else {
      return true
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateInputs()) {
      handleAlert('please fill all fields', 'error')
    } else {
      let id = 0
      if (state.list.length > 0) {
        id = state.list[state.list.length - 1].id + 1
      }
      state.data.id = id
      dispatch({
        type: 'HANDLE_SUBMIT',
        payload: { data: state.data, initData },
      })
      handleAlert('request is added', 'success')
      history.push('/manage')
    }
  }

  const handleId = (id) => {
    dispatch({ type: 'HANDLE_ID', payload: id })
  }

  const removeItem = () => {
    if (state.id === null) {
      handleAlert('please select item to remove', 'error')
      return
    }
    dispatch({ type: 'REMOVE_ITEM' })
    handleAlert('Item removed', 'success')
  }

  const handleEdit = () => {
    if (state.id === null) {
      handleAlert('please select item to edit', 'error')
      return
    }
    dispatch({ type: 'HANDLE_EDIT' })
    history.push('/')
  }

  const submitEdit = (e) => {
    e.preventDefault()
    if (!validateInputs()) {
      handleAlert('please fill all fields to edit request ', 'error')
    } else {
      dispatch({ type: 'SUBMIT_EDIT', payload: initData })
      handleAlert('request is edited successfully', 'success')
      history.push('/manage')
    }
  }

  const handleAddReq = () => {
    dispatch({ type: 'ADD_REQUEST', payload: initData })
    history.push('/')
  }

  const handleCancel = (e) => {
    e.preventDefault()
    dispatch({ type: 'HANDLE_CANCEL', payload: initData })
  }

  const handleSearch = (e) => {
    dispatch({ type: 'HANDLE_SEARCH', payload: e.target.value })
  }

  const selectItemFromSearch = (id) => {
    dispatch({ type: 'SELECT_ITEM_FROM_SEARCH', payload: id })
  }

  const clearSearch = () => {
    dispatch({ type: 'CLEAR_SEARCH', payload: initData })
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleSidebar,
        handleDropdown,
        handleChange,
        handleSubmit,
        handleId,
        removeItem,
        handleEdit,
        submitEdit,
        handleAddReq,
        handleCancel,
        selectItemFromSearch,
        handleSearch,
        clearSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlopalContext = () => {
  return useContext(AppContext)
}

export default AppProvider
