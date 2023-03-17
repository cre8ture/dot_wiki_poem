import './App.css'
// import DisplayText from './components/displayPoem'
import PoemInputs from './components/poemInputOptions'

export default function App() {
  return (
    <div className="bg-black min-h-screen"> 
      
      <div className='App-header '>
    <h1 className="text-3xl text-green-500 font-bold place-items-center">
      Auto Poem!
    </h1>
    </div>


< div className="text-green-500"></div>
<br></br>
<PoemInputs />
{/* <DisplayText/> */}

  </div>
  )
}