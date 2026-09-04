import { motion } from "motion/react";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, ShoppingCart, DollarSign, Activity } from "lucide-react";

export default function SalesDashboardDemo() {
  // Synthetic data
  const monthlyData = [
    { month: 'Jan', sales: 4000, profit: 2400 },
    { month: 'Feb', sales: 3000, profit: 1398 },
    { month: 'Mar', sales: 2000, profit: 9800 },
    { month: 'Apr', sales: 2780, profit: 3908 },
    { month: 'May', sales: 1890, profit: 4800 },
    { month: 'Jun', sales: 2390, profit: 3800 },
    { month: 'Jul', sales: 3490, profit: 4300 },
    { month: 'Aug', sales: 4500, profit: 5400 },
    { month: 'Sep', sales: 5200, profit: 6200 },
  ];

  const categoryData = [
    { name: 'Electronics', value: 45000 },
    { name: 'Apparel', value: 30000 },
    { name: 'Home & Garden', value: 25000 },
    { name: 'Sports', value: 15000 },
  ];

  const regionData = [
    { name: 'North', value: 400 },
    { name: 'South', value: 300 },
    { name: 'East', value: 300 },
    { name: 'West', value: 200 },
  ];

  const COLORS = ['#14E0C4', '#0E7C7B', '#0F2A43', '#070B13'];
  const PIE_COLORS = ['#14E0C4', '#3b82f6', '#8b5cf6', '#ec4899'];

  return (
    <div className="bg-[#05080f] rounded-lg border border-primary-light overflow-hidden mt-6">
      <div className="flex items-center justify-between px-4 py-3 border-b border-primary-light bg-primary-dark">
        <div className="flex items-center gap-2 text-accent-cyan font-mono text-sm">
          <Activity size={16} />
          <span>E-Commerce Analytics Dashboard (Simulated)</span>
        </div>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
        </div>
      </div>
      
      <div className="p-4 md:p-6 bg-gradient-to-br from-primary-base to-[#020408]">
        
        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="glass-panel p-4 rounded-lg flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Total Revenue</p>
              <h4 className="text-xl font-bold text-white">$124,500</h4>
              <p className="text-xs text-accent-cyan mt-1">+14.5% vs last month</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-accent-teal/20 flex items-center justify-center text-accent-cyan">
              <DollarSign size={20} />
            </div>
          </div>
          <div className="glass-panel p-4 rounded-lg flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Orders</p>
              <h4 className="text-xl font-bold text-white">1,432</h4>
              <p className="text-xs text-accent-cyan mt-1">+5.2% vs last month</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
              <ShoppingCart size={20} />
            </div>
          </div>
          <div className="glass-panel p-4 rounded-lg flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Conversion Rate</p>
              <h4 className="text-xl font-bold text-white">3.8%</h4>
              <p className="text-xs text-red-400 mt-1">-0.4% vs last month</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
              <TrendingUp size={20} />
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Trend Line Chart */}
          <div className="lg:col-span-2 glass-panel p-4 rounded-lg border border-primary-light">
            <h5 className="text-sm font-semibold text-gray-300 mb-4">Revenue & Profit Trends (YTD)</h5>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
                  <XAxis dataKey="month" stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value/1000}k`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0A0F1A', border: '1px solid #1f2937', borderRadius: '8px' }}
                    itemStyle={{ color: '#e5e7eb' }}
                  />
                  <Line type="monotone" dataKey="sales" name="Sales" stroke="#14E0C4" strokeWidth={3} dot={{ r: 4, fill: '#14E0C4' }} activeDot={{ r: 6 }} />
                  <Line type="monotone" dataKey="profit" name="Profit" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4, fill: '#3b82f6' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Region Pie Chart */}
          <div className="glass-panel p-4 rounded-lg border border-primary-light">
            <h5 className="text-sm font-semibold text-gray-300 mb-4">Sales by Region</h5>
            <div className="h-[200px] w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={regionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {regionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0A0F1A', border: '1px solid #1f2937', borderRadius: '8px' }}
                    itemStyle={{ color: '#e5e7eb' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none flex-col">
                <span className="text-2xl font-bold text-white">1.2K</span>
                <span className="text-xs text-gray-500">Total Units</span>
              </div>
            </div>
            
            <div className="flex justify-center gap-4 mt-2">
              {regionData.slice(0,2).map((entry, index) => (
                <div key={index} className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: PIE_COLORS[index] }}></div>
                  <span className="text-xs text-gray-400">{entry.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Categories Bar Chart */}
          <div className="lg:col-span-3 glass-panel p-4 rounded-lg border border-primary-light">
            <h5 className="text-sm font-semibold text-gray-300 mb-4">Top Performing Categories</h5>
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" horizontal={false} />
                  <XAxis type="number" stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value/1000}k`} />
                  <YAxis dataKey="name" type="category" stroke="#e5e7eb" fontSize={12} tickLine={false} axisLine={false} width={100} />
                  <Tooltip 
                    cursor={{ fill: '#1f2937', opacity: 0.4 }}
                    contentStyle={{ backgroundColor: '#0A0F1A', border: '1px solid #1f2937', borderRadius: '8px' }}
                  />
                  <Bar dataKey="value" name="Revenue" fill="#14E0C4" radius={[0, 4, 4, 0]} barSize={24} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
