```javascript
// pages/index.js

import { MetadataRoute } from 'next/server';

export default function Home() {
  return (
    <div>Hello World</div>
  );
}

export const metadata = {
  title: 'My page',
};

// Add the following MetadataRoute for a fix, this is needed so that pages are correctly rendered on deployment to Vercel.

export const revalidate = 0;

export function generateMetadata({params}){
  return {
    title: 'My page'
  }
}


export function metadata(params) {
  return {
    title: 'My page'
  }
}
```