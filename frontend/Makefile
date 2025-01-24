.PHONY: install start build lint clean

# Install dependencies
install:
	@echo "Installing frontend dependencies..."
	npm install

# Start the development server
start:
	@echo "Starting the frontend development server..."
	npm start

# Build the production bundle
build:
	@echo "Building the frontend for production..."
	npm run build

# Lint the code
lint:
	@echo "Linting the code and fixing issues..."
	npx eslint "src/**/*.{js,jsx}" --fix

# Lint and fix issues
lint-fix:
	@echo "Linting the code and fixing issues..."
	npm run lint:fix

# Clean up build artifacts and dependencies
clean:
	@echo "Cleaning up the frontend..."
	rm -rf node_modules build

# Reset the project (clean + reinstall)
reset:
	@echo "Resetting the project..."
	make clean
	make install
