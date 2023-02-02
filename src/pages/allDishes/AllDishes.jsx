import { Box } from "@chakra-ui/react";
import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'
import CardItem from "./CartItem";
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Divider } from '@chakra-ui/react';
import { Outlet } from "react-router-dom";


const AllDishes = () => {

    const Itemdata = [
      {
          id: "1",
          image:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
          nguyenlieu: "",
          cachchebien: "scascs",
          
      },
      {
          id: "2",
          image:" ",
          nguyenlieu: "sdf",
          cachchebien: "scascs",
      },
      {
          id: "3",
          image:" ",
          nguyenlieu: "sf",
          cachchebien: "scascs",
      },
      {
          id: "4",
          image:" ",
          nguyenlieu: "dfgsd",
          cachchebien: "scascs",
      }
  ]
 
  
  
  return (

    
    <Box >
      <Grid templateColumns='repeat(5, 1fr)' gap={6}>
      {Itemdata.map((item,index) => {
        return (
          <CardItem
            key={index} data={item}
          />
          )
        })}
        </Grid>
  </Box>
  )
};

export default AllDishes;
