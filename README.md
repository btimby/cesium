# cesium
WebOS video player

This application is for LG webOS TVs. It is written using Vue+Buefy to provide a modern UI for watching video on your television.

At this time, the application is in development, so it is not easy to install or use. In the future, I may try to get it added to the LG content store.

I wrote this application because I want to watch video from providers that don't have their own app. I hope that this app can be adopted by the providers, or at least used as a starting point for them.

My ultimate goal would be that Cesium becomes *THE* app for these providers, rather than each having to build their own.

## development

Pull requests are welcome.

This application depends heavily on a library called `errokees` which handles keyboard navigation, which is needed to make the TV remote function https://github.com/btimby/errokees/.

If you need to modify how the keyboard handling is done, look there.

To develop on Cesium itself, you can either run the code locally or use an emulator or a TV. I suggest testing periodically on a TV as the emulator contains a newer browser than many TV's do. Thus code that works on the emulator might not work on a TV.

First, you need to install ares, which is a cli for communicating with both the emulator and a TV.

```bash
$ sudo npm i -g @webosose/ares-cli
```

### running locally

This application can be run like most javascript / vue applications using the webpack development server. Just use the provided `Makefile` target to launch it.

```bash
$ make dev
```

Then visit http://localhost:8080/ in your browser of choice. In case port 8080 is in use, the development server will increment the port number. Check the console output to determine the port to use.

### emulator / SDK

Following the instructions below to install the SDK and emulator. Note that virtualbox is necessary, so go ahead and install the first.

https://webostv.developer.lge.com/sdk/tools/emulator/installation/

```bash
$ make install-emu
$ make emu
```

### TV setup

On your TV, install the Developer app from LG content store. Sign up for an account with LG, see the instructions below.

https://webostv.developer.lge.com/develop/app-test/using-devmode-app/

Once you have an account, you can use the app to log into your account and enable development mode. Once that is done, you can use the `Makefile` to deploy, test and debug the app. Developer mode expires every two weeks (I think) and can be extended using ares.

```bash
$ make install-tv
$ make run
```
