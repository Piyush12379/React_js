


useEffect(()=>{
    
    //get using fetch and axios
    fetch(URL)
    then((res)=>res.json)
    .then((data)=>console.log(data))


    axios.get(url)
    .then((data)=>console.log(data))

    //POST using 

    fetch(URL,{
        method:"POST",
        header:{
            "content-type":"application/json"
        },
        body:{
            title:"www",
            content:"hwllo",
            id:2
        }
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
    .then(err=>console.error(err))


    axios.post(url,{
        title:"hello",
        content:"hdj",
        id:1,
    }).then(data=>console.log(data))




    //PUT

    fetch(URL,{
        method:"PUT",
        header:{
            "content-type":"application/json"
        },
        body:{
             title:"react",
             content:"hello world",
             id:8
        }
    })
    .then(res=>res.json())
    .then(data=>console.log(data));


    axios.put(url,{
        title:"react",
        content:"hello",
        id:6  
    })
 

    fetch(url,{
        method:"DELETE"
    })
    .then()
    

    


    






},[])