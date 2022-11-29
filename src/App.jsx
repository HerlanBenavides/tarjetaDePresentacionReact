import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css' 
import CardUser from './components/CardUser'


function App() {

  const [user, setUser] = useState();
  

  useEffect(() => {
    const URL = 'https://randomuser.me/api/'
    axios.get(URL)
      .then(res => setUser(res.data.results[0]))
      .catch(err => console.log(err))
  }, [])

  console.log(user);

  return (
    <div className="App">
      <div className="tdo">
        <CardUser user={user}/>
        
        </div>
      
    </div>
  )
}

export default App
