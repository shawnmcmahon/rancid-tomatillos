# Troubleshooting Guide - Netlify Deployment

## 500 Error on Netlify

### Most Likely Causes:

1. **Build Configuration Issues**: Incorrect build command or publish directory
2. **Routing Problems**: React Router not properly configured for SPA
3. **Missing Dependencies**: Build-time errors or missing files
4. **Node Version Issues**: Incompatible Node.js version

### Solutions:

#### 1. Check Netlify Build Logs
- Go to your Netlify dashboard
- Check the "Deploys" tab
- Look for any build errors or warnings
- Check the build command and publish directory

#### 2. Verify Configuration Files
- Ensure `public/_redirects` contains: `/*    /index.html   200`
- Ensure `netlify.toml` has correct build settings
- Check that build command is: `npm run build`
- Check that publish directory is: `build`

#### 3. Test Build Locally
```bash
# Test the build process
npm run build

# Test the built files locally
npx serve -s build -l 3000
```

#### 4. Check for Build Errors
- Look for any console errors during build
- Check if all dependencies are properly installed
- Verify all imports are correct

#### 5. Common Netlify Issues

**Build Timeout**
- Add to `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "build"
  [build.environment]
    NODE_VERSION = "16"
  [build.processing]
    skip_processing = false
```

**Node Version Issues**
- Ensure Node 16+ is specified in `netlify.toml`
- Check if any dependencies require specific Node versions

**File Size Issues**
- Check if build files are too large
- Optimize images and assets

#### 6. Force Rebuild
```bash
# Trigger a new deployment
git add .
git commit -m "Fix Netlify deployment"
git push origin main
```

#### 7. Check Environment Variables
- Ensure no environment variables are missing
- Check if any API keys are required (not applicable for this project)

### Debugging Steps:

1. **Local Test**: Run `npm run build` locally to ensure it works
2. **Serve Locally**: Test the build with `npx serve -s build`
3. **Check Dependencies**: Ensure all imports are correct
4. **Console Logs**: Check browser console for JavaScript errors

### Current Status:
- ✅ Build process works locally
- ✅ Configuration files are correct
- ✅ Mock data implemented (no external API needed)
- ✅ React Router properly configured
- ✅ No external dependencies

### Next Steps:
1. Deploy the updated code with mock data
2. Check Netlify build logs for specific errors
3. Verify the site loads at `https://rancid-tomatillos-sm.netlify.com/`

### Netlify Configuration Summary:
```toml
[build]
  publish = "build"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "16"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

### Files to Verify:
- `public/_redirects` - Contains: `/*    /index.html   200`
- `netlify.toml` - Build configuration
- `package.json` - Dependencies and scripts
- `src/utilities/apiCalls.js` - Mock data (no external API calls) 