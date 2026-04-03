import React, { useRef ,useState} from 'react'

const Uncontrolled = () => {
    const usernameref =useRef();
    const emailref=useRef();
    const passwordref=useRef();

    const [formdata,setFormdata]=useState(null);
    const [error,setError]=useState({});
    function handleSubmit(e){
        e.preventDefault();

        const username=usernameref.current.value;
        const email =emailref.current.value;
        const password= passwordref.current.value;

       let newErrors={};

       if(!username){
            newErrors.username="Username is required";
       }

       if(!email){
           newErrors.email="Email is rquired";
       }
       else if (!/\S+@\S+\.\S+/.test(email)){
         newErrors.email ="Invalid Email";
       } 
       
       if(!password){
         newErrors.password="password is required"
       }
       setError(newErrors);

       if(Object.keys(newErrors).length ===0){
               setFormdata({username,email,password});
               alert("Form Submitted");
       }
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" ref={usernameref}/>
        {error.username && <p>{error.username}</p>}
        <br />
        <input type="email" placeholder="email" ref={emailref}/>
        {error.email && <p>{error.email}</p>}
        <br />
        <input type="password" placeholder='password' ref={passwordref} />
          {error.password && <p>{error.password}</p>}
          <br />
        <button type="submit">Submit</button>


    </form>

     {formdata && (
         <div>
            <h1>Submitted data: </h1>
             <p>{formdata.username}</p>
             <p>{formdata.email}</p>
             <p>{formdata.password}</p>
         </div>
     )}

    </>
    
  )
}

export default Uncontrolled