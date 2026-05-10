import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  TrendingUp,
  Users,
  Eye,
  MessageSquare,
  FileText,
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import StatCard from '../components/StatCard';
import { fetchAnalytics } from '../store/slices/analyticsSlice';

const recentPosts = [
  {
    id: 1,
    platform: 'Instagram',
    content: 'Behind the scenes of our latest shoot! 📸',
    engagement: 1243,
    date: '2h ago',
  },
  {
    id: 2,
    platform: 'Twitter',
    content: 'Big news coming next week... stay tuned! 🚀',
    engagement: 892,
    date: '4h ago',
  },
  {
    id: 3,
    platform: 'LinkedIn',
    content: 'Our team just hit a major milestone. Thread 🧵',
    engagement: 567,
    date: '6h ago',
  },
  {
    id: 4,
    platform: 'TikTok',
    content: 'New trend alert! Here is how we are joining in 🎵',
    engagement: 3456,
    date: '1h ago',
  },
];

const growthData = [
  { day: 'Mon', followers: 1200, engagement: 450 },
  { day: 'Tue', followers: 1350, engagement: 520 },
  { day: 'Wed', followers: 1100, engagement: 480 },
  { day: 'Thu', followers: 1500, engagement: 610 },
  { day: 'Fri', followers: 1700, engagement: 590 },
  { day: 'Sat', followers: 1900, engagement: 720 },
  { day: 'Sun', followers: 2100, engagement: 680 },
];

export default function Dashboard() {
  const dispatch = useDispatch();
  const { metrics, loading } = useSelector((state) => state.analytics);

  useEffect(() => {
    dispatch(fetchAnalytics());
  }, [dispatch]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <span className="text-sm text-gray-500">
          Last updated: Just now
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={<Users className="w-5 h-5" />}
          label="Total Followers"
          value={metrics?.totalFollowers ?? '12.4K'}
          trend={{ value: '+12%', direction: 'up' }}
          color="blue"
        />
        <StatCard
          icon={<TrendingUp className="w-5 h-5" />}
          label="Engagement Rate"
          value={metrics?.engagementRate ?? '4.8%'}
          trend={{ value: '+2.3%', direction: 'up' }}
          color="green"
        />
        <StatCard
          icon={<Eye className="w-5 h-5" />}
          label="Impressions"
          value={metrics?.impressions ?? '89.2K'}
          trend={{ value: '+8.1%', direction: 'up' }}
          color="purple"
        />
        <StatCard
          icon={<MessageSquare className="w-5 h-5" />}
          label="Total Posts"
          value={metrics?.totalPosts ?? '342'}
          trend={{ value: '+5%', direction: 'up' }}
          color="orange"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Growth Overview
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="day" stroke="#9ca3af" fontSize={12} />
              <YAxis stroke="#9ca3af" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
              />
              <Line
                type="monotone"
                dataKey="followers"
                stroke="#4c6ef5"
                strokeWidth={2}
                dot={{ fill: '#4c6ef5', strokeWidth: 2 }}
              />
              <Line
                type="monotone"
                dataKey="engagement"
                stroke="#12b886"
                strokeWidth={2}
                dot={{ fill: '#12b886', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Posts
          </h2>
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <div
                key={post.id}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-brand-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 truncate">
                    {post.content}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-medium text-brand-600">
                      {post.platform}
                    </span>
                    <span className="text-xs text-gray-400">
                      {post.engagement} engagements
                    </span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
