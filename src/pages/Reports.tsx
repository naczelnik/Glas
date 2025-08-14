import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Download, Calendar, Filter, BarChart3, PieChart, TrendingUp, FileText } from 'lucide-react';

const Reports: React.FC = () => {
  const reports = [
    {
      id: 1,
      name: 'Raport Miesięczny - Styczeń 2024',
      type: 'Miesięczny',
      date: '2024-01-31',
      status: 'ready',
      icon: BarChart3,
      color: 'from-blue-500 to-blue-600',
      size: '2.4 MB',
      downloads: 23
    },
    {
      id: 2,
      name: 'Analiza Kampanii Facebook Ads',
      type: 'Kampania',
      date: '2024-01-28',
      status: 'ready',
      icon: PieChart,
      color: 'from-green-500 to-green-600',
      size: '1.8 MB',
      downloads: 15
    },
    {
      id: 3,
      name: 'Raport Konwersji Q4 2023',
      type: 'Kwartalny',
      date: '2024-01-15',
      status: 'ready',
      icon: TrendingUp,
      color: 'from-purple-500 to-purple-600',
      size: '3.2 MB',
      downloads: 41
    },
    {
      id: 4,
      name: 'Analiza Ścieżki Klienta',
      type: 'Specjalny',
      date: '2024-01-25',
      status: 'generating',
      icon: FileText,
      color: 'from-orange-500 to-orange-600',
      size: '- MB',
      downloads: 0
    }
  ];

  const reportTypes = [
    {
      name: 'Raport Ogólny',
      description: 'Kompleksowy przegląd wszystkich metryk',
      icon: BarChart3,
      color: 'from-blue-500 to-blue-600',
      frequency: 'Miesięcznie'
    },
    {
      name: 'Analiza Kampanii',
      description: 'Szczegółowe dane o konkretnych kampaniach',
      icon: PieChart,
      color: 'from-green-500 to-green-600',
      frequency: 'Na żądanie'
    },
    {
      name: 'Raport Konwersji',
      description: 'Analiza ścieżek konwersji i ROI',
      icon: TrendingUp,
      color: 'from-purple-500 to-purple-600',
      frequency: 'Tygodniowo'
    },
    {
      name: 'Raport Niestandardowy',
      description: 'Spersonalizowany raport według Twoich potrzeb',
      icon: FileText,
      color: 'from-orange-500 to-orange-600',
      frequency: 'Na żądanie'
    }
  ];

  const metrics = [
    { name: 'Wygenerowane Raporty', value: '127', change: '+12%' },
    { name: 'Pobrane Raporty', value: '89', change: '+8%' },
    { name: 'Automatyczne Raporty', value: '24', change: '+15%' },
    { name: 'Średni Czas Generowania', value: '3.2 min', change: '-5%' }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2">Raporty</h1>
        <p className="text-gray-400">Generuj i pobieraj szczegółowe raporty analityczne</p>
      </motion.div>

      {/* Report Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.name}
            className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">{metric.name}</p>
                <p className="text-2xl font-bold text-white">{metric.value}</p>
              </div>
              <span className={`text-sm ${
                metric.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
              }`}>
                {metric.change}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Reports */}
      <motion.div
        className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Ostatnie Raporty</h2>
          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
              <Filter className="w-4 h-4 text-gray-400" />
              <span className="text-gray-300">Filtruj</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
              <Calendar className="w-4 h-4 text-white" />
              <span className="text-white">Nowy Raport</span>
            </button>
          </div>
        </div>
        
        <div className="space-y-4">
          {reports.map((report, index) => (
            <motion.div
              key={report.id}
              className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <div className="flex items-center space-x-4">
                <div className={`p-3 bg-gradient-to-r ${report.color} rounded-lg`}>
                  <report.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{report.name}</h3>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-gray-400 text-sm">{report.type}</span>
                    <span className="text-gray-400 text-sm">{report.date}</span>
                    <span className="text-gray-400 text-sm">{report.size}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    report.status === 'ready' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {report.status === 'ready' ? 'Gotowy' : 'Generowanie...'}
                  </span>
                  <p className="text-gray-400 text-xs mt-1">{report.downloads} pobrań</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                    <Eye className="w-4 h-4 text-gray-400" />
                  </button>
                  {report.status === 'ready' && (
                    <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                      <Download className="w-4 h-4 text-gray-400" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Report Types */}
      <motion.div
        className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <h2 className="text-xl font-semibold text-white mb-6">Typy Raportów</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reportTypes.map((type, index) => (
            <motion.div
              key={type.name}
              className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 bg-gradient-to-r ${type.color} rounded-lg`}>
                  <type.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-2">{type.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{type.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-400 text-sm">{type.frequency}</span>
                    <button className="text-blue-400 hover:text-white text-sm font-medium transition-colors">
                      Generuj →
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Reports;
