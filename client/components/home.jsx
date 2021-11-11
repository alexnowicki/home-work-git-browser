import React, {useState} from 'react'
import Head from './head'
// test
import { history } from '../redux'

const Home = () => {
  const [value, setValue] = useState('')
  const onChange = (e) => {
    console.log(value)
    setValue(e.target.value)
  }
  const onClick = () => {
    history.push(`/${value}`)
  }
return (
  <div className='flex justify-center items-center'>
    <Head title="Welcome" />
    <div className='flex flex-col bg-blue-100 rounded-lg border m-2 p-4 space-y-2'>
      <input
        className='rounded p-2'
        type="text"
        id="input-field"
        onChange={onChange}
        value={value}
      />
      <button
      className='shadow-lg border bg-white rounded-full p-2'
      type="button"
      id="search-button"
      onClick={onClick}
      >
        Go
      </button>
    </div>
  </div>
  )
}

Home.propTypes = {}

export default Home
