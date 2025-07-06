'use client';

import { motion } from 'framer-motion';
import { Download, Mail, Phone, Linkedin, MapPin, Calendar, Building, GraduationCap, Award, Code, Database, Cloud, Brain } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            About Me
          </h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Data Engineer passionate about building scalable data solutions and leveraging machine learning to solve complex problems.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-12"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-purple-400" />
              <a href="mailto:anandro@bu.edu" className="text-gray-300 hover:text-white transition-colors">
                anandro@bu.edu
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-purple-400" />
              <span className="text-gray-300">603 233 4670</span>
            </div>
            <div className="flex items-center space-x-3">
              <Linkedin className="w-5 h-5 text-purple-400" />
              <a href="https://linkedin.com/in/rohan-h-anand" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                linkedin.com/in/rohan-h-anand
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Download className="w-5 h-5 text-purple-400" />
              <a href="/Resume - Rohan Anand.pdf" download className="text-gray-300 hover:text-white transition-colors font-semibold">
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Building className="w-8 h-8 mr-3 text-purple-400" />
            Experience
          </h2>
          
          <div className="space-y-8">
            {/* Data Engineer */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">Data Engineer</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-300">
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    Charlotte, NC
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    March 2025 - Present
                  </span>
                </div>
              </div>
              <p className="text-purple-300 font-medium mb-4">Dataeconomy</p>
              <ul className="space-y-2 text-gray-300">
                <li>• Developed a personalized recommendation system for a data marketplace by adapting Alternating Least Squares to process implicit feedback from time-series user interaction data</li>
                <li>• Optimized model performance by conducting hyperparameter tuning with cross-validation using Optuna</li>
                <li>• Built a data quality profiling and validation service for Snowflake datasets, leveraging Snowpark</li>
                <li>• Engineered data quality service to segregate data by validation status into passed/failed datasets</li>
                <li>• Integrated metrics into the existing application architecture using FastAPI endpoints</li>
                <li>• Implemented functionality using Snowpark to generate Snowflake-managed Iceberg tables from S3 data</li>
                <li>• Engineering a low-latency data pipeline with Snowpipe Streaming&apos;s high-performance architecture</li>
              </ul>
            </div>

            {/* Data Services Intern */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">Data Services Intern</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-300">
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    Boston, MA
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    May 2024 - August 2024
                  </span>
                </div>
              </div>
              <p className="text-purple-300 font-medium mb-4">Axis Technology, LLC</p>
              <ul className="space-y-2 text-gray-300">
                <li>• Developed a Python program that generates realistic personal information for ML model training</li>
                <li>• Implemented flexible data generation features to control test data volume</li>
                <li>• Created a program that processes database structures formatted in JSON to automatically label columns</li>
                <li>• Formulated test code to validate OpenSearch functionality in a ML model</li>
              </ul>
            </div>

            {/* Data Analyst Intern */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">Data Analyst Intern</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-300">
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    Manchester, NH
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Jun. 2022 - Aug. 2022
                  </span>
                </div>
              </div>
              <p className="text-purple-300 font-medium mb-4">AS Insurance Agency</p>
              <ul className="space-y-2 text-gray-300">
                <li>• Concatenated personal information from 1,000+ customers and corresponding insurance statements</li>
                <li>• Constructed SQL queries on Snowflake to identify key customer segments</li>
                <li>• Developed 10-15 Tableau dashboards to target customers for renewal</li>
                <li>• Provided quotes for 5-10 customers per week, retaining over 95% of clients</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Code className="w-8 h-8 mr-3 text-purple-400" />
            Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Police Misconduct Analysis */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Police Misconduct Data Analysis for NLG</h3>
              <p className="text-purple-300 text-sm mb-4">Oct. 2024 - December 2024</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Analyzed internal investigation findings (2011-2020) using statistical methods and ML techniques</li>
                <li>• Developed a RAG LLM system using OpenAI&apos;s API to recommend objective punitive outcomes</li>
                <li>• Visualized differences between AI-recommended disciplinary actions and actual outcomes</li>
                <li>• Implemented advanced sentiment analysis to classify misconduct severity</li>
                <li>• Selected as top project to present findings to data science faculty and client</li>
              </ul>
            </div>

            {/* Boston 311 Analysis */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Analyzing Boston&apos;s 311 Service Requests</h3>
              <p className="text-purple-300 text-sm mb-4">Sep. 2023 - Dec. 2023</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Developed and maintained a database of 2.7M+ Boston 311 service requests over 12 years</li>
                <li>• Created interactive graphs using ipywidgets to identify trends in request volume</li>
                <li>• Constructed a PowerBI map visualization with social vulnerability index data</li>
                <li>• Produced PowerBI report analyzing disparities in request types and resolution times</li>
              </ul>
            </div>

            {/* Covid-19 Pipeline */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Modern Data Pipeline for Analyzing Covid-19</h3>
              <p className="text-purple-300 text-sm mb-4">Jan. 2023 - May 2023</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Analyzed Covid-19 spread and policy effectiveness across 10 countries</li>
                <li>• Used Azure Data Factory for ETL and PowerBI for visualization</li>
                <li>• Integrated diverse data sources from Azure Data Lake Storage</li>
                <li>• Created interactive visualizations to identify trends and compare policy impacts</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Brain className="w-8 h-8 mr-3 text-purple-400" />
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Code className="w-5 h-5 mr-2 text-purple-400" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'SQL', 'R'].map((skill) => (
                  <span key={skill} className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Cloud className="w-5 h-5 mr-2 text-purple-400" />
                Cloud/Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Snowflake', 'AWS', 'Azure', 'Docker', 'Kafka', 'Airflow', 'Pinecone'].map((skill) => (
                  <span key={skill} className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Database className="w-5 h-5 mr-2 text-purple-400" />
                Libraries/APIs
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Pandas/NumPy', 'Scikit-learn', 'FastAPI', 'Optuna', 'OpenAI', 'Snowpark', 'PyTorch', 'PySpark', 'LangChain', 'ChromaDB', 'Git', 'Tableau', 'PowerBI'].map((skill) => (
                  <span key={skill} className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Education */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <GraduationCap className="w-8 h-8 mr-3 text-purple-400" />
              Education
            </h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Boston University</h3>
              <p className="text-purple-300 mb-2">B.S. in Data Science</p>
              <p className="text-gray-300 text-sm mb-4">09/2021 - 01/2025 | Boston, MA</p>
              <div className="space-y-2">
                <div className="flex items-center text-gray-300">
                  <Award className="w-4 h-4 mr-2 text-purple-400" />
                  Dean&apos;s List: 2022-2025
                </div>
                <div className="flex items-center text-gray-300">
                  <GraduationCap className="w-4 h-4 mr-2 text-purple-400" />
                  DS Undergraduate Tutor (Mar 2023 - Dec 2024)
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Award className="w-8 h-8 mr-3 text-purple-400" />
              Certifications
            </h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-2">AWS Certified Cloud Practitioner</h3>
              <p className="text-purple-300 text-sm">Issued May 2025</p>
            </div>
          </div>
        </motion.div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <Link href="/" className="inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
            <span>← Back to Home</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 