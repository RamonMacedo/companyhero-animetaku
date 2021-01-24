import { Typography, Card, Divider } from 'antd';

const { Paragraph } = Typography;
const { Meta } = Card;

import IAnimePropDTO from '../../dtos/IAnimePropDTO';

import { Animes } from './styles';

interface TrendProps {
  trendAnimes: IAnimePropDTO[];
}

export default function AnimeList({ trendAnimes }:TrendProps) {
  return (
    <Animes>
      <Divider orientation="right" style={{color: '#fff'}}>Top 10</Divider>
      {trendAnimes.map((anime) => (
        <a
          key={anime.id}
        >
        <Card
          style={{ marginBottom: '16px' }}
          cover={
            <img
              alt={anime.attributes.titles.en ? anime.attributes.titles.en : anime.attributes.titles.en_jp ? anime.attributes.titles.en_jp : anime.attributes.titles.ja_jp ? anime.attributes.titles.ja_jp : anime.attributes.titles.en_cn ? anime.attributes.titles.en_cn : anime.attributes.titles.zh_cn}
              src={`${anime.attributes.coverImage.small}`}
            />
          }
          actions={[
            <a href={`/anime/${anime.attributes.slug}!${anime.id}`}>More</a>
          ]}
        >
          <Meta
            title={anime.attributes.titles.en ? anime.attributes.titles.en : anime.attributes.titles.en_jp ? anime.attributes.titles.en_jp : anime.attributes.titles.ja_jp ? anime.attributes.titles.ja_jp : anime.attributes.titles.en_cn ? anime.attributes.titles.en_cn : anime.attributes.titles.zh_cn}
            description={
              <Paragraph style={{color: '#121210'}} ellipsis={{ rows: 2, expandable: false}}>
                {anime.attributes.description}
              </Paragraph>
            }
          />
        </Card>
      </a>
      ))}
    </Animes>
  )
}