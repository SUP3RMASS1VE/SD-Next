module.exports = {
  daemon: true,
  run: [
    {
      method: "shell.run",
      params: {
        message: "{{platform === 'win32' ? 'webui.bat --use-cuda' : 'bash webui.sh --debug'}}",
        env: {
        },
        path: "app",
        on: [{ "event": "/http:\/\/[0-9.:]+/", "done": true }],
      }
    },
    {
      method: "local.set",
      params: {
        url: "{{input.event[0]}}"
      }
    }
  ]
}
