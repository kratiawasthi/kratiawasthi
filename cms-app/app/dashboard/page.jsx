

import { auth , currentUser } from '@clerk/nextjs/server';

export default async function dashboardPage() {
    const { userId } = auth();
    if (!userId) {
        return <div>you are not logged in</div>;

    }
    const user = await currentUser();
    console.log(user);
 return <div>dashboard Page</div>;
 
}
