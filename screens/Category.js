import { Heading, Center, Image} from "native-base";
import { Header } from "../components";
import { useNavigation } from "@react-navigation/native";


const Category = () => {
  const navigation = useNavigation();

  return (
    <>
      <Image
      source={require('../assets/homee.png')}
      alt="Alternate Text"
      size="100%"
      resizeMode="cover"
      style={{ position: 'absolute', zIndex: -1 }}
      />
      <Header title={"Kategori"} />
      <Center flex={1}>
        <Heading>Ini Halaman Kategori</Heading>
      </Center>
    </>
  );
};

export default Category;
