import Layout from '../components/Layout/Layout';
import Homepage from '../pages/homepage/Homepage';
import '../styles/App.scss';
import { DispatcherProvider } from '../utils/DispatcherContext';

function App() {
  return (
    <DispatcherProvider>
    <Layout>
      <Homepage title={"NoteThings, your task manager and TodoList"}/>
    </Layout>
    </DispatcherProvider>
  )
}

export default App
