.PHONY:

#Установка зависимостей с версиями разработчика
install: 
	npm ci
#Запустить файл brain-games.js из папки bin для приветствия
brain-games:
	node bin/brain-games.js
#
publish:
	npm publish --dry-run