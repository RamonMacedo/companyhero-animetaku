export default interface IAnimeCategoryPropDTO {
  id: string;
  type: string;
  attributes: {
    title: string;
    description: string;
    slug: string;
    image?: {
      tiny: string;
      small: string;
      medium: string;
      large: string;
      original: string;
    } | null;
  }
}