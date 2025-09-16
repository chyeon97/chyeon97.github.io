import React, { FunctionComponent } from 'react'
import GlobalStyle from 'components/Common/GlobalStyle'
import Introduction from 'components/Main/Introduction'
import Footer from 'components/Common/Footer'
import styled from '@emotion/styled'
import CategroyList from 'components/Main/CategroyList'
import PostList from 'components/Main/PostList'

const IndexPage: FunctionComponent = function () {
  const CATEGORY_LIST = {
    All: 5,
    Web: 3,
    Mobile: 2,
  }

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
  `
  return (
    <Container>
      <GlobalStyle />
      <Introduction />
      <CategroyList selectedCategory="Web" categoryList={CATEGORY_LIST} />
      <PostList />
      <Footer />
    </Container>
  )
}

export default IndexPage
