import Head from 'next/head'
import { Global, css } from "@emotion/react";

import {
    Button,
    Container,
    Flex,
    Heading
} from "@chakra-ui/react";

export default function Home() {

	const handleClick = () => {
		console.log({msg: 'Button Clicked'})
	}

  return (
    <div>
        <Global
            styles={
                css`
                     body, #__next, #__next div {
                       min-height: 100vh;
                       min-height: -webkit-fill-available;
                     }
                `
            }
        />
      <Head>
        <title>ViViFi Capital</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container as="main">
          <Flex
              direction={'column'}
              alignItems={'center'}
              justifyContent={'center'}
          >
              <Heading marginY={1}>ViViFi Capital</Heading>
              <Heading as="h3" size="sm">Dashboard</Heading>

              <Button marginY={4} onClick={handleClick}>
                  Connect Wallet
              </Button>
          </Flex>
      </Container>
    </div>
  )
}
