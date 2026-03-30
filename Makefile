.PHONY: publish install brain-games lint lint-fix

install: #Установка зависимостей с версиями разработчика
	npm ci

brain-games: #Запустить файл brain-games.js из папки bin для приветствия
	node bin/brain-games.js

publish: #Запуск dry-run
	npm publish --dry-run

lint: #Запуск eslint для текущей директории, проверка на ошибки
	npm run lint

lint-fix: #Запускает eslint, исправляет синтаксис и другие ошибки, в текущей директории
	npm run lint-fix
