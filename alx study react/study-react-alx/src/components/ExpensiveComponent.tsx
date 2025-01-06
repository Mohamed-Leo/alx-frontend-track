import React, { useMemo } from 'react';

const ExpensiveComponent = ({ data }) => {
    // Use useMemo to cache the result of the expensive computation
    const computedData = useMemo(() => {
        // Perform expensive computation
        return data.reduce((acc, item) => acc + item.value, 0);
    }, [data]); // Recompute only when data changes

    return <div>Computed Value: {computedData}</div>;
};

export default ExpensiveComponent;