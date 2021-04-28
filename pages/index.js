import { useEffect, useState } from 'react'
import Head from 'next/head'
import { Global, css } from "@emotion/react";
import Web3 from "web3";
// import Web3Modal from "web3modal"

import {
    Box,
    Button,
    Container,
    Flex,
    Heading
} from "@chakra-ui/react";

export default function Home() {
    const [address, setAddress] = useState('')
    const [accounts, setAccounts] = useState('')

    useEffect(() => {
        if (window.ethereum){
            window.web3 = new Web3(window.ethereum)
            return true
        }
        return false
    }, [])

	const handleClick = async () => {
        const accounts = await window.ethereum.send('eth_requestAccounts')
        setAccounts(accounts)
        setAddress(accounts.result[0])
	}

  return (
    <div>
        <Global
            styles={
                css`
                     body, #__next, #__next div {
                       height: 100%;
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

              <Heading as="h3" size="sm">Account Address</Heading>
              <Box>{address}</Box>
          </Flex>
      </Container>
    </div>
  )
}
