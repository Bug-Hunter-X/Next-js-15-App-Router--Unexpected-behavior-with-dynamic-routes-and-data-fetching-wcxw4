```javascript
// pages/index.js
import { Suspense } from 'react';

export default async function Home() {
  const data = await fetchData();

  return (
    <div>Data: {JSON.stringify(data)}</div>
  );
}

async function fetchData() {
  const response = await fetch('/api/data');
  const data = await response.json();
  return data;
}
```
```javascript
// pages/api/data.js
export default function handler(req, res) {
  res.status(200).json({ text: 'Hello World' });
}
```