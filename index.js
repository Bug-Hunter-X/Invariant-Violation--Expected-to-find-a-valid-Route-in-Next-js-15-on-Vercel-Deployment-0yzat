```javascript
// pages/index.js

export default function Home() {
  return (
    <div>Hello World</div>
  );
}
```
This simple Next.js 15 app produces the error: `Error:  Invariant Violation:  Expected to find a valid Route.  Did you forget to call next/navigation.useSearchParams or next/navigation.usePathname?` when deployed to Vercel.