# tristero-embed

This is a demo project showcasing how to embed the [Mach.Exchange](https://mach.exchange) cross-chain swap widget in a Next.js application. The widget allows users to perform seamless cross-chain swaps.

## Features

- 🔄 Cross-chain swaps
- 🎨 Customizable widget theme
- 📱 Responsive design
- 🚀 One-click deployment
- ⚙️ Environment variable configuration

## Quick Deploy

Deploy your own widget demo with Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fggarza5%2Ftristero-embed)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the widget in action.

## Widget Configuration

The widget URL can be configured using an environment variable:

- `NEXT_PUBLIC_WIDGET_URL`: The full URL for the embedded widget iframe (optional)

If not set, it defaults to:
```
https://app.mach.exchange/embed?chains=1,10,143,56,43114&showBranding=true&hideAIInput=true&logoUrl=https://upload.wikimedia.org/wikipedia/commons/3/3d/Injective_l.png
```

### Environment Variables

Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_WIDGET_URL=https://app.mach.exchange/embed?chains=1,10,143,56,43114&showBranding=true&hideAIInput=true&logoUrl=https://upload.wikimedia.org/wikipedia/commons/3/3d/Injective_l.png
```

The widget supports the following URL parameters:

- `chains`: Comma-separated list of chain IDs (e.g., `1,10,143,56,43114`)
- `showBranding`: Display Mach.Exchange branding (`true`/`false`)
- `hideAIInput`: Hide AI input field (`true`/`false`)
- `logoUrl`: Custom logo URL
- `themePrimary`: Primary color theme
- `themeBackground`: Background color theme

## Learn More

To learn more about Mach.Exchange and the widget integration:

- [Mach.Exchange Documentation](https://docs.mach.exchange)

## Support

For support and feedback, please visit our [Discord community](https://discord.gg/mach) or open an issue on GitHub.
