export interface ImageData {
    id: number;
    src: string;
    alt: string;
    title: string;
    description: string;
    price: string;
    color: string;
}

export interface ProductGridProps {
    imageData: ImageData[];
}