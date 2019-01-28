declare module 'netlify-cms' {
    export function registerPreviewTemplate(
        pageName: string,
        component: React.ReactNode,
    ): void;
}
