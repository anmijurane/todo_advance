import React from 'react';
import ReactDOM from 'react-dom/client';
import { TodoApp } from './TodoApp';

ReactDOM
  .createRoot(
    document.getElementById('root-app') as HTMLElement
  )
  .render(
    <TodoApp />
  );


