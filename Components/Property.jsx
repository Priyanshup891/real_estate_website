import Image from "next/image";
import React from "react";



import Link from "next/link";

import {
  Card,
  CardAction,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
  Grid
} from "@mui/material";

import { grey } from "@mui/material/colors";
import millify from "millify";

export const Property = ({ property }) => {
  return (
    <Link href={`/property/${property?.externalId}`} passHref>
      <Grid item  xs={6} display="flex" >
        <Box display="flex" flex="1" flexDirection="column" alignItems="flex-start" >
          <Typography>{property?.title}</Typography>
          <Typography>{`AED ${millify(property.price)}/${property.rentFrequency}`}</Typography>
          <Box>
              
          </Box>
        </Box>
        <Box display="flex" flex="1" marginLeft="1rem">
          <Image src={property?.coverPhoto?.url} width={600} height={400} alt="property"/>
        </Box>
      </Grid>
    </Link>
  );
};
