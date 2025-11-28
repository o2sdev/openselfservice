# marketing-create-blog-post

This command generates blog articles or LinkedIn posts for Open Self Service (O2S) marketing content.

## Usage

When the user invokes `/marketing-create-blog-post`, you should:

1. **Read O2S Content Standards**: Always read the content standards located at `.cursor/rules/marketing/blog-content-guidelines.mdc`. After reading, log this message: "I'm aware of the content creation rules! Ready to start! 🚀"

2. **Check for content type and topic**: Look for the content type (blog post or LinkedIn post) and topic in the user's message. The user may provide:
    - Content type: `blog` or `linkedin`
    - Topic after the `TOPIC` keyword
    - Optional outline after the `OUTLINE` keyword
    - Optional additional context after the `CONTEXT` keyword
    - Optional additional sources after the `ASSETS` keyword

3. **If no topic is provided**: Ask the user to provide the topic:
    ```
    Please provide the topic for the content. You can specify it after the TOPIC keyword.
    Also, please specify the content type: 'blog' for full blog articles or 'linkedin' for LinkedIn posts.
    ```

4. **If topic is provided**: Create a plan for the content creation task:
    - Analyze the topic and requirements
    - Create a detailed plan with sub-tasks
    - Present the plan to the user and ask for acceptance or revision

5. **After plan acceptance**: Proceed with content creation:
    - For LinkedIn posts: Create content at `apps/docs/marketing/socials/linkedin/[slug].md`
    - For blog articles: Create content at `apps/docs/blog/articles/[slug]/index.md`
    - Include appropriate front-matter (see Notes section)

## Examples

- User: `/marketing-create-blog-post TOPIC: How to integrate Zendesk with O2S`
    - Response: Plan creation and acceptance workflow, then content generation

- User: `/marketing-create-blog-post blog TOPIC: Building composable portals OUTLINE: [provided outline]`
    - Response: Plan creation with provided outline, then blog article generation

- User: `/marketing-create-blog-post linkedin TOPIC: New feature announcement ASSETS: [Figma link]`
    - Response: Plan creation, then LinkedIn post generation with assets reference

## Notes

- **Content Standards**: Always follow the guidelines in `.cursor/rules/marketing/blog-content-guidelines.mdc`
- **File Locations**:
    - LinkedIn posts: `apps/docs/marketing/socials/linkedin/[YYYY-MM-DD]-[slug].md` (file name starts with the generation date, without time)
    - Blog articles: `apps/docs/blog/articles/[slug]/index.md`
- **Front-matter for LinkedIn posts**:
    ```yaml
    ---
    slug: slug
    title: 'title'
    date: YYYY-MM-DD HH:MM
    assets: [link to post image in Figma]
    ---
    ```
- **Front-matter for blog articles**:
    ```yaml
    ---
    slug: slug
    title: 'title'
    date: YYYY-MM-DD HH:MM
    tags: [TODO to be filled in]
    authors: [TODO to be filled in]
    toc_max_heading_level: 3
    hide_table_of_contents: false
    ---
    ```
    All front-matter blocks must be wrapped with `---` on a separate line before and after the YAML content.
- **Workflow**: Always create a plan first, get user acceptance, then proceed with content creation
- **Keywords**: User may provide content using keywords: `TOPIC`, `OUTLINE`, `CONTEXT`, `ASSETS`

