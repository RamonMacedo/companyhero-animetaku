import React, { useState, FormEvent } from 'react';
import { parseISO, format } from 'date-fns';

import { SearchOutlined } from '@ant-design/icons';

import IAnimePropDTO from '../dtos/IAnimePropDTO';

import { GetStaticProps } from 'next';
import { Layout , Carousel, Divider, Input, Button} from 'antd';

import { Form, Error, BoxAnimeLists } from '../styles/pages/Home';
import Header from '../components/Header';
import AnimeList from '../components/AnimeList';
import AnimeTrendList from '../components/AnimeTrendList';

const { Content, Footer } = Layout;

interface TrendProps {
  trendAnimes: IAnimePropDTO[];
}

export default function Home({ trendAnimes }:TrendProps) {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');

  async function heandlerAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Write the anime name!!');
      return;
    }

    try {
    } catch (err) {
      setInputError('Search failed!!');
    }
  }
  
  return (
    <Layout>
      <Header>
        <Content style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px', flexDirection: 'column'}}>

          <Form hasError={!!inputError} onSubmit={heandlerAddRepository}>
            <Input
              value={newRepo}
              onChange={(e) => setNewRepo(e.target.value)}
              placeholder="Search anime"
            />
            <Button htmlType="submit" shape="circle" icon={<SearchOutlined />} />
          </Form>

          {inputError && <Error>{inputError}</Error>}
        </Content>
      </Header>

      <Content>
        <Carousel effect="fade" autoplay autoplaySpeed={4000}>
          {trendAnimes.map(anime => (
            <div key={anime.id}>
              <div style={{height: '480px', backgroundImage: `url(${anime.attributes.coverImage.large})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} />
            </div>  
          ))}
        </Carousel>
      </Content>
      <Layout>
        <Layout>
          <Content>
            <Divider orientation="left" style={{color: '#fff'}}>Recent</Divider>
            <BoxAnimeLists>
              <AnimeList trendAnimes={trendAnimes} />
              <AnimeTrendList trendAnimes={trendAnimes} />
            </BoxAnimeLists>
          </Content>
        </Layout>
        <Footer>By Ramon Macêdo</Footer>
      </Layout>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<TrendProps> = async (context) => {
  const response = await fetch('/api/trendanimes');
  const responseJson = await response.json();

  const responseData = responseJson.data.map(anime => {
    const data = anime.attributes.startDate;
    anime.attributes.startDate = format(parseISO(data), 'MM/dd/yyyy');
    return anime;
  });

  return {
    props: {
      trendAnimes: responseData
    },
    revalidate: 60
  }
}
