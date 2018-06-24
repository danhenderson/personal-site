import React from 'react'
import Box from '../../components/Box'
import Heading from '../../components/Heading'
import PageBlock from '../../components/PageBlock'
import RichText from '../../components/RichText'

const Home = () => (
  <div>
    <PageBlock>
      <Box align='center' width={20}>
        <Heading>Dan Henderson</Heading>
        <RichText>
          <p>Software Engineer</p>
        </RichText>
      </Box>
    </PageBlock>
    <PageBlock>
      <Box align='center' width={20}>
        <Heading spacing={[ 0, 0, 0.5, 0]}>Dan Henderson</Heading>
        <RichText>
          <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum.</p>
        </RichText>
      </Box>
    </PageBlock>
    <PageBlock>
      <Box align='center' width={20}>
        <Heading spacing={[ 0, 0, 0.5, 0]}>Dan Henderson</Heading>
        <RichText>
          <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum.</p>
        </RichText>
      </Box>
    </PageBlock>
  </div>
)

export default Home
