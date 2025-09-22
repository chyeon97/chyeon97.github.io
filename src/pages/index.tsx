import React, { FunctionComponent, useMemo } from 'react'
import GlobalStyle from 'components/Common/GlobalStyle'
import Introduction from 'components/Main/Introduction'
import Footer from 'components/Common/Footer'
import styled from '@emotion/styled'
import CategroyList, { CategoryListProps } from 'components/Main/CategroyList'
import PostList, { PostType } from 'components/Main/PostList'
import { graphql } from 'gatsby'
import { PostListItemType } from '../types/PostItem.types'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import queryString, { ParsedQuery } from 'query-string'

type IndexPageProps = {
  location: {
    search: string
  }
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
  }
}

const IndexPage: FunctionComponent<IndexPageProps> = function ({
  location: { search },
  data: {
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { gatsbyImageData },
    },
  },
}) {
  const parsed: ParsedQuery<string> = queryString.parse(search)
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category
  const categoryList = useMemo(
    () =>
      edges.reduce(
        (
          list: CategoryListProps['categoryList'],
          {
            node: {
              frontmatter: { categories },
            },
          }: PostType,
        ) => {
          categories.forEach(category => {
            if (list[category] === undefined) list[category] = 1
            else list[category]++
          })
          list['All']++
          return list
        },
        { All: 0 },
      ),
    [],
  )

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
  `
  return (
    <Container>
      <GlobalStyle />
      <Introduction profileImage={gatsbyImageData} />
      <CategroyList
        selectedCategory={selectedCategory}
        categoryList={categoryList}
      />
      <PostList selectedCategory={selectedCategory} posts={edges} />
      <Footer />
    </Container>
  )
}

export default IndexPage

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date
            summary
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
              }
            }
          }
        }
      }
    }
    file(name: { eq: "profile" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      }
    }
  }
`
