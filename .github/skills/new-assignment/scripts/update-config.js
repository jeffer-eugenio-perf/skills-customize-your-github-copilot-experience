#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function printUsage() {
  console.log('Usage: node update-config.js <id> "<title>" "<description>" [--config <path>]');
}

function parseArgs(argv) {
  const positional = [];
  let configPath = null;

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];

    if (arg === '--config' || arg === '-c') {
      const next = argv[i + 1];
      if (!next) {
        throw new Error('Missing value for --config');
      }
      configPath = next;
      i += 1;
      continue;
    }

    positional.push(arg);
  }

  return { positional, configPath };
}

try {
  const { positional, configPath } = parseArgs(process.argv.slice(2));

  if (positional.length < 3) {
    printUsage();
    process.exit(1);
  }

  const [id, title, description] = positional;
  const normalizedId = id.trim();
  const normalizedTitle = title.trim();
  const normalizedDescription = description.trim();

  if (!normalizedId || !normalizedTitle || !normalizedDescription) {
    throw new Error('Assignment id, title, and description cannot be empty.');
  }

  const repoRoot = path.resolve(__dirname, '../../../..');
  const configFile = configPath ? path.resolve(configPath) : path.join(repoRoot, 'config.json');

  if (!fs.existsSync(configFile)) {
    throw new Error(`Config file not found: ${configFile}`);
  }

  const raw = fs.readFileSync(configFile, 'utf8');
  const config = JSON.parse(raw);

  if (!config.assignments || !Array.isArray(config.assignments)) {
    config.assignments = [];
  }

  const existing = config.assignments.find((assignment) => assignment.id === normalizedId);
  if (existing) {
    throw new Error(`Assignment with id "${normalizedId}" already exists.`);
  }

  const dueDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  config.assignments.push({
    id: normalizedId,
    title: normalizedTitle,
    description: normalizedDescription,
    path: `assignments/${normalizedId}`,
    dueDate,
  });

  fs.writeFileSync(configFile, `${JSON.stringify(config, null, 2)}\n`);

  console.log(`Added assignment "${normalizedTitle}" to ${path.relative(repoRoot, configFile) || 'config.json'}`);
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}
