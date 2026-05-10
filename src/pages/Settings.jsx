import { useForm } from 'react-hook-form';
import { Save, User, Bell, Link2, Key } from 'lucide-react';

export default function Settings() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      displayName: 'Jane Cooper',
      email: 'jane@example.com',
      emailNotifications: true,
      pushNotifications: false,
      weeklyDigest: true,
    },
  });

  const onSubmit = (data) => {
    console.log('Settings saved:', data);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage your account, preferences, and integrations
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center gap-2 mb-4">
            <User className="w-5 h-5 text-brand-600" />
            <h2 className="text-lg font-semibold text-gray-900">Profile</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Display Name
              </label>
              <input
                {...register('displayName', { required: 'Name is required' })}
                className="w-full border rounded-lg px-3 py-2 text-sm"
              />
              {errors.displayName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.displayName.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                {...register('email', { required: 'Email is required' })}
                className="w-full border rounded-lg px-3 py-2 text-sm"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center gap-2 mb-4">
            <Bell className="w-5 h-5 text-brand-600" />
            <h2 className="text-lg font-semibold text-gray-900">
              Notifications
            </h2>
          </div>
          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
              <div>
                <p className="text-sm font-medium text-gray-700">
                  Email Notifications
                </p>
                <p className="text-xs text-gray-500">
                  Receive updates via email
                </p>
              </div>
              <input
                type="checkbox"
                {...register('emailNotifications')}
                className="rounded border-gray-300 text-brand-600 focus:ring-brand-500"
              />
            </label>
            <label className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
              <div>
                <p className="text-sm font-medium text-gray-700">
                  Push Notifications
                </p>
                <p className="text-xs text-gray-500">
                  Receive push notifications in browser
                </p>
              </div>
              <input
                type="checkbox"
                {...register('pushNotifications')}
                className="rounded border-gray-300 text-brand-600 focus:ring-brand-500"
              />
            </label>
            <label className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
              <div>
                <p className="text-sm font-medium text-gray-700">
                  Weekly Digest
                </p>
                <p className="text-xs text-gray-500">
                  Weekly summary of your account performance
                </p>
              </div>
              <input
                type="checkbox"
                {...register('weeklyDigest')}
                className="rounded border-gray-300 text-brand-600 focus:ring-brand-500"
              />
            </label>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center gap-2 mb-4">
            <Link2 className="w-5 h-5 text-brand-600" />
            <h2 className="text-lg font-semibold text-gray-900">
              Connected Accounts
            </h2>
          </div>
          <div className="space-y-3">
            {['Instagram', 'Twitter', 'LinkedIn', 'TikTok'].map(
              (platform) => (
                <div
                  key={platform}
                  className="flex items-center justify-between p-3 rounded-lg border"
                >
                  <span className="text-sm font-medium text-gray-700">
                    {platform}
                  </span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    Connected
                  </span>
                </div>
              )
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center gap-2 mb-4">
            <Key className="w-5 h-5 text-brand-600" />
            <h2 className="text-lg font-semibold text-gray-900">API Keys</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg border">
              <div>
                <p className="text-sm font-medium text-gray-700">
                  Production API Key
                </p>
                <p className="text-xs text-gray-400 font-mono">
                  sk-prod-••••••••••••••••
                </p>
              </div>
              <button
                type="button"
                className="text-sm text-brand-600 hover:text-brand-700"
              >
                Reveal
              </button>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg border">
              <div>
                <p className="text-sm font-medium text-gray-700">
                  Development API Key
                </p>
                <p className="text-xs text-gray-400 font-mono">
                  sk-dev-••••••••••••••••
                </p>
              </div>
              <button
                type="button"
                className="text-sm text-brand-600 hover:text-brand-700"
              >
                Reveal
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-2 bg-brand-600 text-white px-6 py-2.5 rounded-lg hover:bg-brand-700 transition-colors"
          >
            <Save className="w-4 h-4" />
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
