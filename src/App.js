import './App.css';
import questions from "./database/data"
import Question from './components/Question';

function App() {


  return (
    <div className="container">
      <div className='title'>
        <h2>Questions and answers about login</h2>
      </div>
      <div className='content'>
        {questions.map(question => <Question key={question.id} question={question}/>)}
      </div>
    </div>
  );
}

export default App;
