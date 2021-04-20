interface Idvr {
  id: number;
  name: string;
  manufacturer: string;
  description: string;
  price: number;
  image: string;
  features: {
    compression: string;
    resolution: string;
    videoInput: string;
    videoOutput: string;
    audioInput: string;
    audioOutput: string;
    capacity: string;
    dimension: string;
    weights: string;
  };
}

export default Idvr;
