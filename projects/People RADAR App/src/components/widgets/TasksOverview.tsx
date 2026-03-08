import { Search, Download } from 'lucide-react';
import clsx from 'clsx';

export default function TasksOverview() {
    const dates = [
        { day: 'Sun', date: '15', active: false },
        { day: 'Mon', date: '16', active: false },
        { day: 'Tue', date: '17', active: false },
        { day: 'Wed', date: '18', active: true },
        { day: 'Thu', date: '19', active: false },
        { day: 'Fri', date: '20', active: false },
        { day: 'Sat', date: '21', active: false },
    ];

    const hours = ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

    return (
        <div className="bg-card rounded-[32px] p-6 h-[400px] flex flex-col w-full">
            <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-[15px]">Tasks overview</h3>
                <div className="flex items-center gap-3">
                    <button className="text-textSubdued hover:text-textMain"><Search className="w-4 h-4" /></button>
                    <button className="text-textSubdued hover:text-textMain"><Download className="w-4 h-4" /></button>
                </div>
            </div>

            <div className="flex-1 flex flex-col relative">
                {/* Header Dates */}
                <div className="flex justify-between pl-12 pr-4 relative z-10 py-2">
                    {dates.map((d, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className={clsx(
                                "flex flex-col items-center px-3 py-1.5 rounded-2xl w-14 transition-colors",
                                d.active ? "bg-white text-background font-semibold shadow-lg" : "text-textSubdued"
                            )}>
                                <span className="text-[11px] mb-0.5">{d.day}</span>
                                <span className="text-[13px] font-medium">{d.date}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Timeline body */}
                <div className="flex-1 mt-2 relative border-t border-dashed border-border flex">

                    {/* Times column */}
                    <div className="w-12 h-full flex flex-col justify-between text-[11px] font-mono text-textSubdued py-2 absolute left-0 top-0 bottom-0 border-r border-dashed border-border/50">
                        {hours.map((h, i) => (
                            <span key={i} className="relative -top-2">{h}</span>
                        ))}
                    </div>

                    {/* Grid lines & Wed dash line*/}
                    <div className="absolute left-12 right-0 top-0 bottom-0 h-full w-[calc(100%-3rem)] flex flex-col justify-between py-2 pointer-events-none">
                        {hours.map((_, i) => (
                            <div key={i} className="w-full border-t border-dashed border-border/30 h-0"></div>
                        ))}
                    </div>

                    {/* Wed vertical dashed line */}
                    <div className="absolute left-0 right-0 top-0 bottom-0 pointer-events-none flex pr-4 pl-12">
                        <div className="flex-1 flex justify-around opacity-20">
                            <div className="w-px h-full border-l border-dashed border-white mx-auto opacity-0" />
                            <div className="w-px h-full border-l border-dashed border-white mx-auto opacity-0" />
                            <div className="w-px h-full border-l border-dashed border-white mx-auto opacity-0" />
                            <div className="w-px h-full border-l border-dashed border-white mx-auto opacity-100 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                            <div className="w-px h-full border-l border-dashed border-white mx-auto opacity-0" />
                            <div className="w-px h-full border-l border-dashed border-white mx-auto opacity-0" />
                            <div className="w-px h-full border-l border-dashed border-white mx-auto opacity-0" />
                        </div>
                    </div>

                    {/* Events layer */}
                    <div className="absolute left-12 right-0 top-0 bottom-0 h-full w-[calc(100%-3rem)]">
                        <div className="absolute bg-[#23252a] rounded-2xl p-2 shadow-lg flex items-center justify-between border border-border/50"
                            style={{ top: '15%', left: '10%', width: '45%' }}>
                            <div>
                                <p className="text-xs font-semibold text-white">Team Sync</p>
                                <p className="text-[10px] text-textSubdued mt-0.5">Check-in with team.</p>
                            </div>
                            <div className="flex -space-x-1.5 object-right">
                                {[11, 12, 13, 14].map((n) => <img key={n} src={`https://i.pravatar.cc/100?img=${n}`} className="w-5 h-5 rounded-full border border-[#23252a]" />)}
                            </div>
                        </div>

                        <div className="absolute bg-brand rounded-2xl p-2.5 shadow-[0_4px_20px_rgba(163,244,227,0.2)] flex items-center justify-between border border-background z-10"
                            style={{ top: '42%', left: '42%', width: '45%' }}>
                            <div>
                                <p className="text-xs font-bold text-background tracking-tight">Component Review</p>
                                <p className="text-[10px] font-medium text-background/80 mt-0.5">Refactor shared components.</p>
                            </div>
                            <div className="flex -space-x-1.5">
                                {[22, 33].map((n) => <img key={n} src={`https://i.pravatar.cc/100?img=${n}`} className="w-5 h-5 rounded-full border border-brand" />)}
                            </div>
                        </div>

                        <div className="absolute bg-[#2a2d35]/90 backdrop-blur-sm rounded-2xl p-2.5 shadow-lg flex items-center justify-between border border-border/50"
                            style={{ top: '75%', left: '60%', width: '38%' }}>
                            <div>
                                <p className="text-xs font-semibold text-white">Bug Reproduction</p>
                                <p className="text-[10px] text-textSubdued mt-0.5">Find and log UI bugs.</p>
                            </div>
                            <img src="https://i.pravatar.cc/100?img=40" className="w-5 h-5 rounded-full border border-[#2a2d35]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
