import { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";
export const CartConterxt = createContext(null);

export function CartConterxtProvider({ children }) {
    let [loader, setLoader] = useState(true);
    const addToCartContext = async (productId) => {
        const { data } = await axios.post(
            `http://localhost:4000/cart`,
            { productId },
            {
                headers: {
                    authorization:
                        `noor__eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjRhMjczNDhhYTk2NzZjNDY0ZDc0YzQiLCJyb2xlIjoiVXNlciIsInN0YXR1cyI6IkFjdGl2ZSIsImlhdCI6MTcxNjEzNjE5M30.htmu6z4_B_CMPhrX0wcxvV1Sq41OZlh5YxD5Qzh7l5E`,
                },
            });
        return data;
    }

    return <CartConterxt.Provider value={{ addToCartContext}}  >
        {children}
    </CartConterxt.Provider>;
}  