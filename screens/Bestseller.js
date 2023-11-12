import { Heading, Center, Image } from "native-base";
import { Header } from "../components/";

const Bestseller = () => {
  return (
    <>
      <Image
      source={require('../assets/homee.png')}
      alt="Alternate Text"
      size="100%"
      resizeMode="cover"
      style={{ position: 'absolute', zIndex: -1 }}
    />
      <Header title={"Bestseller"} />
      <Center flex={1}>
        <Heading>Ini Produk Bestseller</Heading>
      </Center>
    </>
  );
};

export default Bestseller;
