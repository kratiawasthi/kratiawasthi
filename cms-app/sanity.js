import {createClient} from '@sanity/client'
export const client = createClient({
    projectId:"fpss91xc",
    dataset:"production",
    useCdn:true,
    apiVersion:"v2024-04-10",
})