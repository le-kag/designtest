import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelCastleLoader from '../castle-loader'

const LazyVoxelCastle = dynamic(() => import('../castle'), {
  ssr: false,
  loading: () => <VoxelCastleLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="craftzcastle" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        
        <meta property="og:site_name" content="Design Test" />
        <meta name="og:title" content="Design Test" />
        <meta property="og:type" content="website" />
        <title>Design Test</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelCastle />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
