import { Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";
import { Link } from 'react-router-dom';

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);

  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img src={item.imgUrl} alt={item.name} style={{ width: "125px", height: "75px", objectFit: "cover" }} />
      <div className="me-auto">
        <div>
          {item.name} {quantity > 1 && <span className="text-muted" style={{ fontSize: ".65rem" }}>x {quantity}</span>}
        </div>
        <div className="text-muted" style={{ fontSize: "0.75rem" }}>
          {formatCurrency(quantity * item.price)}
        </div>
      </div>
   <div className='d-flex flex-column justify-content-between'> 
  
   <Link to="/contact">
          <Button variant="outline-success" size="sm">
            Check Out
          </Button>
        </Link>
        <div className="m-2"><Button variant="outline-danger" size="sm" onClick={()=> removeFromCart(item.id)}>remove from cart</Button></div>
</div>

    </Stack>
  );
}