import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId:'m71nt3kv',
    dataset:'production',
    apiVersion:'2022-07-30',
    useCdn:true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);