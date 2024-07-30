import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Box,
  Typography,
  Card,
} from "@mui/material";
import { Add, Remove, Delete, ErrorOutline } from "@mui/icons-material";
import { removeFromCart } from "../../Store/slices/cart.Slice";

const Cart = () => {
  const data = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (id) => {
   
  };

  const handleDecreaseQuantity = (id) => {
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Box className="cart-page">
      {data?.length > 0 ? (
        <>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Item Number</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Total Price</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <img
                      src={product.image}
                      alt={product.title}
                      style={{ width: 100, height: 100 }}
                    />
                  </TableCell>
                  <TableCell>{product.title}</TableCell>
                  <TableCell>{Math.floor(Math.random() * 10000)}</TableCell>
                  <TableCell>${product.price.toFixed(2)}</TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => handleDecreaseQuantity(product.id)}
                    >
                      <Remove />
                    </IconButton>
                    {product.quantity}
                    <IconButton
                      onClick={() => handleIncreaseQuantity(product.id)}
                    >
                      <Add />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    $
                  </TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => handleRemoveFromCart(product.id)}
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
     
        </>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={10}
        >
          <ErrorOutline fontSize="large" />
          <Typography variant="h6">Your cart is currently empty!</Typography>
        </Box>
      )}
    </Box>
  );
};

export default Cart;
