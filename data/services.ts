export interface Service {
  title: string;
  description: string;
  listItems?: string[];
  images: string[];
}

export const SERVICES = [
  {
    title: "Photography",
    description: "Every photograph we produce finds the beauty in your property while serving as a profitable asset.",
    listItems: ["Drone Pho typography", "Interiors", "Exteriors / Architectural"],
    images: ["/images/image-1.jpg", "/images/image-2.jpg"],
  },
  {
    title: "Virtual Staging",
    description:
      "Our staging will help you sell the potential of your space. We can work off of our own photography or photos you provide.",
    listItems: [],
    images: ["/images/image-3.jpg"],
  },
  {
    title: "Renderings",
    description: "Renderings are the gold standard in pre-construction marketing.",
    listItems: ["Interiors", "Exteriors"],
    images: ["/images/image-4.jpg"],
  },
  {
    title: "Interactive Tours",
    description: "Give your audience the ability to explore your property without requiring in-person travel.",
    listItems: ["Matterport", "Video Walkthroughs"],
    images: ["/images/image-5.jpg"],
  },
  {
    title: "Floor Plans",
    description: "We produce laser-precise floor plans faster than any other service.",
    listItems: ["On-site Measure", "2D Floor Plans", "3D Floor Plans"],
    images: ["/images/image-6.jpg"],
  },
  {
    title: "Video",
    description: "Video content has higher engagement and will help your property stand out online.",
    listItems: ["Drone Cinematography", "Interiors", "Exteriors / Architectural"],
    images: ["/images/image-7.jpg"],
  },
] as Service[];
