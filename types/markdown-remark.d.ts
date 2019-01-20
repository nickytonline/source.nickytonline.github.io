export type MarkdownRemark = {
  frontmatter: {
    title: string;
    description: string;
    tags: string[];
  };
  html: string;
};
