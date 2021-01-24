import { useRouter } from 'next/router';
import { format, parseISO } from 'date-fns';
import { GetStaticPaths, GetStaticProps } from 'next';

import ReactPlayer from 'react-player'

import { Layout , Carousel, Divider, Tabs, Descriptions } from 'antd';

import { Image, AnimationContainer, AnimationLoadingContainer, Container, BoxInformation } from '../../styles/pages/Anime';
import Header from '../../components/Header';

import IAnimePropDTO from '../../dtos/IAnimePropDTO';
import SEO from '../../components/SEO';
import { useState } from 'react';

const { Content, Footer } = Layout;
const { TabPane } = Tabs;

interface AnimesCategoriesrops {
  animeFound: IAnimePropDTO;
}

export default function TopAnime({ animeFound }: AnimesCategoriesrops){
  const [image, setImage] = useState(true);
  const { isFallback } = useRouter();

  return (
    <>
      {isFallback ? (
        <AnimationLoadingContainer>
          <Image width="250px" height="auto" src="https://i.ibb.co/nDWk09r/raizo.png" />
          <h1>Loading...</h1>
        </AnimationLoadingContainer>
      ) : (
        <>
          <SEO 
            title={animeFound.attributes.titles.en ? animeFound.attributes.titles.en : animeFound.attributes.titles.en_jp}
            image={animeFound.attributes.coverImage !== null && animeFound.attributes.coverImage.large}
          />
          <AnimationContainer>
            <Layout>
              <Header />

              <Content>
                {image ? (
                  <div style={{height: '480px', backgroundImage: `url(https://i.ibb.co/YP0d5J8/confira-agora-os-25-melhores-animes-que-ja-foram-criados-1.png)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} />
                ) : (
                  <Carousel effect="fade" autoplay autoplaySpeed={4000}>
                    {animeFound.attributes.coverImage !== null && (
                      <>
                        {setImage(false)}
                        <div key={animeFound.id}>
                          <div style={{height: '480px', backgroundImage: `url(${animeFound.attributes.coverImage.large})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} />
                        </div>
                      </>
                    )}
                  </Carousel>
                )}
              </Content>
              <Layout>
                <Layout>
                  <Content>
                    <Divider orientation="center" style={{color: '#fff'}}>{animeFound.attributes.titles.en ? animeFound.attributes.titles.en : animeFound.attributes.titles.en_jp ? animeFound.attributes.titles.en_jp : animeFound.attributes.titles.ja_jp ? animeFound.attributes.titles.ja_jp : animeFound.attributes.titles.en_cn ? animeFound.attributes.titles.en_cn : animeFound.attributes.titles.zh_cn}</Divider>                    
                    <Container>
                      <Tabs defaultActiveKey="1" centered color="#fff">
                        <TabPane tab="Informations" key="1">
                            <BoxInformation>
                              <Descriptions contentStyle={{color: '#121210'}} title="Details">
                                <Descriptions.Item label="Synopsis">{animeFound.attributes.synopsis}</Descriptions.Item>
                              </Descriptions>
                              <Descriptions contentStyle={{color: '#121210'}} title="More Info">
                                <Descriptions.Item label="Status" style={{textTransform: 'capitalize'}}>{animeFound.attributes.status}</Descriptions.Item>
                                <Descriptions.Item label="Episodes">{animeFound.attributes.episodeCount ? animeFound.attributes.episodeCount : 'Unavailable'}</Descriptions.Item>
                                <Descriptions.Item label="Start Date">{animeFound.attributes.startDate}</Descriptions.Item>
                                <Descriptions.Item label="Popularity">{animeFound.attributes.popularityRank}</Descriptions.Item>
                                <Descriptions.Item label="Trailer">{!!animeFound.attributes.youtubeVideoId ? 'Yes' : 'No'}</Descriptions.Item>
                              </Descriptions>
                            </BoxInformation>
                        </TabPane>
                        {!!animeFound.attributes.youtubeVideoId && (
                          <TabPane tab="Trailer" key="2" style={{color: '#fff'}}>
                            <BoxInformation>
                              <ReactPlayer url={`https://www.youtube.com/watch?v=${animeFound.attributes.youtubeVideoId}`} />
                            </BoxInformation>
                          </TabPane>
                        )}
                        
                      </Tabs>
                    </Container>
                  </Content>
                </Layout>
                <Footer>By Ramon Macêdo</Footer>
              </Layout>
            </Layout>
          </AnimationContainer>
        </>
      )}
    </>
    
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<AnimesCategoriesrops> = async (context) => {
  const { slug } = context.params;

  const slugId = String(slug).split('!')[1];

  const data = await fetch(`https://kitsu.io/api/edge/anime/${slugId}`);
  const { data: animeFound } = await data.json();

  animeFound.attributes.startDate = format(parseISO(animeFound.attributes.startDate), 'MM/dd/yyyy');

  return {
    props: {
      animeFound: animeFound
    },
    revalidate: 60
  }
}