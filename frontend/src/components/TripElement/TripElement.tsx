import { Box, Center, Flex, Heading, Spacer, Text, WrapItem } from "@chakra-ui/react";
import StarRating from "../StarRating";
import { Trip } from "../../interfaces/Trip";

interface TripElementProps {
  trip: Trip;
}

export const TripElement = (props: TripElementProps) => {
  /* ----- Initialize ----- */
  const { trip } = props;

  /* ----- Functions ----- */
  const getFormattedEmission = (emissionOffset: number) => {
    return `${emissionOffset > 1000 ? emissionOffset / 1000 : emissionOffset} ${emissionOffset > 1000 ? 't' : 'kg'}`
  }

  /* ----- Render ----- */
  return (
    <WrapItem
      cursor='pointer'
      _hover={
        {
          shadow: 'md',
          transform: 'scale(1.15)',
          transitionDuration: '0.2s',
          transitionTimingFunction: "ease-in-out"
        }
      }
      borderRadius='20px'
    >
      <Center w='320px' h='245px' bg='outerBoxBg' borderRadius='20px'>
        <Center
          w='300px'
          h='225px'
          bg='defaultBg'
          borderRadius='10px'
          backgroundImage={trip.bgImage}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize='cover'
        >
          <Box
            w='100%'
            h='100%'
            position="relative"
            borderRadius='10px'
            bgGradient='linear(to-b, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2))'
          >
            <Center>
              <Heading as='h2' size='md' mt='50px' color='white'>{ trip.name }</Heading>
            </Center>
            <Center>
              <Text fontSize='12px' fontWeight='semibold' mt='5px' color='white'>{ trip.countryCount } Countries, { trip.days } days</Text>
            </Center>
            <Flex w='80%' h='20%' bg='emissionBg' m='auto' justify='center' mt='10px' borderRadius='10px'>
              <Center>
                <Text fontWeight='semibold' p='2' mr='0' color='white'>Emission offset:</Text>
              </Center>
              <Spacer />
              <Center>
                <Text as='span' fontWeight='semibold' pl='2' color='white'>
                  { getFormattedEmission(trip.emissionOffset) }
                </Text>
                <Text as='span' fontWeight='semibold' pl='2' color='white'> CO</Text>
                <Text as='sub' fontWeight='semibold' color='white'>2</Text>
                <Text as='span' fontWeight='semibold' pr='2' color='white'>e</Text>
              </Center>
            </Flex>
            <Flex borderTopRadius='10px' w='80%' h='20%' bg='white' position="absolute" bottom={0} left='10%'>
              <Flex  w='100%'>
                <Text fontSize='12px' fontWeight='bold' my='auto' ml='10px' mr='auto'>Trip rating:</Text>
                <StarRating rating={trip.rating} count={5} uniqueId={trip._id}/>
                <Text fontSize='16px' fontWeight='bold' my='auto' ml ='0px' mr='auto'>{trip.rating}</Text>
              </Flex>
            </Flex>
          </Box>
        </Center>
      </Center>
    </WrapItem>
  );
}
