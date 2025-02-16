import {
  Box, Heading, Text, Button,
} from '@chakra-ui/react';
import Icon from './Icon';

// [height, weight, color]
const supportSidebar = ({ title, subtitle }) => {
  const defaultProps = '450px';
  const actionButtons = [
    {
      buttonTitle: 'SCHEDULE MENTORING',
      buttonIcon: 'conversation',
      buttonFunction: () => console.log('button1'),
    },
    {
      buttonTitle: 'ASK IN SUPPORT CHAT',
      buttonIcon: 'slack',
      buttonFunction: () => console.log('button2'),
    },
  ];
  return (
    <Box
      backgroundColor="#FFF4DC"
      width={defaultProps}
      borderWidth="0px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Box d="flex" justifyContent="center">
        <Icon icon="sideSupport" width="300px" height="70px" />
      </Box>
      <Box p="4">
        <Box d="flex" alignItems="baseline" justifyContent="center">
          <Heading textAlign="center" justify="center">
            {title}
          </Heading>
        </Box>

        <Box pt="3" d="flex" alignItems="baseline" justifyContent="center">
          <Text fontSize="xl" textAlign="center">
            {subtitle}
          </Text>
        </Box>

        <Box pt="3" display="flex" flexDirection="column" alignItems="center">
          {actionButtons.map((button) => (
            <Button
              size="lg"
              key={button.buttonTitle}
              bg="#FFFFFF"
              width="75%"
              borderWidth="0px"
              px="15px"
              my="8px"
              justifyContent="left"
            >
              <Box pr="20px">
                <Icon icon={button.buttonIcon} width="25px" height="25px" />
              </Box>
              <Text fontSize="md">{button.buttonTitle}</Text>
              <Box ml="auto">
                <Icon icon="arrowRight" width="25px" height="25px" />
              </Box>
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default supportSidebar;
