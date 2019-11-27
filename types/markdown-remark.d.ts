export interface MarkdownRemark {
    frontmatter: {
        title: string;
        devto_link: string;
        date: string;
        description: string;
        tags: string[];
    };
    html: string;
}
