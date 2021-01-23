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
    },
    status: string;
    episodeCount: number;
    startDate: string;
    popularityRank: number;
    posterImage: {};
    coverImage: {};
    youtubeVideoId: string;
  }
}