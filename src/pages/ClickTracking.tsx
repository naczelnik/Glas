import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer, Link, Eye, TrendingUp, Globe, Smartphone, Monitor, Tablet } from 'lucide-react';

const ClickTracking: React.FC = () => {
  const clickData = [
    {
      id: 1,
      url: 'https://example.com/product-1',
      title: 'Kurs Marketing Automation',
      clicks: 2847,
      uniqueClicks: 2156,
      ctr: 4.2,
      device: 'desktop',
      source: 'Facebook Ads'
    },
    {
      id: 2,
      url: 'https://example.com/webinar',
      title: 'Webinar: Skuteczne Kampanie',
      clicks: 1923,
      uniqueClicks: 1654,
      ctr: 6.8,
      device: 'mobile',
      source: 'Email Campaign'
    },
    {
      id: 3,
      url: 'https://example.com/ebook',
      title: 'E-book: Strategia Marketingowa',
      clicks: 1456,
      uniqueClicks: 1289,
      ctr: 3.9,
      device: 'desktop',
      source: 'Google Ads'
    },
    {
      id: 4,
      url: 'https://example.com/demo',
      title: 'Demo Produktu',
      clicks: 987,
      uniqueClicks: 834,
      ctr: 5.1,
      device: 'tablet',
      source: 'Organic Search'
    }
  ];

  const deviceStats = [
    { device: 'Desktop', clicks: 4521, percentage: 45.2, icon: Monitor },
    { device: 'Mobile', clicks: 3876, percentage: 38.7, icon: Smartphone },
    { device: 'Tablet', clicks: 1603, percentage: 16.1, icon: Tablet }
  ];

  const topSources = [
    { source: 'Facebook Ads', clicks: 3456, percentage: 34.5 },
    { source: 'Google Ads', clicks: 2789, percentage: 27.9 },
    { source: 'Email Campaign', clicks: 1923, percentage: 19.2 },
    { source: 'Organic Search', clicks: 1832, percentage: 18.4 }
  ];

  const getDeviceIcon = (device: string) => {
    switch (device) {
      case 'desktop': return Monitor;
      case 'mobile': return Smartphone;
      case 'tablet': return Tablet;
      default: return Globe;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2">Śledzenie Kliknięć</h1>
        <p className="text-gray-400">Monitoruj i analizuj kliknięcia w linki w swoich kampaniach</p>
      </motion.div>

      {/* Click Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg">
              <MousePointer className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Całkowite Kliknięcia</p>
              <p className="text-2xl font-bold text-white">10,213</p>
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
            <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-lg">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Unikalne Kliknięcia</p>
              <p className="text-2xl font-bold text-white">7,933</p>
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
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Średni CTR</p>
              <p className="text-2xl font-bold text-white">5.0%</p>
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
              <Link className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Śledzone Linki</p>
              <p className="text-2xl font-bold text-white">47</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Click Tracking Table */}
      <motion.div
        className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-xl font-semibold text-white mb-6">Najczęściej Klikane Linki</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-gray-400 font-medium py-3">Link</th>
                <th className="text-left text-gray-400 font-medium py-3">Źródło</th>
                <th className="text-left text-gray-400 font-medium py-3">Kliknięcia</th>
                <th className="text-left text-gray-400 font-medium py-3">Unikalne</th>
                <th className="text-left text-gray-400 font-medium py-3">CTR</th>
                <th className="text-left text-gray-400 font-medium py-3">Urządzenie</th>
              </tr>
            </thead>
            <tbody>
              {clickData.map((item, index) => {
                const DeviceIcon = getDeviceIcon(item.device);
                return (
                  <motion.tr
                    key={item.id}
                    className="border-b border-white/5 hover:bg-white/5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <td className="py-4">
                      <div>
                        <p className="text-white font-medium">{item.title}</p>
                        <p className="text-gray-400 text-sm">{item.url}</p>
                      </div>
                    </td>
                    <td className="py-4">
                      <span className="text-gray-300">{item.source}</span>
                    </td>
                    <td className="py-4">
                      <span className="text-white font-semibold">{item.clicks.toLocaleString()}</span>
                    </td>
                    <td className="py-4">
                      <span className="text-blue-400">{item.uniqueClicks.toLocaleString()}</span>
                    </td>
                    <td className="py-4">
                      <span className="text-green-400">{item.ctr}%</span>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center space-x-2">
                        <DeviceIcon className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300 capitalize">{item.device}</span>
                      </div>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Device & Source Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Device Stats */}
        <motion.div
          className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-xl font-semibold text-white mb-6">Kliknięcia wg Urządzeń</h2>
          
          <div className="space-y-4">
            {deviceStats.map((device, index) => (
              <motion.div
                key={device.device}
                className="flex items-center justify-between"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <div className="flex items-center space-x-3">
                  <device.icon className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">{device.device}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-32 bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                      style={{ width: `${device.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-white font-semibold w-16 text-right">
                    {device.clicks.toLocaleString()}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Top Sources */}
        <motion.div
          className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-xl font-semibold text-white mb-6">Najlepsze Źródła Ruchu</h2>
          
          <div className="space-y-4">
            {topSources.map((source, index) => (
              <motion.div
                key={source.source}
                className="flex items-center justify-between"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              >
                <span className="text-gray-300">{source.source}</span>
                <div className="flex items-center space-x-4">
                  <div className="w-32 bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-500 to-blue-600 h-2 rounded-full"
                      style={{ width: `${source.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-white font-semibold w-16 text-right">
                    {source.clicks.toLocaleString()}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ClickTracking;
