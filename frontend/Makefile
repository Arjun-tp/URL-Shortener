.PHONY: install start start-backend start-frontend build clean

install:
	@echo "Installing dependencies..."
	cd backend && npm install
	cd frontend && npm install

start: start-backend start-frontend

start-backend:
	@echo "Starting backend..."
	cd backend && npm run dev

start-frontend:
	@echo "Starting frontend..."
	cd frontend && npm start

build:
	@echo "Building frontend..."
	cd frontend && npm run build

clean:
	@echo "Cleaning up..."
	cd backend && rm -rf node_modules
	cd frontend && rm -rf node_modules dist
