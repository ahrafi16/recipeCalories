import './App.css'
import Banner from './Components/Banner/Banner'
import Header from './Components/Header/Header'
import Recipes from './Components/Recipies/Recipes'

function App() {

  return (
    <>
      <header className='container mx-auto my-2'>
        <Header></Header>
      </header>
      <main className='container mx-auto my-2'>
        <Banner></Banner>
        <Recipes></Recipes>
      </main>
    </>
  )
}

export default App
