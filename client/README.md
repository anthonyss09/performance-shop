# Welcome to Performance Shop

Performance shop is an e-commerce NextJS front end application integrated with Shopify's storefront graphql api.

## Goals & Considerations

### Framework

The driving force of this implementation was to integrate Redux ToolKit with Shopify's storefront graphql api while taking advantage of Nextjs's powerful optimization tools to deliver a premium e-commerce application to client.

### Optimization

NextJS offers many tools for optimization most of which can be exploited out of the box with best practices and adherence to the thorough documentation provided by NextJS.

Some optimization from NextJS:

- ### Server Side Render
  NextJS's big feature is server side rendering, while this application takes advantage of ssr when available, in many instances client components are neccessary, for example when component render relyes on client side interaction or data fetch. Even in these cases of client side data updates NextJs will hydrate components rendering available server side static content and attach event listeners to the dom.
- ### Font Optimization
  next/font automatically optimizes custom fonts removing the need for external imports.
- ### Image Optimization
  NextJS provides an Image component providing size optimization, faster page loads, delivery of webmp format when available.
- ### Static Assets
  NextJs configures a path to static assets being served from public folder.
- ### SEO
  All previous optimization mentions help improve on of NextJS's big advantages which is out of the box configuration for SEO considerations.

## State Management & Data Flow

Redux is a powerful library for managing global state providing tools and patterns along with extensive & readable documentation guiding development towards best practices and testability.
Redux recommends writing logic with Redux Toolkit provides packages and functions that simplify Redux tasks and mitigates developmental pitfalls.

### Features

- ### Data Fetching & Caching

  RTK Query is a powerful data fetching and caching tool available within the RTK package. This application has heavily relyed upon the following main features listed in RTK Query's documentation.

  - Tracking loading state in order to show UI spinners.
  - Avoiding duplicate requests for the same data.
  - Optimistic updates to make the UI feel faster.
  - Managing cache lifetimes as the user interacts with the UI.

### Data Flow

## Testing

### Integration Tests

### Core Analytics & Web Vitals

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
