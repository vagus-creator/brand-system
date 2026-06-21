import StyleDictionary from 'style-dictionary';

// --- CSS Custom Properties (Light) ---
const sdLight = new StyleDictionary({
  source: [
    'src/primitives/**/*.json',
    'src/semantic/light.json',
  ],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/',
      files: [
        {
          destination: 'tokens-light.css',
          format: 'css/variables',
          options: {
            selector: ':root, [data-theme="light"]',
            outputReferences: true,
          },
        },
      ],
    },
  },
});

// --- CSS Custom Properties (Dark) ---
const sdDark = new StyleDictionary({
  source: [
    'src/primitives/**/*.json',
    'src/semantic/dark.json',
  ],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/',
      files: [
        {
          destination: 'tokens-dark.css',
          format: 'css/variables',
          options: {
            selector: '[data-theme="dark"]',
            outputReferences: true,
          },
        },
      ],
    },
  },
});

// --- JavaScript/JSON export ---
const sdJS = new StyleDictionary({
  source: [
    'src/primitives/**/*.json',
    'src/semantic/light.json',
  ],
  platforms: {
    js: {
      transformGroup: 'js',
      buildPath: 'dist/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/es6',
        },
        {
          destination: 'tokens.json',
          format: 'json/nested',
        },
      ],
    },
  },
});

// --- Tailwind CSS Config export ---
const tailwindFormat = {
  name: 'tailwind/config',
  format: ({ dictionary }) => {
    const tokens = dictionary.allTokens;
    const colors = {};
    const spacing = {};
    const borderRadius = {};
    const boxShadow = {};
    const fontFamily = {};
    const fontSize = {};
    const fontWeight = {};

    tokens.forEach((token) => {
      const path = token.path.join('.');

      if (path.startsWith('color.')) {
        const key = token.path.slice(1).join('-');
        colors[key] = token.value;
      } else if (path.startsWith('spacing.')) {
        spacing[token.path[1]] = token.value;
      } else if (path.startsWith('radius.')) {
        borderRadius[token.path[1]] = token.value;
      } else if (path.startsWith('shadow.')) {
        boxShadow[token.path[1]] = token.value;
      } else if (path.startsWith('font.family.')) {
        fontFamily[token.path[2]] = token.value;
      } else if (path.startsWith('font.size.')) {
        fontSize[token.path[2]] = token.value;
      } else if (path.startsWith('font.weight.')) {
        fontWeight[token.path[2]] = token.value;
      }
    });

    return `/** Auto-generated Tailwind config from design tokens. Do not edit manually. */
export default {
  colors: ${JSON.stringify(colors, null, 4)},
  spacing: ${JSON.stringify(spacing, null, 4)},
  borderRadius: ${JSON.stringify(borderRadius, null, 4)},
  boxShadow: ${JSON.stringify(boxShadow, null, 4)},
  fontFamily: ${JSON.stringify(fontFamily, null, 4)},
  fontSize: ${JSON.stringify(fontSize, null, 4)},
  fontWeight: ${JSON.stringify(fontWeight, null, 4)},
};
`;
  },
};

const sdTailwind = new StyleDictionary({
  source: ['src/primitives/**/*.json'],
  platforms: {
    tailwind: {
      transformGroup: 'js',
      buildPath: 'dist/',
      files: [
        {
          destination: 'tailwind-tokens.mjs',
          format: 'tailwind/config',
        },
      ],
    },
  },
});

sdTailwind.registerFormat(tailwindFormat);

// Build all
console.log('🎨 Building design tokens...');
await sdLight.buildAllPlatforms();
console.log('  ✓ Light theme CSS');
await sdDark.buildAllPlatforms();
console.log('  ✓ Dark theme CSS');
await sdJS.buildAllPlatforms();
console.log('  ✓ JavaScript/JSON');
await sdTailwind.buildAllPlatforms();
console.log('  ✓ Tailwind config');
console.log('✅ All tokens built successfully!');
