import { useNavigate } from 'react-router-dom'


export default function Admin() {

  const navigate = useNavigate();
  const user = sessionStorage.getItem('user');
  const logOut = () => {
    sessionStorage.removeItem('tokenKey')
    sessionStorage.removeItem('user');
    navigate("/");
  }

  return (
    <div className='admin'> 
      {`Welcome ${user}, to the Dashboard Section`}
      <p>This application was built using serverless backend, API Gateway, Lambda(Nodejs), DynamoDb
        and React frontend hosted on AWS S3.
      </p>
      <button className="btn btn-danger" onClick={logOut}>Logout</button>
    </div>
    
  )
}
