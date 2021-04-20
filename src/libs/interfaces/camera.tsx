interface Icamera {
  id: number;
  name: string;
  manufacturer: string;
  description: string;
  price: number;
  image: string;
  features: {
    compression: string;
    resolution: string;
    capacity: string;
    dimension: string;
    weights: string;
  };
}

export default Icamera;
