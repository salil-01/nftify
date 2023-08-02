import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Button,
  Text,
} from "@chakra-ui/react";
export const SingleCard = () => {
  return (
    <>
      <Card bg={"#390554"}>
        <CardBody>
          <Stack mt="6" spacing="3">
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design
              with a sprinkle of vintage design.
            </Text>
            <Text color="blue.600" fontSize="2xl">
              $450
            </Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};
