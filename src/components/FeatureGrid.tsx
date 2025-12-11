import React from 'react';
import { FileJson, Route, Layers, Zap, ShieldCheck, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: FileJson,
        title: 'Multi-format Parsing',
        desc: 'Auto-detects and parses JSON, CSV, XML, and more out of the box.'
    },
    {
        icon: Route,
        title: 'Express-style Routing',
        desc: 'Familiar app.get() syntax for zero learning curve.'
    },
    {
        icon: Layers,
        title: 'Middleware Core',
        desc: 'Unstoppable middleware pipeline for auth, logging, and validation.'
    },
    {
        icon: Zap,
        title: 'Enhanced Responses',
        desc: 'Helper methods like res.xml() or res.csv() for instant formatting.'
    },
    {
        icon: ShieldCheck,
        title: 'Security Built-in',
        desc: 'XXE protection, payload limits, and input sanitization.'
    },
    {
        icon: BookOpen,
        title: 'Auto-Docs',
        desc: 'Generates raw OpenAPI spec or HTML docs from your routes.'
    }
];

export default function FeatureGrid() {
    return (
        <section className="py-24 bg-surface/30 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="p-6 rounded-2xl bg-surface border border-surface-highlight hover:border-primary/30 hover:bg-surface-highlight/50 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold font-heading text-white mb-2">{feature.title}</h3>
                            <p className="text-text-secondary leading-relaxed text-sm">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
