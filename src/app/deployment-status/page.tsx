'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, CheckCircle, XCircle, Clock, AlertCircle } from 'lucide-react';

interface DeploymentStatus {
  status: string;
  isSuccess: boolean;
  isFailure: boolean;
  isRunning: boolean;
  runId: number;
  runNumber: number;
  createdAt: string;
  updatedAt: string;
  htmlUrl: string;
  message: string;
  timestamp: string;
}

export default function DeploymentStatusPage() {
  const [status, setStatus] = useState<DeploymentStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStatus = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/deployment-status');
      const data = await response.json();
      
      if (response.ok) {
        setStatus(data);
      } else {
        setError(data.message || 'Failed to fetch status');
      }
    } catch (err) {
      setError('Network error while fetching status');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
    
    // Auto-refresh every 30 seconds
    const interval = setInterval(fetchStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  const getStatusIcon = () => {
    if (loading) return <RefreshCw className="w-8 h-8 animate-spin text-blue-400" />;
    if (status?.isSuccess) return <CheckCircle className="w-8 h-8 text-green-400" />;
    if (status?.isFailure) return <XCircle className="w-8 h-8 text-red-400" />;
    if (status?.isRunning) return <Clock className="w-8 h-8 text-yellow-400" />;
    return <AlertCircle className="w-8 h-8 text-gray-400" />;
  };

  const getStatusColor = () => {
    if (status?.isSuccess) return 'text-green-400';
    if (status?.isFailure) return 'text-red-400';
    if (status?.isRunning) return 'text-yellow-400';
    return 'text-gray-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
            Deployment Status
          </h1>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                {getStatusIcon()}
                <div>
                  <h2 className="text-2xl font-semibold text-white">
                    GitHub Pages Deployment
                  </h2>
                  <p className="text-gray-300">
                    rh-anand.github.io
                  </p>
                </div>
              </div>
              
              <motion.button
                onClick={fetchStatus}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                <span>Refresh</span>
              </motion.button>
            </div>

            {error && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 mb-6">
                <p className="text-red-300">{error}</p>
              </div>
            )}

            {status && (
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Status</h3>
                    <p className={`text-lg font-medium ${getStatusColor()}`}>
                      {status.message}
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Run Details</h3>
                    <p className="text-gray-300">Run #{status.runNumber}</p>
                    <p className="text-gray-300">ID: {status.runId}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Created</h3>
                    <p className="text-gray-300">
                      {new Date(status.createdAt).toLocaleString()}
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Last Updated</h3>
                    <p className="text-gray-300">
                      {new Date(status.updatedAt).toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Actions</h3>
                  <div className="flex space-x-4">
                    <a
                      href={status.htmlUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline"
                    >
                      View on GitHub
                    </a>
                    <a
                      href="https://rh-anand.github.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline"
                    >
                      Visit Site
                    </a>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm">
                Auto-refreshes every 30 seconds • Last checked: {new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 