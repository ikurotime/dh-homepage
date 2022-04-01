
import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} David Huertas. Original design inspired by <a href="https://www.youtube.com/channel/UC7yZ6keOGsvERMp2HaEbbXQ">devaslife</a>
    </Box>
  )
}

export default Footer