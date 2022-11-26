import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  // get a random image from twitter-export/file-list.json and then render that image
  const [img, setImg] = useState('')

  const getRandomImage = async () => {
    const response = await fetch('/twitter-export/file-list.json')
    const json = await response.json()
    const img = json[Math.floor(Math.random() * json.length)]
    console.log(img)
    setImg(`${/twitter-export/}` + img)
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getRandomImage}>
          Random image
        </button>
      </header>
      {img && <img src={img} />}
    </div>
  );
}


  // async const randomImage = () =>  {
  //   const response = await fetch('/twitter-export/file-list.json')
  //   const json = await response.json()
  //   const randomIndex = Math.floor(Math.random() * json.length)
  //   const randomImage = json[randomIndex]
  //   console.log(randomImage)
  //   this.loading = false
  //   console.log(this.loading)
  //   return randomImage
  // }

  // return (
  //   <div className="App">
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src="/vite.svg" className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://reactjs.org" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  // //   </div>
  // )
// }

export default App
