import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Divider } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react'
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import AllDishes from "./AllDishes";
import { NavLink, useNavigate } from "react-router-dom";


const CardItem = ({ data }) => {
    const navigate = useNavigate({ data });
   
    return (
        <Card maxW='sm' onClick={() => navigate(data.id)}>
  <CardBody  >
    <Image
      src= {data.image}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
                    <Heading size='md'>
                        {data.cachchebien}
                    </Heading>
      <Text>
        {data.nguyenlieu}
        
      </Text>
    </Stack>
  </CardBody>
  
</Card>
        
    )
}
export default CardItem;