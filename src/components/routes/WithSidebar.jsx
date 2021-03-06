import React from "react";
import { Sidenav } from "components";
import { Outlet } from "react-router";
import { Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import { Follow } from "features";

export function WithSidebar(){
  return (  
    <Grid templateColumns='repeat(5, 1fr)' gap={4} px="3rem" minH="90vh">
    <Sidenav />
        <GridItem colSpan={3} borderRight='1px' borderLeft='1px' 
        borderColor={useColorModeValue('gray.200','gray.600')} p={5}>
            <Outlet/>
        </GridItem>
    <Follow />
    </Grid>
  );
};
