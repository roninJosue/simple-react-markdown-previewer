import './App.css';
import {useEffect, useState} from "react";
import Section from "./components/Section";
import {marked} from "marked";

function App() {
  const [text, setText] = useState('')
  const [markedText, setMarkedText] = useState('')

  const handleChange = (val) =>{
    console.log(marked.parse(val))
    setMarkedText(marked.parse(val))
  }

  useEffect(() => {
    document.getElementById('previewer').innerHTML = markedText
  }, [markedText])

  return (
    <div className="App">
      <main className="App-header">
        <Section>
          <textarea
            name="editor"
            id="editor"
            onChange={({target}) => {
              handleChange(target.value)
              setText(target.value)
            }}
          ></textarea>
        </Section>
        <section className='section' id='previewer'>
        </section>
      </main>
    </div>
  );
}

export default App;
