# Vite + React + TypeScript + ESLint  

A boilerplate for a React + TypeScript app with Vite.js and ESLint (I'm using the standard style guide, you can change this).

## Usage  

Clone the repository and run `npm install` followed by `npm run dev` to start the server.  
Or run the following commands:  

```bash 
npx degit valentinbegnis/vite-reactts-eslint project-name  
cd project-name  
npm install
npm run dev
```

## VSCode  

1. Install the ESLint extension  
2. Enable **Code Actions On Save** by adding the following JSON to the `settings.json` file:  

    ```JSON
    {
      "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
      },
      "eslint.validate": [
        "javascript"
      ]
    }
    ```
