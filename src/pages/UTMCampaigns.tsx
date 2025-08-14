import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Link, Eye, MousePointer, TrendingUp, Calendar } from 'lucide-react';

const UTMCampaigns: React.FC = () => {
  const campaigns = [
    {
      id: 1,
      name: 'Summer Sale 2024',
      source: 'facebook',
      medium: 'cpc',
      campaign: 'summer_sale_2024',
      clicks: 12500,
      conversions: 347,
      revenue: 45600,
      ctr: 3.2,
      status: 'active'
    },
    {
      id: 2,
      name: 'Email Newsletter',
      source: 'newsletter',
      medium: 'email',
      campaign: 'weekly_newsletter',
      clicks: 8900,
      conversions: 234,
      revenue: 28900,
      ctr: 5.8,
      status: 'active'
    },
    {
      id: 3,
      name: 'Google Search Ads',
      source: 'google',
      medium: 'cpc',
      campaign: 'brand_keywords',
      clicks: 15600,
      conversions: 456,
      revenue: 67800,
      ctr: 4.1,
      status: 'active'
    },
    {
      id: 4,
      name: 'Instagram Stories',
      source: 'instagram',
      medium: 'social',
      campaign: 'story_ads_q2',
      clicks: 6700,
      conversions: 123,
      revenue: 18900,
      ctr: 2.9,
      status: 'paused'
    }
  ];

  const utmParameters = [
    { param: 'utm_source', description: 'Źródło ruchu (np. google, facebook)', example: 'facebook' },
    { param: 'utm_medium', description: 'Medium/kanał (np. cpc, email, social)', example: 'cpc' },
    { param: 'utm_campaign', description: 'Nazwa kampanii', example: 'summer_sale_2024' },
    { param: 'utm_term', description: 'Słowa kluczowe (opcjonalne)', example: 'marketing+automation' },
    { param: 'utm_content', description: 'Treść reklamy (opcjonalne)', example: 'banner_top' }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2">UTM & Kampanie</h1>
        <p className="text-gray-400">Śledź i analizuj skuteczność kampanii marketingowych za pomocą parametrów UTM</p>
      </motion.div>

      {/* Campaign Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Aktywne Kampanie</p>
              <p className="text-2xl font-bold text-white">12</p>
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
              <MousePointer className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Całkowite Kliknięcia</p>
              <p className="text-2xl font-bold text-white">43,700</p>
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
              <p className="text-gray-400 text-sm">Konwersje</p>
              <p className="text-2xl font-bold text-white">1,160</p>
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
              <Eye className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Średni CTR</p>
              <p className="text-2xl font-bold text-white">4.0%</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Campaigns Table */}
      <motion.div
        className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-xl font-semibold text-white mb-6">Kampanie UTM</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-gray-400 font-medium py-3">Kampania</th>
                <th className="text-left text-gray-400 font-medium py-3">Źródło/Medium</th>
                <th className="text-left text-gray-400 font-medium py-3">Kliknięcia</th>
                <th className="text-left text-gray-400 font-medium py-3">Konwersje</th>
                <th className="text-left text-gray-400 font-medium py-3">Przychód</th>
                <th className="text-left text-gray-400 font-medium py-3">CTR</th>
                <th className="text-left text-gray-400 font-medium py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign, index) => (
                <motion.tr
                  key={campaign.id}
                  className="border-b border-white/5 hover:bg-white/5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <td className="py-4">
                    <div>
                      <p className="text-white font-medium">{campaign.name}</p>
                      <p className="text-gray-400 text-sm">{campaign.campaign}</p>
                    </div>
                  </td>
                  <td className="py-4">
                    <span className="text-gray-300">{campaign.source}/{campaign.medium}</span>
                  </td>
                  <td className="py-4">
                    <span className="text-white">{campaign.clicks.toLocaleString()}</span>
                  </td>
                  <td className="py-4">
                    <span className="text-green-400">{campaign.conversions}</span>
                  </td>
                  <td className="py-4">
                    <span className="text-white">{campaign.revenue.toLocaleString()} zł</span>
                  </td>
                  <td className="py-4">
                    <span className="text-blue-400">{campaign.ctr}%</span>
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
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* UTM Parameters Guide */}
      <motion.div
        className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <h2 className="text-xl font-semibold text-white mb-6">Parametry UTM</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {utmParameters.map((param, index) => (
            <motion.div
              key={param.param}
              className="p-4 bg-white/5 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              <div className="flex items-center space-x-3 mb-2">
                <Link className="w-5 h-5 text-blue-400" />
                <code className="text-blue-400 font-mono">{param.param}</code>
              </div>
              <p className="text-gray-300 text-sm mb-2">{param.description}</p>
              <p className="text-gray-400 text-xs">
                Przykład: <code className="text-green-400">{param.example}</code>
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default UTMCampaigns;
