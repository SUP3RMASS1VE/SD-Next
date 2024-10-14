module.exports = {
  run: [
    // Edit this step to customize the git repository to use
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/vladmandic/automatic app",
        ]
      }
    },
    // Delete this step if your project does not use torch
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          path: "app",                // Edit this to customize the path to start the shell from
          venv: "env",                // Edit this to customize the venv folder path
           
        }
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app",                // Edit this to customize the path to start the shell from
        message: "{{platform === 'win32' ? 'webui.bat --debug' : 'bash webui.sh --debug'}}",
        env: {
          SD_WEBUI_RESTARTING: 1,
        },
        path: "app",
        on: [{ "event": "/http:\/\/[0-9.:]+/", "done": true }]
      }
    },
    {
      "method": "fs.share",
      "params": {
        "drive": {
          "checkpoints": "app/models/Stable-diffusion",
          "clip": "app/models/clip",
          "clip_vision": "app/models/clip_vision",
          "configs": "app/models/configs",
          "controlnet": "app/models/control/controlnet",
          "embeddings": "app/models/embeddings",
          "loras": "app/models/Lora",
          "upscale_models": "app/models/ESRGAN",
          "vae": "app/models/vae",
          "vae_approx": "app/models/VAE-approx",
          "diffusers": "app/models/diffusers",
          "unet": "app/models/unet",
          "vae_approx": "app/models/VAE-approx",
          "hypernetworks": "app/models/hypernetworks",
          "gligen": "app/models/gligen",
          "style_models": "app/models/style_models",
          "photomaker": "app/models/photomaker",
          "outputs": "app/outputs",
          "layerdiffuse": "app/models/layerdiffuse"
        },
        "peers": [
          "https://github.com/cocktailpeanutlabs/automatic1111.git",
          "https://github.com/cocktailpeanutlabs/fooocus.git",
          "https://github.com/cocktailpeanutlabs/comfyui.git"
        ]
      }
    },
  ]
}

