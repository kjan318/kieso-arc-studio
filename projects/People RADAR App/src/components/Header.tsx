import { Search, Bell, Plus, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

export default function Header() {
    return (
        <div className="flex flex-col gap-6 mb-8 w-full">
            {/* Top Row */}
            <div className="flex items-center justify-between w-full">
                {/* Date & Weather */}
                <div className="flex items-center gap-4 text-sm font-medium text-textMuted">
                    <span>Wednesday, 18 Sep</span>
                    <div className="flex items-center gap-1">
                        <span className="text-yellow-400">☀️</span>
                        <span className="text-textMain">27°C</span>
                    </div>
                </div>

                {/* Search */}
                <div className="bg-surface border border-border rounded-full px-4 py-2.5 flex items-center w-[400px]">
                    <Search className="w-4 h-4 text-textSubdued mr-3" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparent border-none text-sm text-textMain focus:outline-none w-full placeholder:text-textSubdued placeholder:font-medium"
                    />
                    <div className="flex items-center gap-1 ml-auto">
                        <span className="w-5 h-5 rounded flex items-center justify-center border border-border text-[10px] text-textSubdued font-mono">⌘</span>
                        <span className="w-5 h-5 rounded flex items-center justify-center border border-border text-[10px] text-textSubdued font-mono">F</span>
                    </div>
                </div>

                {/* Auth & Notification */}
                <div className="flex items-center gap-6">
                    <button className="w-10 h-10 rounded-full bg-surface flex items-center justify-center hover:bg-surfaceHover relative text-textMuted transition-colors">
                        <Bell className="w-5 h-5" />
                        <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-brand rounded-full"></div>
                    </button>

                    <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                        <img src="https://i.pravatar.cc/150?img=11" alt="Noah Brooks" className="w-10 h-10 rounded-full border border-border" />
                        <div className="flex flex-col">
                            <span className="text-sm font-semibold flex items-center gap-1">
                                Noah Brooks <ChevronDown className="w-3 h-3 text-textMuted ml-1" />
                            </span>
                            <span className="text-xs text-textSubdued font-medium">HR Lead</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Row */}
            <div className="flex items-end justify-between w-full">
                {/* Team Title */}
                <div>
                    <h1 className="text-3xl font-bold flex items-center gap-2 mb-2 tracking-tight">
                        Capture IT <span className="text-textSubdued font-normal">• Developers</span>
                    </h1>
                    <p className="text-sm text-textSubdued font-medium">15 members</p>
                </div>

                {/* Avatars Pagination */}
                <div className="flex items-center gap-4">
                    <button className="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center hover:bg-surfaceHover text-textMuted transition-colors">
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <div className="flex -space-x-3">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-surface overflow-hidden hover:-translate-y-1 transition-transform cursor-pointer">
                                <img src={`https://i.pravatar.cc/150?img=${i + 40}`} alt="team member" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                    <button className="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center hover:bg-surfaceHover text-textMuted transition-colors">
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>

                {/* Add Button */}
                <button className="flex items-center gap-2 bg-surface hover:bg-surfaceHover border border-border text-sm font-semibold px-5 py-2.5 rounded-full transition-colors">
                    <Plus className="w-4 h-4" />
                    Add employee
                </button>
            </div>
        </div>
    );
}
