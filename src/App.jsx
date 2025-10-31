
import './App.css'
import Bloges from './componants/Bloges/Bloges'
import Bookmsrks from './componants/Bookmarks/Bookmsrks'
import Header from './componants/Header/Header'

function App() {
  

  return (
    <>
      <Header></Header>
      <div className='md:flex'>
        <Bloges></Bloges>
        <Bookmsrks></Bookmsrks>
      </div>
    </>
  )
}

export default App
