import React from 'react'; 
import { Link, graphql } from 'gatsby'; 
import { StaticImage } from "gatsby-plugin-image"
import { Box, Text } from "@chakra-ui/react"
import Layout from '../components/layout/Layout'; 
import Hero from "../components/sections/Hero";

export default function HomePage({ data }) {
  return ( 
    <Layout>
      <Hero
        
      />
    </Layout>
    
  )
}
