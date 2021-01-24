import { format, parseISO } from 'date-fns';
import { GetStaticPaths, GetStaticProps } from 'next';

import { Layout , Carousel, Divider} from 'antd';

import { BoxAnimeLists, AnimationContainer, AnimationLoadingContainer, Image } from '../../../styles/pages/CategoryAnime';

import SEO from '../../../components/SEO';
import Header from '../../../components/Header';
import AnimeList from '../../../components/AnimeList';

import IAnimeCategoryPropDTO from '../../../dtos/IAnimeCategoryPropDTO';
import IAnimePropDTO from '../../../dtos/IAnimePropDTO';
import { useRouter } from 'next/router';
import { useState } from 'react';

const { Content, Footer } = Layout;

interface AnimesCategoriesrops {
  category: IAnimeCategoryPropDTO;
  animesCategory: IAnimePropDTO[];
}

export default function Anime({ category, animesCategory }: AnimesCategoriesrops){
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
            title={category.attributes.title}
            description={category.attributes.description}
            image={category.attributes.image !== null && category.attributes.image.medium}
          />
          <AnimationContainer>
            <Layout>
              <Header />

              <Content>
              {image ? (
                  <div style={{height: '480px', backgroundImage: `url(https://i.ibb.co/QYJMmD8/confira-agora-os-25-melhores-animes-que-ja-foram-criados-1.png)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} />
                ) : (
                  <Carousel effect="fade" autoplay autoplaySpeed={4000}>
                    {animesCategory.map(anime => {
                      if(anime.attributes.coverImage !== null) {
                        setImage(false);
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
                    <Divider orientation="left" style={{color: '#fff'}}>{category.attributes.title}</Divider>
                    <BoxAnimeLists>
                      <AnimeList listAnimes={animesCategory} />
                    </BoxAnimeLists>
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

  const data = await fetch(`https://kitsu.io/api/edge/categories/${slug}/anime`);
  const responseJson = await data.json();
  
  const categoryData = await fetch(`https://kitsu.io/api/edge/categories/${slug}`);
  const { data: responseCategoryJson} = await categoryData.json();
  
  const responseData = responseJson.data.map(anime => {
    const data = anime.attributes.startDate;
    anime.attributes.startDate = format(parseISO(data), 'MM/dd/yyyy');
    return anime;
  });

  return {
    props: {
      category: responseCategoryJson,
      animesCategory: responseData
    },
    revalidate: 60
  }
}