import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          copyright
        }
      }
    }
  `);
  return data.site.siteMetadata;
};

export default useSiteMetadata;
