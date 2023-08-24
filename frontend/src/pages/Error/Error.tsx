import { Box, Center, Heading, Text } from "@chakra-ui/react"

export const ErrorPage = () => {
  /* ----- Render ----- */
  return (
    <Box>
      <Center>
        <Heading>Oops!</Heading>
      </Center>
      <Center>
        <Text>Sorry, page not found</Text>
      </Center>
    </Box>
  )
}