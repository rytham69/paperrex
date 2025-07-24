import { useRef } from 'react';
import Nav from './components/Nav';
import Mainroutes from './routes/Mainroutes';
function App() {
   const containerRef = useRef(null)


  return (
    <>
    <Nav containerRef={containerRef}/>
    <div ref={containerRef} className="container relative will-change-transform origin-top-right z-0">
      <Mainroutes/>
    </div>
    </>
  )
}

export default App
