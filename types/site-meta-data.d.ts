export type SocialLinkId =
  | 'twitter'
  | 'github'
  | 'devto'
  | 'stackoverflow'
  | 'linkedin'
  | 'mastodon';

export interface SiteMetaData {
    siteUrl: string;
    title: string;
    description: string;
    socialLinks: { [key in SocialLinkId]: { url: string; name: string } };
}
