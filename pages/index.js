
import Link from "next/link";
import Image from "next/image";
import hero from '../assets/images/hero.jpg';
import { styled } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Property } from "../Components/Property";
import { baseUrl, fetchApi } from "../utils/apiSection";

import { Box, Typography, Button, Grid } from "@mui/material";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[900]),
  backgroundColor: grey[900],
  marginTop:"1rem",
  '&:hover': {
    backgroundColor: grey[800],
  },
}));

export default function Home({propertiesForSale, propertiesForRent}) {

console.log(propertiesForSale, propertiesForRent);

  return (
    <Box  display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Box padding="5rem" paddingTop="2rem" paddingBottom="0" display="flex" justifyContent="center" flexDirection="row" alignItems="center" >
        <Box display="flex" flex="1" flexDirection="column" alignItems="flex-start">
          <Typography fontSize="1.2rem" color="	#808080" textTransform="uppercase">Digital estate is</Typography>
          <Typography fontSize="4rem" lineHeight="1" color="	#202020" marginTop="1rem" fontWeight="bold">The real estate marketplace</Typography>
          <Typography fontSize="1rem" color="#808080" marginTop="1rem">Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit</Typography>
          <Link href="/search?purpose=for-rent" passHref>
          <ColorButton >Explore Renting</ColorButton>
          </Link>
        </Box>
        <Box display="flex" flex="1.5" marginLeft="2rem">
          <Image src={hero} alt="home" style={{borderRadius:"20px"}} />
        </Box>
      </Box>

      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 10 }} paddingRight="5rem" paddingLeft="5rem" marginTop="4rem">
        {
          propertiesForRent.map((property) => <Property property={property} key={property.id}/>)
        }
      </Grid>
    </Box>
  )
}


export async function getStaticProps(){
  const propertiesForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=8`)
  const propertiesForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=8`)

  return {
    props:{
      propertiesForSale: propertiesForSale?.hits,
      propertiesForRent: propertiesForRent?.hits,
    }
  }
}