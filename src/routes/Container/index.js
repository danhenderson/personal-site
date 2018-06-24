import React from 'react'
import * as theme from '../../lib/theme'
import 'reset-css/reset.css'

import Navigation from './Navigation'
import Page from './Page'
import ScrollIndicator from '../../components/ScrollIndicator'
import { ThemeProvider } from 'styled-components'

const Container = ({
  children,
  location,
  scroll
}) => (
  <ThemeProvider theme={theme}>
    <Page>
      <Navigation showLogo={location.pathname !== '/' || scroll.position > 40} />
      {children}
      <ScrollIndicator
        direction={scroll.direction}
        progress={scroll.progress}
      />
    </Page>
  </ThemeProvider>
)

export default Container
