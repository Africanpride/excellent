import Heading from "./components/Heading";

// Inside "pages/users.js"
export default function Users( {data} ){
    return (

        <>
        <Heading />
        <div>
            <h1>List of Users</h1>
            <ul>
                {data.map((user,index)=>{
                    return <li key={index}>Id : {user.id} , 
                     Name : {user.name} , Email : {user.email}
                 </li>   
                })}
            </ul>
        </div>
                </>
    )
}
  
export async function getServerSideProps() {
      
    // Fetching data
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json() ;
  
    // Passing data to the Product Page using props
    return {
        props : {data}
    }
}