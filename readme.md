# Quick Custom GSearch

> You can access the control panel to manage interval quickly, just one click.

## Screenshot

![Screenshot1](./capture.png)

## Installation

Please download and install from [Chrome WebStore](https://chrome.google.com/webstore/detail/quick-custom-gsearch/dcdmfmmmmpjgfaffnaokjpifnihmhaon?utm_source=chrome-app-launcher-info-dialog).

## Change Logs

- Please read [the release page](https://github.com/ktrysmt/quick-custom-gsearch/releases).

## Development

1. Define new version.

```sh
# edit the version field to upgrade semver.
${EDITOR} dist/manifest.json
```

2. Edit sources.

```sh
# edit some files...
${EDITOR} src/
```

3. Build for dev.

```sh
npm run build:dev
```

4. Run unit tests.

```sh
npm run test
```

5. Do integration test in your chrome.

```sh
# import unpackaged extension from source, direct the dist path;
# ${pwd}/dist/
```

6. Packing the dist dir if passed the test.

```sh
npm run build:prod
```
and zip the `dist` dir.

7. Upload it at the chrome developer site.

```sh
open https://chrome.google.com/webstore/devconsole/
```


## Author

[@ktrysmt](https://github.com/ktrysmt)

## License

MIT
