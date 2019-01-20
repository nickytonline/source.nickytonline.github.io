import { HtmlContentProps, ContentProps } from 'components';

export type PageTemplateProps = {
  title: string;
  content: string;
  contentComponent?:
    | React.ComponentClass<HtmlContentProps, any>
    | React.FunctionComponent<HtmlContentProps>
    | React.ComponentClass<ContentProps, any>
    | React.FunctionComponent<ContentProps>
    | undefined;
};
