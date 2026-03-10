# @o2s/ui

Shared UI component library for O2S blocks, built on Radix UI and Tailwind CSS.

## Installation

```bash
npm install @o2s/ui
```

## Usage

### Components and Elements

Import components and elements from their respective paths:

```typescript
import { Button } from '@o2s/ui/elements/button';
import { Card } from '@o2s/ui/elements/card';
import { Input } from '@o2s/ui/elements/input';
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

Use the toast hook for notifications:

```typescript
import { useToast } from '@o2s/ui/hooks/use-toast';

const { toast } = useToast();
toast({ title: 'Success', description: 'Your action completed.' });
```

### Providers

Use GlobalProvider for app context (config, labels, locale, themes):

```typescript
import { GlobalProvider } from '@o2s/ui/providers/GlobalProvider';

export const App = ({ config, labels, locale, themes, currentTheme, children }) => {
    return (
        <GlobalProvider config={config} labels={labels} locale={locale} themes={themes} currentTheme={currentTheme}>
            {children}
        </GlobalProvider>
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
