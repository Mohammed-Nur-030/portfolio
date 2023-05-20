// r4vqhohb
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = createClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID, // find this at manage.sanity.io or in your sanity.json
    dataset: "production",// this is from those question during 'sanity init'
    //  token:process.env.REACT_APP_SANITY_TOKEN,
     useCdn:true,
     apiVersion: '2022-02-01'
});

const builder=imageUrlBuilder(client);
export const urlFor=(source)=>builder.image(source)

