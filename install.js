module.exports = {
  run: [
    // Clone the main app repository
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/vladmandic/automatic app"
        ]
      }
    },
    // Start torch environment
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",
          path: "app"
        }
      }
    },
    // Install dependencies
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "uv pip install gradio devicetorch",
          "uv pip install -r requirements.txt"
        ]
      }
    },
  ]
};
