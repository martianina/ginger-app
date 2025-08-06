#!/bin/bash

# Horizon Pro Auth Components Installation Script
echo "🚀 Installing Horizon Pro Auth Components..."

# Check if we're in the right directory
if [ ! -d "src" ]; then
    echo "❌ Error: Please run this script from your project root directory"
    exit 1
fi

# Create backup of existing auth components if they exist
if [ -d "src/app/auth" ]; then
    echo "📦 Creating backup of existing auth components..."
    cp -r src/app/auth src/app/auth.backup.$(date +%Y%m%d_%H%M%S)
fi

# Copy auth pages
echo "📁 Copying auth pages..."
cp -r horizon-auth-components/src/app/auth src/app/

# Copy components
echo "🧩 Copying components..."
cp -r horizon-auth-components/src/components/* src/components/

# Copy contexts
echo "🔧 Copying contexts..."
cp -r horizon-auth-components/src/contexts/* src/contexts/

# Copy utils
echo "⚙️ Copying utilities..."
cp -r horizon-auth-components/src/utils/* src/utils/

# Copy types
echo "📝 Copying types..."
cp -r horizon-auth-components/src/types/* src/types/

# Copy variables
echo "📊 Copying variables..."
cp -r horizon-auth-components/src/variables/* src/variables/

# Copy routes
echo "🛣️ Copying routes..."
cp horizon-auth-components/src/routes.tsx src/

# Copy images
echo "🖼️ Copying images..."
cp -r horizon-auth-components/src/public/img/* public/img/

echo "✅ Installation complete!"
echo ""
echo "📋 Next steps:"
echo "1. Install required dependencies:"
echo "   npm install react-icons react-custom-scrollbars-2 react-apexcharts react-pin-input @chakra-ui/accordion"
echo ""
echo "2. Make sure your Tailwind config includes Horizon UI theme variables"
echo ""
echo "3. The auth pages are now available at:"
echo "   - /auth/sign-in/default"
echo "   - /auth/sign-in/centered"
echo "   - /auth/sign-up/default"
echo "   - /auth/sign-up/centered"
echo "   - /auth/forgot-password/default"
echo "   - /auth/forgot-password/centered"
echo "   - /auth/verification/default"
echo "   - /auth/verification/centered"
echo "   - /auth/lock/default"
echo "   - /auth/lock/centered" 