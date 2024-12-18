```javascript
// pages/about.js

export default function About() {
  const myVar = 'This is a variable';
  return (
    <div>
      <h1>About Page</h1>
      <p>{myVar}</p> {/* Now using the variable in JSX */} 
    </div>
  );
}
```

Alternatively, if the variable is truly unused, remove the declaration entirely:
```javascript
// pages/about.js

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}
```