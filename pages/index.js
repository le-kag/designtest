import NextLink from 'next/link'
import {
  Container,
  Heading,
  Box,
  Button,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'


const Home = () => (
  <Layout>
    <Container>


      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Design Test - Scaffold-eth
          </Heading>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Paragraph>

        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
              YourContract
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.3}>

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
              Hints
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
