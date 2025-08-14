import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, DollarSign, Users, Calendar, ArrowUp, ArrowDown } from 'lucide-react';

const Conversions: React.FC = () => {
  const conversionMetrics = [
    {
      name: 'Całkowite Konwersje',
      value: '2,847',
      change: '+18.5%',
      trend: 'up',
      icon: Target,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Współczynnik Konwersji',
      value: '4.2%',
      change: '+0.8%',
      trend: 'up',
      icon: TrendingUp,
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Wartość Konwersji',
      value: '487,650 zł',
      change: '+24.3%',
      trend: 'up',
      icon: DollarSign,
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Koszt na Konwersję',
      value: '45.20 zł',
      change: '-12.1%',
      trend: 'down',
      icon: Users,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const conversionGoals = [
    {
      id: 1,
      name: 'Zakup produktu',
      conversions: 1247,
      value: 298450,
      rate: 3.8,
      status: 'active'
    },
    {
      id: 2,
      name: 'Rejestracja na webinar',
      conversions: 892,
      value: 0,
      rate: 12.4,
      status: 'active'
    },
    {
      id: 3,
      name: 'Pobranie e-booka',
      conversions: 456,
      value: 0,
      rate: 8.9,
      status: 'active'
    },
    {
      id: 4,
      name: 'Kontakt przez formularz',
      conversions: 252,
      value: 189200,
      rate: 2.1,
      status: 'active'
    }
  ];

  const conversionSources = [
    { source: 'Facebook Ads', conversions: 1156, rate: 5.2, value: 187650 },
    { source: 'Google Ads', conversions: 892, rate: 4.1, value: 156780 },
    { source: 'Email Marketing', conversions: 534, rate: 8.7, value: 89450 },
    { source: 'Organic Search', conversions: 265, rate: 2.8, value: 53770 }
  ];

  const timeData = [
    { period: 'Styczeń', conversions: 2156, rate: 3.8 },
    { period: 'Luty', conversions: 2341, rate: 4.1 },
    { period: 'Marzec', conversions: 2789, rate: 4.5 },
    { period: 'Kwiecień', conversions: 2456, rate: 4.2 },
    { period: 'Maj', conversions: 2847, rate: 4.8 }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2">Konwersje</h1>
        <p className="text-gray-400">Śledź i analizuj konwersje ze wszystkich kanałów marketingowych</p>
      </motion.div>

      {/* Conversion Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {conversionMetrics.map((metric, index) => (
          <motion.div
            key={metric.name}
            className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className={`p-3 bg-gradient-to-r ${metric.color} rounded-lg`}>
                <metric.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-gray-400 text-sm">{metric.name}</p>
                <p className="text-2xl font-bold text-white">{metric.value}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {metric.trend === 'up' ? (
                <ArrowUp className="w-4 h-4 text-green-400" />
              ) : (
                <ArrowDown className="w-4 h-4 text-red-400" />
              )}
              <span className={`text-sm ${
                metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
              }`}>
                {metric.change}
              </span>
              <span className="text-gray-400 text-sm">vs poprzedni miesiąc</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Conversion Goals */}
      <motion.div
        className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-xl font-semibold text-white mb-6">Cele Konwersji</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-gray-400 font-medium py-3">Cel</th>
                <th className="text-left text-gray-400 font-medium py-3">Konwersje</th>
                <th className="text-left text-gray-400 font-medium py-3">Współczynnik</th>
                <th className="text-left text-gray-400 font-medium py-3">Wartość</th>
                <th className="text-left text-gray-400 font-medium py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {conversionGoals.map((goal, index) => (
                <motion.tr
                  key={goal.id}
                  className="border-b border-white/5 hover:bg-white/5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <td className="py-4">
                    <span className="text-white font-medium">{goal.name}</span>
                  </td>
                  <td className="py-4">
                    <span className="text-white">{goal.conversions.toLocaleString()}</span>
                  </td>
                  <td className="py-4">
                    <span className="text-green-400">{goal.rate}%</span>
                  </td>
                  <td className="py-4">
                    <span className="text-white">
                      {goal.value > 0 ? `${goal.value.toLocaleString()} zł` : '-'}
                    </span>
                  </td>
                  <td className="py-4">
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
                      Aktywny
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Conversion Sources & Time Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Conversion Sources */}
        <motion.div
          className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-xl font-semibold text-white mb-6">Konwersje wg Źródeł</h2>
          
          <div className="space-y-4">
            {conversionSources.map((source, index) => (
              <motion.div
                key={source.source}
                className="p-4 bg-white/5 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">{source.source}</span>
                  <span className="text-green-400 text-sm">{source.rate}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">
                    {source.conversions.toLocaleString()} konwersji
                  </span>
                  <span className="text-white font-semibold">
                    {source.value.toLocaleString()} zł
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                    style={{ width: `${(source.conversions / 1156) * 100}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Time Analysis */}
        <motion.div
          className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-xl font-semibold text-white mb-6">Trend Konwersji</h2>
          
          <div className="space-y-4">
            {timeData.map((period, index) => (
              <motion.div
                key={period.period}
                className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              >
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-300">{period.period}</span>
                </div>
                <div className="text-right">
                  <p className="text-white font-semibold">{period.conversions.toLocaleString()}</p>
                  <p className="text-green-400 text-sm">{period.rate}%</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-semibold">Trend wzrostowy</span>
            </div>
            <p className="text-gray-300 text-sm">
              Konwersje rosną średnio o 8.5% miesięcznie. Najlepszy wynik w maju.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Conversions;
