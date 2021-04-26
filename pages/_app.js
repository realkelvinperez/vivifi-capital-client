import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react"
const theme = extendTheme({ initialColorMode: "dark" })

function MyApp({ Component, pageProps }) {
  return (
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
  )
}
export default MyApp
