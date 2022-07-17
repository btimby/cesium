VUE_SRC = $(shell find public src)
WEBOS_SRC = $(shell find webos)
TV=livingroom
EMU=emulator
APP=com.cesium.app

$(WEBOS):


node_modules: package-lock.json
	npm i


${APP}_0.0.1_all.ipk: node_modules webos/index.html $(WEBOS_SRC)
	ares-package webos


webos/index.html: $(VUE_SRC)
	npm run build
	touch webos/index.html


.PHONY: build
build: ${APP}_0.0.1_all.ipk


install-tv: build
	ares-install --device=${TV} ${APP}_0.0.1_all.ipk


install-emu: build
	ares-install --device=${EMU} ${APP}_0.0.1_all.ipk


run: install-tv
	ares-launch --device=${TV} ${APP}


emu: install-emu
	ares-launch --device=${EMU} ${APP}


.PHONY: debug-tv
debug: run
	ares-inspect --device=${TV} ${APP}


.PHONY: debug-emu
debug-emu: emu
	ares-inspect --device=${EMU} ${APP}


.PHONY: dev
dev: node_modules
	npm run dev


clean:
	rm -f ${APP}_*_all.ipk
	rm -f webos/index.html webos/favicon.ico
	rm -rf webos/assets node_modules/
