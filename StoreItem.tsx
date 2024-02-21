import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
import { Container, Card, Button } from "react-bootstrap"

type StoreItemProps = {
  
  id: number
  name: string
price:number
imgUrl:string
}
export function StoreItem({ id, name, price, imgUrl }:
   StoreItemProps) {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart() 
    const quantity = getItemQuantity(id);
    const handleDecrease = () => {
      decreaseCartQuantity(id);
    };
    const handleIncrease= () => {
      increaseCartQuantity(id);
    };
return (<>
<Container className="d-flex  ">
<Card className="h-100 mx-auto" style={{ width: '300px' }}>
<Card.Img variant="top" 
src={imgUrl}
 height="300px"
 style={{ objectFit: "cover"}} />

  <Card.Title className="d-flex
  justify-content-between align-items-baseline
  mb-4">
    <span className="fs-2">{name}</span>
    <span className="ms-2 text-muted">{formatCurrency(price)}</span>
  </Card.Title>
 
   <div className="mt-auto">
        {quantity === 0 ? (
          <Button className="w-100" onClick={handleIncrease}>
            + Add To Cart
          </Button>
        ) : (
          <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
            <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
              <Button onClick={handleDecrease}>-</Button>
              <div>
                <span className="fs-3">{quantity}</span> in cart
              </div>
              <Button onClick={handleIncrease}>+</Button>
            </div>
            <Button onClick={() => removeFromCart(id)} variant="danger" size="sm">
              Remove
            </Button>
          </div>
        )}
      </div>
  
    </Card>
    
    </Container>
    </>
)
  
}

export default StoreItem