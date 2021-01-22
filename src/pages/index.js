import React from 'react'; 
import { Link, graphql } from 'gatsby'; 

export default function HomePage({ data }) {
  return ( 
    <div>
    <h1>audioCORE</h1>
      <Link to="/about">About</Link>
      <h2>Cities</h2>
      <ul>
        {data.allContentfulCity.edges.map(({node:city}) => (
          <li key={city.name}>
            <Link to={city.gatsbyPath}>{city.name}</Link>
          </li>
        ))}
      </ul>
    </div>
    
  )
}

export const query = graphql`
query AllCities {
  allContentfulCity {
    edges {
      node {
        name
        description
        coordinates {
          lat
          lon
        }
        gatsbyPath(filePath: "/location/{contentfulCity.name}")
      }
    }
  }
}

`