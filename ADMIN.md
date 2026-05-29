# Website Admin

This repository includes a local admin tool for updating the personal website.

## Start

Open PowerShell in this folder and run:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\start-admin.ps1
```

Then open:

```text
http://localhost:8099
```

Keep the PowerShell window open while editing. Press `Ctrl+C` to stop the admin server.

## Edit

- `Profile`: name, contact information, bio.
- `Research`: research text and research image path.
- `Projects`: one project per line.
- `Services`: one row per service item, separated by `|`.
- `Recent News`: markdown table; rows with `Show = yes` appear on the homepage.
- `Publications`: advanced editor for `publications.js`.

Click `Save & Apply` to write changes to local files and update `index.html`.

## Publish

Click `Publish to GitHub` in the admin page, or run:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\deploy-github-pages.ps1 -Username snailD -RepoName snailD.github.io -TokenPath snailD.github-token
```

The admin runs only on your computer. Do not publish GitHub tokens or paste them into browser pages.
