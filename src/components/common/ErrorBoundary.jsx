import React from 'react';
import { AlertCircle, RotateCcw, Home, Wrench } from 'lucide-react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReset = () => {
    try {
      // Check if motix_user is corrupted and clear if needed
      const raw = localStorage.getItem('motix_user');
      if (raw && (raw.includes('[object') || (raw.match(/"name":{/g)))) {
        localStorage.removeItem('motix_user');
      }
    } catch {}
    this.setState({ hasError: false, error: null });
    window.location.hash = '#/';
    window.location.reload();
  };

  handleHardReset = () => {
    try {
      localStorage.removeItem('motix_user');
      localStorage.removeItem('motix_cart');
      localStorage.removeItem('motix_selected_vehicle');
    } catch {
      // ignore
    }
    this.setState({ hasError: false, error: null });
    window.location.hash = '#/';
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0B0D12] text-white flex items-center justify-center p-4 font-['Prompt',sans-serif]">
          <div className="max-w-md w-full bg-[#121622] border border-[#2B354A] rounded-3xl p-6 sm:p-8 shadow-2xl text-center space-y-5">
            <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center mx-auto text-[#FF6B6B]">
              <AlertCircle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-black text-white">
                เกิดข้อผิดพลาดในการโหลดหน้าจอ
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                ระบบพบปัญหาในการเรนเดอร์ชั่วคราว ข้อมูลของท่านยังปลอดภัย สามารถกดปุ่มด้านล่างเพื่อกลับสู่หน้าหลัก
              </p>
            </div>

            {this.state.error && (
              <div className="p-3 bg-[#0A0C10] rounded-xl border border-slate-800 text-left overflow-auto max-h-24 text-[11px] font-mono text-red-400/90">
                {String(this.state.error.message || this.state.error)}
              </div>
            )}

            <div className="flex flex-col gap-2.5 pt-2">
              <button
                type="button"
                onClick={this.handleReset}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#E63946] to-[#C1121F] text-white text-xs font-bold flex items-center justify-center gap-2 hover:brightness-110 cursor-pointer shadow-lg shadow-red-950/40"
              >
                <Home className="w-4 h-4" />
                <span>กลับสู่หน้าแรก (รีโหลดระบบ)</span>
              </button>

              <button
                type="button"
                onClick={this.handleHardReset}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-400 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 border border-slate-700 cursor-pointer transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>ล้างแคชชั่วคราวและเริ่มต้นใหม่</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
