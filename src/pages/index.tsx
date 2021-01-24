import { parseISO, format } from 'date-fns';

import IAnimePropDTO from '../dtos/IAnimePropDTO';

import { GetStaticProps } from 'next';
import { Layout , Carousel, Divider, BackTop} from 'antd';

import { BoxAnimeLists, AnimationContainer } from '../styles/pages/Home';
import Header from '../components/Header';
import AnimeList from '../components/AnimeList';
import AnimeTrendList from '../components/AnimeTrendList';
import SEO from '../components/SEO';

const { Content, Footer } = Layout;

interface TrendProps {
  lastAnimes: IAnimePropDTO[];
  trendAnimes: IAnimePropDTO[];
}

export default function Home({ lastAnimes, trendAnimes, }:TrendProps) {  
  return (
    <>
      <SEO
        title={'Come on, find your anime!'}
        image={'https://i.ibb.co/3Tt063w/animetaku-logo2.png'}
      />
      <AnimationContainer>
        <Layout>
          <Header />

          <Content>
            <Carousel effect="fade" autoplay autoplaySpeed={4000}>
              {lastAnimes.map(anime => {
                if(anime.attributes.coverImage !== null) {
                  return (
                    <div key={anime.id}>
                      <div style={{height: '480px', backgroundImage: `url(${anime.attributes.coverImage.large})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} />
                    </div>
                  );
                }
              })}
            </Carousel>
          </Content>
          <Layout>
            <Layout>
              <Content>
                <Divider orientation="left" style={{color: '#fff'}}>Recent</Divider>
                <BoxAnimeLists>
                  <AnimeList listAnimes={lastAnimes} />
                  <AnimeTrendList trendAnimes={trendAnimes} />
                </BoxAnimeLists>
              </Content>
            </Layout>
            <BackTop />
            <Footer>By Ramon Macêdo</Footer>
          </Layout>
        </Layout>
      </AnimationContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps<TrendProps> = async (context) => {
  const data = await fetch('https://kitsu.io/api/edge/trending/anime');
  const responseJson = await data.json();

  const countAnime = await fetch('https://kitsu.io/api/edge/anime');
  const countAnimeJson = await countAnime.json();

  
  const offsetNumber =  String(countAnimeJson.meta.count - 20);
  
  const responseLastAnime = await fetch(`https://kitsu.io/api/edge/anime?page%5Blimit%5D=10&page%5Boffset%5D=${offsetNumber}`);
  const responseLastAnimeJson = await responseLastAnime.json();
  
  const responseData = responseJson.data.map(anime => {
    const data = anime.attributes.startDate;
    anime.attributes.startDate = format(parseISO(data), 'MM/dd/yyyy');
    return anime;
  });
  
  const responseLastAnimeData = responseLastAnimeJson.data.map(anime => {
    const data = anime.attributes.startDate;
    anime.attributes.startDate = format(parseISO(data), 'MM/dd/yyyy');
    return anime;
  });


  return {
    props: {
      lastAnimes: responseLastAnimeData,
      trendAnimes: responseData
    },
    revalidate: 60
  }
}
