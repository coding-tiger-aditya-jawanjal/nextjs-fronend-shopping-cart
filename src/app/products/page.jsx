import Product from "../components/Product";


const Products = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json();
    
  return (
    <div className="flex flex-wrap p-5 justify-center">
      {
        data.map((e)=>{
          return(
            <Product key={e.id} item={e}/>
          )
        })
      }
    </div>
  )
}

export default Products
