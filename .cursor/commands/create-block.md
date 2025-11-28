# create-block

This command generates a new block component using the Turbo generator.

## Usage

When the user invokes `/create-block`, you should:

1. **Check if a block name was provided**: Look for a block name in the user's message after `/create-block`. The name can be provided in various formats:
    - `/create-block ContactForm`
    - `/create-block contact-form`
    - `/create-block MyNewBlock`

2. **If no name is provided**: Ask the user to provide the block name:

    ```
    Please provide the name of the block you want to create. For example: ContactForm
    ```

3. **If a name is provided**: Execute the npm command to generate the block:

    ```bash
    npm run generate block -- --args <BlockName>
    ```

    Replace `<BlockName>` with the provided name (use PascalCase format if the user provided kebab-case or other formats).

## Examples

- User: `/create-block ContactForm`
    - Execute: `npm run generate block -- --args ContactForm`

- User: `/create-block my-new-block`
    - Execute: `npm run generate block -- --args MyNewBlock` (convert to PascalCase)

- User: `/create-block`
    - Response: "Please provide the name of the block you want to create. For example: ContactForm"

## Notes

- The block name should be in PascalCase format when passed to the generator
- The generator will create all necessary files for the block (api-harmonization, frontend, sdk)
- After generation, the block will be automatically registered in the necessary files
- See `AGENTS.md` for more information about blocks and the generation process
