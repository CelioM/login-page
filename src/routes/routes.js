import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Menu from '../pages/menu/menu';
import Login from '../pages/login/login';


function PageRots() { 
    return(
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Menu/>}/>
                    <Route path='/cadastrar' element={<Login/>}/>
                </Routes>
            </Router>
        </div>
                
            
    );
}
export default PageRots;