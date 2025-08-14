import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, TrendingUp, Users, DollarSign, Eye, MousePointer, Target, Play, Pause, Settings } from 'lucide-react';

const FacebookAdsManager: React.FC = () => {
  const campaigns = [
    {
      id: 1,
      name: 'Summer Sale 2024',
      status: 'active',
      budget: 5000,
      spent: 3247,
      impressions: 125000,
      clicks: 3420,
      conversions: 89,
      ctr: 2.74,
      cpc: 0.95,
      roas: 4.2
    },
    {
      id: 2,
      name: 'Brand Awareness Q2',
      status: 'active',
      budget: 8000,
      spent: 6234,
      impressions: 234000,
      clicks: 5670,
      conversions: 156,
      ctr: 2.42,
      cpc: 1.10,
      roas: 3.8
    },
    {
      id: 3,
      name: 'Retargeting Campaign',
      status: 'paused',
      budget: 3000,
      spent: 2890,
      impressions: 89000,
      clicks: 2340,
      conversions: 67,
      ctr: 2.63,
      cpc: 1.23,
      roas: 5.1
    }
  ];

  const adSets = [
    {
      id: 1,
      name: 'Lookalike Audience 1%',
      campaign: 'Summer Sale 2024',
      status: 'active',
      budget: 150,
      spent: 127,
      conversions: 23
    },
    {
      id: 2,
      name: 'Interest Targeting - Marketing',
      campaign: 'Brand Awareness Q2',
      status: 'active',
      budget: 200,
      spent: 189,
      conversions: 34
    },
    {
      id: 3,
      name: 'Website Visitors 30 days',
      campaign: 'Retargeting Campaign',
      status: 'paused',
      budget: 100,
      spent: 95,
      conversions: 18
    }
  ];

  const totalStats = {
    totalSpent: campaigns.reduce((sum, campaign) => sum + campaign.spent, 0),
    totalImpressions: campaigns.reduce((sum, campaign) => sum + campaign.impressions, 0),
    totalClicks: campaigns.reduce((sum, campaign) => sum + campaign.clicks, 0),
    totalConversions: campaigns.reduce((sum, campaign) => sum + campaign.conversions, 0),
    avgCTR: campaigns.reduce((sum, campaign) => sum + campaign.ctr, 0) / campaigns.length,
    avgROAS: campaigns.reduce((sum, campaign) => sum + campaign.roas, 0) / campaigns.length
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg">
            <Facebook className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Facebook Ads Manager</h1>
            <p className="text-gray-400">Zarządzaj kampaniami Facebook i Instagram</p>
          </div>
        </div>
      </motion.div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
        <motion.div
          className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-red-500 to-red-600 rounded-lg">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Wydane</p>
              <p className="text-2xl font-bold text-white">{totalStats.totalSpent.toLocaleString()} zł</p>
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
              <Eye className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Wyświetlenia</p>
              <p className="text-2xl font-bold text-white">{(totalStats.totalImpressions / 1000).toFixed(0)}K</p>
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
            <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-lg">
              <MousePointer className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Kliknięcia</p>
              <p className="text-2xl font-bold text-white">{totalStats.totalClicks.toLocaleString()}</p>
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
            <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Konwersje</p>
              <p className="text-2xl font-bold text-white">{totalStats.totalConversions}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Średni CTR</p>
              <p className="text-2xl font-bold text-white">{totalStats.avgCTR.toFixed(2)}%</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Średni ROAS</p>
              <p className="text-2xl font-bold text-white">{totalStats.avgROAS.toFixed(1)}x</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Campaigns Table */}
      <motion.div
        className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Kampanie</h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
            Nowa Kampania
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-gray-400 font-medium py-3">Kampania</th>
                <th className="text-left text-gray-400 font-medium py-3">Status</th>
                <th className="text-left text-gray-400 font-medium py-3">Budżet</th>
                <th className="text-left text-gray-400 font-medium py-3">Wydane</th>
                <th className="text-left text-gray-400 font-medium py-3">Wyświetlenia</th>
                <th className="text-left text-gray-400 font-medium py-3">Kliknięcia</th>
                <th className="text-left text-gray-400 font-medium py-3">CTR</th>
                <th className="text-left text-gray-400 font-medium py-3">CPC</th>
                <th className="text-left text-gray-400 font-medium py-3">Konwersje</th>
                <th className="text-left text-gray-400 font-medium py-3">ROAS</th>
                <th className="text-left text-gray-400 font-medium py-3">Akcje</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign, index) => (
                <motion.tr
                  key={campaign.id}
                  className="border-b border-white/5 hover:bg-white/5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <td className="py-4">
                    <span className="text-white font-medium">{campaign.name}</span>
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
                    <span className="text-white">{campaign.budget.toLocaleString()} zł</span>
                  </td>
                  <td className="py-4">
                    <span className="text-white">{campaign.spent.toLocaleString()} zł</span>
                  </td>
                  <td className="py-4">
                    <span className="text-gray-300">{(campaign.impressions / 1000).toFixed(0)}K</span>
                  </td>
                  <td className="py-4">
                    <span className="text-gray-300">{campaign.clicks.toLocaleString()}</span>
                  </td>
                  <td className="py-4">
                    <span className="text-blue-400">{campaign.ctr}%</span>
                  </td>
                  <td className="py-4">
                    <span className="text-gray-300">{campaign.cpc} zł</span>
                  </td>
                  <td className="py-4">
                    <span className="text-green-400 font-semibold">{campaign.conversions}</span>
                  </td>
                  <td className="py-4">
                    <span className="text-purple-400 font-semibold">{campaign.roas}x</span>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                        {campaign.status === 'active' ? (
                          <Pause className="w-4 h-4 text-gray-400" />
                        ) : (
                          <Play className="w-4 h-4 text-gray-400" />
                        )}
                      </button>
                      <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                        <Settings className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Ad Sets */}
      <motion.div
        className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <h2 className="text-xl font-semibold text-white mb-6">Zestawy Reklam</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {adSets.map((adSet, index) => (
            <motion.div
              key={adSet.id}
              className="p-6 bg-white/5 rounded-xl border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold">{adSet.name}</h3>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  adSet.status === 'active' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-gray-500/20 text-gray-400'
                }`}>
                  {adSet.status === 'active' ? 'Aktywny' : 'Wstrzymany'}
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-4">{adSet.campaign}</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">Budżet dzienny:</span>
                  <span className="text-white">{adSet.budget} zł</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">Wydane:</span>
                  <span className="text-white">{adSet.spent} zł</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">Konwersje:</span>
                  <span className="text-green-400 font-semibold">{adSet.conversions}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FacebookAdsManager;
