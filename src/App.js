import './App.css'

import Data from './data.json'

const App = () => {
  return (
    <div className="App">
      <h1>Sinny's Indie Boxs</h1>
      <div>
        {Data.map((data) => {
          return (
            <div className="box" key={data.id}>
              <strong>{data.title}</strong>
              <br />
              {data.album}
              <br />
              {data.artist}
              <br />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
