import React from 'react'; 
import { graphql } from 'gatsby'; 
import Layout from '../../components/layout/Layout';

export default function City({data}) {
  return (
    <Layout>
      <h1>
      {data.contentfulCity.name}
      </h1> 

      <h2>
          {data.contentfulCity.description}
      </h2>

      <h3>
          {data.contentfulCity.coordinates.lat}, {data.contentfulCity.coordinates.lon}
      </h3>
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
    }
  }
`