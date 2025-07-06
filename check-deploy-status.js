#!/usr/bin/env node

const https = require('https');

const owner = 'rh-anand';
const repo = 'rh-anand.github.io';
const workflowId = 'deploy.yml';
const url = `https://api.github.com/repos/${owner}/${repo}/actions/workflows/${workflowId}/runs?per_page=1`;

const options = {
  headers: {
    'User-Agent': 'gh-action-status-checker',
    'Accept': 'application/vnd.github.v3+json'
  }
};

https.get(url, options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      const run = json.workflow_runs && json.workflow_runs[0];
      if (!run) {
        console.log('No workflow runs found.');
        process.exit(1);
      }
      const status = run.conclusion || run.status;
      const htmlUrl = run.html_url;
      console.log(`Latest deploy run: #${run.run_number}`);
      console.log(`Status: ${status}`);
      console.log(`Started: ${run.created_at}`);
      console.log(`Updated: ${run.updated_at}`);
      console.log(`Details: ${htmlUrl}`);
      if (status === 'success') {
        console.log('✅ Deployment succeeded!');
        process.exit(0);
      } else if (status === 'failure') {
        console.log('❌ Deployment failed!');
        process.exit(2);
      } else {
        console.log('⏳ Deployment in progress or unknown status.');
        process.exit(3);
      }
    } catch (e) {
      console.error('Error parsing response:', e);
      process.exit(1);
    }
  });
}).on('error', (err) => {
  console.error('Request error:', err);
  process.exit(1);
}); 