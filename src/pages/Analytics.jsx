import { useDispatch, useSelector } from 'react-redux';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { Download, BarChart3 } from 'lucide-react';
import { setDateRange } from '../store/slices/analyticsSlice';

const platformData = {
  instagram: [
    { metric: 'Followers', value: 45000 },
    { metric: 'Engagement', value: 5200 },
    { metric: 'Impressions', value: 120000 },
    { metric: 'Clicks', value: 3400 },
  ],
  twitter: [
    { metric: 'Followers', value: 28000 },
    { metric: 'Engagement', value: 3800 },
    { metric: 'Impressions', value: 89000 },
    { metric: 'Clicks', value: 2100 },
  ],
  linkedin: [
    { metric: 'Followers', value: 15000 },
    { metric: 'Engagement', value: 1800 },
    { metric: 'Impressions', value: 45000 },
    { metric: 'Clicks', value: 1200 },
  ],
  tiktok: [
    { metric: 'Followers', value: 62000 },
    { metric: 'Engagement', value: 8900 },
    { metric: 'Impressions', value: 250000 },
    { metric: 'Clicks', value: 5600 },
  ],
};

const comparisonData = [
  {
    platform: 'Instagram',
    Followers: 45000,
    Engagement: 5200,
  },
  {
    platform: 'Twitter',
    Followers: 28000,
    Engagement: 3800,
  },
  {
    platform: 'LinkedIn',
    Followers: 15000,
    Engagement: 1800,
  },
  {
    platform: 'TikTok',
    Followers: 62000,
    Engagement: 8900,
  },
];

const platforms = [
  { key: 'instagram', label: 'Instagram', color: '#e1306c' },
  { key: 'twitter', label: 'Twitter', color: '#1da1f2' },
  { key: 'linkedin', label: 'LinkedIn', color: '#0a66c2' },
  { key: 'tiktok', label: 'TikTok', color: '#010101' },
];

export default function Analytics() {
  const dispatch = useDispatch();
  const { dateRange } = useSelector((state) => state.analytics);

  const handleExport = () => {
    const csv = [
      ['Platform', 'Metric', 'Value'],
      ...Object.entries(platformData).flatMap(([platform, metrics]) =>
        metrics.map((m) => [platform, m.metric, m.value])
      ),
    ]
      .map((row) => row.join(','))
      .join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `analytics-${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
          <p className="text-sm text-gray-500 mt-1">
            Detailed performance metrics across all platforms
          </p>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={dateRange}
            onChange={(e) => dispatch(setDateRange(e.target.value))}
            className="text-sm border rounded-lg px-3 py-2 bg-white text-gray-700"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </select>
          <button
            onClick={handleExport}
            className="flex items-center gap-2 text-sm bg-brand-600 text-white px-4 py-2 rounded-lg hover:bg-brand-700 transition-colors"
          >
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {platforms.map((platform) => (
          <div
            key={platform.key}
            className="bg-white rounded-xl p-6 shadow-sm border"
          >
            <div className="flex items-center gap-2 mb-4">
              <BarChart3
                className="w-5 h-5"
                style={{ color: platform.color }}
              />
              <h2 className="text-lg font-semibold text-gray-900">
                {platform.label}
              </h2>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={platformData[platform.key]}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="metric" stroke="#9ca3af" fontSize={12} />
                <YAxis stroke="#9ca3af" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="value" fill={platform.color} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Platform Comparison
        </h2>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={comparisonData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="platform" stroke="#9ca3af" fontSize={12} />
            <YAxis stroke="#9ca3af" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
              }}
            />
            <Legend />
            <Bar
              dataKey="Followers"
              fill="#4c6ef5"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="Engagement"
              fill="#12b886"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
