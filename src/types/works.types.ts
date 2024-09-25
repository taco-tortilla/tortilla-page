type Links = {
  github?: string;
  web?: string;
};

export type ProductInfo = {
  title: string;
  image: string;
  tech: Array<string>;
  description: string;
  links?: Links;
};
