import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          src="https://kit.fontawesome.com/d6344ca0b7.js"
          crossorigin="anonymous"
        >
        </script>
        <title>Chatx Pro</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="bg-[#fdf8fb]">
        <Component />
      </body>
    </html>
  );
}
