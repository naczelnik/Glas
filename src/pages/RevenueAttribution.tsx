import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, PieChart, BarChart3 } from 'lucide-react';

const RevenueAttribution: React.FC = () => {
  const attributionModels = [
    {
      name: 'First Touch',
      revenue: 45600,
      percentage: 28.5,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Last Touch',
      revenue: 52300,
      percentage: 32.7,
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Linear',
      revenue: 38900,
      percentage: 24.3,
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Time Decay',
      revenue: 23200,
      percentage: 14.5,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const channelAttribution = [
    { channel: 'Facebook Ads', revenue: 89500, percentage: 35.2 },
    { channel: 'Google Ads', revenue: 67800, percentage: 26.7 },
    { channel: 'Email Marketing', revenue: 45200, percentage: 17.8 },
    { channel: 'Organic Search', revenue: 32100, percentage: 12.6 },
    { channel: 'Direct', revenue: 19400, percentage: 7.7 }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2">Atrybucja Przychodów</h1>
        <p className="text-gray-400">Analizuj wkład każdego kanału marketingowego w generowanie przychodów</p>
      </motion.div>

      {/* Revenue Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-lg">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Całkowity Przychód</p>
              <p className="text-2xl font-bold text-white">254,000 zł</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Wzrost MoM</p>
              <p className="text-2xl font-bold text-green-400">+18.5%</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg">
              <PieChart className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">ROAS Średni</p>
              <p className="text-2xl font-bold text-white">4.2x</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Konwersje</p>
              <p className="text-2xl font-bold text-white">1,247</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Attribution Models */}
      <motion.div
        className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-xl font-semibold text-white mb-6">Modele Atrybucji</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {attributionModels.map((model, index) => (
            <motion.div
              key={model.name}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${model.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <span className="text-white font-bold text-lg">{model.percentage}%</span>
              </div>
              <h3 className="text-white font-semibold mb-2">{model.name}</h3>
              <p className="text-2xl font-bold text-white">{model.revenue.toLocaleString()} zł</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Channel Attribution */}
      <motion.div
        className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <h2 className="text-xl font-semibold text-white mb-6">Atrybucja Kanałów</h2>
        
        <div className="space-y-4">
          {channelAttribution.map((channel, index) => (
            <motion.div
              key={channel.channel}
              className="flex items-center justify-between p-4 bg-white/5 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              <div className="flex items-center space-x-4">
                <span className="text-white font-medium">{channel.channel}</span>
                <div className="w-64 bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                    style={{ width: `${channel.percentage}%` }}
                  ></div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white font-bold">{channel.revenue.toLocaleString()} zł</p>
                <p className="text-gray-400 text-sm">{channel.percentage}%</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default RevenueAttribution;
