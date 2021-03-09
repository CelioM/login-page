import React, {useState} from 'react'
import './login.css'
import Header from '../../components/header/header'


function Login() {
    
    const [data, setData] = useState({});
    function saveFormData(event) {
        data[event.target.name] = event.target.value;
        setData(data);
        console.log(data) 
    };
    function submit(event) {
        event.preventDefault(); 
        return data;
    }
    



    return(
        <div className='form-container'>
            <Header/>
            <div className='form-area'>
                <div className='form-block-container'>
                    <form action='../../service/server.js' className='form' method='POST' onSubmit={submit} >
                        <div className='username'>
                            <label className="firstname" htmlFor='firstname'>nome</label>
                            <input onChange={saveFormData} required type='string' name='firstName' className='firstname'/>
                            <label className='lastName' htmlFor='lastName'>ultimo nome</label>
                            <input onChange={saveFormData} required type='string' className='lastName' name='lastName'/>
                        </div>
                        <div className='email-user'>
                            <label htmlFor='email' className='email'>email </label>
                            <input onChange={saveFormData} name='email' type='email' required/>
                            <label htmlFor='password' className='password'>senha</label>
                            <input autocomplet='off' onChange={saveFormData} required type='password' name='password' className='senha'/>
                           
                        </div>
                        <div className='submit-input-block'>
                            <button   className='submit-button' type='submit'>cadastrar</button>
                        </div>
                    </form>
                
                </div>
            </div>
        </div>
    );

}
export default Login