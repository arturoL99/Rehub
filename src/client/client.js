import { createClient } from "contentful";

const contentfulClient = createClient({
  space: `${process.env.REACT_APP_CONTENTFUL_SPACE}`,
  accessToken: `${process.env.REACT_APP_CONTENTFUL_SECRET}`,
});

export default contentfulClient;