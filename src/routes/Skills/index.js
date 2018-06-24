import React from 'react'
import Box from '../../components/Box'
import Heading from '../../components/Heading'
import PageBlock from '../../components/PageBlock'
import RichText from '../../components/RichText'
import SpectrumLine from '../../components/SpectrumLine'

const Skills = ({ scroll }) => (
  <SpectrumLine
    endTitle='Back End'
    startTitle='Front End'
    progress={scroll.progress}>
    <PageBlock>
      <Box width={30}>
        <Heading spacing={[ 0, 0, 0.5, 0]}>Design</Heading>
        <RichText>
          <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum.</p>
        </RichText>
      </Box>
    </PageBlock>
    <PageBlock>
      <Box width={30}>
        <Heading spacing={[ 0, 0, 0.5, 0]}>JavaScript</Heading>
        <RichText>
          <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum.</p>
        </RichText>
      </Box>
    </PageBlock>
    <PageBlock>
      <Box width={30}>
        <Heading spacing={[ 0, 0, 0.5, 0]}>Rails</Heading>
        <RichText>
          <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum.</p>
        </RichText>
      </Box>
    </PageBlock>
    <PageBlock>
      <Box width={30}>
        <Heading spacing={[ 0, 0, 0.5, 0]}>Serverless</Heading>
        <RichText>
          <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum.</p>
        </RichText>
      </Box>
    </PageBlock>
  </SpectrumLine>
)

export default Skills
