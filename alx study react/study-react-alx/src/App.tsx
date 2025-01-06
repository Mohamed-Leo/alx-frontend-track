import { BrowserRouter , Routes, Route } from "react-router-dom";
// import Dashboard from "./components/Dashboard";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import ProtectedRoute from "./components/ProtectedRoute";

// import ControlledForm from "./components/ControlledForm";
// import UncontrolledForm from "./components/UncontrolledForm";
// import CustomHookForm from "./components/CustomHookForm";
// import FormikForm from "./components/FormikForm";
// import SWRExample from "./components/SWRExample";
// import ReactHookFormExample from "./components/ReactHookFormExample";
// import LazyLoadingExample from "./components/LazyLoadingExample";
// import VirtualizedList from "./components/VirtualizedList";
// import NestedRoutesExample from "./components/DashboardNotProtected";



// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import ReactQueryExample from "./components/ReactQueryExample";



// Create a client
// const queryClient = new QueryClient();

function App() {
  return (
    <>
      <h1>hello alx react</h1>

      {/* Controlled components in React are those where form data is managed by the component’s state. 
      This approach provides full control over form data, making it easier to implement validation, conditional 
      rendering, and other dynamic behaviors. */}
      {/* <ControlledForm /> */}

      {/* Uncontrolled components maintain their own state within the DOM, using refs to access form values. 
      This approach is more similar to traditional HTML form handling, but it may be less flexible for complex 
      state and validation management. */}
      {/* <UncontrolledForm /> */}


      {/* ---------------------------------------------- */}
      {/* Custom form hooks can abstract form logic and validation, making forms easier to manage and reuse. 
      By creating reusable hooks, you can simplify form handling across your application. */}
      {/* <CustomHookForm /> */}


      {/* --------------------------------------------- */}
      {/* Form Libraries: Formik*/}
      {/* 
        Formik is a popular React library for building forms with ease. It simplifies form state management, 
        validation, and submission handling. 

        Advantages of Formik: - Easy form state management and validation - Built-in support for various 
        validation libraries (e.g., Yup) - Well-documented and widely used
      */}
      {/* <FormikForm /> */}


      {/* Form Libraries: React Hook Form */}
      {/* React Hook Form is another powerful library for managing forms in React. It leverages hooks to 
      provide a simpler and more performant form handling solution.
      Advantages of React Hook Form: - Performance optimization by reducing re-renders - 
      Minimal API for ease of use - Integrates well with React’s functional components */}
      {/* <ReactHookFormExample /> */}




      {/* --------------------------------------------- */}
      {/* Advanced Data Handling */}
      {/* 
        This concept page provides a comprehensive understanding of advanced data handling in React. It explores 
        efficient strategies for fetching, caching, and updating data using libraries like SWR and React Query. 
        Additionally, it covers techniques for optimizing performance, including memoization, lazy loading, and 
        virtualization, to enhance React application performance. 
      */}
      {/* Fetching and Caching Data */}
      {/* 
          Efficient data fetching and caching are essential for creating responsive and performant React 
          applications. This involves minimizing the number of network requests and ensuring data is fetched 
          only when necessary.
      */}
      {/* 
        Efficient Data Fetching------
        Efficient data fetching strategies can significantly reduce the load on the server and improve 
        application performance. Some key considerations include:

        Debouncing and Throttling: To avoid overwhelming the server with too many requests, especially 
        useful for search and autocomplete features.
        Stale-While-Revalidate: This strategy returns cached data immediately and updates it in the background. 
        This ensures that the user sees something quickly while data is updated.
        
        Caching Strategies---------
        Caching data reduces redundant network requests and improves user experience by providing quick 
        access to previously fetched data. Libraries like SWR (stale-while-revalidate) and React Query 
        provide powerful tools to handle these aspects effortlessly.
      */}

      {/* Using SWR---- */}
      {/* SWR is a React library that provides out-of-the-box support for data fetching, caching, and 
      revalidation. It follows the stale-while-revalidate pattern, ensuring your application always shows 
      the latest data on the screen. */}
      {/* <SWRExample /> */}

      {/* Using React Query */}
      {/* Tanstack Query FKA React Query is another powerful library for fetching, caching, and 
      synchronizing server data in React applications. It provides hooks for managing data fetching 
      and caching with minimal boilerplate.
      It was re-named from React Query to Tanstack Query because it is now a library available 
      for even more JavaScript frontend frameworks. */}
      
      {/* // Provide the client to your App */}
      {/* <QueryClientProvider client={queryClient}>
        <ReactQueryExample />
      </QueryClientProvider> */}



      {/* Optimizing Performance */}
      {/* Performance optimization is crucial when handling large datasets or complex operations in React 
      applications. Techniques such as memoization, lazy loading, and virtualization can significantly 
      improve performance. */}

      {/* Memoization */}
      {/* Memoization helps prevent unnecessary re-renders by caching the results of expensive calculations. 
      React’s useMemo and useCallback hooks can be used for this purpose.
      useMemo: Caches the result of an expensive calculation and returns the cached result 
      unless its dependencies change.
      useCallback: Returns a memoized version of the callback function that only changes if one 
      of its dependencies changes. */}
      
      {/* Lazy Loading */}
      {/* Lazy loading involves loading components only when they are needed. React’s React.lazy and 
      Suspense can be used to implement lazy loading, reducing initial load time and enhancing performance. */}
      {/* <LazyLoadingExample /> */}


      {/* Virtualization */}
      {/* Virtualization is a technique for rendering only a small portion of a large dataset that is visible 
      on the screen, improving performance. Libraries like react-virtualized or react-window can be used 
      to implement virtualization. */}
      {/* <VirtualizedList /> */}




      {/* --------------------------------------------- */}
      {/* Advanced Routing in React with React Router*/}
      {/* This concept page provides a comprehensive understanding of advanced routing techniques in React
      using React Router. It explores nested routing for hierarchical component relationships, protected 
      routes for managing authentication, and dynamic routing for handling variable paths and parameters. */}
      
      {/* Nested Routing */}
      {/* Nested routing enables you to reflect hierarchical relationships between components, 
      improving the structure and navigability of complex applications. Nested routes allow you 
      to render sub-components or child components within a parent component based on the current 
      URL path. This approach enables the UI to be more modular and easy to navigate. */}

      {/* Implementing Nested Routes */}
      {/* To implement nested routes in React Router, you use the <Route> component within a parent 
      route’s component to define child routes. The useRouteMatch hook helps to dynamically access 
      the current path and URL for the nested routes. */}
      {/* <NestedRoutesExample /> */}


      {/* Protected Routes and Authentication Flow */}
      {/* Protected routes ensure that only authenticated users can access certain parts of the application. 
      This involves creating a route wrapper component that checks for authentication status and redirects 
      users to a login page if they are not authenticated. This is useful for managing access to sensitive 
      information or user-specific content. */}
      {/* Creating Protected Routes */}
      {/* To create protected routes, you define a PrivateRoute component that conditionally renders the 
      desired component or redirects to the login page. */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element = {<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path = "dashboard" element = {<Dashboard />}/>
          </Route>

        </Routes>
      </BrowserRouter> */}


      {/* --------------------------------------------- */}
      {/* Testing in React */}
      {/* This concept page provides a comprehensive introduction to testing in React applications. 
      It covers the importance of testing, explores the different types of tests commonly used in React, 
      and introduces popular testing libraries and tools. Additionally, it walks through examples of 
      writing basic tests for components, hooks, and event handling, promoting best practices in 
      test-driven development (TDD). */}
      
    </>
  );
}

export default App;
