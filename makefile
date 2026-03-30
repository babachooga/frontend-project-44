.PHONY: publish install brain-games

#Установка зависимостей с версиями разработчика
install: 
	npm ci
#Запустить файл brain-games.js из папки bin для приветствия
brain-games:
	node bin/brain-games.js
#Запуск dry-run
publish:
	npm publish --dry-run
#Запуск eslint для текущей директории, проверка на ошибки
lint:
	npm run lint
#Запускает eslint, исправляет синтаксис и другие ошибки, в текущей директории
lint-fix:
	npm run lint-fix