import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {


  let myObj = {
    name: 'Garfield',
    address: {
      city: 'Bikini Bottom',
      state: 'Indiana',
      country: 'United States',
    }
  }

  let newInfo = [1, 2, 3, 4, 5]


  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'
      >Vite with Tailwind</h1>
      <Card username="boof" />
      <Card username="miranda" post="CEO" />
      <Card   />
    </>
  )
}

export default App
