#!/usr/bin/env node

const { execSync } = require('child_process')
const path = require('path')

// Parse command-line arguments
const args = process.argv.slice(2)
const fileArgIndex = args.indexOf('--f')

if (fileArgIndex === -1 || fileArgIndex === args.length - 1) {
  console.error('Usage: projectName --f path/to/file.ts')
  process.exit(1)
}

const filePath = args[fileArgIndex + 1]

// Execute Python script with the provided file path
try {
  const result = execSync(
    `python src/main.py --file ${path.resolve(filePath)}`,
    { encoding: 'utf-8' }
  )
  console.log(result)
} catch (error) {
  console.error('Error:', error.message)
  process.exit(1)
}
