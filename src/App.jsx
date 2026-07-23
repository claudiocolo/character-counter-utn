import { useState } from 'react'
import { Header } from './components/Header' 

const App = () => {
  const [text, setText] = useState("Esto es un texto de prueba, puedes borrarlo, modificarlo o comprobar que la app esta funcionando correctamente.")

  const [excludeSpaces, setExcludeSpaces] = useState(false)
  const [limitCharacter, setLimitCharacter] = useState(false)
  const [limitValue, setLimit] = useState (200)

  const characters = excludeSpaces ? text.replace(/\s/g, "").length : text.length

  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length

  const sentences = text.trim() === "" ? 0 : text.split(/[.!?]/).filter(sentence => sentence.trim() !== "").length

  const handleChangeTextarea = (e) => {
    const value = e.target.value

    if (limitCharacter){
      if (value.length <= limitValue){
        setText(value)
      }
    } else {
      setText(value)
    }
  }

  const handleChangeInputLimit = (e) => {
    setLimitCharacter(!limitCharacter)
    const newText = text.slice(0, limitValue)
    setText(newText)
  }

  return (
    <main>
      <Header />
      <h2>Analyze your text <br />
      in realt-time</h2>

      <textarea
      placeholder=''
      onChange={handleChangeTextarea}
      value={text}>
      </textarea>

      <div>
        <label>
          <input
          type="checkbox"
          checked={excludeSpaces}
          onChange={() => setExcludeSpaces(!excludeSpaces)}
          />
          Exclude Spaces
        </label>
        <label>
          <input
          type="checkbox"
          checked={limitCharacter}
          onChange={handleChangeInputLimit}
          />
          Character Limit
        </label>
        {limitCharacter && <input
        type="number"
        value={limitValue}
        onChange={(e) => setLimit(e.target.value)}
        />}
      </div>
      <p>Cantidad de caracteres: {characters}</p>
      <p>Cantidad de palabras: {words}</p>
      <p>Cantidad de oraciones: {sentences}</p>
    </main>
  )
}

export { App }