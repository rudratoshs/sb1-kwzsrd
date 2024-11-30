import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { GraduationCap, Lock, Mail, BookOpen, Users, Brain, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const floatingElements = [
  {
    icon: BookOpen,
    text: "Course Creation",
    gradient: "from-blue-500 to-cyan-500",
    delay: 0
  },
  {
    icon: Users,
    text: "Student Management",
    gradient: "from-purple-500 to-pink-500",
    delay: 0.2
  },
  {
    icon: Brain,
    text: "AI Generation",
    gradient: "from-orange-500 to-red-500",
    delay: 0.4
  },
  {
    icon: Sparkles,
    text: "Smart Analytics",
    gradient: "from-green-500 to-emerald-500",
    delay: 0.6
  }
];

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add authentication logic here
    navigate('/admin');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md space-y-8"
        >
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="relative group cursor-pointer" onClick={() => navigate('/')}>
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <GraduationCap className="relative h-12 w-12 text-primary transition-colors group-hover:text-purple-500" />
              </div>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Welcome Back
            </h2>
            <p className="mt-2 text-gray-600">
              Sign in to access your admin dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    placeholder="admin@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-primary focus:ring-primary/20"
                />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <Button variant="link" className="text-primary hover:text-primary/90 p-0">
                Forgot password?
              </Button>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-primary via-purple-500 to-cyan-500 hover:opacity-90 transition-all duration-300"
            >
              Sign In to Dashboard
            </Button>

            <div className="text-center text-sm text-gray-600">
              Not an admin?{' '}
              <Button
                variant="link"
                onClick={() => navigate('/')}
                className="text-primary hover:text-primary/90 p-0"
              >
                Return to website
              </Button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Right Panel - Interactive Animation */}
      <div className="hidden lg:block lg:w-1/2 relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "absolute rounded-full mix-blend-screen filter blur-xl opacity-20 animate-float",
                i % 3 === 0 ? "bg-primary" : i % 3 === 1 ? "bg-purple-500" : "bg-cyan-500"
              )}
              style={{
                width: `${Math.random() * 400 + 100}px`,
                height: `${Math.random() * 400 + 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-center p-12">
          <div className="max-w-lg">
            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl font-bold text-white mb-4">
                AI Course Generator Admin
              </h3>
              <p className="text-gray-300">
                Manage your platform, monitor course creation, and analyze user engagement all in one place.
              </p>
            </motion.div>

            {/* Floating Elements */}
            <div className="grid grid-cols-2 gap-6">
              {floatingElements.map((element, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: element.delay + 0.8, duration: 0.5 }}
                  className="relative group"
                >
                  <div className={cn(
                    "absolute inset-0 rounded-lg bg-gradient-to-br opacity-20 group-hover:opacity-30 transition-opacity duration-300",
                    element.gradient
                  )} />
                  <div className="relative p-4 backdrop-blur-sm rounded-lg border border-white/10">
                    <element.icon className={cn(
                      "h-8 w-8 mb-2 bg-gradient-to-br bg-clip-text text-transparent",
                      element.gradient
                    )} />
                    <h4 className="text-white font-semibold mb-1">{element.text}</h4>
                    <motion.div
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                      className="w-8 h-1 rounded-full bg-gradient-to-r from-white/20 to-white/0"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <div className="flex items-center space-x-2 text-white/60">
                <div className="w-2 h-2 rounded-full bg-white/60 animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-white/60 animate-pulse delay-100" />
                <div className="w-2 h-2 rounded-full bg-white/60 animate-pulse delay-200" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}