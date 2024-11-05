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

