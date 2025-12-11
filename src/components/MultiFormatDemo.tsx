import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Copy } from 'lucide-react';
import { clsx } from 'clsx';

const demos = {
    JSON: {
        request: `curl -X POST /api/user \\
  -H "Content-Type: application/json" \\
  -d '{"name": "Alice"}'`,
        code: `app.post('/api/user', (req, res) => {
  // Automatically parsed JSON
  const { name } = req.body;
  
  return res.json({ 
    message: \`Hello \${name}!\`,
    timestamp: Date.now()
  });
});`,
        response: `{
  "message": "Hello Alice!",
  "timestamp": 1715421000
}`
    },
    CSV: {
        request: `curl -X POST /api/bulk \\
  -H "Content-Type: text/csv" \\
  --data-binary @users.csv`,
        code: `app.post('/api/bulk', (req, res) => {
  // req.body is parsed as Array<Object>
  const users = req.body;
  
  // Process users...
  
  // Respond with CSV
  return res.csv(users);
});`,
        response: `id,status
1,processed
2,processed`
    },
    XML: {
        request: `curl -X POST /api/config \\
  -H "Content-Type: application/xml" \\
  -d '<config><debug>true</debug></config>'`,
        code: `app.post('/api/config', (req, res) => {
  // Parsed as JS Object
  if (req.body.config.debug) {
    enableDebug();
  }
  
  // Helper to send XML response
  return res.xml({ status: 'updated' });
});`,
        response: `<root>
  <status>updated</status>
</root>`
    },
    Binary: {
        request: `curl -X POST /upload \\
  -H "Content-Type: application/octet-stream" \\
  --data-binary @image.png`,
        code: `app.post('/upload', (req, res) => {
  // req.body is a Buffer
  const size = req.body.length;
  
  // Save buffer to disk
  await saveFile(req.body);
  
  res.send(\`Saved \${size} bytes\`);
});`,
        response: `Saved 15402 bytes`
    }
};

type DemoFormat = keyof typeof demos;

export default function MultiFormatDemo() {
    const [activeTab, setActiveTab] = useState<DemoFormat>('JSON');

    return (
        <section className="py-24 bg-background overflow-hidden relative">
            <div className="absolute inset-0 bg-brand-mesh opacity-20" />

            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row gap-12 items-start">

                    {/* Controls */}
                    <div className="w-full md:w-1/3 pt-8">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
                            Speak any language.
                        </h2>
                        <p className="text-text-secondary mb-8 text-lg">
                            Newgate automatically detects content types and parses the body accordingly. No improved boilerplate needed.
                        </p>

                        <div className="flex flex-col gap-2">
                            {(Object.keys(demos) as DemoFormat[]).map((format) => (
                                <button
                                    key={format}
                                    onClick={() => setActiveTab(format)}
                                    className={clsx(
                                        "text-left px-6 py-4 rounded-xl border transition-all duration-200",
                                        activeTab === format
                                            ? "bg-surface-highlight border-primary text-white shadow-glow"
                                            : "bg-surface border-transparent text-text-secondary hover:bg-surface-highlight/50 hover:text-white"
                                    )}
                                >
                                    <span className="font-heading font-bold">{format}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Code Preview */}
                    <div className="w-full md:w-2/3">
                        <div className="rounded-xl overflow-hidden border border-surface-highlight bg-[#050505] shadow-2xl relative">
                            {/* Window Controls */}
                            <div className="px-4 py-3 bg-white/5 border-b border-white/5 flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                                <div className="ml-auto text-xs text-text-tertiary font-mono">server.js</div>
                            </div>

                            <div className="p-6 overflow-x-auto">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <pre className="font-mono text-sm leading-relaxed">
                                            <code className="text-gray-300">
                                                {demos[activeTab].code}
                                            </code>
                                        </pre>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Request/Response Split */}
                            <div className="grid grid-cols-1 md:grid-cols-2 border-t border-white/10">
                                <div className="p-4 bg-black/50 border-r border-white/10">
                                    <div className="text-xs text-text-tertiary mb-2 font-mono uppercase tracking-wider">Request</div>
                                    <pre className="font-mono text-xs text-info whitespace-pre-wrap break-all">
                                        {demos[activeTab].request}
                                    </pre>
                                </div>
                                <div className="p-4 bg-black/50">
                                    <div className="text-xs text-text-tertiary mb-2 font-mono uppercase tracking-wider">Response</div>
                                    <pre className="font-mono text-xs text-success whitespace-pre-wrap">
                                        {demos[activeTab].response}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
