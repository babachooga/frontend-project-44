### Hexlet tests and linter status:
[![Actions Status](https://github.com/babachooga/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/babachooga/frontend-project-44/actions)

#Установка зависимостей с версиями разработчика
install: 
	npm ci
#Запустить файл brain-games.js из папки bin для приветствия
brain-games:
	node bin/brain-games.js
#Запуск dry-run
publish:
	npm publish --dry-run