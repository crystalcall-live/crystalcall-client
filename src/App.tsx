import useDocumentTitle from './hooks/useDocumentTitle';
import RoutesContainer from './routes';

function App() {
  useDocumentTitle();

  return (
    <>
      <RoutesContainer />
    </>
  );
}

export default App;
