import React from 'react'; 
import { graphql } from 'gatsby'; 
//import { GatsbyImage, getImage } from "gatsby-plugin-image"; 

import Layout from '../../components/layout/Layout';
// import { Img } from 'gatsby-image';
import { Heading, Text, Divider } from '@chakra-ui/react'

export default function City({ data }) {
  //console.log(data); 
  //const image = getImage(data.contentfulCity.skylineImage)
  //console.log(image);
  return (
    <Layout>
      <Heading>
      {data.contentfulCity.name}
      </Heading> 

      <Text fontSize="xl">
          {data.contentfulCity.description}
      </Text>

      <Text fontSize="md">
          {data.contentfulCity.coordinates.lat}, {data.contentfulCity.coordinates.lon}
      </Text>

      <Divider/>

      <Text>
        ToDo: figure out how to use gatsby-plugin-image to have skyline image on this page
      </Text>

      {/* <GatsbyImage image={image} alt={data.contentfulCity.skylineImage.title}/>  */}
      {/* <Img fluid={data.contentfulCity.skylineImage.fluid} alt={data.contentfulCity.skylineImage.title} />  */}
    </Layout>
  )
}

export const query = graphql`
  query ($id: String = "") {
    contentfulCity(id: {eq: $id}) {
      name
      description
      coordinates {
        lat
        lon
      }
      skylineImage {
        title
        fluid {
          src
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`