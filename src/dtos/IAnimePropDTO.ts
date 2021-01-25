export default interface IAnimePropDTO {
  id: string;
  type: string;
  attributes: {
    slug: string;
    synopsis: string;
    description: string;
    titles: {
      en: string;
      en_jp: string;
      ja_jp: string;
      en_cn: string;
      zh_cn: string;
    },
    status: string;
    episodeCount: string;
    startDate: string;
    popularityRank: number;
    posterImage?: {
      tiny: string;
      small: string;
      medium: string;
      large: string;
      original: string;
    } | null;
    coverImage?: {
      tiny: string;
      small: string;
      large: string;
      original: string;
    } | null;
    youtubeVideoId: string;
  }
}