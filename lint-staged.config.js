module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'npx tsc --noEmit',

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': (filenames) => [
    `npm run lint:fix ${filenames.join(' ')}`,
    `npm run prettier:fix ${filenames.join(' ')}`
  ],

  // Format MarkDown and JSON
  '**/*.(md|json)': (filenames) =>
    `npm run prettier:fix ${filenames.join(' ')}`,

  // this will Format CSS
  '**/*.(css)': (filenames) => `npm run stylelint:fix ${filenames.join(' ')}`
};
