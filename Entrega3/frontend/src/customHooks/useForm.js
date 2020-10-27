import { useState } from 'react'

const useForm = (initialState, action, validateFunction) => {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})

  const handleChange = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    setErrors(validateFunction(values))
    if (Object.keys(errors).length === 0) {
      action(values)
    }
  }

  return { handleChange, handleSubmit, errors }
}

export default useForm
