export const handleChange = (e, state, setState) => {
  setState({ ...state, [e.target.name]: e.target.value })
}

export const handleSubmit = (e, action, values, dispatch) => {
  e.preventDefault()
  dispatch(action(values))
}
