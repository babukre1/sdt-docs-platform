---
sidebar_position: 1
title: React Fundamentals
description: React workshop guide.
---

# React Fundamentals

## A Simple Component

```jsx
function Welcome() {
  return <h1>Welcome to SOMNOG9</h1>;
}

export default Welcome;
```

## Props

```jsx
function Participant({name}) {
  return <p>Hello, {name}</p>;
}
```

## State

```jsx
import {useState} from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```
