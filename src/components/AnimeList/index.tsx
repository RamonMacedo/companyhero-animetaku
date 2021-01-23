import { Space, Typography, Descriptions, Image, Rate } from 'antd';

const { Paragraph, Title, Text } = Typography;

import IAnimePropDTO from '../../dtos/IAnimePropDTO';

import { Animes, CardTitle, AvatarSide } from './styles';

interface TrendProps {
  trendAnimes: IAnimePropDTO[];
}

export default function AnimeList({ trendAnimes }:TrendProps) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Animes>
        {trendAnimes.map((anime) => (
          <a href={`/anime/${anime.attributes.slug}`}
          // to={`/anime/${anime.attributes.slug}`}
            key={anime.id}
          >
            <AvatarSide>
              <div style={{backgroundImage: `url(${anime.attributes.posterImage?.large})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} />
            </AvatarSide>
            <div style={{padding: '24px 24px 24px 12px'}}>
              <CardTitle>
                <Title level={4}>{anime.attributes.titles.en ? anime.attributes.titles.en : anime.attributes.titles.en_jp}</Title>
                <small>{anime.attributes.titles.ja_jp}</small>
              </CardTitle>
              {/* <strong>{anime.attributes.titles.en}</strong><small>{anime.attributes.titles.ja_jp}</small> */}
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