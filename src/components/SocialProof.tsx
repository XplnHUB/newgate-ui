import React from 'react';
import { Star, Download, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
    {
        label: "GitHub Stars",
        value: "2.4k+",
        icon: Star,
        color: "text-amber-400"
    },
    {
        label: "NPM Downloads",
        value: "10k+",
        icon: Download,
        color: "text-primary"
    },
    {
        label: "Contributors",
        value: "50+",
        icon: Users,
        color: "text-blue-400"
    },
    {
        label: "Active Projects",
        value: "100+",
        icon: Zap,
        color: "text-purple-400"
    }
];

export default function SocialProof() {
    return (
        <section className="py-10 border-y border-white/5 bg-black/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex flex-col items-center justify-center text-center group"
                        >
                            <div className={`mb-3 p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors ${stat.color}`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-3xl font-bold text-white font-heading tracking-tight mb-1">
                                {stat.value}
                            </h3>
                            <p className="text-sm text-text-tertiary font-medium uppercase tracking-wider">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
