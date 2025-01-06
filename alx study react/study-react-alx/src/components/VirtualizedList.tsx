import React from 'react';
import { FixedSizeList as List } from 'react-window';

// Create a large list of items
const items = Array(1000).fill("").map((_, index) => `Item ${index}`);

const Row = ({ index, style }) => (
    <div style={style}>{items[index]}</div>
);

const VirtualizedList = ()=> (
    <List
        height={400}
        itemCount={items.length}
        itemSize={35}
        width={300}
    >
        {Row}
    </List>
);

export default VirtualizedList