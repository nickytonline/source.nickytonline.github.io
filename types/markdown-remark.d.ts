export interface MarkdownRemark {
    frontmatter: {
        title: string;
        date: string;
        description: string;
        tags: string[];
    };
    html: string;
}
