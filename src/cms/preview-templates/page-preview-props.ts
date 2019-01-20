export type PagePreviewProps<T = {}> = {
  entry: {
    getIn: <T = string | string[]>(data: string[]) => T;
  };
  widgetFor: (tagName: string) => string;
} & T;
