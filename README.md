# Workflow Guide: Building the Boxes App

## Overview

- **Objective**: Create an interactive grid of boxes where each box toggles between "on" and "off" when clicked.
- **Technologies Used**: React, JavaScript, CSS.
- **Key Concepts**:
  - State management with the `useState` hook.
  - Component composition and props.
  - Event handling.
  - Immutability in state updates.

## Step-by-Step Workflow

### 1. Initialize State with Default Boxes Array

**Action**: Import the default array of boxes and initialize state in `App.jsx`.

```jsx
// In App.jsx
import boxes from "./boxes";

const [boxesArray, setBoxesArray] = React.useState(boxes);
```

**Purpose**: Store the initial state of all boxes, each with an `id` and an `on` property to indicate its current state.

### 2. Render Boxes by Mapping over State

**Action**: Map over `boxesArray` to create a list of `Box` components.

```jsx
// In App.jsx
const boxElements = boxesArray.map((box) => (
  <Box 
    key={box.id} 
    on={box.on} 
    toggle={() => toggle(box.id)}
  />
));

return (
  <main>
    {boxElements}
  </main>
);
```

**Purpose**: Dynamically generate `Box` components based on the current state, passing necessary props to each one.

### 3. Create a Separate Box Component

**Action**: Define the `Box` component in `Box.jsx`.

```jsx
// In Box.jsx
const Box = ({ on, toggle }) => {
  // Component code here
};

export default Box;
```

**Purpose**: Encapsulate the logic and presentation of each box into a reusable component.

### 4. Apply Dynamic Styles in Box Component

**Action**: Use the `on` prop to determine the background color.

```jsx
// In Box.jsx
const styles = {
  backgroundColor: on ? "#222222" : "transparent"
};

return (
  <button onClick={toggle} style={styles} className="box"></button>
);
```

**Purpose**: Visually represent the box's state by changing its background color based on whether it is "on" or "off".

### 5. Implement the Toggle Function in App

**Action**: Define the `toggle` function that updates the state immutably.

```jsx
// In App.jsx
const toggle = (id) => {
  setBoxesArray(prevBoxes => {
    return prevBoxes.map(box => {
      return box.id === id ? { ...box, on: !box.on } : box;
    });
  });
};
```

**Purpose**: Update the `on` property of the clicked box while maintaining immutability by returning a new array and new box objects.

### 6. Pass the Toggle Function to Box Components

**Action**: Modify the `toggle` prop to include the box's id.

```jsx
// In App.jsx
<Box 
  key={box.id} 
  on={box.on} 
  toggle={() => toggle(box.id)}
/>
```

**Purpose**: Ensure each `Box` component can trigger the `toggle` function with its specific `id` when clicked.

### 7. Handle Click Events in Box Component

**Action**: Attach the `onClick` event handler to the box's `button`.

```jsx
// In Box.jsx
return (
  <button onClick={toggle} style={styles} className="box"></button>
);
```

**Purpose**: Allow user interaction by making the box clickable and triggering the state update in `App`.

### 8. Ensure Immutability When Updating State

**Action**: Use functional updates and the spread operator to avoid mutating state directly.

```jsx
// In App.jsx
setBoxesArray(prevBoxes => {
  return prevBoxes.map(box => {
    return box.id === id ? { ...box, on: !box.on } : box;
  });
});
```

**Purpose**: Maintain React's state immutability principles, which is crucial for predictable UI updates.

### 9. Finalize the Styling

**Action**: Add CSS styles for the boxes.

```css
/* In App.css */
.box {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  display: inline-block;
  margin: 5px;
}

.box:active {
  transform: none;
}
```

**Purpose**: Define the visual layout and appearance of the boxes to ensure they display correctly on the page.

### 10. Test the Application

**Action**: Run the app and interact with the boxes.
- Click on each box to toggle its state.
- Observe the background color changing accordingly.

**Purpose**: Verify that the application works as intended and that state updates are reflected in the UI.

## Key Concepts and Takeaways

- **State Management**: Managing state at the highest level needed (in `App.jsx`) ensures a single source of truth.
- **Immutability**: Always return new objects and arrays when updating state to avoid direct mutations.
- **Props and Event Handling**: Passing functions and data via props allows child components to interact with and update parent state.
- **Component Reusability**: Creating separate components like `Box` promotes code reusability and cleaner organization.
- **Conditional Rendering**: Using props to dynamically change the UI based on the component's state.

## Final Code Recap

### App.jsx

```jsx
import React from "react";
import boxes from "./boxes";
import Box from "./components/Box";
import "./App.css";

export default function App() {
  const [boxesArray, setBoxesArray] = React.useState(boxes);

  const toggle = (id) => {
    setBoxesArray(prevBoxes => {
      return prevBoxes.map(box => {
        return box.id === id ? { ...box, on: !box.on } : box;
      });
    });
  };

  const boxElements = boxesArray.map((box) => (
    <Box 
      key={box.id} 
      on={box.on} 
      toggle={() => toggle(box.id)}
    />
  ));

  return (
    <main>
      {boxElements}
    </main>
  );
}
```

### Box.jsx

```jsx
import React from 'react';

const Box = ({ on, toggle }) => {
  const styles = {
    backgroundColor: on ? "#222222" : "transparent"
  };

  return (
    <button onClick={toggle} style={styles} className="box"></button>
  );
};

export default Box;
```
