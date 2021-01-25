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
  backgroundImage: boolean;
}

export default function Home({ lastAnimes, trendAnimes, backgroundImage }:TrendProps) {

  return (
    <>
      <SEO
        title='Come on, find your anime!'
        image='https://i.ibb.co/3Tt063w/animetaku-logo2.png'
      />
      <AnimationContainer>
        <Layout>
          <Header />

          <Content>
            {backgroundImage ? (
              <div style={{height: '480px', backgroundImage: `url(https://i.ibb.co/YP0d5J8/confira-agora-os-25-melhores-animes-que-ja-foram-criados-1.png)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} />
            ) : (
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
            )}
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

  let backgroundImage: boolean = true;
  
  const responseLastAnimeData = responseLastAnimeJson.data.map(anime => {
    const data = anime.attributes.startDate;
    anime.attributes.startDate = format(parseISO(data), 'MM/dd/yyyy');

    if(anime.attributes.coverImage !== null){
      backgroundImage = false;
    }

    return anime;
  });


  return {
    props: {
      lastAnimes: responseLastAnimeData,
      trendAnimes: responseData,
      backgroundImage
    },
    revalidate: 60
  }
}
