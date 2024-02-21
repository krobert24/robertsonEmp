import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { Home }  from './pages/Home'
import { Contact } from './pages/Contact'
import { Routes, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Layout from './components/Layout';
import { NavBar } from './components/NavBar'
import { Store } from './pages/Store'
import { Features } from "./pages/Features"


function App() {
 
  return (
    <>
    <ShoppingCartProvider>
    <NavBar />
    <Container fluid className='m-4'>
      <Routes>
        <Route path='/' element={ <Layout>
                  <Home />
                </Layout>} />
        <Route path='/store' element={<Layout><Store/></Layout>} />
        
       
        <Route path='/contact' element={<Layout><Contact /></Layout>} />
        <Route path='/features' element={<Layout><Features /></Layout>} />
        </Routes></Container>
        </ShoppingCartProvider>
    
    
  
    </>
  )
}

export default App
