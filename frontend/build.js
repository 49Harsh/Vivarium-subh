// Simple script to test build process
import { execSync } from 'child_process';

try {
  // Clean up previous builds
  console.log('Cleaning up previous builds...');
  execSync('rm -rf dist', { stdio: 'inherit' });
  
  // Run build
  console.log('Building application...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Test preview
  console.log('You can test the build with: npm run preview');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
} 