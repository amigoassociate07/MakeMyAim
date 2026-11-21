import React, { useState } from 'react';
import { 
  Lock, 
  X, 
  ShieldCheck, 
  FileText, 
  Download, 
  CheckCircle,
  Eye
} from 'lucide-react';

export default function LpPortalModal({ isOpen, onClose }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [downloadedReport, setDownloadedReport] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsLoggedIn(true);
    }, 900);
  };

  const handleDemoAccess = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsLoggedIn(true);
    }, 500);
  };

  const handleDownload = () => {
    setDownloadedReport(true);
    setTimeout(() => setDownloadedReport(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#050b1d] border border-gold-500/25 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(2,5,18,0.95),0_0_35px_rgba(212,175,55,0.15)] overflow-y-auto max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {!isLoggedIn ? (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-400 shadow-gold-glow">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-serif text-white">Institutional LP Vault</h3>
                <p className="text-xs text-slate-400">Restricted to verified Limited Partners & Sovereign Endowments</p>
              </div>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="text-[11px] font-mono uppercase text-slate-400 block mb-1">Institutional Email</label>
                <input
                  type="email"
                  required
                  placeholder="lp-representative@endowment.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono uppercase text-slate-400 block mb-1">Security Key / Passcode</label>
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                <span className="flex items-center gap-1.5 text-[11px]">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  SOC-2 Type II & Hardware 2FA Secured
                </span>
                <a href="#team" onClick={onClose} className="text-gold-400 hover:underline">Request LP Credential</a>
              </div>

              <div className="pt-4 space-y-2.5">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-gold w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  {isLoading ? 'Verifying Credentials...' : 'Authenticate Institutional Session'}
                </button>

                <button
                  type="button"
                  onClick={handleDemoAccess}
                  className="w-full py-2.5 rounded-xl text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 transition-all flex items-center justify-center gap-2"
                >
                  <Eye className="w-3.5 h-3.5 text-gold-400" />
                  <span>Preview Demo LP Vault (Audited Fund Returns)</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Logged In Dashboard View */
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-[10px] font-mono uppercase text-gold-400 font-bold">LP Session: Active</span>
                <h3 className="text-xl font-serif text-white">Institutional LP Capital Account</h3>
                <p className="text-xs text-slate-400">NIIF / Temasek India / Indian Family Office Syndicate Portfolio View</p>
              </div>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="px-3 py-1.5 text-xs text-slate-400 hover:text-white bg-slate-900 rounded-lg border border-slate-800"
              >
                Log Out
              </button>
            </div>

            {/* Performance Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: 'Fund I Net TVPI', val: '4.82x', color: 'text-gold-300' },
                { label: 'Fund II Net TVPI', val: '3.38x', color: 'text-gold-300' },
                { label: 'Fund III Net IRR', val: '34.8%', color: 'text-emerald-400' },
                { label: 'Fund IV Deployed', val: '₹1,950 Cr / ₹4,800 Cr', color: 'text-white' },
              ].map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-[10px] font-mono text-slate-500 uppercase">{item.label}</div>
                  <div className={`text-base font-extrabold font-mono mt-1 ${item.color}`}>{item.val}</div>
                </div>
              ))}
            </div>

            {/* Available Documents */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase text-slate-400 flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 text-gold-400" />
                Audited Reports & Capital Notices:
              </h4>

              <div className="space-y-2">
                {[
                  { name: 'Fund IV Q3 2026 Comprehensive Managing Partner Letter.pdf', size: '4.2 MB', date: 'Oct 2026' },
                  { name: 'PwC Audited Fair Value & Schedule of Investments (FY2025).pdf', size: '8.7 MB', date: 'Jul 2026' },
                  { name: 'Fund IV Capital Call Notice #3 (Drawdown Schedule).pdf', size: '1.1 MB', date: 'Sep 2026' },
                ].map((doc, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <FileText className="w-4 h-4 text-slate-400" />
                      <div>
                        <div className="text-xs font-medium text-slate-200 line-clamp-1">{doc.name}</div>
                        <div className="text-[10px] font-mono text-slate-500">{doc.date} • {doc.size}</div>
                      </div>
                    </div>
                    <button
                      onClick={handleDownload}
                      className="p-2 rounded-lg bg-slate-800 hover:btn-gold text-slate-300 transition-colors"
                      title="Download Document"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              {downloadedReport && (
                <div className="p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs text-center flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Document securely verified & downloaded.</span>
                </div>
              )}
            </div>

            <div className="pt-2 text-center">
              <button
                onClick={onClose}
                className="px-6 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white"
              >
                Close Vault
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
