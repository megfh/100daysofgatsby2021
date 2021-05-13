import React from 'react'; 
import Layout from '../components/layout/Layout';
import { 
  Box, 
  Heading,
  Input, Textarea as ChakraTextArea,
  FormControl as ChakraFormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button
} from "@chakra-ui/react"
import { graphql } from 'gatsby';
import { FormiumForm, defaultComponents } from '@formium/react';
import { formium } from '../lib/formium';


function FormControl(props) {
  return (
      <ChakraFormControl id={props.id} marginTop="2">
        <FormLabel color="purple.800">{props.label}</FormLabel>
        <FormHelperText>{props.description}</FormHelperText>
          {props.children} 
      </ChakraFormControl>
  )
}

function TextInput(props){
  return (
    <FormControl>
      <Input {...props} placeholder={props.placeholder} required={props.required} focusBorderColor="purple.600"/>
      <FormErrorMessage></FormErrorMessage>
    </FormControl>   
  )    
}

function Textarea(props){
  return (
    <FormControl>
      <ChakraTextArea {...props} variant="outline" focusBorderColor="purple.600" required={props.required}/>
    </FormControl>
  )
}

function Header(props){
  const { page: {title} } = props; 
  return (
    <Heading as="h4" marginTop="4" marginBottom="4" color="purple.800">{title}</Heading>
  )
}

function SubmitButton(props){
  return(
    <Button colorScheme="purple" size="md" {...props} mt="2"/>
  )
}

// Always define these outside of React so that
// components are not needlessly recreated on each render
const myComponents = {
    ...defaultComponents,
    TextInput,
    Header,
    FormControl,
    Textarea,
    SubmitButton
}

export default function Contact({ data }) {
  const [success, setSuccess] = React.useState(false);
  if (success) {
    return (
      <Layout>
        <Heading size="md" color="purple.800">Thank you! Your response has been recorded.</Heading>
      </Layout>
    );
  }

  return (
    <Layout>
      <Box 
        w={{base: "full", lg: "96"}}
        p={5}
      >
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