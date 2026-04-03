import Dashboard from './pages/Dashboard';

function App() {
  const pagina = 1;
  return (
    <>
      {pagina == 1 && <Dashboard/>}
    </>
    
  )
}

export default App;