import React from 'react'; 
import { graphql } from 'gatsby'; 
import { GatsbyImage, getImage } from "gatsby-plugin-image"; 
import Layout from '../../components/layout/Layout';
import { Heading, Text, Divider } from '@chakra-ui/react'

export default function City({ data }) {
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

      <GatsbyImage image={data.contentfulCity.skylineImage.gatsbyImageData} alt={data.contentfulCity.skylineImage.title}/> 
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
        gatsbyImageData
      }
    }
  }
`