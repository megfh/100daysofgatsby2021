import React from 'react'; 
import Layout from '../components/layout/Layout';
import { Box } from "@chakra-ui/react"
import { graphql } from 'gatsby';
import { FormiumForm } from '@formium/react';
import { formium } from '../lib/formium';

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