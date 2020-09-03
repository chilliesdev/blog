import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import HomepageLink from '../styles/HomepageLink'

interface PageTitle {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const Logo: React.FC = () => {
  const data: PageTitle = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return <HomepageLink to="/">{data.site.siteMetadata.title}</HomepageLink>
}

export default Logo
