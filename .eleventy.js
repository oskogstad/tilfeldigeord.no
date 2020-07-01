module.exports = function (config) {
    // Layouts
    config.addLayoutAlias('base', 'base.njk');

    // Copy CSS
    config.addPassthroughCopy("src/static");

    // Add stats filters
    config.addFilter("count", function(collection) {
        return collection.length;
    });
    config.addFilter("combinations", function(collection) {
        return collection.length * (collection.length - 1);
    });
    config.addFilter("quote", function(collection) {
        return collection.map(w => `"${w}"`)
    });

    return {
        dir: {
            input: 'src',
            output: 'dist',
            includes: 'includes',
            layouts: 'layouts',
            data: 'data'
        },
        templateFormats: ['njk', 'md'],
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
        passthroughFileCopy: true
    }
};
