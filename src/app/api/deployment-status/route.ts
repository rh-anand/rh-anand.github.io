import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // GitHub API endpoint for workflow runs
    const owner = 'rh-anand';
    const repo = 'rh-anand.github.io';
    const workflowId = 'deploy.yml';
    
    const url = `https://api.github.com/repos/${owner}/${repo}/actions/workflows/${workflowId}/runs?per_page=1`;
    
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'rh-anand-deployment-checker'
      }
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();
    const latestRun = data.workflow_runs[0];

    if (!latestRun) {
      return NextResponse.json({
        status: 'unknown',
        message: 'No workflow runs found',
        timestamp: new Date().toISOString()
      });
    }

    const status = latestRun.conclusion || latestRun.status;
    const isSuccess = latestRun.conclusion === 'success';
    const isFailure = latestRun.conclusion === 'failure';
    const isRunning = latestRun.status === 'in_progress';

    return NextResponse.json({
      status: status,
      isSuccess: isSuccess,
      isFailure: isFailure,
      isRunning: isRunning,
      runId: latestRun.id,
      runNumber: latestRun.run_number,
      createdAt: latestRun.created_at,
      updatedAt: latestRun.updated_at,
      htmlUrl: latestRun.html_url,
      message: isSuccess ? 'Deployment successful' : 
               isFailure ? 'Deployment failed' : 
               isRunning ? 'Deployment in progress' : 
               `Deployment status: ${status}`,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error checking deployment status:', error);
    return NextResponse.json({
      status: 'error',
      message: 'Failed to check deployment status',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
} 