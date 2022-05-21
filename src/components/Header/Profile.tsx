import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

interface ProfileProps {
  showProfileData: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Leonardo Dantas</Text>
          <Text color="gray.300" fontSize="small">
            leo.vdn@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Leonado Dantas"
        src="https://github.com/leovdn.png"
      />
    </Flex>
  )
}
