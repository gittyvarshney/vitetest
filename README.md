## Deployment for Vite + Typescript 

Need to Deploy the static site to github pages
Follow the instructions as given below:

### Instructions

#### Add basePath to vite.config.ts as  
```
export default defineConfig({
  base: '/vitetest/',
  plugins: [react()],
})
```

#### Run the Build
```
npm run build
```

#### Add the dist folder to git
```
git add dist -f
```

#### Commit the Changes
```
git commit -m "my changes for build"
```

#### push the subTree
```
git subtree push --prefix dist origin gh-pages
```