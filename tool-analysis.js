const fs = require('fs');
const path = require('path');

// Function to extract categories and titles from a JSON file
function analyzeAutomations(filePath) {
    try {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        const categories = data.categories;
        
        console.log(`\nAnalyzing: ${path.basename(filePath)}`);
        console.log('----------------------------------------');
        
        categories.forEach(category => {
            // Each category is an object with a single key (the category name)
            const categoryName = Object.keys(category)[0];
            const automations = category[categoryName];
            
            console.log(`\nCategory: ${categoryName}`);
            console.log('Automations:');
            automations.forEach(automation => {
                console.log(`  - ${automation.title}`);
            });
        });
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
    }
}

// Analyze both files
const files = [
    path.join(__dirname, 'backend', 'seeders', 'data.json'),
    path.join(__dirname, 'backend', 'seeders', 'general-automations.json')
];

console.log('Automation Analysis Tool');
console.log('=======================');

files.forEach(file => {
    analyzeAutomations(file);
});

console.log('\nTo remove this analysis tool, simply delete the tool-analysis.js file.');
