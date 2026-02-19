# @o2s/ui

Shared UI component library for O2S blocks, built on Radix UI and Tailwind CSS.

## Installation

```bash
npm install @o2s/ui
```

## Usage

### Components

Import components from the UI library:

```typescript
import { Button, Card, Input } from '@o2s/ui/components';
import { Container } from '@o2s/ui/components/Container';

export const MyComponent = () => {
    return (
        <Container>
            <Card>
                <Input placeholder="Enter text" />
                <Button>Submit</Button>
            </Card>
        </Container>
    );
};
```

### Theme

Import global styles and theme:

```typescript
// In your app's root layout or _app.tsx
import '@o2s/ui/globals';
import '@o2s/ui/theme';
```

### Hooks

Use UI hooks:

```typescript
import { useMediaQuery } from '@o2s/ui/hooks';

const isMobile = useMediaQuery('(max-width: 768px)');
```

### Providers

Use UI providers:

```typescript
import { ThemeProvider } from '@o2s/ui/providers/ThemeProvider';

export const App = () => {
    return (
        <ThemeProvider>
            {/* Your app */}
        </ThemeProvider>
    );
};
```

## Available Components

- `Button` - Button component
- `Card` - Card container
- `Input` - Text input
- `Select` - Select dropdown
- `Dialog` - Modal dialog
- `Toast` - Toast notifications
- `Accordion` - Accordion component
- `Avatar` - Avatar component
- `Checkbox` - Checkbox input
- `Dropdown` - Dropdown menu
- `Progress` - Progress bar
- `Radio` - Radio button
- `Switch` - Toggle switch
- `Tooltip` - Tooltip component
- And more...

## Peer Dependencies

- `react` ^19
- `react-dom` ^19
- `@types/react` ^19
- `@types/react-dom` ^19
- `tailwindcss` ^4

## Related Packages

- `@o2s/framework` - Core framework
- `@radix-ui/*` - Radix UI primitives
