import { Controller, Get } from '@nestjs/common';

@Controller()
export class MainController {
  @Get()
  rootPage() {
    return `<!doctype html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="utf-8" />
        <title>f-api</title>
        <style media="screen">
          :root {
            --bg: hsl(250, 24%, 9%);
            --fg: hsl(0, 0%, 100%);
            --pink: hsl(270, 60%, 52%);
            --secondaryBg: hsl(250, 21%, 11%);
            --green-700: hsl(152, 38%, 70%);
            --gray-600: hsl(246, 6%, 65%);
            --gray-200: hsl(246, 11%, 22%);
          }

          html,
          body {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow: hidden;
            background-color: var(--secondaryBg);
            color: var(--fg);
            font-family:
              -apple-system,
              BlinkMacSystemFont,
              Segoe UI,
              Roboto,
              Oxygen-Sans,
              Ubuntu,
              Cantarell,
              Helvetica Neue,
              sans-serif,
              Apple Color Emoji,
              Segoe UI Emoji,
              Segoe UI Symbol;
          }
    
          main {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 16px;
            height: 100%;
          }
    
          h1 {
            font-size: 32px;
            font-weight: 700;
            margin: 1rem;
          }

          p {
            font-size: 24px;
            font-weight: 500;
            margin: 1rem;
          }
    
          a {
            font-size: 16px;
            font-weight: 500;
            margin: 1rem;
            appearance: none;
            display: flex;
            align-items: center;
            text-decoration: none;
            color: var(--gray-600);
            padding: 12px 24px;
            border-radius: 6px;
          }
    
          main a:hover {
            background-color: var(--gray-200);
          }

          div {
            background-color: var(--bg);
            border-radius: .75rem;
            border: 0.1rem solid;
            border-color: var(--gray-200);
            border-style: solid;
            border-top-style: solid;
            border-right-style: solid;
            border-bottom-style: solid;
            border-left-style: solid;
          }

          hr {
            background-color: var(--gray-200);
            height: 1px; 
            border: 0;
          }

          p {

            color: var(--gray-600);
            margin: 1rem;
          }

          ul {
            margin: 1rem;
          }

          .header {
            display: block;
          }

          .image-container {
            background: /*url(https://.jpg)*/ no-repeat;
            background-size: cover;
          }

          .image-container:before {
            content:"";
            position: absolute;
            top:0;
            right:0;
            left:0;
            bottom:0;
            background:
              radial-gradient(farthest-side,var(--gray-200) 10%,transparent 10%) 
              0 0/
              20px 20px;
          }

          .abs {
            position: absolute;
          }
        </style>
      </head>
    
      <body>
        <main>
        <div class="image-container"></div>
        <div class="abs"">
          <h1 class="header">f-api is running</h1>
          <hr></hr>
          <p>Data:</p>
          <ul>
            <li><a href="/app/posts">Posts</a></li>
            <li><a href="/app/get">Hw</a></li>
          </ul>
        </div>
        </main>
      </body>
    </html>`;
  }
}
