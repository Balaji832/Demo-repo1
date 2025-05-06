
type param={
    params:Promise<{info:string[]}>
}
const Info = async ({params}:param) => {
    await new Promise(resolve=>{
        setTimeout(()=>resolve('intentional delay'),2000)
    })
    const {info}=await params;
  
    if(info[0]==="2"){
        return (<h3>Docs info about {info[0]} and {info[1]}</h3>)
    }else return(<h2>Return new page</h2>)
}

export default Info
