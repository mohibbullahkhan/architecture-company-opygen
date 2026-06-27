const fs = require('fs');
const path = require('path');

const dirs = ['architects', 'blog', 'categories', 'projects'];
for (const d of dirs) {
  const routePath = path.join('app/api', d, 'route.ts');
  if (fs.existsSync(routePath)) {
    let content = fs.readFileSync(routePath, 'utf8');
    
    // Change 'const name: Type[] = [' to 'export const name: Type[] = ['
    content = content.replace(/const (architects|blogPosts|categories|projects):/g, 'export const $1:');
    
    // Save to data.ts
    const dataPath = path.join('app/api', d, 'data.ts');
    fs.writeFileSync(dataPath, content.replace(/export async function GET(.|\n)*/, ''));
    
    // Rewrite route.ts to import from data.ts
    let importName = d;
    if (d === 'blog') importName = 'blogPosts';
    const newRoute = `import { NextResponse } from 'next/server';\nimport { ${importName} } from './data';\n\nexport async function GET() {\n  return NextResponse.json(${importName});\n}\n`;
    fs.writeFileSync(routePath, newRoute);
  }

  // Update [id]/route.ts
  const idRoutePath = path.join('app/api', d, '[id]', 'route.ts');
  if (fs.existsSync(idRoutePath)) {
    let idContent = fs.readFileSync(idRoutePath, 'utf8');
    idContent = idContent.replace(/'\.\.\/route'/g, "'../data'");
    fs.writeFileSync(idRoutePath, idContent);
  }
}

// Update projects/related/route.ts
const relatedRoutePath = path.join('app/api', 'projects', 'related', 'route.ts');
if (fs.existsSync(relatedRoutePath)) {
  let relatedContent = fs.readFileSync(relatedRoutePath, 'utf8');
  relatedContent = relatedContent.replace(/'\.\.\/route'/g, "'../data'");
  fs.writeFileSync(relatedRoutePath, relatedContent);
}

console.log('Refactoring complete.');
