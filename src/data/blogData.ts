import { seoFailurePost } from './posts/seo-failure';
import { webDevMistakesPost } from './posts/web-dev-mistakes';
import { socialMediaFailPost } from './posts/social-media-fail';
import { paidAdsPost } from './posts/paid-ads';
import { performanceVsBrandPost } from './posts/performance-marketing';
import { andromedaUpdatePost } from './posts/andromeda-update';

export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    category: string;
    summary: string;
    image: string;
    content: {
        type: 'paragraph' | 'heading' | 'list' | 'image' | 'callout';
        text?: string;
        items?: string[];
        src?: string;
    }[];
    publishedDate: string;
    readTime: string;
}

export const blogPosts: BlogPost[] = [
    seoFailurePost,
    webDevMistakesPost,
    socialMediaFailPost,
    paidAdsPost,
    performanceVsBrandPost,
    andromedaUpdatePost
];
