import { Card, Image } from "@styles/ImageCardStyles";
import React from "react";

interface ImageCardProps {
  imageSrc: string;
  altText: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageSrc, altText }) => {
  return (
    <Card
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }} // Trigger animation only once
      whileInView={{ opacity: 1, y: 0 }}
    >
      <Image alt={altText} src={imageSrc} />
    </Card>
  );
};

export default ImageCard;
