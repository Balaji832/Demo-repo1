import React,{useEffect, useRef} from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchterm}=useGlobalContext()
  const inputData=useRef('');
  useEffect(()=>{
    inputData.current.focus()
  },[])
  const searchCocktail=(e)=>{
    setSearchterm(inputData.current.value)
  }
  const submitHandler=(e)=>{
    e.preventDefault();
  }
  return (
    <section className='section search'> 
      <form className='search-form' onSubmit={submitHandler}>
        <div className='form-control'>
          <label htmlFor='inputtag'>Search your favourite cocktail</label>
          <input type='text' id="inputtag" name="name" ref={inputData} onChange={searchCocktail}></input>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
