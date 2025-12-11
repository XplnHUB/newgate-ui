import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Copy, Terminal, FileCode, ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';

// Data Structure for the Demo
const demos = {
    JSON: {
        label: "server.js",
        language: "javascript",
        request: `curl -X POST /api/user \\
  -H "Content-Type: application/json" \\
  -d '{"name": "Alice", "role": "admin"}'`,
        code: `app.post('/api/user', (req, res) => {
  // ⚡️ Automatically detects JSON
  const { name, role } = req.body;
  
  if (role === 'admin') {
    return res.json({ 
      status: 'success',
      message: \`Welcome back, \${name}!\`,
      token: 'eyJhbGciOiJIUzI1Ni...'
    });
  }
});`,
        response: `{
  "status": "success",
  "message": "Welcome back, Alice!",
  "token": "eyJhbGciOiJIUzI1Ni..."
}`
    },
    CSV: {
        label: "ingest.js",
        language: "javascript",
        request: `curl -X POST /api/bulk-import \\
  -H "Content-Type: text/csv" \\
  --data-binary @users.csv`,
        code: `app.post('/api/bulk-import', (req, res) => {
  // ⚡️ Stream-parses CSV rows
  const rows = req.body; // Array<Object>
  
  await db.users.insertMany(rows);
  
  // Helper to send CSV response back
  return res.csv({ 
    imported: rows.length, 
    status: 'completed'
  });
});`,
        response: `imported,status
150,completed`
    },
    XML: {
        label: "legacy-api.js",
        language: "javascript",
        request: `curl -X POST /soap/endpoint \\
  -H "Content-Type: application/xml" \\
  -d '<request><id>123</id></request>'`,
        code: `app.post('/soap/endpoint', (req, res) => {
  // ⚡️ XML parsed to Plain Object
  const id = req.body.request.id;
  
  // Process legacy logic...
  
  // Respond with XML builder
  return res.xml({
    response: {
      id,
      success: true
    }
  });
});`,
        response: `<root>
  <response>
    <id>123</id>
    <success>true</success>
  </response>
</root>`
    },
    Binary: {
        label: "upload.js",
        language: "javascript",
        request: `curl -X POST /upload/avatar \\
  -H "Content-Type: image/png" \\
  --data-binary @profile.png`,
        code: `app.post('/upload/avatar', async (req, res) => {
  // ⚡️ Raw Buffer access
  const buffer = req.body;
  
  await s3.upload({
    Bucket: 'avatars',
    Key: req.headers['x-user-id'],
    Body: buffer
  });
  
  res.send('Image processed');
});`,
        response: `Image processed (2.4MB uploaded)`
    }
};

type DemoFormat = keyof typeof demos;

export default function MultiFormatDemo() {
    const [activeTab, setActiveTab] = useState<DemoFormat>('JSON');

    return (
        <section className="py-32 bg-background relative overflow-hidden" id="demo-section">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-mesh opacity-20 blur-[100px] -z-10" />
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] -z-10" />

            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left Panel: Content & Controls */}
                    <div className="w-full lg:w-1/3 pt-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                                Speak any <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">language.</span>
                            </h2>
                            <p className="text-text-secondary mb-10 text-lg leading-relaxed">
                                Don't fight with body parsers. Newgate automatically detects content types from headers and parses the body into ready-to-use objects.
                            </p>

                            {/* Tab System */}
                            <div className="flex flex-col gap-3">
                                {(Object.keys(demos) as DemoFormat[]).map((format) => (
                                    <button
                                        key={format}
                                        onClick={() => setActiveTab(format)}
                                        className={clsx(
                                            "group relative text-left px-6 py-4 rounded-xl border transition-all duration-300 overflow-hidden",
                                            activeTab === format
                                                ? "bg-surface-highlight border-primary/50 shadow-[0_0_30px_-5px_rgba(255,136,0,0.15)]"
                                                : "bg-surface/50 border-white/5 hover:border-white/10 hover:bg-surface-highlight/50"
                                        )}
                                    >
                                        <div className="relative z-10 flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className={clsx(
                                                    "w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs transition-colors duration-300",
                                                    activeTab === format ? "bg-primary text-black" : "bg-white/5 text-text-tertiary group-hover:bg-white/10"
                                                )}>
                                                    {format.slice(0, 2).toUpperCase()}
                                                </div>
                                                <span className={clsx(
                                                    "font-heading font-bold text-lg transition-colors duration-300",
                                                    activeTab === format ? "text-white" : "text-text-secondary group-hover:text-white"
                                                )}>
                                                    {format} Parsing
                                                </span>
                                            </div>

                                            {activeTab === format && (
                                                <motion.div
                                                    layoutId="active-arrow"
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <ArrowRight className="w-5 h-5 text-primary" />
                                                </motion.div>
                                            )}
                                        </div>

                                        {/* Active Glow Gradient - Background */}
                                        {activeTab === format && (
                                            <motion.div
                                                layoutId="active-glow"
                                                className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent opacity-50"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Panel: Floating Code Window */}
                    <div className="w-full lg:w-2/3 perspective-1000">
                        <motion.div
                            initial={{ opacity: 0, rotateX: 5, y: 20 }}
                            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="rounded-2xl overflow-hidden bg-[#0A0A0A] border border-white/10 shadow-2xl relative group"
                        >
                            {/* Window Header */}
                            <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50" />
                                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50" />
                                    <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50" />
                                </div>
                                <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs font-mono text-text-tertiary opacity-70">
                                    <FileCode className="w-3.5 h-3.5" />
                                    <span>{demos[activeTab].label}</span>
                                </div>
                            </div>

                            {/* Setup Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-5 h-full min-h-[500px]">

                                {/* Main Code Editor */}
                                <div className="md:col-span-3 p-6 border-r border-white/5 bg-[#050505] relative font-mono text-sm leading-relaxed overflow-x-auto">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeTab}
                                            initial={{ opacity: 0, x: 10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -10 }}
                                            transition={{ duration: 0.2 }}
                                            className="h-full flex flex-col"
                                        >
                                            {/* Code Lines with simplified highlighting */}
                                            <div className="text-gray-300 whitespace-pre">
                                                {demos[activeTab].code.split('\n').map((line, i) => (
                                                    <div key={i} className="table-row">
                                                        <span className="table-cell text-right pr-4 text-white/10 select-none w-8">{i + 1}</span>
                                                        <span className="table-cell" dangerouslySetInnerHTML={{
                                                            __html: line
                                                                .replace(/(\/\/.*)/g, '<span class="text-text-tertiary italic">$1</span>') // Comments
                                                                .replace(/(['"`].*?['"`])/g, '<span class="text-secondary">$1</span>') // Strings
                                                                .replace(/\b(const|let|var|return|if|await|async|function)\b/g, '<span class="text-primary font-bold">$1</span>') // Keywords
                                                                .replace(/\b(res|req|app)\b/g, '<span class="text-indigo-400">$1</span>') // Objects
                                                                .replace(/\.(post|json|csv|xml|send|body|headers)/g, '.<span class="text-blue-400">$1</span>') // Methods
                                                        }} />
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* I/O Panel */}
                                <div className="md:col-span-2 flex flex-col bg-[#080808]">

                                    {/* Request Section */}
                                    <div className="flex-1 p-5 border-b border-white/5 relative">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Terminal className="w-4 h-4 text-text-tertiary" />
                                            <span className="text-xs font-bold font-heading text-text-tertiary uppercase tracking-widest">Incoming Request</span>
                                        </div>
                                        <AnimatePresence mode="wait">
                                            <motion.pre
                                                key={`req-${activeTab}`}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="font-mono text-xs text-text-secondary whitespace-pre-wrap break-all"
                                            >
                                                {demos[activeTab].request.split('\\').map((line, i) => (
                                                    <span key={i} className="block mb-1">{line}</span>
                                                ))}
                                            </motion.pre>
                                        </AnimatePresence>

                                        {/* Curl Decoration */}
                                        <div className="absolute top-4 right-4 px-2 py-1 rounded bg-white/5 text-[10px] font-mono text-text-tertiary border border-white/5">
                                            BASH
                                        </div>
                                    </div>

                                    {/* Response Section */}
                                    <div className="flex-1 p-5 relative bg-gradient-to-b from-transparent to-primary/5">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-success shadow-[0_0_10px_theme(colors.success)] animate-pulse" />
                                            <span className="text-xs font-bold font-heading text-text-tertiary uppercase tracking-widest">Response Body</span>
                                        </div>
                                        <AnimatePresence mode="wait">
                                            <motion.pre
                                                key={`res-${activeTab}`}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="font-mono text-xs text-primary/90 whitespace-pre-wrap"
                                            >
                                                {demos[activeTab].response}
                                            </motion.pre>
                                        </AnimatePresence>

                                        {/* Status Decoration */}
                                        <div className="absolute top-4 right-4 px-2 py-1 rounded bg-success/10 text-[10px] font-mono text-success border border-success/20">
                                            200 OK
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </motion.div>

                        {/* Glow reflection under the window */}
                        <div className="absolute -bottom-10 left-10 right-10 h-20 bg-primary/20 blur-[50px] opacity-30 pointer-events-none rounded-full" />
                    </div>

                </div>
            </div>
        </section>
    );
}
