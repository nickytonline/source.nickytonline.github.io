export type AllMarkdownRemark = {
  edges: {
    node: {
      id: string;
      fields: {
        slug: string;
      };
      excerpt: string;
      frontmatter: {
        date: string;
        title: string;
      };
    };
  }[];
  totalCount: number;
};
