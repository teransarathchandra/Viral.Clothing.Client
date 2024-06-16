import { BackgroundImage, HomeContainer, ImageContainer, ImageGrid, Image, ParentContainer, H1, FlexContainer, LeftImageContainer, RightContentContainer, LatestDropHeading, ShopButton, QuickAddButton } from "@styles/HomeStyles";
import backgroundImage from "@assets/images/background.jpg";
import image1 from "@assets/images/card-image1.jpg";
import image2 from "@assets/images/card-image2.jpg";
import image3 from "@assets/images/card-image3.jpg";
import image4 from "@assets/images/card-image4.jpg";
import image5 from "@assets/images/card-image5.jpg";
import image6 from "@assets/images/card-image6.jpg";
import coverImage from "@assets/images/cover-image.jpg";

const Home = () => {

  const imageData = [
    { id: 1, src: image1, alt: "Image 1" },
    { id: 2, src: image2, alt: "Image 2" },
    { id: 3, src: image3, alt: "Image 3" },
    { id: 4, src: image4, alt: "Image 4" },
    { id: 5, src: image5, alt: "Image 5" },
    { id: 6, src: image6, alt: "Image 6" },
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
      <FlexContainer>
        <LeftImageContainer>
          <img alt="Full size" src={coverImage} />
        </LeftImageContainer>
        <RightContentContainer>
          <LatestDropHeading>LATEST DROP</LatestDropHeading>
          <ShopButton>SHOP EVERYTHING NOW</ShopButton>
        </RightContentContainer>
      </FlexContainer>
      <ParentContainer>
        <H1>LATEST RELEASE</H1>
        <ImageGrid>
          {imageData.map((image, index) => (
            <ImageContainer
              initial={{ opacity: 0, y: 60 }}
              key={image.id}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: index * 0.2 } }}
            >
              <Image alt={image.alt} src={image.src} />
              <QuickAddButton>QUICK ADD</QuickAddButton>
            </ImageContainer>
          ))}
        </ImageGrid>
      </ParentContainer>
    </HomeContainer>
  );
};

export default Home;
