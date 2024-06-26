import { Accordion, AccordionItem, Checkbox, Input, Radio, RadioGroup } from "@nextui-org/react";
import { FlexContainer } from "@styles/CollectionStyles";

const Filters = () => {
    return (
        <FlexContainer flexDirection="column" rowGap="10px" width="100%">
            <Accordion defaultExpandedKeys={["1"]} variant="splitted">
                <AccordionItem aria-label="Availability" key="1" title="Availability">
                    <FlexContainer flexDirection="column" rowGap="10px">
                        <Checkbox color="secondary">In stock</Checkbox>
                        <Checkbox color="secondary">Out of stock</Checkbox>
                    </FlexContainer>
                </AccordionItem>
            </Accordion>
            <Accordion defaultExpandedKeys={["1"]} variant="splitted">
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
            <Accordion defaultExpandedKeys={["1"]} variant="splitted">
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
            <Accordion defaultExpandedKeys={["1"]} variant="splitted">
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
    );
}

export default Filters;