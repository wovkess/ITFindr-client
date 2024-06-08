import { Box, Flex, Text } from '@chakra-ui/react';

const AboutItems = () => {
  const bg = "white";

  return (
    <Flex className='w-11/12 flex-wrap gap-5'>
      <Box width="32%" h="64" bg={bg} borderRadius={8} padding={5}>
        <Flex align="center" justify="center" width="64px" height="64px">
          <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24">
            <path fill="currentColor" d="M7.394 20.025q-.688-.025-1.308-.357q-.62-.331-1.173-.97q-.903-1.027-1.408-2.526Q3 14.673 3 13.058q0-1.883.701-3.535q.7-1.652 1.926-2.877t2.867-1.935Q10.137 4 12 4t3.506.713q1.642.714 2.857 1.935q1.216 1.221 1.926 2.87Q21 11.164 21 13.04q0 1.618-.52 3.11q-.518 1.492-1.438 2.565q-.584.662-1.196.986q-.611.324-1.296.324q-.354 0-.688-.084q-.335-.083-.67-.25l-1.4-.7q-.415-.208-.878-.312q-.462-.104-.933-.104q-.49 0-.944.104q-.452.104-.849.311l-1.38.7q-.36.193-.697.276q-.338.084-.717.059ZM12 14.5q.633 0 1.066-.434q.434-.433.434-1.066q0-.22-.066-.429q-.067-.21-.18-.39L15.1 9.794q.365.344.64.784q.273.44.456.941h1.05q-.49-1.796-1.941-2.907Q13.854 7.5 12 7.5T8.683 8.614Q7.219 9.73 6.735 11.52h1.03q.485-1.369 1.656-2.194Q10.592 8.5 12 8.5q.637 0 1.213.18q.577.182 1.1.505l-1.851 2.398q-.108-.039-.231-.06q-.123-.023-.231-.023q-.633 0-1.066.434q-.434.433-.434 1.066t.434 1.066q.433.434 1.066.434Z"/>
          </svg>
        </Flex>
        <Text marginLeft={2} fontSize={25} fontWeight="600">Speed</Text>
        <Text marginLeft={2} fontSize={20} opacity={0.6}>
          Thanks to our search engine you can quickly find the right candidate for you
        </Text>
      </Box>
      <Box width="32%" h="64" bg={bg} borderRadius={8} padding={5}>
        <Flex align="center" justify="center" width="64px" height="64px">
          <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 48 48">
            <g fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
              <path d="M43 23V14C43 12.8954 42.1046 12 41 12H24L19 6H7C5.89543 6 5 6.89543 5 8V40C5 41.1046 5.89543 42 7 42H22"/>
              <path fill="#2F88FF" d="M29.8 29H38.2L41 32.5294L34 41L27 32.5294L29.8 29Z"/>
            </g>
          </svg>
        </Flex>
        <Text marginLeft={2} fontSize={25} fontWeight="600">Quality</Text>
        <Text marginLeft={2} fontSize={20} opacity={0.6}>
          Thanks to our development team, our app is fast and reliable
        </Text>
      </Box>
      <Box width="32%" h="64" bg={bg} borderRadius={8} padding={5}>
        <Flex align="center" justify="center" width="64px" height="64px">
          <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 14 14">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7.36 13.43h0a1 1 0 0 1-.72 0h0A9.57 9.57 0 0 1 .5 4.49v-3a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v3a9.57 9.57 0 0 1-6.14 8.94Z"/>
          </svg>
        </Flex>
        <Text marginLeft={2} fontSize={25} fontWeight="600">Safety</Text>
        <Text marginLeft={2} fontSize={20} opacity={0.6}>
          Our application provides a high level of protection for our users
        </Text>
      </Box>
      <Box width="32%" h='64' bg={bg} borderRadius={8} padding={5}>
        <Flex align="center" justify="center" width="64px" height="64px">
          <svg xmlns="http://www.w3.org/2000/svg" width="44px" height="44px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M13.138.053a12.018 12.018 0 0 0-9.646 3.481A12.014 12.014 0 0 0 .937 16.651a12.014 12.014 0 0 0 11.162 7.348a2.275 2.275 0 1 0-.037-4.549a7.438 7.438 0 0 1-6.932-4.562a7.438 7.438 0 0 1 1.587-8.145a7.437 7.437 0 0 1 12.378 3.014H12.05a2.275 2.275 0 1 0 0 4.55h9.674A2.275 2.275 0 0 0 24 12.04A12.014 12.014 0 0 0 16.597.914a11.962 11.962 0 0 0-3.459-.86Z"/>
          </svg>
        </Flex>
        <Text marginLeft={2} fontSize={25} fontWeight="600">Efficiency</Text>
        <Text marginLeft={2} fontSize={20} opacity={0.6}>
          Thanks to our service, you can effectively match an employee to the criteria you need
        </Text>
      </Box>
      <Box width="32%" h='64' bg={bg} borderRadius={8} padding={5}>
        <Flex align="center" justify="center" width="64px" height="64px">
          <svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 24 24">
            <path fill="currentColor" d="M20.5 12q-.625 0-1.063-.438T19 10.5v-6q0-.625.438-1.063T20.5 3q.625 0 1.063.438T22 4.5v6q0 .625-.438 1.063T20.5 12ZM10 12q-1.65 0-2.825-1.175T6 8q0-1.65 1.175-2.825T10 4q1.65 0 2.825 1.175T14 8q0 1.65-1.175 2.825T10 12Zm-8 8v-2.8q0-.85.425-1.563T3.6 14.55q1.5-.75 3.112-1.15T10 13q1.675 0 3.288.4t3.112 1.15q.75.375 1.175 1.088T18 17.2V20H2Zm2-2h12v-.8q0-.275-.125-.5t-.375-.35q-1.275-.65-2.663-1T10 15q-1.45 0-2.838.35t-2.662 1q-.25.125-.375.35T4 17.2v.8Zm6-8q.825 0 1.413-.588T12 8q0-.825-.588-1.413T10 6q-.825 0-1.413.588T8 8q0 .825.588 1.413T10 10Zm0-2Zm0 10Z"/>
          </svg>
        </Flex>
        <Text marginLeft={2} fontSize={25} fontWeight="600">Individual approach</Text>
        <Text marginLeft={2} fontSize={20} opacity={0.6}>
          In our service there is a place for the dreaming beginner, as well as for the professional worker who wants to sell his vacancy profitably
        </Text>
      </Box>
      <Box width="32%" h='64' bg={bg} borderRadius={8} padding={5}>
        <Flex align="center" justify="center" width="64px" height="64px">
          <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 24 24">
            <path fill="currentColor" d="M3 7V5.615q0-.69.463-1.152Q3.925 4 4.615 4h14.77q.69 0 1.152.463q.463.462.463 1.152V7h-1V5.615q0-.269-.173-.442T19.385 5H4.615q-.269 0-.442.173T4 5.615V7H3Zm6 13v-2H4.615q-.69 0-1.152-.462Q3 17.075 3 16.385V15h1v1.385q0 .269.173.442t.442.173h14.77q.269 0 .442-.173t.173-.442V15h1v1.385q0 .69-.462 1.152q-.463.463-1.153.463H15v2H9Zm3-9Zm-7.585 0l2.6-2.6l-.707-.708L3 11l3.308 3.308l.707-.708l-2.6-2.6Zm15.17 0l-2.6 2.6l.707.708L21 11l-3.308-3.308l-.707.708l2.6 2.6Z"/>
          </svg>
        </Flex>
        <Text marginLeft={2} fontSize={25} fontWeight="600">Development</Text>
        <Text marginLeft={2} fontSize={20} opacity={0.6}>
          By registering on our service, you can be sure that our application will be constantly improving for our customers
        </Text>
      </Box>
    </Flex>
  );
};

export default AboutItems;
