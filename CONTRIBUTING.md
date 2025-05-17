# Contributing to Open Self Service (O2S)

Thank you for considering contributing to Open Self Service (O2S)!
We welcome contributions from everyone in the community and appreciate your help in improving the project.

---

## 📌 Where to Start

1. **Read the [Documentation](https://www.openselfservice.com/docs/).**

    - This will help you understand the project structure, architecture, and how O2S works.

2. **Check for Open Issues.**

    - Browse the **[GitHub Issues](https://github.com/o2sdev/openselfservice/issues)** to find something you’d like to work on.

3. **Join the Discussion.**
    - If you have questions or want to propose a feature, open a **[GitHub Discussion](https://github.com/o2sdev/openselfservice/discussions)**.

---

## 🔧 How to Contribute

### 1. Clone the Repository

```
git clone https://github.com/o2sdev/openselfservice.git
cd openselfservice
```

### 2. Create a New Branch

Every change should be made in a new branch:

```
git checkout -b feature/your-feature-name
```

Use a meaningful branch name such as `fix/auth-bug` or `feature/new-dashboard`.

### 3. Follow the Code Style Guide

Our code style approach is described in the **[docs](https://www.openselfservice.com/docs/guides/code-style)**.

### 4. Commit with Conventional Commits

We follow **[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)** for clear and structured commit messages.

Examples:

```
feat: add new authentication flow
fix: resolve dashboard layout bug
docs: update API reference
```

If commits are related to specific apps you can structure the massage like so: `fix(frontend): fixing styles for Y component`

### 5. Create a Changeset

Before submitting your PR, create a changeset to document your changes:

```
npm run changeset 
```

This will prompt you to:

- Select the packages you've modified
- Choose the type of change (major, minor, patch)
- Write a brief description of your changes

For more information, see the [official Changeset documentation](https://github.com/changesets/changesets/blob/main/docs/intro-to-using-changesets.md).

### 6. Push and Open a Pull Request (PR)

```
git push origin feature/your-feature-name
```

Then, go to **[GitHub](https://github.com/o2sdev/openselfservice)** and open a **Pull Request (PR)**.

### 7. Get a Review

- Your PR will be reviewed by someone from our team.
- If changes are requested, address them and push new commits to your branch.

---

## ✅ Contribution Guidelines

### Issues

- Before opening a new issue, **check for existing issues**.
- Clearly describe the **problem, expected and actual behavior**.
- Provide **steps to reproduce** the issue if applicable.

### Pull Requests

- **Keep PRs focused.** Each PR should address **one** feature or bug.
- **Follow the project structure** as described in the [docs](https://www.openselfservice.com/docs/project-structure).

---

## 🏆 Recognizing Contributions

We will use the **[All Contributors](https://allcontributors.org/)** specification to recognize contributions of all kinds.
Once your PR is merged, we will add your name to the **Contributors list** in the repository.

---

## 📩 Questions?

For general questions, feel free to:

- Open a **[GitHub Discussion](https://github.com/o2sdev/openselfservice/discussions)**.
- Reach out on **[Twitter/X](https://twitter.com/openselfservice)** or **[contact@openselfservice.com](mailto:contact@openselfservice.com)**.

Thank you for contributing to Open Self Service!
