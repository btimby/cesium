VUE = $(shell find public src)
WEBOS = $(shell find webos)

$(WEBOS):

node_modules: package-lock.json
	npm i

com.cesium.app_0.0.1_all.ipk: node_modules webos/index.html $(WEBOS)
	ares-package webos

webos/index.html: $(VUE)
	npm run build
	touch webos/index.html

.PHONY: build
build: com.cesium.app_0.0.1_all.ipk

install-tv: build
	ares-install --device=livingroom com.cesium.app_0.0.1_all.ipk

install-emu: build
	ares-install --device=emulator com.cesium.app_0.0.1_all.ipk

run: install-tv
	ares-launch --device=livingroom com.cesium.app

emu: install-emu
	ares-launch --device=emulator com.cesium.app

.PHONY: dev
dev: node_modules
	npm run dev

clean:
	rm -f com.cesium.app_0.0.1_all.ipk
	rm -f webos/index.html webos/favicon.ico
	rm -rf webos/assets node_modules/
