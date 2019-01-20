export type SocialLinkId =
  | 'twitter'
  | 'github'
  | 'devto'
  | 'stackoverflow'
  | 'linkedin'
  | 'mastodon';

export type SocialLinks = {
  [key in SocialLinkId]: { url: string; name: string }
};

export type SiteMetaData = {
  siteUrl: string;
  socialLinks: SocialLinks;
};
