import { useTitle } from "../Hooks/useTitle"
import { CartCard } from "../components/CartCard"
import { useSelector } from "react-redux"

export const Card = () => {
  useTitle("Card")
const cartList = useSelector((state)=>state.cartstate.cartList)
const total = useSelector((state)=>state.cartstate.total)


  return (
    <main>
      <section>
        <h1>Cart items:{cartList.length}/ ${total}</h1>
        {cartList.map((product)=>(
          <CartCard key={product.id} product={product} />
        ))}
        
      </section>
    </main>
  )
}
