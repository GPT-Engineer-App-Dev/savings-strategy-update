import { Box, Container, Flex, Grid, Heading, Link, Text, VStack } from "@chakra-ui/react";

const Header = () => (
  <Box as="header" bg="brand.800" color="white" py={4}>
    <Container maxW="container.xl">
      <Flex justify="space-between" align="center">
        <Heading as="h1" size="lg">Financial Times</Heading>
        <Flex>
          <Link href="#" mx={2} color="white">Home</Link>
          <Link href="#" mx={2} color="white">World</Link>
          <Link href="#" mx={2} color="white">Business</Link>
          <Link href="#" mx={2} color="white">Tech</Link>
          <Link href="#" mx={2} color="white">Science</Link>
          <Link href="#" mx={2} color="white">Health</Link>
        </Flex>
      </Flex>
    </Container>
  </Box>
);

const Footer = () => (
  <Box as="footer" bg="brand.900" color="white" py={4} mt={8}>
    <Container maxW="container.xl">
      <Flex justify="space-between" align="center">
        <Text>&copy; 2023 Financial Times</Text>
        <Flex>
          <Link href="#" mx={2} color="white">Privacy Policy</Link>
          <Link href="#" mx={2} color="white">Terms of Service</Link>
          <Link href="#" mx={2} color="white">Contact Us</Link>
        </Flex>
      </Flex>
    </Container>
  </Box>
);

const Article = ({ title, summary }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
    <Heading as="h3" size="md" mb={2}>{title}</Heading>
    <Text>{summary}</Text>
  </Box>
);

const MainContent = () => (
  <Container maxW="container.xl" py={8}>
    <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
      <Article title="Article 1" summary="Summary of article 1." />
      <Article title="Article 2" summary="Summary of article 2." />
      <Article title="Article 3" summary="Summary of article 3." />
      <Article title="Article 4" summary="Summary of article 4." />
      <Article title="Article 5" summary="Summary of article 5." />
      <Article title="Article 6" summary="Summary of article 6." />
    </Grid>
  </Container>
);

const Index = () => {
  return (
    <Box>
      <Header />
      <MainContent />
      <Footer />
    </Box>
  );
};

export default Index;