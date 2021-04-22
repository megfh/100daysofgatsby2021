import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import { Box, Flex, Text, Button, Menu,
  MenuButton,
  MenuList,
  MenuItem
} from "@chakra-ui/react";
import { ChevronDownIcon }  from '@chakra-ui/icons'
import Logo from "../ui/Logo";

const NavItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      fontWeight="medium"
      {...rest}
    >
      <Link to={to}>{children}</Link>
    </Text>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const HeaderComponent = ({ data }) => {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={6}
      bg={["purple.700", "purple.700", "transparent", "transparent"]}
      color={["white", "white", "purple.800", "purple.800"]}
    >
      <Flex align="center">
        <Logo
          w="150px"
          color={["white", "white", "purple.700", "purple.700"]}
        />
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <NavItem to="/about">About</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          <NavItem to="/blog">Blog</NavItem>
          <NavItem to="/shop">Shop</NavItem>
          <Menu bg={["purple.700", "purple.700", "transparent", "transparent"]}
      color={["white", "white", "purple.800", "purple.800"]}>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Cities
            </MenuButton>
            <MenuList>
              {data.allContentfulCity.edges.map(({node:city}) => (
                <Link to={city.gatsbyPath} key={city.name}>
                  <MenuItem key={city.name}>
                    {city.name}
                  </MenuItem>
                </Link>
              ))}
            </MenuList>
          </Menu>
        </Flex>
      </Box>
    </Flex>
  );
};

export default function Header() {
  return (
    <StaticQuery 
      query={graphql`
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
      }
      render={data => <HeaderComponent data={data} />}
    />
  )
};
