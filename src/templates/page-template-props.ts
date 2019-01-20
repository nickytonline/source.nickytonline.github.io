// import { HtmlContentProps } from 'components/';

export type PageTemplateProps<
  // TODO: Fix this
  T = any /* React.FunctionComponent<HtmlContentProps> */
> = {
  title: string;
  content?: string;
  contentComponent?: T;
};
