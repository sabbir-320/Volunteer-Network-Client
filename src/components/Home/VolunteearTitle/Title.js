import React from 'react'
import { useHistory } from 'react-router-dom'
// import { Link } from 'react-router-dom'
export default function Title (){
    const history = useHistory()
    const handlebtn = () => {
        history.push('/register')
    }
    return(
        <div>
            <button onClick={handlebtn}>Go to register</button>
            {/* <Link to='/register'>
            <button>Education</button>
            </Link> */}
        </div>
    )
}