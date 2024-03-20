import React from 'react';
import { useCount } from './Context';

export function Counter() {
  const { count } = useCount();
  return <span>{count}</span>;
}