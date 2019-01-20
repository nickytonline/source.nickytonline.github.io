export type Tag = {
  fieldValue: string;
  totalCount: number;
};

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
  group: Tag[];
  totalCount: number;
};
