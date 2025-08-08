#!/bin/bash

# Post-create script for devcontainer setup
# This script runs after the container is created

echo "🚀 Running post-create setup..."

# Install Claude Code globally
echo "📦 Installing Claude Code..."
npm install -g @anthropic-ai/claude-code

# Install npm dependencies for the project
if [ -f "package.json" ]; then
    echo "📦 Installing npm dependencies..."
    npm install
else
    echo "⚠️  No package.json found, skipping npm install"
fi

echo "🎉 Post-create setup complete!"