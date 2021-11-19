import './App.css';
import {useEffect, useState} from "react";
import Section from "./components/Section";
import {marked} from "marked";
import Prism from "prismjs"
import 'prismjs/themes/prism.css'
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import ToolBar from "./components/ToolBar";

marked.setOptions({
  breaks: true,
  highlight: function (code){
    return Prism.highlight(code, Prism.languages.javascript, 'javascript')
  }
})

const placeHolder = `# Hello World!!!
------
\`\`\`
  function reactIsFun(firstLine, lastLine) {
  if (firstLine == 'javascript') {
    return multiLineCode;
  }
}
\`\`\`
`

function App() {
  const [text, setText] = useState(placeHolder)
  const [markedText, setMarkedText] = useState('')

  const handleChange = ({target: {value}}) => {
    setText(value)
  }

  useEffect(() =>{
    setMarkedText(marked.parse(text))
  }, [text, markedText])

  return (
    <div className="App">
      <main className="App-header">
        <Section>
          <ToolBar/>
          <Editor
            handleChange={handleChange}
            text={text} />
        </Section>
        <Section>
          <ToolBar />
          <Previewer markedText={markedText} />
        </Section>
      </main>
    </div>
  );
}

export default App;
