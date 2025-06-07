[![Open Self Service - open-source development kit for composable Customer Portals](apps/docs/static/img/o2s-gh-cover.png)](https://www.openselfservice.com)

# Open Self Service (O2S)

**Framework for building composable customer self-service portals.**

**Open Self Service** is an open-source development kit that simplifies the creation of self-service frontend applications by integrating multiple headless APIs into a scalable frontend.
Its flexibility allows for many customizations and lets you build various types of composable frontends.

## 🚀 Key Features

- **Composable** – In short: **API-agnostic**. Compose customer experience by combining multiple "backend capabilities" into seamless, fully decoupled frontend.
- **Next.js Frontend Starter** – Robust Next.js-based frontend including basic customer portal pages and content management capabilities.
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
npm run dev
```

## 🔧 Running the Project

To start all services in **development mode**, use:

```sh
npm run dev
```

To run individual components:

```sh
cd apps/api-harmonization && npm run dev  # Start API Harmonization Server
cd apps/frontend && npm run dev  # Start Next.js Frontend
```

For more details, check the **[Running the project](https://www.openselfservice.com/docs/getting-started/running-locally)** guide.

## 🏗️ Project Structure

O2S follows a **monorepo structure** using **Turborepo** for managing apps and internal packages.

```sh
/apps
  /frontend             # Next.js frontend
  /api-harmonization    # API Harmonization Server (NestJS)

/packages
  /ui    # UI component library (shadcn/ui, Tailwind)
```

For a detailed breakdown, visit **[Project structure](https://www.openselfservice.com/docs/getting-started/project-structure)**.

## 🖥️ Demo app
[![O2S Demo](apps/docs/static/img/o2s-gh-demo.png)](https://demo.openselfservice.com)

## 🔌 Available Integrations

O2S includes pre-built integrations and allows you to extend functionality as needed.

| Integration type/area | Status                                                                                                                                   |
|-----------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| **CMS**               | ✅ **StrapiCMS** - available<br/> 🔄 **Contentful** - in progress                                                                         |
| **IAM**               | ✅ **Auth.js** - available<br/> ✅ **Keycloak** - available (not part of O2S, contact us for details)                                      |
| **Cache**             | ✅ **Redis** - available                                                                                                                  |
| **Search**            | ✅ **Algolia** - available                                                                                                                |
| **CRM**               | ✅ **SurveyJS** - ticket submission handling<br/> 🔄 **other CRM solutions** - planned                                                    |
| **ERP**               | ✅ **Medusa** - via Medusa plugin adding ERP-like features<br/>🔄 **SAP S/4HANA** - In progress (not part of O2S, contact us for details) |
| **Commerce**          | 🔄 **Medusa** - in progress (basic product information, other areas TBD)                                                                 |


## 🔥 Why Open Self Service?

- **Fully composable** – Integrate multiple backend services and build your solution by combining their capabilities.
- **Headless & API-first** – Integrate multiple services seamlessly.
- **Future-proof** – Build backend-agnostic customer portals. Swap backends without breaking the frontend.
- **Modern stack** – Built with **Next.js, shadcn/ui, TypeScript, NestJS**.

## 🤝 Contributing

We welcome contributions!
If you’d like to contribute, please check the **[Contribution Guide](CONTRIBUTING.md)**.

## Contact e-mail
[contact@openselfservice.com](mailto:contact@openselfservice.com)

## 📩 Stay Updated

- Website: [openselfservice.com](https://www.openselfservice.com)
- LinkedIn: [/company/open-self-service/](https://www.linkedin.com/company/open-self-service/)
- Twitter/X: [@openselfservice](https://twitter.com/openselfservice)
- Discord: [Join our community](https://discord.gg/4R568nZgsT)
- GitHub Discussions: [Join the conversation](https://github.com/o2sdev/openselfservice/discussions)

## 📜 License

Open Self Service is **open-source software** licensed under the **MIT License**.

## Built by Hycom

O2S is maintained as an open-source project by **[hycom.digital](https://hycom.digital)** - a Polish tech company that delivers enterprise digital self-service and e-commerce solutions.
