import Layout from '../components/Layout/Layout';
import Homepage from '../pages/homepage/Homepage';
import '../styles/App.scss';

function App() {
  return (
    <Layout>
      <Homepage title={"NoteThings, your task manager and TodoList"}/>
    </Layout>
  )
}

export default App
