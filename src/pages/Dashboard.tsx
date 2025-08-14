import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, MousePointer, Eye, Target, Calendar, ArrowUp } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Całkowite Konwersje',
      value: '2,847',
      change: '+18.5%',
      icon: Target,
      color: 'from-blue-500 to-blue-600',
      trend: 'up'
    },
    {
      title: 'Przychód',
      value: '487,650 zł',
      change: '+24.3%',
      icon: DollarSign,
      color: 'from-green-500 to-green-600',
      trend: 'up'
    },
    {
      title: 'Odwiedziny',
      value: '67,892',
      change: '+12.1%',
      icon: Eye,
      color: 'from-purple-500 to-purple-600',
      trend: 'up'
    },
    {
      title: 'Kliknięcia',
      value: '43,721',
      change: '+8.7%',
      icon: MousePointer,
      color: 'from-orange-500 to-orange-600',
      trend: 'up'
    }
  ];

  const recentCampaigns = [
    {
      id: 1,
      name: 'Summer Sale 2024',
      platform: 'Facebook Ads',
      status: 'active',
      budget: '5,000 zł',
      spent: '3,247 zł',
      conversions: 89,
      roas: 4.2
    },
    {
      id: 2,
      name: 'Email Newsletter',
      platform: 'Email Marketing',
      status: 'active',
      budget: '1,200 zł',
      spent: '890 zł',
      conversions: 156,
      roas: 6.8
    },
    {
      id: 3,
      name: 'Google Search Ads',
      platform: 'Google Ads',
      status: 'paused',
      budget: '8,000 zł',
      spent: '7,234 zł',
      conversions: 234,
      roas: 3.9
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-400">Przegląd kluczowych metryk i wydajności kampanii</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-6 hover:bg-black/30 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 bg-gradient-to-r ${stat.color} rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center space-x-1 text-green-400">
                <ArrowUp className="w-4 h-4" />
                <span className="text-sm font-medium">{stat.change}</span>
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-sm">{stat.title}</p>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Campaigns */}
      <motion.div
        className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Ostatnie Kampanie</h2>
          <button className="text-blue-400 hover:text-white transition-colors">
            Zobacz wszystkie →
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-gray-400 font-medium py-3">Kampania</th>
                <th className="text-left text-gray-400 font-medium py-3">Platforma</th>
                <th className="text-left text-gray-400 font-medium py-3">Status</th>
                <th className="text-left text-gray-400 font-medium py-3">Budżet</th>
                <th className="text-left text-gray-400 font-medium py-3">Wydane</th>
                <th className="text-left text-gray-400 font-medium py-3">Konwersje</th>
                <th className="text-left text-gray-400 font-medium py-3">ROAS</th>
              </tr>
            </thead>
            <tbody>
              {recentCampaigns.map((campaign, index) => (
                <motion.tr
                  key={campaign.id}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <td className="py-4">
                    <span className="text-white font-medium">{campaign.name}</span>
                  </td>
                  <td className="py-4">
                    <span className="text-gray-300">{campaign.platform}</span>
                  </td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      campaign.status === 'active' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-gray-500/20 text-gray-400'
                    }`}>
                      {campaign.status === 'active' ? 'Aktywna' : 'Wstrzymana'}
                    </span>
                  </td>
                  <td className="py-4">
                    <span className="text-white">{campaign.budget}</span>
                  </td>
                  <td className="py-4">
                    <span className="text-white">{campaign.spent}</span>
                  </td>
                  <td className="py-4">
                    <span className="text-green-400 font-semibold">{campaign.conversions}</span>
                  </td>
                  <td className="py-4">
                    <span className="text-blue-400 font-semibold">{campaign.roas}x</span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-6 hover:bg-black/30 transition-all duration-300 cursor-pointer">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Nowa Kampania</h3>
              <p className="text-gray-400 text-sm">Utwórz nową kampanię reklamową</p>
            </div>
          </div>
        </div>

        <div className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-6 hover:bg-black/30 transition-all duration-300 cursor-pointer">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-lg">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Zaplanuj Raport</h3>
              <p className="text-gray-400 text-sm">Automatyczne raporty</p>
            </div>
          </div>
        </div>

        <div className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-6 hover:bg-black/30 transition-all duration-300 cursor-pointer">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Analiza Odbiorców</h3>
              <p className="text-gray-400 text-sm">Poznaj swoich klientów</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
