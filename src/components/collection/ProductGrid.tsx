import { ProductGridProps } from "@interfaces/ProductGrid";
import { ImageContainer, ImageGrid, QuickAddButton, Image, FlexContainer } from "@styles/CollectionStyles";

const ProductGrid: React.FC<ProductGridProps> = ({ imageData }) => {
    return (
        <ImageGrid>
            {imageData.map((image, index) => (
                <FlexContainer flexDirection="column" key={image.id} margin="10px 0">
                    <ImageContainer
                        initial={{ opacity: 0, y: 60 }}
                        key={image.id}
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: index * 0.2 } }}
                    >
                        <Image alt={image.alt} loading="lazy" src={image.src} />
                        <QuickAddButton>QUICK ADD</QuickAddButton>
                    </ImageContainer>
                    <FlexContainer flexDirection="column" key={image.id} margin="15px 0 10px 0">
                        <h1>{image.title}</h1>
                        <h1>{image.price}</h1>
                        <h1>{image.color}</h1>
                    </FlexContainer>
                </FlexContainer>
            ))}
        </ImageGrid>
    );
}

export default ProductGrid;