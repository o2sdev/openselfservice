---
sidebar_position: 500
---

# Tech stack

O2S is based on several frontend-related technologies in order to provide a seamless server-rendered application with reusable and generic components, as well as to make tech stacks of API Harmonization server and Frontend itself as similar as possible.

---

## [TypeScript](https://www.typescriptlang.org/)

JavaScript is a language with dynamic types, which means that variable's type is decided during runtime. This may lead to unexpected errors where e.g. API returns data of different type than expected from JavaScript code.

In order to minimize this problem, TypeScript was chosen as a language that is used to build the JavaScript code due to:

- very high popularity and community,
- makes the code more clear and understandable,
- makes the applications more error-resistant by introducing strong types,
- allows to use modern and advanced JavaScript features by transpiling the code.

---

## Frontend-related

### [React](https://react.dev/)

As the main technology for the frontend development, React was chosen as it is lightweight, relatively easy to develop in, and has a large community and a large number of available components/libraries.

### [Next.js](https://nextjs.org/)

To provide a seamless server-rendered application Next.js was chosen as it:

- provides a very good performance, with minimal "blank page" experience,
- can be very well optimized fo SEO,
- has very large community and is being constantly developed with new/better features,
- provides very good developer experience making development easier and faster.

### [Auth.js](https://authjs.dev/)

In order to make the authentication process generic ad easy to customize, we have decided to base it on Auth.js.

- it provides seamless integration with Next.js, supporting both server-side and client-side authentication,
- offers a highly extensible and adaptable API, making it easy to customize authentication flows,
- has built-in support for various authentication providers (e.g., OAuth, credentials, etc.),
- handles secure session management, reducing the risk of implementation errors,
- aligns well with Next.js’s server-rendering capabilities and ensures optimal performance and scalability.

### [Tailwind](https://tailwindcss.com/)

Out of many different styling approaches, we have decided on using Tailwind mostly due to its popularity among the developers - both "pure" frontend ones, and more full-stack oriented ones, as well as its ease of use, especially when it comes to defining layouts.

- Tailwind’s utility classes help reduce the need to switch between CSS and HTML/JSX code, which speeds up development and improves workflow,
- Tailwind has a growing ecosystem, with tailor-made plugins, templates, and integrations available, making it highly extendable and efficient,
- Tailwind automatically removes unused styles during the build process, resulting in smaller CSS bundles and faster loading times.

### [shadcn/ui](https://ui.shadcn.com/)

For the most generic and reusable UI components, a dedicated UI library was created, that is kept separate from the main frontend application as an internal package.

We have decided to base this library on one of the most popular UI kits that is shadcn/ui which provides a wide range of themable and accessible components.

:::note
As it is [mentioned in the official docs](https://ui.shadcn.com/docs), shadcn/ui is not a component library itself, and instead it is a tool that we used to create our own components.
:::

---

## Backend-related

### [Nest.js](https://nestjs.com/)

The API layer can be implemented using various tools, either using ones low-level (like Express.js) or high-level (like Nest.js).

Nest.js was chosen as a framework providing architecture for BFF layer, where the controllers with endpoints for the frontend application are defined.

While Nest.js is a very thorough backend framework, we use only a smaller set of its features, like:

- defining endpoints,
- data fetching from APIs,
- data transformations and aggregations,
- role-based access.

### [RxJS](https://rxjs.dev/)

Because JavaScript operations to fetch data are asynchronous, and in order to provide all necessary data for the frontend it's required to query multiple APIs, there needs to be a way to manage requests to:

- run several requests in parallel and wait untill all are resolved,
- run several requests in series, where next request depends on data from previous one,
- aggregate data from all resolved requests.

To achieve that, RxJS is used which provides a framework based on Observer pattern.
