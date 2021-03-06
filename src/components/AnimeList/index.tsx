import { Typography, Descriptions } from 'antd';

const { Paragraph, Title } = Typography;

import IAnimePropDTO from '../../dtos/IAnimePropDTO';

import { Animes, CardTitle, AvatarSide } from './styles';

interface TrendProps {
  listAnimes: IAnimePropDTO[];
}

export default function AnimeList({ listAnimes }:TrendProps) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Animes>
        {listAnimes.map((anime) => (
          <a 
            key={anime.id}
            href={`/anime/${anime.attributes.slug}!${anime.id}`}
          >
            <AvatarSide>
              <div style={{backgroundImage: `url(${anime.attributes.posterImage.large})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} />
            </AvatarSide>
            <div style={{padding: '24px 24px 24px 12px'}}>
              <CardTitle>
                <Title level={4}>{anime.attributes.titles.en ? anime.attributes.titles.en : anime.attributes.titles.en_jp ? anime.attributes.titles.en_jp : anime.attributes.titles.ja_jp ? anime.attributes.titles.ja_jp : anime.attributes.titles.en_cn ? anime.attributes.titles.en_cn : anime.attributes.titles.zh_cn}</Title>
                <small>{anime.attributes.titles.ja_jp}</small>
              </CardTitle>

              <Paragraph style={{color: '#121210'}} ellipsis={{ rows: 2, expandable: false}}>
                {anime.attributes.description}
              </Paragraph>

              <Descriptions contentStyle={{color: '#666'}} title="More Info" style={{padding: '0 16px'}}>
                <Descriptions.Item label="Status" style={{textTransform: 'capitalize'}}>{anime.attributes.status}</Descriptions.Item>
                <Descriptions.Item label="Episodes">{anime.attributes.episodeCount ? anime.attributes.episodeCount : 'Unavailable'}</Descriptions.Item>
                <Descriptions.Item label="Start Date">{anime.attributes.startDate}</Descriptions.Item>
                <Descriptions.Item label="Popularity">{anime.attributes.popularityRank}</Descriptions.Item>
                <Descriptions.Item label="Trailer">{!!anime.attributes.youtubeVideoId ? 'Yes' : 'No'}</Descriptions.Item>
              </Descriptions>
            </div>
          </a>
        ))}
      </Animes>
    </div>
  )
}