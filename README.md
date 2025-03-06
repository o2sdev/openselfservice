# Open Self Service (O2S)

**Framework for building composable customer self-service portals.**

**Open Self Service** is an open-source development kit that simplifies the creation of self-service frontend applications by integrating multiple headless APIs into a scalable frontend.
Its flexibility allows for many customizations and lets you build various types of composable frontends.

## 🚀 Key Features

- **Composable Frontend** – Robust Next.js-based frontend including basic customer portal pages.
- **API Harmonization Server** – **Integration layer** for data aggregation, orchestration and normalization. Provides vendor lock-in safeness and better maintainability.
- **TypeScript SDK** – Easily interact with the Harmonization Server in the frontend app or any web, mobile, other TS-based apps.
- **Pre-built Integrations** – Ready integrations so that you can set up your solution faster.
- **Extensibility** – Customize UI components, add new pages, add new API integrations, adapt to your needs.

## 📖 Documentation

Check out the **[full documentation](https://www.openselfservice.com/docs)** to get started.

## 🛠️ Installation

To set up a new O2S project, use the `create-o2s-app` starter and follow the installation steps in the documentation.

```sh
npx create-o2s-app my-project
cd my-project
npm install
npm run dev
```

## 🔧 Running the Project

To start all services in **development mode**, use:

```sh
npm run dev
```

TODO: change names

To run individual components:

```sh
cd apps/api-harmonization && npm run dev  # Start API Harmonization Server
cd apps/frontend && npm run dev  # Start Next.js Frontend
```

For more details, check the **[Running the project](https://www.openselfservice.com/docs/running-the-project)** guide.

## 🏗️ Project Structure

O2S follows a **monorepo structure** using **Turborepo** for managing apps and internal packages.

TODO: change names

```sh
/apps
  /frontend             # Next.js frontend
  /api-harmonization    # API Harmonization Server (NestJS)

/packages
  /ui    # UI component library (shadcn/ui, Tailwind)
```

For a detailed breakdown, visit **[Project structure](https://www.openselfservice.com/docs/project-structure)**.

## 🔌 Available Integrations

O2S includes pre-built integrations and allows you to extend functionality as needed.

| Integration                | Status         |
| -------------------------- | -------------- |
| **StrapiCMS**              | ✅ Available   |
| **NextAuth**               | ✅ Available   |
| **Redis cache**            | ✅ Available   |
| **Search (Elasticsearch)** | 🔄 In progress |
| **CRM (TBD)**              | 🔄 Planned     |
| **ERP / Commerce (TBD)**   | 🔄 Planned     |

## 🔥 Why Open Self Service?

- **Fully composable** – Build customer portals without backend constraints.
- **Headless & API-first** – Integrate multiple services seamlessly.
- **Future-proof** – Swap backends without breaking the frontend.
- **Modern stack** – Built with **Next.js, shadcn/ui, TypeScript, NestJS**.

## 🤝 Contributing

We welcome contributions!
If you’d like to contribute, please check the **[Contribution Guide](CONTRIBUTING.md)**.

## 📩 Stay Updated

- Website: [openselfservice.com](https://www.openselfservice.com)
- Twitter/X: [@openselfservice](https://twitter.com/openselfservice)
- GitHub Discussions: [Join the conversation](https://github.com/orgs/o2sdev/discussions)

## 📜 License

Open Self Service is **open-source software** licensed under the **MIT License**.

## Built by Hycom

O2S is maintained as an open-source project by **[hycom.digital](https://hycom.digital)** - a Polish tech company that delivers enterprise digital self-service and e-commerce solutions.
