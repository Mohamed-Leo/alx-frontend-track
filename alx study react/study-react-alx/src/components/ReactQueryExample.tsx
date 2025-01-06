import React from 'react';
import { useQuery} from '@tanstack/react-query';

function ReactQueryExample() {
    // Use the useQuery hook to handle data fetching and caching
    const { data, error, isPending } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
        fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
            res.json(),
        ),
    });

    if (isPending) return <div>Loading...</div>;
    if (error) return <div>An error has occurred: {error.message}</div>;

    return (
        <div>
            {data.map(item => (
                <div key={item.id}>{item.title}</div>
            ))}
        </div>
    )
}

export default ReactQueryExample