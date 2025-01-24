# Define variables
SHELL := /bin/bash
NODE_BIN := node_modules/.bin

# Commands
.PHONY: install start build clean lint test

install:
	@echo "Installing dependencies..."
	npm install

start:
	@echo "Starting the app..."
	npm start

build:
	@echo "Building the app..."
	npm run build

clean:
	@echo "Cleaning up..."
	rm -rf node_modules dist

lint:
	@echo "Linting the code..."
	npm run lint || echo "Linting issues found!"