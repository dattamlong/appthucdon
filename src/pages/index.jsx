import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import SimpleSidebar from "../components/sidebar/sidebar";

const Page = () => {
  return (
    <Grid
      templateAreas={`
                  "nav main"
                  `}
      gridTemplateColumns={"240px "}
      h="100vh"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem bg="pink.300" area={"nav"}>
        <SimpleSidebar />
      </GridItem>
      <GridItem pl="2" bg="green.300" area={"main"}>
        Main
      </GridItem>
    </Grid>
  );
};

export default Page;
