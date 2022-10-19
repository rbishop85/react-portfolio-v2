import React from 'react';

const styles = {
    header: {
      background: '#e8eaf6',
      overflow: 'auto'
    }
  };

export default function Header() {
  return (
    <div style={styles.header}>
      <h1>Header</h1>
    </div>
  );
}