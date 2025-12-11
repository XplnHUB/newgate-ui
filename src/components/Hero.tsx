import React, { useState, useEffect } from 'react';
import { Check, Copy, ArrowRight, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
    const [copied, setCopied] = useState(false);
    const installCmd = "npm install newgatejs";

    const handleCopy = () => {
        navigator.clipboard.writeText(installCmd);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Mesh */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-brand-mesh opacity-40 blur-3xl -z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                        </span>
                        v1.0.0 is now live
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight text-white mb-6">
                        Newgate <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">JS</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
                        The type-safe Node.js framework that natively handles JSON, XML, CSV, and Multipart. Stop fighting body-parsers.
                    </p>
                </motion.div>

                {/* Install Block */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="mt-8 mb-12"
                >
                    <div
                        onClick={handleCopy}
                        className="group cursor-pointer relative flex items-center gap-4 px-6 py-4 rounded-xl bg-surface border border-surface-highlight hover:border-primary/50 shadow-glow transition-all duration-300"
                    >
                        <span className="text-primary font-mono select-none">$</span>
                        <span className="font-mono text-gray-200 text-lg">
                            {installCmd}
                        </span>

                        <div className="pl-4 border-l border-white/10 ml-2 text-text-secondary group-hover:text-white transition-colors">
                            {copied ? <Check className="w-5 h-5 text-success" /> : <Copy className="w-5 h-5" />}
                        </div>
                    </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col md:flex-row items-center gap-4"
                >
                    <a href="/docs" className="px-8 py-3.5 rounded-lg bg-primary hover:bg-orange-600 text-black font-bold text-lg transition-transform hover:scale-105 active:scale-95 flex items-center gap-2">
                        Read Documentation
                        <ArrowRight className="w-5 h-5" />
                    </a>
                    <a href="https://github.com/XplnHUB/newgatejs" className="px-8 py-3.5 rounded-lg bg-surface border border-surface-highlight hover:bg-surface-highlight text-white font-medium text-lg transition-all flex items-center gap-2">
                        View on GitHub
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
