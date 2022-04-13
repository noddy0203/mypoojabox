import React, { useEffect, useState } from 'react'
import axios from "axios"

// react mui
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

const Product = () => {
  const [items, setItems] = useState([])
  const getItem = async () => {
    const res = await axios.get("https://fakestoreapi.com/products")
    setItems(res.data)
    console.log(res);
  }
  useEffect(() => {
    getItem()
  }, [])
  console.log(items)
  return (
    <>

    <div className='container_div'>
      <h4 className='products_heading'>Products</h4>
      <div className="row">
        {
          items.map((Product, index)=>{
            return (
              <div className="card" key={index}>
              <img className='product_img' src={Product.image} alt="" />
              <p className='product_title'>{Product.title.slice(0,20)}</p>
              <p className='price_space'>{Product.price}</p>
              <p className='add_cart'>Add To Cart</p>
            </div>
            )
          })
        }
      </div>
    </div>




      {/* <div style={{position:"absolute", top:"100%"}}>
        <h5>Products</h5>
        <div>
          {
            items.map((Product, index) => {
              return (
                <Card key={index} sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={Product.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {Product.category}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
              )
            })
          }
        </div>
      </div> */}
    </>
  )
}

export default Product