import CMS from 'netlify-cms';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import ThanksPagePreview from './preview-templates/ThanksPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('thanks', ThanksPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
