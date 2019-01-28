export interface Tag {
    fieldValue: string;
    totalCount: number;
}

export interface AllMarkdownRemark {
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
}
