import React from 'react'
import Box from '../../components/Box'
import ContentBlock from '../../components/ContentBlock'
import PageBlock from '../../components/PageBlock'
import SpectrumLine from '../../components/SpectrumLine'

const Resume = ({ scroll }) => (
  <SpectrumLine
    endTitle='2010'
    startTitle='Current'
    progress={scroll.progress}>
    <PageBlock>
      <Box width={30}>
        <ContentBlock
          subtitle='Everydayhero / Blackbaud'
          title='Lead Developer'>
          <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum.</p>
        </ContentBlock>
      </Box>
    </PageBlock>
    <PageBlock>
      <Box width={30}>
        <ContentBlock
          subtitle='Plantminer'
          title='Lead Front End Developer'>
          <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum.</p>
        </ContentBlock>
      </Box>
    </PageBlock>
    <PageBlock>
      <Box width={30}>
        <ContentBlock
          subtitle='Limelight Digital / Adcorp'
          title='Web Developer'>
          <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum.</p>
        </ContentBlock>
      </Box>
    </PageBlock>
    <PageBlock>
      <Box width={30}>
        <ContentBlock
          subtitle='Ironbark'
          title='C# Developer'>
          <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum.</p>
        </ContentBlock>
      </Box>
    </PageBlock>
    <PageBlock>
      <Box width={30}>
        <ContentBlock
          subtitle='Queensland University of Technology'
          title='Bachelor of Information Technology'>
          <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum.</p>
        </ContentBlock>
      </Box>
    </PageBlock>
  </SpectrumLine>
)

export default Resume
