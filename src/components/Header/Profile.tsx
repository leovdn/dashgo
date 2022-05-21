import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Leonardo Dantas</Text>
        <Text color="gray.300" fontSize="small">
          leo.vdn@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Leonado Dantas"
        src="https://github.com/leovdn.png"
      />
    </Flex>
  )
}
