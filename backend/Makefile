.PHONY: install start dev test lint clean

install:
	@echo "Installing backend dependencies..."
	npm install

start:
	@echo "Starting the backend..."
	node -r dotenv/config server/index.js

dev:
	@echo "Starting backend in development mode..."
	npx nodemon server/index.js

test:
	@echo "Running tests..."
	npx jest

lint:
	@echo "Linting code..."
	npx eslint . --fix

clean:
	@echo "Cleaning up..."
	rm -rf node_modules
