import Filters from "@components/collection/Filters";
import ProductGrid from "@components/collection/ProductGrid";
import { FlexContainer, H2 } from "@styles/CollectionStyles";
import { Container } from "@styles/CommonStyles";
import image1 from "@assets/images/card-image1.webp";
import image2 from "@assets/images/card-image2.webp";
import image3 from "@assets/images/card-image3.webp";
import image4 from "@assets/images/card-image4.webp";
import image5 from "@assets/images/card-image5.webp";
import image6 from "@assets/images/card-image6.webp";

const Mens = () => {
    const imageData = [
        { id: 1, src: image1, alt: "Image 1", title: "Oversized Tee", description: "", price: "LKR 4,000.00", color: "Black" },
        { id: 2, src: image2, alt: "Image 2", title: "Oversized Tee", description: "", price: "LKR 4,000.00", color: "Black" },
        { id: 3, src: image3, alt: "Image 3", title: "Oversized Tee", description: "", price: "LKR 4,000.00", color: "Black" },
        { id: 4, src: image4, alt: "Image 4", title: "Oversized Tee", description: "", price: "LKR 4,000.00", color: "Black" },
        { id: 5, src: image5, alt: "Image 5", title: "Oversized Tee", description: "", price: "LKR 4,000.00", color: "Black" },
        { id: 6, src: image6, alt: "Image 6", title: "Oversized Tee", description: "", price: "LKR 4,000.00", color: "Black" },
    ];

    return (
        <Container margin="0 2rem">
            <FlexContainer margin="7rem 0 0 1rem">
                <H2>MENS WEAR</H2>
            </FlexContainer>
            <FlexContainer margin="2rem 0">
                <Filters />
                <ProductGrid imageData={imageData} />
            </FlexContainer>
        </Container>
    );
}

export default Mens;