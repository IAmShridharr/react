import { useState } from "react"
import ColorButton from "./components/ColorButton"

function App() {

  const [color, setColor] = useState('black')

  const handleColor = (updatedColor) => {
    setColor(updatedColor)
  }

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>

      <div className="w-full flex flex-wrap justify-center align-middle">
        <p className="text-3xl font-bold mt-5">Background Changer</p>
      </div>

      <div className="fixed flex flex-wrap justify-center bottom-12 mb-5 px-2 inset-x-0">
        <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <ColorButton color="red" buttonText="Red" changeColor={handleColor} />
          <ColorButton color="green" buttonText="Green" changeColor={handleColor} />
          <ColorButton color="blue" buttonText="Blue" changeColor={handleColor} />
          <ColorButton color="yellow" buttonText="Yellow" changeColor={handleColor} />
          <ColorButton color="olive" buttonText="Olive" changeColor={handleColor} />
          <ColorButton color="black" buttonText="Black" changeColor={handleColor} />
        </div>
      </div>

      
    </div>
  )
}

export default App
