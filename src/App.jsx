import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { H1 } from './components/H1'
import { Emoji } from './components/Emoji'

function App() {
  return (
  <main>
    <H1 />
    <Emoji />
  </main>
  )
}

export default App
