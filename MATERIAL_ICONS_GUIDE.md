# Using Material Icons in Your Application

## Installation Completed

Congratulations! Material Icons have been successfully installed and integrated into your application. Here's what was done:

1. Added the Material Icons stylesheet to `index.html`
2. Added `MatIconModule` to the main application module
3. Updated the existing icons page to include Material Icons examples

## How to Use Material Icons

You can use Material Icons in your templates in two ways:

### 1. Using the `<i>` tag:
```html
<i class="material-icons">home</i>
```

### 2. Using the `<span>` tag:
```html
<span class="material-icons">favorite</span>
```

## Available Icons

You can browse all available Material Icons at: https://fonts.google.com/icons

## Styling Icons

You can customize the appearance of Material Icons using CSS:

```html
<span class="material-icons" style="font-size: 36px; color: red;">home</span>
```

Or with CSS classes:
```css
.large-icon {
  font-size: 48px !important;
  color: #337ab7;
}
```

```html
<span class="material-icons large-icon">settings</span>
```

## Best Practices

- Use semantic and accessible icon names
- Maintain consistent sizing and coloring throughout your application
- Consider the context and meaning of icons for better UX
- Remember to provide text alternatives for accessibility when needed