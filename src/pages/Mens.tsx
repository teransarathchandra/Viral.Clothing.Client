import { Accordion, AccordionItem, Checkbox, Input, Radio, RadioGroup } from "@nextui-org/react";
import { Container } from "@styles/CommonStyles"
import image1 from "@assets/images/card-image1.webp";
import image2 from "@assets/images/card-image2.webp";
import image3 from "@assets/images/card-image3.webp";
import image4 from "@assets/images/card-image4.webp";
import image5 from "@assets/images/card-image5.webp";
import image6 from "@assets/images/card-image6.webp";
import { ImageContainer, ImageGrid, QuickAddButton, Image, FlexContainer, H2 } from "@styles/CollectionStyles";
import { useState } from "react";

const Mens = () => {

    const imageData = [
        { id: 1, src: image1, alt: "Image 1" },
        { id: 2, src: image2, alt: "Image 2" },
        { id: 3, src: image3, alt: "Image 3" },
        { id: 4, src: image4, alt: "Image 4" },
        { id: 5, src: image5, alt: "Image 5" },
        { id: 6, src: image6, alt: "Image 6" },
    ];

    const [availabilitySelectedKeys, SetAvailabilitySelectedKeys] = useState(new Set(["1"]));
    const [priceSelectedKeys, SetPriceSelectedKeys] = useState(new Set(["1"]));
    const [sizeSelectedKeys, SetSizeSelectedKeys] = useState(new Set(["1"]));
    const [sortSelectedKeys, SetSortSelectedKeys] = useState(new Set(["1"]));

    return (
        <Container margin="0 2rem">
            <FlexContainer margin="7rem 0 0 1rem">
                <H2>MENS WEAR</H2>
            </FlexContainer>
            <FlexContainer margin="2rem 0">
                <FlexContainer flexDirection="column" rowGap="10px" width="100%">
                    <Accordion onSelectionChange={SetAvailabilitySelectedKeys} selectedKeys={availabilitySelectedKeys} variant="splitted">
                        <AccordionItem aria-label="Availability" key="1" title="Availability">
                            <FlexContainer flexDirection="column" rowGap="10px">
                                <Checkbox color="secondary">In stock</Checkbox>
                                <Checkbox color="secondary">Out of stock</Checkbox>
                            </FlexContainer>
                        </AccordionItem>
                    </Accordion>
                    {/* <Divider orientation="horizontal" /> */}
                    <Accordion onSelectionChange={SetPriceSelectedKeys} selectedKeys={priceSelectedKeys} variant="splitted">
                        <AccordionItem aria-label="Price" key="1" title="Price">
                            <FlexContainer columnGap="20px" flexDirection="row">
                                <Input
                                    label="Min Price"
                                    labelPlacement="outside"
                                    placeholder="0.00"
                                    startContent={
                                        <div className="pointer-events-none flex items-center">
                                            <span className="text-default-400 text-small">LKR</span>
                                        </div>
                                    }
                                    type="number"
                                />
                                <Input
                                    label="Max Price"
                                    labelPlacement="outside"
                                    placeholder="0.00"
                                    startContent={
                                        <div className="pointer-events-none flex items-center">
                                            <span className="text-default-400 text-small">LKR</span>
                                        </div>
                                    }
                                    type="number"
                                />
                            </FlexContainer>
                        </AccordionItem>
                    </Accordion>
                    <Accordion onSelectionChange={SetSizeSelectedKeys} selectedKeys={sizeSelectedKeys} variant="splitted">
                        <AccordionItem aria-label="Size" key="1" title="Size">
                            <FlexContainer flexDirection="column" rowGap="10px">
                                <Checkbox color="secondary">XS</Checkbox>
                                <Checkbox color="secondary">S</Checkbox>
                                <Checkbox color="secondary">M</Checkbox>
                                <Checkbox color="secondary">L</Checkbox>
                                <Checkbox color="secondary">XL</Checkbox>
                                <Checkbox color="secondary">XXL</Checkbox>
                                <Checkbox color="secondary">3XL</Checkbox>
                            </FlexContainer>
                        </AccordionItem>
                    </Accordion>
                    <Accordion onSelectionChange={SetSortSelectedKeys} selectedKeys={sortSelectedKeys} variant="splitted">
                        <AccordionItem aria-label="Sort" key="1" title="Sort">
                            <FlexContainer flexDirection="column" rowGap="10px">
                                <RadioGroup
                                    color="secondary"
                                    defaultValue="featured"
                                >
                                    <Radio value="featured">Featured</Radio>
                                    <Radio value="best-selling">Best selling</Radio>
                                    <Radio value="price-low-to-high">Price, low to high</Radio>
                                    <Radio value="price-high-to-low">Price, high to low</Radio>
                                    <Radio value="date-old-to-new">Date, old to new</Radio>
                                    <Radio value="date-new-to-old">Date, new to old</Radio>
                                </RadioGroup>
                            </FlexContainer>
                        </AccordionItem>
                    </Accordion>
                </FlexContainer>
                <FlexContainer>
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
                </FlexContainer>
            </FlexContainer>
        </Container>
    )
}

export default Mens
