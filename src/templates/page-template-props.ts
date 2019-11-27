import { HtmlContentProps, ContentProps } from 'components';

export interface PageTemplateProps {
    title: string;
    content: string;
    devtoLink?: string;
    contentComponent?:
        | React.ComponentClass<HtmlContentProps, {}>
        | React.FunctionComponent<HtmlContentProps>
        | React.ComponentClass<ContentProps, {}>
        | React.FunctionComponent<ContentProps>
        | undefined;
}
