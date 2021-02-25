import React from 'react'; 
import Layout from '../components/layout/Layout';
import { Box, Input, Textarea as ChakraTextarea, Button, Heading } from "@chakra-ui/react"
import { graphql } from 'gatsby';
import { FormiumForm, defaultComponents } from '@formium/react';
import { formium } from '../lib/formium';

// function TextInput(props) {
//   return <Input 
//           placeholder={props.placeholder} 
//           size="md" 
//           variant="outline"
//           focusBorderColor="purple.800"
//         />
// }

// function Textarea(props) {
//   return <ChakraTextarea focusBorderColor="purple.800"></ChakraTextarea>
// }

// function SubmitButton(props) {
//   return <Button colorScheme="purple" {...props} >Submit</Button>
// }

// function Header(props){
//     const { page: {title} } = props
    
//     return (
//         <Heading as="h4" marginTop="4" marginBottom="4" size="lg" colorScheme="purple">{title}</Heading>
//     )
// }

// const myComponents = { ...defaultComponents, TextInput, Textarea, SubmitButton, Header }; 

const myComponents = { ...defaultComponents }; 

export default function Contact({ data }) {
  const [success, setSuccess] = React.useState(false);
  if (success) {
    return (
      <Layout>
        <Box>Thank you! Your response has been recorded.</Box>
      </Layout>
    );
  }

  return (
    <Layout>
      <Box>
        <FormiumForm
          data={data.formiumForm}
          components={myComponents}
          onSubmit={async (values) => {
            // Send form values to Formium
            await formium.submitForm('contact', values);
            setSuccess(true);
          }}
        />
      </Box>
    </Layout>
  )
}

export const query = graphql`
  {
    formiumForm(slug: { eq: "contact" }) {
      id
      createAt
      name
      projectId
      schema
      slug
      updateAt
      version
    }
  }
`;