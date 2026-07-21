# List available recipes
default:
    @just --list

# Install dependencies (only if missing)
install:
    [ -d node_modules ] || npm install

# Start the VitePress development server with hot reload
dev: install
    npm run docs:dev

# Build the static site into docs/.vitepress/dist
build: install
    npm run docs:build

# Preview a production build locally
preview: build
    npm run docs:preview
