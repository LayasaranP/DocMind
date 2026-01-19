import GlassCard from "@/components/ui/GlassCards";
import {
  FileText,
  Brain,
  Clock,
  TrendingUp,
  Check,
  Upload,
  GitBranch,
  Sparkles,
  ChevronRight,
} from "lucide-react";


const Dashboard = () => {
  const stats = [
    { label: 'Documents', value: '24', icon: FileText, change: '+3 this week', color: 'cyan' },
    { label: 'Flashcards', value: '156', icon: Brain, change: '89% mastery', color: 'indigo' },
    { label: 'Study Time', value: '12.5h', icon: Clock, change: '+2.3h vs last week', color: 'purple' },
    { label: 'Assessments', value: '8', icon: TrendingUp, change: 'Avg 87%', color: 'emerald' },
  ];

  const recentActivity = [
    { title: 'Completed Quantum Physics flashcards', time: '2h ago', icon: Check },
    { title: 'Uploaded Machine Learning notes.pdf', time: '5h ago', icon: Upload },
    { title: 'Generated flowchart for Neural Networks', time: '1d ago', icon: GitBranch },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Welcome back, Alex</h1>
        <p className="text-gray-400">Continue your learning journey</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <GlassCard key={i} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl bg-${stat.color}-500/10 ring-1 ring-${stat.color}-500/20`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
              </div>
              <Sparkles className="w-4 h-4 text-gray-600" />
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="text-xs text-cyan-400">{stat.change}</p>
            </div>
          </GlassCard>
        ))}
      </div>

      <GlassCard className="p-6">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Clock className="w-5 h-5 text-cyan-400" />
          Recent Activity
        </h2>
        <div className="space-y-4">
          {recentActivity.map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-gray-900/50 hover:bg-gray-800/50 transition-colors">
              <div className="p-2 rounded-lg bg-cyan-500/10 ring-1 ring-cyan-500/20">
                <item.icon className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-white">{item.title}</p>
                <p className="text-xs text-gray-500">{item.time}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
};

export default Dashboard;
