import { BackgroundImage, HomeContainer, ImageContainer, ImageGrid, Image } from "@styles/HomeStyles";
import backgroundImage from "@assets/images/background.jpg";
import image1 from "@assets/images/card-image1.jpg";
import image2 from "@assets/images/card-image2.jpg";
import image3 from "@assets/images/card-image3.jpg";
import image4 from "@assets/images/card-image4.jpg";

const Home = () => {

  const imageData = [
    { id: 1, src: image1, alt: "Image 1" },
    { id: 2, src: image2, alt: "Image 2" },
    { id: 3, src: image3, alt: "Image 3" },
    { id: 4, src: image4, alt: "Image 4" },
  ];

  return (
    <HomeContainer>
      <BackgroundImage
        animate={{ opacity: 1 }}
        backgroundImage={backgroundImage}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
      />
      <ImageGrid>
        {imageData.map((image, index) => (
          <ImageContainer
            initial={{ opacity: 0, y: 60 }}
            key={image.id}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: index * 0.2 } }}
          >
            <Image alt={image.alt} src={image.src} />
          </ImageContainer>
        ))}
      </ImageGrid>
    </HomeContainer>
  );
};

export default Home;
