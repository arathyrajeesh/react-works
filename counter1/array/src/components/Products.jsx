import { useEffect } from "react"





const Products = (props) =>{

    const { data } =props

    useEffect(()=>{
        console.log(data,'data')
    },[])
    return(
        <div>{
            data.map(item =><h6> {item.title} </h6>)
            }
        </div>
    )
}
export default Products